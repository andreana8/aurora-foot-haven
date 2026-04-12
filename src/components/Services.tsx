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

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {serviceCards.map((card) => (
            <div key={card.title} className="flex flex-col">
              <p className="text-2xl font-heading font-medium text-foreground mb-3">{card.price}</p>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
