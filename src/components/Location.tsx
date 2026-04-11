const Location = () => {
  return (
    <section id="asukoht" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 tracking-tight text-center">
          Kus me asume?
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <p className="text-xl text-foreground font-semibold">
              Asume Aurora Medica Kliinikus, 2. korrusel ruumis B1-217
            </p>
            <div className="bg-card rounded-2xl p-6 border border-border space-y-4">
              <div>
                <p className="font-bold text-foreground text-sm uppercase tracking-wider mb-1">Aadress</p>
                <p className="text-muted-foreground">Kadaka Trade Center, Kadaka tee 42B, Tallinn, 12919</p>
              </div>
              <div>
                <p className="font-bold text-foreground text-sm uppercase tracking-wider mb-1">Sissepääs</p>
                <p className="text-muted-foreground">Paremal pool sissepääs B, 2. korrusele saab ka liftiga.</p>
              </div>
              <div>
                <p className="font-bold text-foreground text-sm uppercase tracking-wider mb-1">Parkimine</p>
                <p className="text-muted-foreground">B-sissepääsu vastas, tasuta (registreerida trepikojas oleval monitoril)</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2029.5!2d24.6668!3d59.3975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692949f0b8a3b0d%3A0x2b0b0b0b0b0b0b0b!2sKadaka%20tee%2042b%2C%20Tallinn!5e0!3m2!1set!2see!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kadaka Trade Center asukoht"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
