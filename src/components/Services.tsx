import clinicImg from "@/assets/clinic-room.jpg";
import certificateImg from "@/assets/certificate.jpg";
import aparaatImg from "@/assets/aparaat-jalahooldus.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const serviceCards = [
    { title: t("service1Title"), price: t("service1Price"), description: t("service1Desc"), image: clinicImg, alt: t("clinicImgAlt") },
    { title: t("service2Title"), price: t("service2Price"), description: t("service2Desc"), image: aparaatImg, alt: "professionaalne aparaat jalahooldus" },
    { title: t("service3Title"), price: t("service3Price"), description: t("service3Desc"), image: certificateImg, alt: t("certImgAlt") },
  ];

  return (
    <section id="teenused" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center px-0 py-0 my-0 mx-0">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4 tracking-tight">
            {t("servicesTitle")}
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {serviceCards.map((card) => (
            <div key={card.title} className="flex flex-col gap-4">
              <div className="bg-muted p-8 flex flex-col justify-between min-h-[280px] hover:shadow-lg transition-shadow py-[30px] px-[30px] my-0 gap-[234px]">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <h3 className="uppercase tracking-wider text-foreground font-sans text-lg font-extrabold">
                      {card.title}
                    </h3>
                    <span className="text-muted-foreground whitespace-nowrap mt-2 text-xl font-extrabold">
                      {card.price}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-wider mx-0 my-0 px-0 py-0">
                  {card.description}
                </p>
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <img src={card.image} alt={card.alt} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
