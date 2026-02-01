import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import VideoBackground from "@/components/VideoBackground";

const Index = () => {
  return (
    <>
      <VideoBackground />
      <main>
        <Hero />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
