import { useState, useEffect, ReactNode } from "react";
import { Language, translations, TranslationKey } from "@/i18n/translations";
import { LanguageContext } from "./language-context";

export { useLanguage } from "./language-context";

const STORAGE_KEY = "jkp-language";
const SUPPORTED: Language[] = ["et", "en", "ru", "fi"];

const readStored = (): Language => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && SUPPORTED.includes(stored)) return stored;
  } catch {
    /* localStorage unavailable */
  }
  return "et";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(readStored);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* ignore */
    }
  }, [language]);

  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] ?? translations.et[key] ?? key;
  };


  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
