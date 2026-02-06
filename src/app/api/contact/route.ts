import { NextRequest, NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { contactFormSchema, sanitizeInput, validateNoSQLInjection, RATE_LIMIT_CONFIG } from '@/lib/validation'
import { Resend } from 'resend'

// Simple in-memory rate limiting for development
class MemoryRateLimit {
  private requests: Map<string, { count: number; resetTime: number }> = new Map()

  async limit(identifier: string) {
    const now = Date.now()
    const windowMs = 60 * 60 * 1000 // 1 hour in milliseconds
    const key = identifier
    const current = this.requests.get(key)

    if (!current || now > current.resetTime) {
      // New window or expired
      this.requests.set(key, { count: 1, resetTime: now + windowMs })
      return {
        success: true,
        limit: 5,
        remaining: 4,
        reset: now + windowMs
      }
    }

    if (current.count >= 5) {
      // Rate limited
      return {
        success: false,
        limit: 5,
        remaining: 0,
        reset: current.resetTime
      }
    }

    // Increment count
    current.count++
    this.requests.set(key, current)

    return {
      success: true,
      limit: 5,
      remaining: 5 - current.count,
      reset: current.resetTime
    }
  }
}

// Initialize rate limiting
let ratelimit: any

try {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    // Use Upstash Redis in production
    const { Redis } = require('@upstash/redis')
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
    
    ratelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(RATE_LIMIT_CONFIG.requests, RATE_LIMIT_CONFIG.window),
      analytics: true,
    })
  } else {
    // Fallback to memory-based rate limiting for development
    console.log('Using in-memory rate limiting (Redis not configured)')
    ratelimit = new MemoryRateLimit()
  }
} catch (error) {
  console.warn('Failed to initialize Redis rate limiting, using memory fallback:', error)
  ratelimit = new MemoryRateLimit()
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const identifier = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 
      request.headers.get('x-real-ip') ?? 
      request.headers.get('cf-connecting-ip') ?? 
      'anonymous'

    console.log(`Contact form submission from IP: ${identifier}`)

    // Apply rate limiting with error handling
    let rateLimitResult
    try {
      rateLimitResult = await ratelimit.limit(identifier)
    } catch (rateLimitError) {
      console.error('Rate limiting error:', rateLimitError)
      // Continue without rate limiting if there's an error
      rateLimitResult = { success: true, limit: 5, remaining: 4, reset: Date.now() + 3600000 }
    }
    
    const { success: rateLimitSuccess, limit, reset, remaining } = rateLimitResult
    
    if (!rateLimitSuccess) {
      console.warn(`Rate limit exceeded for IP: ${identifier}`)
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          rateLimitExceeded: true,
          resetTime: new Date(reset).toISOString()
        }, 
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': new Date(reset).toISOString(),
          }
        }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    
    // Check for SQL injection attempts in all fields
    const fieldsToCheck = ['firstName', 'lastName', 'email', 'phone', 'company', 'details']
    for (const field of fieldsToCheck) {
      if (body[field] && !validateNoSQLInjection(body[field])) {
        console.warn(`SQL injection attempt detected in field: ${field}, IP: ${identifier}`)
        return NextResponse.json(
          { error: 'Invalid input detected. Please remove special characters.' },
          { status: 400 }
        )
      }
    }
    
    // Validate against schema
    const validationResult = contactFormSchema.safeParse(body)
    
    if (!validationResult.success) {
      console.warn('Form validation failed:', validationResult.error.issues)
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: validationResult.error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        }, 
        { status: 400 }
      )
    }

    // Sanitize the validated data
    const sanitizedData = {
      firstName: sanitizeInput(validationResult.data.firstName),
      lastName: sanitizeInput(validationResult.data.lastName),
      email: sanitizeInput(validationResult.data.email),
      phone: sanitizeInput(validationResult.data.phone),
      company: sanitizeInput(validationResult.data.company),
      details: sanitizeInput(validationResult.data.details),
    }

    // Log the submission (remove in production or use proper logging service)
    console.log('Contact form submission:', {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      ip: identifier,
      userAgent: request.headers.get('user-agent')
    })

    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        
        // Email to admin/company
        const adminEmailData = await resend.emails.send({
          from: process.env.NODE_ENV === 'production' ? 'any.ai.team@gmail.com' : 'onboarding@resend.dev',
          to: [process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'methasitpun@gmail.com'],
          subject: `New Contact Form Submission - ${sanitizedData.firstName} ${sanitizedData.lastName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #495057;">Contact Details:</h3>
                <p><strong>Name:</strong> ${sanitizedData.firstName} ${sanitizedData.lastName}</p>
                <p><strong>Company:</strong> ${sanitizedData.company}</p>
                <p><strong>Email:</strong> ${sanitizedData.email}</p>
                <p><strong>Phone:</strong> ${sanitizedData.phone}</p>
              </div>
              
              <div style="margin: 20px 0;">
                <h3 style="color: #495057;">Message:</h3>
                <div style="background: white; padding: 15px; border-left: 4px solid #007bff; border-radius: 3px;">
                  ${sanitizedData.details.replace(/\n/g, '<br>')}
                </div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 12px;">
                <p>Submitted: ${new Date().toLocaleString()}</p>
                <p>IP Address: ${identifier}</p>
                <p>User Agent: ${request.headers.get('user-agent')}</p>
              </div>
            </div>
          `,
        })

        // Thank you email to the user
        const userEmailData = await resend.emails.send({
          from: process.env.NODE_ENV === 'production' ? 'noreply@any.co.th' : 'onboarding@resend.dev',
          to: [sanitizedData.email],
          subject: 'Thank you for contacting ANYCALL - We\'ll be in touch!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #007bff 0%, #6610f2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="margin: 0; font-size: 28px;">Thank You!</h1>
                <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">We've received your message</p>
              </div>
              
              <div style="padding: 30px; background: white; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <p>Hi ${sanitizedData.firstName},</p>
                
                <p>Thank you for your interest in ANYCALL! We've received your message and our team will get back to you within 24 hours.</p>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                  <h3 style="margin-top: 0; color: #495057;">Your Submission:</h3>
                  <p><strong>Company:</strong> ${sanitizedData.company}</p>
                  <p><strong>Phone:</strong> ${sanitizedData.phone}</p>
                  <p><strong>Message:</strong> ${sanitizedData.details}</p>
                </div>
                
                <p>In the meantime, feel free to explore our platform and learn more about how ANYCALL can transform your business communications.</p>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${process.env.NEXT_PUBLIC_APP_URL}" style="background: #007bff; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; display: inline-block;">Visit ANYCALL</a>
                </div>
                
                <p style="color: #6c757d; font-size: 14px; margin-top: 30px;">
                  Best regards,<br>
                  The ANYCALL Team<br>
                  <a href="mailto:any.ai.team@gmail.com" style="color: #007bff;">any.ai.team@gmail.com</a>
                </p>
              </div>
            </div>
          `,
        })

        console.log('Emails sent successfully:', {
          adminEmail: adminEmailData.data?.id,
          userEmail: userEmailData.data?.id
        })
        
      } catch (emailError) {
        console.error('Failed to send email:', emailError)
        // Don't return error to user for email failures - form should still succeed
      }
    } else {
      console.warn('RESEND_API_KEY not set - emails will not be sent')
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        timestamp: new Date().toISOString()
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
        }
      }
    )

  } catch (error) {
    console.error('Contact form API error:', error)
    
    // Return generic error message to prevent information disclosure
    return NextResponse.json(
      { 
        error: 'Internal server error. Please try again later.',
        timestamp: new Date().toISOString()
      }, 
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}