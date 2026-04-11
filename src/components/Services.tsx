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
    <section id="teenused" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-12">
          Meie teenused
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className="bg-card rounded-xl shadow-lg p-8 flex flex-col border border-border hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-primary mb-2">{card.title}</h3>
              <p className="text-2xl font-extrabold text-secondary mb-4">Hind: {card.price}</p>
              <p className="text-muted-foreground leading-relaxed flex-1 mb-6">{card.description}</p>
              <a
                href="tel:+37258502300"
                className="bg-primary text-primary-foreground text-center py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Broneeri Aeg
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
