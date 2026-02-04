import { TH } from "./i18n/th";
import { EN } from "./i18n/en";
import { flagTH, flagUS } from "@/assets/flags";

export type Language = "TH" | "EN";

export const LANGUAGES = [
    { code: "TH" as Language, label: "ไทย", flag: flagTH },
    { code: "EN" as Language, label: "English", flag: flagUS },
];

export const UI_TEXT = {
    TH: TH,
    EN: EN,
};

export const NAV_LINKS = {
    TH: TH.navLinks,
    EN: EN.navLinks,
};

export const VALUE_PROPOSITION_FEATURES = {
    TH: TH.valuePropositionFeatures,
    EN: EN.valuePropositionFeatures,
};

export const USE_CASES = {
    TH: TH.useCasesList,
    EN: EN.useCasesList,
};

export const FEATURES = {
    TH: TH.features,
    EN: EN.features,
};

export const FAQS = {
    TH: TH.faqs,
    EN: EN.faqs,
};
