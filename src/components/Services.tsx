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
    { title: t("service1Title"), price: t("service1Price"), description: t("service1Desc") },
    { title: t("service2Title"), price: t("service2Price"), description: t("service2Desc") },
    { title: t("service3Title"), price: t("service3Price"), description: t("service3Desc") },
    { title: t("service4Title"), price: t("service4Price"), description: t("service4Desc") },
    { title: t("service5Title"), price: t("service5Price"), description: t("service5Desc") },
    { title: t("service6Title"), price: t("service6Price"), description: t("service6Desc") },
  ];

  return (
    <section id="teenused" className="min-h-screen py-16 md:py-24 bg-background relative overflow-hidden flex items-center" ref={sectionRef}>
      {/* Animated wavy ribbon behind cards */}
      <svg
        className="absolute top-1/2 w-full"
        style={{
          opacity: ribbonVisible ? 0.15 : 0,
          transform: `translateX(${ribbonVisible ? "0%" : "-100%"}) translateY(-50%)`,
          transition: "opacity 2500ms ease-out, transform 2500ms ease-out",
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

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4 tracking-tight">
            {t("servicesTitle")}
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto" />
        </div>


        <div className="grid md:grid-cols-3 gap-6">
          {serviceCards.map((card, index) => (
            <div key={card.title} className="bg-muted p-6 flex flex-col hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="uppercase tracking-wider text-foreground font-sans text-lg font-extrabold">
                  {card.title}
                </h3>
                <span className="text-muted-foreground whitespace-nowrap font-extrabold text-2xl">
                  {card.price}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed uppercase tracking-wider text-sm font-semibold mb-6">
                {card.description}
              </p>
              <button
                onClick={() => {
                  const el = document.getElementById("kontakt");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-auto w-full px-6 py-3 border border-[#02acbd] text-[#02acbd] uppercase tracking-wider text-xs font-bold hover:bg-[#02acbd] hover:text-background transition-colors rounded-full"
              >
                {t("bookNow")}
              </button>

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
