import { z } from 'zod'

// Contact form validation schema
export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'First name contains invalid characters'),
  
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Last name contains invalid characters'),
  
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address')
    .max(100, 'Email must be less than 100 characters'),
  
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[+]?[\d\s\-()]+$/, 'Invalid phone number format')
    .max(20, 'Phone number must be less than 20 characters'),
  
  company: z
    .string()
    .min(1, 'Company name is required')
    .max(100, 'Company name must be less than 100 characters')
    .regex(/^[a-zA-Z0-9\s&.,'-]+$/, 'Company name contains invalid characters'),
  
  details: z
    .string()
    .min(10, 'Details must be at least 10 characters long')
    .max(1000, 'Details must be less than 1000 characters')
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Sanitize input function to prevent XSS and SQL injection
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/['"`;\\]/g, '') // Remove SQL injection characters
    .replace(/--/g, '') // Remove SQL comment
    .replace(/\/\*/g, '') // Remove multi-line comment start
    .replace(/\*\//g, '') // Remove multi-line comment end
    .replace(/(\bOR\b|\bAND\b|\bUNION\b|\bSELECT\b|\bINSERT\b|\bUPDATE\b|\bDELETE\b|\bDROP\b|\bCREATE\b|\bALTER\b)/gi, '') // Remove SQL keywords
    .trim()
}

// Additional SQL injection validation
export function validateNoSQLInjection(input: string): boolean {
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|DECLARE)\b)/gi,
    /(--|\/\*|\*\/|;|'|"|`|\\)/g,
    /(\bOR\b.*=.*|\bAND\b.*=.*)/gi,
    /(1\s*=\s*1|'.*'|".*")/gi
  ];
  
  return !sqlPatterns.some(pattern => pattern.test(input));
}

// Rate limiting configuration
export const RATE_LIMIT_CONFIG = {
  requests: 5, // 5 requests
  window: '1 h', // per hour
  blockDuration: '1 h' // block for 1 hour after limit exceeded
} as const