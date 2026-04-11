import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="Jalahooldus" className="w-12 h-12" />
            <div>
              <p className="font-bold text-lg">Jalahooldus Kogu Perele</p>
              <p className="text-sm opacity-70">Kadaka Trade Center, Kadaka tee 42B, Tallinn, 12919</p>
            </div>
          </div>
          <div className="space-y-1 text-sm opacity-80">
            <p className="font-bold text-base opacity-100 mb-2">Kontakt</p>
            <p>
              <a href="tel:+37258502300" className="hover:opacity-100 transition-opacity">+372 5850 2300</a>
            </p>
            <p>
              <a href="mailto:jalahoolduskabinet@gmail.com" className="hover:opacity-100 transition-opacity">
                jalahoolduskabinet@gmail.com
              </a>
            </p>
          </div>
          <div className="text-sm opacity-80">
            <p className="font-bold text-base opacity-100 mb-2">Kasulikud teadmised</p>
            <p>Kuidas hoida jalad terved ja ennetada probleeme.</p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-sm opacity-60">
          © Jalahooldus Kogu Perele
        </div>
      </div>
    </footer>
  );
};

export default Footer;
