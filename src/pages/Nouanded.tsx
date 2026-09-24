import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Seo from "@/components/Seo";
import { useLanguage } from "@/contexts/LanguageContext";
import { nouandedContent } from "@/i18n/nouanded";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertCircle, Footprints } from "lucide-react";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-muted-foreground">
    <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
    <span>{children}</span>
  </li>
);

const Nouanded = () => {
  const { language } = useLanguage();
  const c = nouandedContent[language];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="Nõuanded tervete jalgade heaks | Jalahooldus Kogu Perele"
        description="Praktilised nõuanded, kuidas hoida jalad terved, ennetada probleeme ja hoolitseda igapäevaselt oma jalgade eest."
        path="/nouanded"
      />
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium"
          >
            {c.back}
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{c.title}</h1>
          <p className="text-lg text-muted-foreground mb-4">{c.intro1}</p>
          <p className="text-lg text-muted-foreground mb-4">{c.intro2}</p>
          <p className="text-lg font-medium mb-12">{c.intro3}</p>

          {/* Igapäevane hooldus */}
          <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Footprints className="w-5 h-5" />
              </span>
              <h2 className="text-2xl font-bold">{c.dailyTitle}</h2>
            </div>
            <div className="space-y-4">
              {c.dailyParagraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </section>

          {/* Teemakaardid */}
          <Accordion type="single" collapsible className="space-y-4 mb-12">
            {c.topics.map((topic, i) => (
              <AccordionItem
                key={i}
                value={`topic-${i}`}
                className="rounded-2xl border border-border bg-card px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-bold hover:no-underline py-5">
                  {topic.title}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base">
                  {topic.sections.map((section, j) => (
                    <div key={j} className={j > 0 ? "mt-5" : ""}>
                      {section.paragraphs?.map((p, k) => (
                        <p
                          key={k}
                          className="text-muted-foreground leading-relaxed mb-3"
                        >
                          {p}
                        </p>
                      ))}
                      {section.listTitle && (
                        <p className="font-semibold mb-3">{section.listTitle}</p>
                      )}
                      {section.list && (
                        <ul className="space-y-2 mb-3">
                          {section.list.map((item, k) => (
                            <Bullet key={k}>{item}</Bullet>
                          ))}
                        </ul>
                      )}
                      {section.note && (
                        <div className="flex items-start gap-3 rounded-xl bg-secondary/10 border border-secondary/30 p-4 mt-4">
                          <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <p className="text-sm font-medium leading-relaxed">
                            {section.note}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Millal pöörduda */}
          <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">{c.whenTitle}</h2>
            <p className="text-muted-foreground mb-4">{c.whenIntro}</p>
            <ul className="space-y-2 mb-6">
              {c.whenList.map((item, i) => (
                <Bullet key={i}>{item}</Bullet>
              ))}
            </ul>
            <p className="font-medium">{c.whenNote}</p>
          </section>

          {/* Meelespea */}
          <section className="mb-12 rounded-2xl bg-primary text-primary-foreground p-6 md:p-8 text-center shadow-md">
            <h2 className="text-2xl font-bold mb-4">{c.reminderTitle}</h2>
            <p className="text-xl font-bold mb-3">{c.reminderFormula}</p>
            <p className="opacity-90">{c.reminderText}</p>
          </section>

          <div className="text-center">
            <p className="inline-block text-left text-lg font-medium">
              {c.closing.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line.replace(/\u00a0+$/, "")}
                </span>
              ))}
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Nouanded;
