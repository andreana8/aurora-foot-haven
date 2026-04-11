const Contact = () => {
  return (
    <section id="kontakt" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-12">
          Vastuvõtu broneerimine
        </h2>
        <div className="max-w-2xl mx-auto bg-card rounded-xl shadow-lg p-8 md:p-12 border border-border">
          <p className="text-lg font-bold text-primary mb-4">Vajalik on eelbroneerimine</p>
          <p className="text-foreground mb-2">Vastuvõtu broneerimiseks helista:</p>
          <a
            href="tel:+37258502300"
            className="text-3xl font-extrabold text-secondary hover:opacity-80 transition-opacity block mb-6"
          >
            +372 5850 2300
          </a>
          <p className="text-muted-foreground mb-4">
            Vastuvõttudega hõivatuse korral helistame Teile tagasi esimesel võimalusel.
          </p>
          <p className="text-muted-foreground mb-4">
            <span className="font-bold text-foreground">Tasumine sularahas.</span>
          </p>
          <div className="bg-accent rounded-lg p-4 text-sm text-accent-foreground">
            <p>
              Vastuvõtule mitte ilmumisel ning sellest teavitamata jätmisel vähemalt 24h enne
              vastuvõttu, on klient kohustatud teenuse eest tasuma täies mahus. Registreerides
              teenusele nõustud eelmainituga.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <p className="font-semibold text-foreground mb-2">Leia meid ka Facebookist:</p>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
