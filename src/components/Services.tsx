import clinicImg from "@/assets/clinic-room.jpg";
import certificateImg from "@/assets/certificate.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const serviceCards = [
    { title: t("service1Title"), price: t("service1Price"), description: t("service1Desc") },
    { title: t("service2Title"), price: t("service2Price"), description: t("service2Desc") },
    { title: t("service3Title"), price: t("service3Price"), description: t("service3Desc") },
  ];

  return (
    <section id="teenused" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4 tracking-tight">
            {t("servicesTitle")}
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className="bg-muted p-8 flex flex-col justify-between min-h-[280px] hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground leading-tight lowercase italic">
                    {card.title}
                  </h3>
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap mt-2">
                    {card.price}
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-wider">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="overflow-hidden aspect-[4/3]">
            <img src={clinicImg} alt={t("clinicImgAlt")} className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden aspect-[4/3]">
            <img src={certificateImg} alt={t("certImgAlt")} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
