import { useState, ReactNode } from "react";
import { Language, translations, TranslationKey } from "@/i18n/translations";
import { LanguageContext } from "./language-context";

export { useLanguage } from "./language-context";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("et");

  const t = (key: TranslationKey): string => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
