import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const CALENDLY_URL = "https://calendly.com/jalahoolduskabinet";

const Contact = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (existing) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="kontakt" className="min-h-screen py-24 bg-background flex items-center">
      <div className="container mx-auto px-4 w-full">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4 tracking-tight">
            {t("bookingTitle")}
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div>
            <div
              className="calendly-inline-widget"
              data-url={`${CALENDLY_URL}?hide_gdpr_banner=1`}
              style={{ minWidth: "320px", height: "900px" }}
            />
          </div>

          <div className="text-center flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              {t("bookingRequired")}
            </p>
            <p className="text-foreground mb-4 text-xl md:text-2xl">{t("bookingCall")}</p>
            <a
              href="tel:+37258502300"
              className="text-4xl md:text-5xl font-heading font-medium text-foreground hover:opacity-50 transition-opacity block mb-8"
            >
              +372 5850 2300
            </a>
            <p className="text-muted-foreground text-base mb-3">
              {t("bookingBusy")}
            </p>
            <p className="text-foreground text-xl md:text-2xl font-bold">{t("paymentCash")}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="border-t border-border pt-8 text-base md:text-lg text-muted-foreground">
            <p>{t("noShowPolicy")}</p>
          </div>
          <div className="mt-10 pt-8 border-t border-border">
            <a
              href="https://www.facebook.com/JalahooldusKoguPerele"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#02acbd] text-white rounded-lg hover:opacity-80 transition-opacity text-lg font-medium"
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
