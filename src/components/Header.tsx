import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto flex items-center justify-end py-3 px-4 gap-2">
        <button
          onClick={() => setLanguage("et")}
          className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors cursor-pointer ${
            language === "et"
              ? "bg-foreground text-background border-foreground"
              : "border-muted-foreground text-muted-foreground hover:border-foreground hover:text-foreground"
          }`}
        >
          Eesti
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors cursor-pointer ${
            language === "en"
              ? "bg-foreground text-background border-foreground"
              : "border-muted-foreground text-muted-foreground hover:border-foreground hover:text-foreground"
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage("ru")}
          className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors cursor-pointer ${
            language === "ru"
              ? "bg-foreground text-background border-foreground"
              : "border-muted-foreground text-muted-foreground hover:border-foreground hover:text-foreground"
          }`}
        >
          Русский
        </button>
      </div>
    </header>
  );
};

export default Header;
