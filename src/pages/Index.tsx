import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import Services from "@/components/Services";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Jalahooldus Kogu Perele | Professionaalne jalahooldus Tallinnas"
        description="Professionaalne jalahooldus Tallinnas Aurora Medica Kliiniku ruumides. Broneeri aeg internetis või telefonil 5850 2300."
        path="/"
      />
      <Header />

      <main className="flex-1">
        <Hero />
        <CallToAction />
        <Services />
        <Location />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
