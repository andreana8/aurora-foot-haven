const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4 tracking-tight">
            Broneerimine
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto" />
        </div>

        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Vajalik on eelbroneerimine
          </p>
          <p className="text-foreground mb-4 text-lg">Vastuvõtu broneerimiseks helista:</p>
          <a
            href="tel:+37258502300"
            className="text-4xl font-heading font-medium text-foreground hover:opacity-50 transition-opacity block mb-8"
          >
            +372 5850 2300
          </a>
          <p className="text-muted-foreground text-sm mb-3">
            Vastuvõttudega hõivatuse korral helistame Teile tagasi esimesel võimalusel.
          </p>
          <p className="text-foreground text-sm font-bold mb-8">Tasumine sularahas.</p>
          <div className="border-t border-border pt-6 text-xs text-muted-foreground max-w-md">
            <p>
              Vastuvõtule mitte ilmumisel ning sellest teavitamata jätmisel vähemalt 24h enne
              vastuvõttu, on klient kohustatud teenuse eest tasuma täies mahus.
            </p>
          </div>
          <div className="mt-10 pt-6 border-t border-border">
            <a
              href="https://www.facebook.com/JalahooldusKoguPerele"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground hover:opacity-50 transition-opacity underline underline-offset-4"
            >
              Facebook →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
