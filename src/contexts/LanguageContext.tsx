"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, UI_TEXT, NAV_LINKS, VALUE_PROPOSITION_FEATURES, USE_CASES, FEATURES, FAQS } from "@/lib/data";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof UI_TEXT["TH"]; // Changes dynamically based on language, but for type safety we can use the structure of one.
    navLinks: typeof NAV_LINKS["TH"];
    valueFeatures: typeof VALUE_PROPOSITION_FEATURES["TH"];
    useCases: typeof USE_CASES["TH"];
    features: typeof FEATURES["TH"];
    faqs: typeof FAQS["TH"];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>("TH");
    const [isLoaded, setIsLoaded] = useState(false);

    // Load language from local storage on mount
    useEffect(() => {
        const savedLang = localStorage.getItem("app-language") as Language;
        if (savedLang === "EN" || savedLang === "TH") {
            setLanguage(savedLang);
        }
        setIsLoaded(true);
    }, []);

    // Update local storage on language change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("app-language", language);
        }
    }, [language, isLoaded]);

    const value = {
        language,
        setLanguage,
        t: UI_TEXT[language],
        navLinks: NAV_LINKS[language],
        valueFeatures: VALUE_PROPOSITION_FEATURES[language],
        useCases: USE_CASES[language],
        features: FEATURES[language],
        faqs: FAQS[language],
    };

    if (!isLoaded) {
        return null; // Or a loading spinner if desired
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
