import treatmentImg from "@/assets/treatment.jpg";

const Hero = () => {
  return (
    <section id="top" className="min-h-screen flex flex-col">
      {/* Hero text and nav */}
      <div className="flex-1 flex flex-col items-center justify-center pt-16 pb-8 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground tracking-tight leading-tight mb-8">
          Jalgade Hooldus Tallinnas
        </h1>
        <nav className="flex items-center gap-4">
          <button onClick={() => document.getElementById('teenused')?.scrollIntoView({ behavior: 'smooth' })} className="border border-foreground rounded-full px-5 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition-colors cursor-pointer">
            Teenused
          </button>
          <button onClick={() => document.getElementById('asukoht')?.scrollIntoView({ behavior: 'smooth' })} className="border border-foreground rounded-full px-5 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition-colors cursor-pointer">
            Asukoht
          </button>
          <button onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })} className="border border-foreground rounded-full px-5 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition-colors cursor-pointer">
            Kontakt
          </button>
        </nav>
      </div>

      {/* Full-width image */}
      <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={treatmentImg}
          alt="Jalahooldus"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>
    </section>
  );
};

export default Hero;
