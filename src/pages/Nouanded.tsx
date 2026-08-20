import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Seo from "@/components/Seo";
import { useLanguage } from "@/contexts/LanguageContext";


const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-muted-foreground">
    <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
    <span>{children}</span>
  </li>
);

const HtmlBullet = ({ html }: { html: string }) => (
  <li className="flex items-start gap-3 text-muted-foreground">
    <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
    <span dangerouslySetInnerHTML={{ __html: html }} />
  </li>
);

const Nouanded = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium"
          >
            {t("nouandedBack")}
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("nouandedTitle")}
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            {t("nouandedSubtitle")}
          </p>

          {/* Sissekasvanud varbaküüs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              {t("ingrownTitle")}
            </h2>
            <p className="text-muted-foreground mb-6" dangerouslySetInnerHTML={{ __html: t("ingrownIntro") }} />
            <ul className="space-y-3 mb-6">
              <HtmlBullet html={t("ingrownCause1")} />
              <HtmlBullet html={t("ingrownCause2")} />
              <HtmlBullet html={t("ingrownCause3")} />
              <HtmlBullet html={t("ingrownCause4")} />
              <HtmlBullet html={t("ingrownCause5")} />
              <HtmlBullet html={t("ingrownCause6")} />
            </ul>

            <h3 className="text-xl font-bold mb-3">{t("ingrownSymptomsTitle")}</h3>
            <ul className="space-y-2 mb-6">
              <Bullet>{t("ingrownSymptom1")}</Bullet>
              <Bullet>{t("ingrownSymptom2")}</Bullet>
              <Bullet>{t("ingrownSymptom3")}</Bullet>
              <Bullet>{t("ingrownSymptom4")}</Bullet>
              <Bullet>{t("ingrownSymptom5")}</Bullet>
            </ul>

            <h3 className="text-xl font-bold mb-3">{t("ingrownPreventTitle")}</h3>
            <p className="text-muted-foreground mb-2" dangerouslySetInnerHTML={{ __html: t("ingrownPrevent1") }} />
            <p className="text-muted-foreground mb-2" dangerouslySetInnerHTML={{ __html: t("ingrownPrevent2") }} />
            <p className="text-muted-foreground mb-6" dangerouslySetInnerHTML={{ __html: t("ingrownPrevent3") }} />

            <h3 className="text-xl font-bold mb-3">{t("ingrownWhenTitle")}</h3>
            <p className="text-muted-foreground">{t("ingrownWhen1")}</p>
            <p className="text-muted-foreground mt-4">{t("ingrownWhen2")}</p>
          </section>

          <hr className="border-border mb-12" />

          {/* Kannalõhed */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              {t("heelTitle")}
            </h2>
            <p className="text-muted-foreground mb-4">{t("heelIntro1")}</p>
            <p className="text-muted-foreground mb-4">{t("heelIntro2")}</p>
            <p className="text-muted-foreground mb-6">{t("heelIntro3")}</p>

            <h3 className="text-xl font-bold mb-3">{t("heelNutritionTitle")}</h3>
            <p className="text-muted-foreground mb-6">{t("heelNutrition")}</p>

            <h3 className="text-xl font-bold mb-3">{t("heelRemedyTitle")}</h3>
            <p className="text-muted-foreground mb-4">{t("heelRemedy1")}</p>
            <p className="text-muted-foreground mb-6">{t("heelRemedy2")}</p>

            <h3 className="text-xl font-bold mb-3">{t("heelWhenTitle")}</h3>
            <p className="text-muted-foreground">{t("heelWhen")}</p>
          </section>

          <hr className="border-border mb-12" />

          {/* Jalaseen */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              {t("fungusTitle")}
            </h2>

            <h3 className="text-xl font-bold mb-3">{t("fungusCausesTitle")}</h3>
            <p className="text-muted-foreground mb-6">{t("fungusCausesIntro")}</p>
            <ul className="space-y-3 mb-6">
              <HtmlBullet html={t("fungusCause1")} />
              <HtmlBullet html={t("fungusCause2")} />
              <HtmlBullet html={t("fungusCause3")} />
              <HtmlBullet html={t("fungusCause4")} />
            </ul>

            <h3 className="text-xl font-bold mb-3">{t("fungusSymTitle")}</h3>
            <ul className="space-y-2 mb-6">
              <Bullet>{t("fungusSym1")}</Bullet>
              <Bullet>{t("fungusSym2")}</Bullet>
              <Bullet>{t("fungusSym3")}</Bullet>
              <Bullet>{t("fungusSym4")}</Bullet>
            </ul>

            <h3 className="text-xl font-bold mb-3">{t("fungusPreventTitle")}</h3>
            <p className="text-muted-foreground mb-6">{t("fungusPrevent")}</p>

            <h3 className="text-xl font-bold mb-3">{t("fungusRemedyTitle")}</h3>
            <p className="text-muted-foreground mb-4">{t("fungusRemedyIntro")}</p>
            <ul className="space-y-3 mb-6">
              <HtmlBullet html={t("fungusRemedy1")} />
              <HtmlBullet html={t("fungusRemedy2")} />
              <HtmlBullet html={t("fungusRemedy3")} />
            </ul>

            <h3 className="text-xl font-bold mb-3">{t("fungusWhenTitle")}</h3>
            <p className="text-muted-foreground">{t("fungusWhen")}</p>
          </section>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Nouanded;
