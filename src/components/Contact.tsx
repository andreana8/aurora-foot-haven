const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 tracking-tight text-center">
          Vastuvõtu broneerimine
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              Vajalik on eelbroneerimine
            </div>
            <p className="text-foreground mb-3 text-lg">Vastuvõtu broneerimiseks helista:</p>
            <a
              href="tel:+37258502300"
              className="text-4xl font-bold text-primary hover:opacity-80 transition-opacity block mb-8"
            >
              +372 5850 2300
            </a>
            <p className="text-muted-foreground mb-4">
              Vastuvõttudega hõivatuse korral helistame Teile tagasi esimesel võimalusel.
            </p>
            <p className="text-foreground font-semibold mb-6">Tasumine sularahas.</p>
            <div className="bg-accent rounded-xl p-5 text-sm text-muted-foreground border border-border">
              <p>
                Vastuvõtule mitte ilmumisel ning sellest teavitamata jätmisel vähemalt 24h enne
                vastuvõttu, on klient kohustatud teenuse eest tasuma täies mahus. Registreerides
                teenusele nõustud eelmainituga.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-semibold text-foreground mb-3">Leia meid ka Facebookist:</p>
              <a
                href="https://www.facebook.com/JalahooldusKoguPerele"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-card text-foreground border border-border px-6 py-3 rounded-full font-bold hover:bg-accent transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
