import buildingImg from "@/assets/building.png";

const Location = () => {
  return (
    <section id="asukoht" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4 tracking-tight">
            Asukoht
          </h2>
          <div className="w-16 h-px bg-foreground" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <p className="text-lg text-foreground">
              Asume Aurora Medica Kliinikus, 2. korrusel ruumis B1-217
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Aadress</p>
                <p className="text-foreground">Kadaka Trade Center, Kadaka tee 42B, Tallinn, 12919</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Sissepääs</p>
                <p className="text-foreground">Paremal pool sissepääs B, 2. korrusele saab ka liftiga.</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Parkimine</p>
                <p className="text-foreground">B-sissepääsu vastas, tasuta (registreerida trepikojas oleval monitoril)</p>
              </div>
            </div>
            <div className="overflow-hidden">
              <img src={buildingImg} alt="Kadaka Trade Center - sissepääs B" className="w-full h-auto object-cover" />
            </div>
          </div>
          <div className="overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2029.5!2d24.6668!3d59.3975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692949f0b8a3b0d%3A0x2b0b0b0b0b0b0b0b!2sKadaka%20tee%2042b%2C%20Tallinn!5e0!3m2!1set!2see!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
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
