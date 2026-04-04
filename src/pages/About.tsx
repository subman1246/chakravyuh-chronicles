import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gold-gradient tracking-[0.1em] text-center mb-4">
              About Us
            </h1>
            <div className="divider-gold w-48 mx-auto mb-12" />
            <div className="bg-glass rounded-lg p-8 glow-gold">
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6">
                Chakravyuh is more than a magazine — it is a formation. Like the ancient battle array it draws its name from,
                our publication weaves layers of thought, perspective, and discourse into an intricate pattern that challenges,
                informs, and inspires.
              </p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6">
                Born from the conviction that the youth must not merely inherit the world but reshape it, Chakravyuh is a
                platform where unfiltered voices find their echo and unbiased narratives find their audience.
              </p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed italic text-primary/80">
                More details coming soon...
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
