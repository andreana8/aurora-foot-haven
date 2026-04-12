import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="kontakt" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4 tracking-tight">
            {t("bookingTitle")}
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto" />
        </div>

        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            {t("bookingRequired")}
          </p>
          <p className="text-foreground mb-4 text-lg">{t("bookingCall")}</p>
          <a
            href="tel:+37258502300"
            className="text-4xl font-heading font-medium text-foreground hover:opacity-50 transition-opacity block mb-8"
          >
            +372 5850 2300
          </a>
          <p className="text-muted-foreground text-sm mb-3">
            {t("bookingBusy")}
          </p>
          <p className="text-foreground text-lg font-bold mb-8">{t("paymentCash")}</p>
          <div className="border-t border-border pt-6 text-xs text-muted-foreground max-w-md mx-auto text-center">
            <p>{t("noShowPolicy")}</p>
          </div>
          <div className="mt-12 pt-8 border-t border-border">
            <a
              href="https://www.facebook.com/JalahooldusKoguPerele"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(var(--foreground))] text-[hsl(var(--background))] rounded-lg hover:opacity-80 transition-opacity text-lg font-medium"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              {t("followFacebook")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
