import treatmentImg from "@/assets/treatment.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const marqueeItems = [
  "JALAHOOLDUS",
  "FOOT CARE",
  "ПЕДИКЮР",
  "TALLINN",
  "AURORA MEDICA",
  "JALAHOOLDUS",
  "FOOT CARE",
  "ПЕДИКЮР",
  "TALLINN",
  "AURORA MEDICA",
];

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative h-screen flex flex-col">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src={treatmentImg}
          alt={t("heroImgAlt")}
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4">
        <div className="bg-background/95 backdrop-blur-sm px-10 py-12 md:px-16 md:py-16 max-w-lg w-full">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground tracking-tight leading-tight mb-8">
            {t("heroTitle")}
          </h1>

          <nav className="flex flex-wrap gap-3">
            <button
              onClick={() => document.getElementById("teenused")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-foreground rounded-full px-5 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition-colors cursor-pointer"
            >
              {t("services")}
            </button>
            <button
              onClick={() => document.getElementById("asukoht")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-foreground rounded-full px-5 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition-colors cursor-pointer"
            >
              {t("location")}
            </button>
            <button
              onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-foreground rounded-full px-5 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition-colors cursor-pointer"
            >
              {t("contact")}
            </button>
          </nav>
        </div>
      </div>

      {/* Scrolling marquee at the bottom */}
      <div className="relative z-10 bg-foreground text-background py-3 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap gap-8">
          {marqueeItems.concat(marqueeItems).map((item, i) => (
            <span key={i} className="text-sm font-semibold tracking-[0.2em] uppercase mx-4">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
