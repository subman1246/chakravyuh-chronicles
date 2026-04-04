import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gold-gradient tracking-[0.1em] text-center mb-4">
              Gallery
            </h1>
            <div className="divider-gold w-48 mx-auto mb-12" />
            <div className="bg-glass rounded-lg p-8 glow-gold text-center">
              <ImageIcon className="w-12 h-12 text-primary mx-auto mb-6" />
              <p className="font-body text-lg text-foreground/80 leading-relaxed italic text-primary/80">
                Gallery coming soon — stay tuned for glimpses into the world of Chakravyuh.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
