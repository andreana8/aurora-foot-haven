import clinicImg from "@/assets/clinic-room.jpg";
import certificateImg from "@/assets/certificate.jpg";

const serviceCards = [
  {
    title: "Professionaalse aparaadiga jalahooldus",
    price: "50 €",
    description:
      "Meie professionaalne jalahooldus hõlmab küünte korrastamist, küünenahkade töötlemist, taldade lihvimist ning jalgade niisutamist ja õlitamist. Hoolitsuse lõpetab turgutav massaaž.",
  },
  {
    title: "Lõõgastav ja värskendav jalgade hooldus",
    price: "60 €",
    description:
      "Hoolitsus algab lõõgastava jalavanniga, mis pehmendab ja värskendab sinu jalgu. Teenusesse kuulub küünte ja küünenahkade korrastamine, taldade lihvimine ning jalgade koorimine.",
  },
  {
    title: "Probleemsete jalgade hooldus",
    price: "70 €",
    description:
      "Töötleme nahapaksendid, paksenenud ja/või kahjustatud küüned, küüneseenest tingitud muutused, lõhenenud kannad, konnasilmad ja soolatüükad.",
  },
];

const Services = () => {
  return (
    <section id="teenused" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4 tracking-tight">
            Teenused
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {serviceCards.map((card) => (
            <div key={card.title} className="flex flex-col">
              <p className="text-2xl font-heading font-medium text-foreground mb-3">{card.price}</p>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="overflow-hidden aspect-[4/3]">
            <img src={clinicImg} alt="Meie kabinet" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden aspect-[4/3]">
            <img src={certificateImg} alt="Sertifikaat" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
