import logoFull from "@/assets/logo-full.png";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#top">
          <img src={logoFull} alt="Jalahooldus kogu perele" className="h-10 md:h-12" />
        </a>
        <button
          onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all cursor-pointer"
        >
          Broneeri Aeg
        </button>
      </div>
    </header>
  );
};

export default Header;
