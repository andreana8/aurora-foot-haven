import logoFull from "@/assets/logo-full.png";

const Header = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="container mx-auto flex items-start justify-between py-3 px-4">
        <a href="#top" className="flex-shrink-0">
          <img src={logoFull} alt="Jalahooldus kogu perele" className="h-8" />
        </a>
        <nav className="flex flex-col items-end gap-1 text-sm font-medium">
          <button onClick={() => scrollTo('teenused')} className="hover:opacity-50 transition-opacity cursor-pointer">
            Teenused
          </button>
          <button onClick={() => scrollTo('asukoht')} className="hover:opacity-50 transition-opacity cursor-pointer">
            Asukoht
          </button>
          <button onClick={() => scrollTo('kontakt')} className="hover:opacity-50 transition-opacity cursor-pointer">
            Kontakt
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
