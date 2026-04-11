import logoFull from "@/assets/logo-full.png";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#top">
          <img src={logoFull} alt="Jalahooldus kogu perele" className="h-12 md:h-14" />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-foreground">
          <a href="#teenused" className="hover:text-primary transition-colors">Teenused</a>
          <a href="#asukoht" className="hover:text-primary transition-colors">Asukoht</a>
          <a href="#kontakt" className="hover:text-primary transition-colors">Kontakt</a>
        </nav>
        <a
          href="tel:+37258502300"
          className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
        >
          Broneeri Aeg
        </a>
      </div>
    </header>
  );
};

export default Header;
