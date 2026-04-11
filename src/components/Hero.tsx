import treatmentImg from "@/assets/treatment.jpg";

const Hero = () => {
  return (
    <section id="top" className="min-h-screen flex flex-col">
      {/* White space with hero text */}
      <div className="flex-1 flex items-end pt-32 pb-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-heading font-medium text-foreground tracking-tight leading-snug max-w-2xl">
            Professionaalne jalahooldus Tallinnas juba üle 10 aasta
          </h1>
        </div>
      </div>

      {/* Full-width image */}
      <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={treatmentImg}
          alt="Jalahooldus"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>
    </section>
  );
};

export default Hero;
