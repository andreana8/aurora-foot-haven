import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto flex items-center justify-end py-3 px-4 gap-2">
        <button
          onClick={() => setLanguage("et")}
          className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors cursor-pointer ${
            language === "et"
              ? "bg-[#f8a13d] text-background border-[#f8a13d]"
              : "border-[#f8a13d] text-[#f8a13d] hover:bg-[#f8a13d] hover:text-background"
          }`}
        >
          Eesti
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors cursor-pointer ${
            language === "en"
              ? "bg-[#f8a13d] text-background border-[#f8a13d]"
              : "border-[#f8a13d] text-[#f8a13d] hover:bg-[#f8a13d] hover:text-background"
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage("ru")}
          className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors cursor-pointer ${
            language === "ru"
              ? "bg-[#f8a13d] text-background border-[#f8a13d]"
              : "border-[#f8a13d] text-[#f8a13d] hover:bg-[#f8a13d] hover:text-background"
          }`}
        >
          Русский
        </button>
      </div>
    </header>
  );
};

export default Header;
