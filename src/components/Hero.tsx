import treatmentImg from "@/assets/treatment.jpg";


const Hero = () => {
  return (
    <section id="top" className="min-h-screen flex flex-col">
      {/* White space with hero text */}
      <div className="flex-1 flex items-end pt-32 pb-8 px-4">
        <div className="container mx-auto flex items-end justify-between gap-8">
          <div className="flex flex-col gap-3">
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground tracking-tight leading-snug max-w-2xl">
              Jalgade Hooldus Tallinnas
            </h1>
          </div>
          <nav className="flex items-center gap-4 flex-shrink-0">
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
