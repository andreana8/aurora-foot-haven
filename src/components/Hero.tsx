import treatmentImg from "@/assets/jalahooldus-kogu-perele.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const marqueeItems = [
  "JALAHOOLDUS",
  "FOOT CARE",
  "ПЕДИКЮР",
  "JALKAHOITO",
  "TALLINN",
  "AURORA MEDICA",
  "JALAHOOLDUS",
  "FOOT CARE",
  "ПЕДИКЮР",
  "JALKAHOITO",
  "TALLINN",
  "AURORA MEDICA",
];

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative h-screen flex flex-col">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 animate-fade-in" style={{ animationDuration: "3s" }}>
        <img
          src={treatmentImg}
          alt="jalahooldus-kogu-perele-aurora-medica-jalahooldus-tallinnas-jalgade-hooldus"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>

      {/* Nav buttons near the bottom */}
      <div className="relative z-10 flex-1 flex items-end justify-center pb-20 px-4">
        <nav className="flex flex-wrap gap-3">
          <button
            onClick={() => document.getElementById("teenused")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#f8a13d] border border-[#f8a13d] text-background rounded-full px-8 py-3 text-base font-medium hover:bg-[#f8a13d]/80 transition-colors cursor-pointer"
          >
            {t("services")}
          </button>
          <button
            onClick={() => document.getElementById("asukoht")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#f8a13d] border border-[#f8a13d] text-background rounded-full px-8 py-3 text-base font-medium hover:bg-[#f8a13d]/80 transition-colors cursor-pointer"
          >
            {t("location")}
          </button>
          <button
            onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#f8a13d] border border-[#f8a13d] text-background rounded-full px-8 py-3 text-base font-medium hover:bg-[#f8a13d]/80 transition-colors cursor-pointer"
          >
            {t("contact")}
          </button>
          <Dialog>
            <DialogTrigger asChild>
              <button
                className="bg-[#f8a13d] border border-[#f8a13d] text-background rounded-full px-8 py-3 text-base font-medium hover:bg-[#f8a13d]/80 transition-colors cursor-pointer"
              >
                {t("about")}
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto animate-fade-in">
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl font-heading font-medium">
                  {t("aboutTitle")}
                </DialogTitle>
              </DialogHeader>
              <p className="whitespace-pre-line text-foreground text-base md:text-lg leading-relaxed mt-4">
                {t("aboutBio")}
              </p>
            </DialogContent>
          </Dialog>
        </nav>
      </div>

      {/* Scrolling marquee at the bottom */}
      <div className="relative z-10 bg-[#02acbd] text-background py-3 overflow-hidden">
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
