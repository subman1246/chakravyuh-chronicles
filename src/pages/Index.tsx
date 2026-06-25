import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LiveCounters from "@/components/LiveCounters";
import CategorySection from "@/components/CategorySection";
import MagazineSection from "@/components/MagazineSection";
import JoinAndSuggest from "@/components/JoinAndSuggest";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Counters */}
      <section className="py-16 px-6 -mt-20 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <LiveCounters />
        </div>
      </section>

      <CategorySection />
      <MagazineSection />
      <JoinAndSuggest />
      <Footer />
    </div>
  );
};

export default Index;
