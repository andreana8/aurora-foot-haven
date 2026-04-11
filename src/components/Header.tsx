import logoFull from "@/assets/logo-full.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="container mx-auto flex items-center py-3 px-4">
        <a href="#top" className="flex-shrink-0">
          <img src={logoFull} alt="Jalahooldus kogu perele" className="h-8" />
        </a>
      </div>
    </header>
  );
};

export default Header;
