import { useLanguage } from "@/contexts/LanguageContext";
import ctaImage from "@/assets/cta-feet.jpg";

const CallToAction = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-foreground leading-snug tracking-tight">
            <span className="italic">{t("ctaTitlePart1")}</span> {t("ctaTitlePart2")}{" "}
            <span className="italic">{t("ctaTitlePart3")}</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-sm uppercase tracking-wider font-semibold max-w-md">
            {t("ctaSubtitle")}
          </p>
          <button
            onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-8 inline-block px-8 py-3 border border-[#02acbd] text-[#02acbd] uppercase tracking-wider text-sm font-bold hover:bg-[#02acbd] hover:text-background transition-colors rounded-full cursor-pointer"
          >
            {t("ctaButton")}
          </button>
        </div>
        <div className="flex-1 w-full">
          <img
            src={ctaImage}
            alt="Professionaalne jalahooldus"
            className="w-full h-auto rounded-2xl object-cover max-h-[300px] md:max-h-[400px]"
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
          />
        </div>

      </div>
    </section>
  );
};

export default CallToAction;
