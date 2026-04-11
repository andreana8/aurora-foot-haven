import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-medium text-foreground mb-1">Jalahooldus Kogu Perele</p>
            <p className="text-muted-foreground">Kadaka tee 42B, Tallinn</p>
          </div>
          <div>
            <p className="text-muted-foreground">
              <a href="tel:+37258502300" className="hover:text-foreground transition-colors">+372 5850 2300</a>
            </p>
            <p className="text-muted-foreground">
              <a href="mailto:jalahoolduskabinet@gmail.com" className="hover:text-foreground transition-colors">jalahoolduskabinet@gmail.com</a>
            </p>
          </div>
          <div>
            <Link to="/nouanded" className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
              Nõuanded tervete jalgade heaks
            </Link>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-xs text-muted-foreground">
          © Jalahooldus Kogu Perele
        </div>
      </div>
    </footer>
  );
};

export default Footer;
