import logoFull from "@/assets/logo-full.png";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#top">
          <img src={logoFull} alt="Jalahooldus kogu perele" className="h-10 md:h-12 brightness-0 invert" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#teenused" className="hover:text-foreground transition-colors">Teenused</a>
          <a href="#asukoht" className="hover:text-foreground transition-colors">Asukoht</a>
          <a href="#kontakt" className="hover:text-foreground transition-colors">Kontakt</a>
        </nav>
        <a
          href="tel:+37258502300"
          className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all"
        >
          Broneeri Aeg
        </a>
      </div>
    </header>
  );
};

export default Header;
