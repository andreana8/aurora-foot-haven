import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const CALENDLY_URL = "https://calendly.com/jalahoolduskabinet";
const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

const Contact = () => {
  const { t } = useLanguage();
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure stylesheet is present
    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS;
      document.head.appendChild(link);
    }

    const init = () => {
      if (!widgetRef.current || !window.Calendly) return;
      widgetRef.current.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: `${CALENDLY_URL}?hide_gdpr_banner=1`,
        parentElement: widgetRef.current,
      });
    };

    if (window.Calendly) {
      init();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT}"]`
    );
    if (!script) {
      script = document.createElement("script");
      script.src = CALENDLY_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", init);
    return () => script?.removeEventListener("load", init);
  }, []);

  return (
    <section id="kontakt" className="relative min-h-screen py-24 flex items-center overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#e6f6f8_0%,#ffffff_45%,#c9ecf1_100%)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      <div className="container mx-auto px-4 w-full relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4 tracking-tight">
            {t("bookingTitle")}
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              ref={widgetRef}
              style={{ minWidth: "320px", height: "650px" }}
            />
          </div>


          <div className="text-center flex flex-col items-center pt-0">
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
          <div className="border-t border-border pt-8 text-base md:text-lg text-foreground">
            <p className="whitespace-pre-line">{t("noShowPolicy")}</p>
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
