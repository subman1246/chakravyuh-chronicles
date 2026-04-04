import { motion } from "framer-motion";
import { Landmark, Cpu, TrendingUp, FlaskConical, Globe } from "lucide-react";

const categories = [
  {
    title: "Culture & Heritage",
    icon: Landmark,
    description: "Exploring the timeless wisdom of civilizations and the living traditions that shape our identity.",
    articles: ["Coming Soon..."],
  },
  {
    title: "Tech & AI",
    icon: Cpu,
    description: "Where silicon meets consciousness — the frontier of human ingenuity and machine intelligence.",
    articles: ["Coming Soon..."],
  },
  {
    title: "Business & Finance",
    icon: TrendingUp,
    description: "Markets, movements, and the minds that shape the economic landscape of tomorrow.",
    articles: ["Coming Soon..."],
  },
  {
    title: "Research & Discoveries",
    icon: FlaskConical,
    description: "Breakthroughs that redefine boundaries — from quantum realms to the cosmos.",
    articles: ["Coming Soon..."],
  },
  {
    title: "Public Policy & International Relations",
    icon: Globe,
    description: "Navigating the labyrinth of governance, diplomacy, and global power dynamics.",
    articles: ["Coming Soon..."],
  },
];

const CategorySection = () => {
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
            Explore Our Domains
          </h2>
          <div className="divider-gold w-48 mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-glass rounded-lg p-6 group hover:glow-gold transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground tracking-wide">
                  {cat.title}
                </h3>
              </div>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
                {cat.description}
              </p>
              <div className="border-t border-gold pt-3">
                {cat.articles.map((article) => (
                  <p key={article} className="font-tech text-sm text-muted-foreground italic">
                    {article}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
