import clinicImg from "@/assets/clinic-room-new.png";
import certificateImg from "@/assets/certificate-updated.png";
import aparaatImg from "@/assets/aparaat-jalahooldus-new.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [ribbonVisible, setRibbonVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRibbonVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const serviceCards = [
    { title: t("service1Title"), price: t("service1Price"), description: t("service1Desc"), image: clinicImg, alt: t("clinicImgAlt") },
    { title: t("service2Title"), price: t("service2Price"), description: t("service2Desc"), image: aparaatImg, alt: "professionaalne aparaat jalahooldus" },
    { title: t("service3Title"), price: t("service3Price"), description: t("service3Desc"), image: certificateImg, alt: t("certImgAlt") },
  ];

  return (
    <section id="teenused" className="py-24 bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Animated wavy ribbon behind cards */}
      <svg
        className="absolute top-1/2 -translate-y-1/2 w-full transition-all duration-[2500ms] ease-out"
        style={{
          opacity: ribbonVisible ? 0.15 : 0,
          transform: `translate(${ribbonVisible ? "0%" : "-100%"}, -50%)`,
        }}
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        height="200"
      >
        <path
          d="M0,100 C240,40 480,160 720,100 C960,40 1200,160 1440,100 L1440,200 C1200,260 960,140 720,200 C480,260 240,140 0,200 Z"
          fill="#02acbd"
        />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20 text-center px-0 py-0 my-0 mx-0">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4 tracking-tight">
            {t("servicesTitle")}
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {serviceCards.map((card, index) => (
            <div key={card.title} className="bg-muted p-8 flex flex-col hover:shadow-lg transition-shadow py-[30px] px-[30px] my-0">
              <div className="flex items-start justify-between gap-4 mb-6">
                <h3 className="uppercase tracking-wider text-foreground font-sans text-lg font-extrabold">
                  {card.title}
                </h3>
                <span className="text-muted-foreground whitespace-nowrap mt-2 text-xl font-extrabold">
                  {card.price}
                </span>
              </div>
              <div className="overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-scale-down opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms`, animationFillMode: "forwards" }}
                />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-wider mx-0 my-0 px-0 py-0 mt-auto text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/nouanded"
            className="inline-block px-8 py-3 border border-[#02acbd] text-[#02acbd] uppercase tracking-wider text-sm font-bold hover:bg-[#02acbd] hover:text-background transition-colors rounded-full"
          >
            {t("footerAdvice")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
