import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="Jalahooldus" className="w-10 h-10" />
            <div>
              <p className="font-bold text-foreground">Jalahooldus Kogu Perele</p>
              <p className="text-sm text-muted-foreground">Kadaka Trade Center, Kadaka tee 42B, Tallinn, 12919</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-bold text-foreground mb-3 uppercase tracking-wider text-xs">Kontakt</p>
            <p>
              <a href="tel:+37258502300" className="text-muted-foreground hover:text-foreground transition-colors">
                +372 5850 2300
              </a>
            </p>
            <p>
              <a href="mailto:jalahoolduskabinet@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                jalahoolduskabinet@gmail.com
              </a>
            </p>
          </div>
          <div className="text-sm">
            <p className="font-bold text-foreground mb-3 uppercase tracking-wider text-xs">Kasulikud teadmised</p>
            <Link to="/nouanded" className="text-muted-foreground hover:text-foreground transition-colors underline">
              Kuidas hoida jalad terved ja ennetada probleeme
            </Link>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © Jalahooldus Kogu Perele
        </div>
      </div>
    </footer>
  );
};

export default Footer;
