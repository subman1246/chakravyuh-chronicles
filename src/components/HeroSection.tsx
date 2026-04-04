import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')", backgroundPosition: "center 30%" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-gold-gradient tracking-[0.15em] mb-4">
            CHAKRAVYUH
          </h1>
          <div className="divider-gold w-64 mx-auto mb-4" />
          <p className="font-display text-sm md:text-base tracking-[0.3em] text-primary/80 uppercase">
            Unfiltered · Unbiased · Uninfluenced
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 font-display text-2xl md:text-4xl font-semibold text-foreground leading-relaxed"
        >
          We don't just return.<br />We evolve.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-8 font-body text-lg md:text-xl text-foreground/70 italic max-w-xl mx-auto"
        >
          Where words are free, will the youth dare to dream.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16"
        >
          <ChevronDown className="mx-auto text-primary animate-bounce w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
