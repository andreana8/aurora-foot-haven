import treatmentImg from "@/assets/treatment.jpg";

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
    <section id="top" className="relative min-h-screen flex items-center pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={treatmentImg}
          alt="Jalahooldus"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              Professionaalne jalahooldus
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-4 tracking-tight">
              Jalgade hooldus
              <br />
              <span className="text-primary">Tallinnas</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium mb-8 max-w-lg">
              Aurora Medica Kliiniku Ruumides
            </p>
            <a
              href="tel:+37258502300"
              className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-bold hover:brightness-110 transition-all"
            >
              Broneeri Aeg
            </a>
          </div>

          {/* Right: Services list */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Milliseid jalahooldusteenuseid pakume?
            </h2>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3 text-muted-foreground text-base">
                  <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
