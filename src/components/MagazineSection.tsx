import { motion } from "framer-motion";
import { BookOpen, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Path to the magazine PDF (lives in /public, served from the site root).
const MAGAZINE_PDF = "/chakravyuh-q3-2025.pdf";
const MAGAZINE_TITLE = "Chakravyuh Q3 2025";

const MagazineSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient tracking-[0.1em]">
            The Magazine
          </h2>
          <div className="divider-gold w-48 mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-glass rounded-lg p-8 md:p-12 glow-gold max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>

          <p className="font-tech text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">
            Previous Edition
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-gold-gradient tracking-wide">
            {MAGAZINE_TITLE}
          </h3>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mt-4 mb-8 max-w-xl mx-auto">
            Revisit our quarterly edition. Read it online in your browser or download a copy to keep.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="w-full sm:w-auto font-display tracking-[0.1em] uppercase text-sm bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href={MAGAZINE_PDF} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Read Online
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto font-display tracking-[0.1em] uppercase text-sm border-gold bg-transparent text-foreground hover:bg-primary/10 hover:text-primary"
            >
              <a href={MAGAZINE_PDF} download>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MagazineSection;
