import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage } = useLanguage();

  const langs: { code: "et" | "en" | "ru" | "fi"; label: string; short: string }[] = [
    { code: "et", label: "Eesti", short: "ET" },
    { code: "en", label: "English", short: "EN" },
    { code: "ru", label: "Русский", short: "RU" },
    { code: "fi", label: "Suomi", short: "FI" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto flex items-center justify-center sm:justify-end py-2 sm:py-3 px-3 sm:px-4 gap-1.5 sm:gap-2 flex-wrap">
        {langs.map((l) => (
          <button
            key={l.code}
            onClick={() => setLanguage(l.code)}
            aria-label={l.label}
            className={`px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full border transition-colors cursor-pointer ${
              language === l.code
                ? "bg-[#f8a13d] text-background border-[#f8a13d]"
                : "border-[#f8a13d] text-[#f8a13d] hover:bg-[#f8a13d] hover:text-background"
            }`}
          >
            <span className="sm:hidden">{l.short}</span>
            <span className="hidden sm:inline">{l.label}</span>
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
