import heroImage from "@/assets/hero-foot-care.jpg";

const services = [
  "Lõõgastav jalahooldus",
  "Konnasilmade eemaldamine",
  "Lõhenenud kandade ja nahapaksendite töötlemine",
  "Eakate jalahooldus",
  "Meeste pediküür",
  "Paksenenud varbaküünte k.a küüneseene töötlemine",
  "Pediküür probleemsetele jalgadele",
];

const Hero = () => {
  return (
    <section id="top" className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Jalahooldus" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-2">
            Jalgade hooldus Tallinnas
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-semibold mb-2">
            Aurora Medica Kliiniku Ruumides
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-secondary mb-8">
            Milliseid jalahooldusteenuseid pakume?
          </h2>
          <ul className="space-y-2 mb-10">
            {services.map((s) => (
              <li key={s} className="flex items-center gap-3 text-primary-foreground/90 text-base md:text-lg">
                <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
          <a
            href="tel:+37258502300"
            className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-opacity"
          >
            Broneeri Aeg
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
