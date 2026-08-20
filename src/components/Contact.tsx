import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const CAL_LINK = "jalahooldus-kogu-perele";
const CAL_SCRIPT = "https://app.cal.com/embed/embed.js";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cal?: any;
  }
}

const loadCal = () =>
  new Promise<void>((resolve) => {
    if (window.Cal) return resolve();
    // Official Cal.com embed loader snippet
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: any[]) {
          const cal = C.Cal;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const s = d.createElement("script");
            s.src = A;
            s.async = true;
            s.onload = () => resolve();
            d.head.appendChild(s);
            cal.loaded = true;
          }
          if (args[0] === L) {
            const api: any = function (...a: any[]) {
              p(api, a);
            };
            const namespace = args[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], args);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, args);
            return;
          }
          p(cal, args);
        };
    })(window, CAL_SCRIPT, "init");

    window.Cal("init", { origin: "https://app.cal.com" });
    if (window.Cal?.loaded) setTimeout(() => resolve(), 0);
  });

const Contact = () => {
  const { t } = useLanguage();
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const el = widgetRef.current;
    if (!el) return;

    const init = () => {
      loadCal().then(() => {
        if (cancelled || !widgetRef.current) return;
        window.Cal("inline", {
          elementOrSelector: widgetRef.current,
          calLink: CAL_LINK,
          layout: "month_view",
          config: { layout: "month_view", theme: "light" },
        });
        window.Cal("ui", {
          theme: "light",
          hideEventTypeDetails: false,
          layout: "month_view",
          cssVarsPerTheme: { light: { "cal-brand": "#02acbd" } },
        });
      });
    };

    // Load the third-party widget only when the booking section comes close to
    // the viewport, so it never blocks the initial page load.
    if (typeof IntersectionObserver === "undefined") {
      init();
      return () => {
        cancelled = true;
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          init();
        }
      },
      { rootMargin: "600px" },
    );
    observer.observe(el);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);


  return (
    <section id="kontakt" className="min-h-screen py-16 md:py-24 bg-background flex items-center">
      <div className="container mx-auto px-4 w-full relative z-10">
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4 tracking-tight">
            {t("bookingTitle")}
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <div
              ref={widgetRef}
              className="w-full overflow-auto rounded-lg"
              style={{ minWidth: "280px", height: "650px" }}
            />
          </div>


          <div className="text-center flex flex-col items-center pt-0">
            <p className="text-foreground mb-6 text-lg md:text-2xl">{t("bookingCall")}</p>
            <a
              href="tel:+37258502300"
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium text-foreground hover:opacity-50 transition-opacity block mb-8 whitespace-nowrap"
            >
              +372 5850 2300
            </a>
            <p className="text-foreground text-lg md:text-2xl">{t("paymentCash")}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12 md:mt-16 text-center">
          <div className="border-t border-border pt-8 text-sm md:text-lg text-foreground">
            <p className="whitespace-pre-line">{t("noShowPolicy")}</p>
          </div>
          <div className="mt-10 pt-8 border-t border-border">
            <a
              href="https://www.facebook.com/JalahooldusKoguPerele"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#02acbd] text-white rounded-lg hover:opacity-80 transition-opacity text-base md:text-lg font-medium"
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
