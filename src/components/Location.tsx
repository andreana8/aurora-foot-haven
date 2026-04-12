import buildingImg from "@/assets/building.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Location = () => {
  const { t } = useLanguage();

  return (
    <section id="asukoht" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4 tracking-tight">
            {t("locationTitle")}
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="overflow-hidden">
            <img src={buildingImg} alt={t("buildingImgAlt")} className="w-full h-auto object-cover" />
          </div>
          <div className="overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2029.5!2d24.6668!3d59.3975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692949f0b8a3b0d%3A0x2b0b0b0b0b0b0b0b!2sKadaka%20tee%2042b%2C%20Tallinn!5e0!3m2!1set!2see!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("mapTitle")}
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-lg text-foreground">
            {t("locationDesc")}
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">{t("address")}</p>
              <p className="text-foreground">{t("addressValue")}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">{t("entrance")}</p>
              <p className="text-foreground">{t("entranceValue")}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">{t("parking")}</p>
              <p className="text-foreground">{t("parkingValue")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
