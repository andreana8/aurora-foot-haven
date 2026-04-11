import clinicImg from "@/assets/clinic-room.jpg";
import certificateImg from "@/assets/certificate.jpg";

const serviceCards = [
  {
    title: "Professionaalse aparaadiga jalahooldus",
    price: "50 €",
    description:
      "Meie professionaalne jalahooldus hõlmab küünte korrastamist, küünenahkade töötlemist, taldade lihvimist ning jalgade niisutamist ja õlitamist. Hoolitsuse lõpetab turgutav massaaž, mis annab jalgadele värskendava tunde. Broneeri aeg ja kingi oma jalgadele hoolitsus, mida nad väärivad!",
  },
  {
    title: "Lõõgastav ja värskendav jalgade hooldus",
    price: "60 €",
    description:
      "Hoolitsus algab lõõgastava jalavanniga, mis pehmendab ja värskendab sinu jalgu. Teenusesse kuulub küünte ja küünenahkade korrastamine, taldade lihvimine ning jalgade koorimine. Hoolitsus lõpeb niisutava jalakreemi ja õli kasutamisega ning lõõgastava jalamassaažiga. Ideaalne valik, kui vajad lõõgastust pärast pikka päeva.",
  },
  {
    title: "Probleemsete jalgade hooldus",
    price: "70 €",
    description:
      "Värskendav jalavann, mis sisaldab taimset jalavannisoola. Töötleme nahapaksendid/ paksenenud ja/ või kahjustatud küüned/ küüneseenest tingitud muutused/ lõhenenud kannad/ konnasilmad/ soolatüükad. Õlitame küüned, kreemitame jalad, teeme turgutava massaaži.",
  },
];

const Services = () => {
  return (
    <section id="teenused" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Meie teenused
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pakume professionaalset jalahooldust kõigile — lõõgastavast hoolitsusest keerulisemate probleemide lahendamiseni.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className="bg-card rounded-2xl p-8 flex flex-col border border-border hover:border-primary/40 transition-colors group"
            >
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="text-3xl font-bold text-secondary mb-4">{card.price}</p>
              <p className="text-muted-foreground leading-relaxed flex-1 mb-8 text-sm">
                {card.description}
              </p>
              <a
                href="tel:+37258502300"
                className="bg-secondary text-secondary-foreground text-center py-3 rounded-full font-bold hover:brightness-110 transition-all"
              >
                Broneeri Aeg
              </a>
            </div>
          ))}
        </div>

        {/* Photo gallery */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden border border-border aspect-[4/3]">
            <img src={clinicImg} alt="Meie kabinet" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-border aspect-[4/3]">
            <img src={certificateImg} alt="Sertifikaat" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
