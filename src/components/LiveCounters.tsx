import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye, BookOpen, PenTool, FileText } from "lucide-react";

const counters = [
  { label: "Viewers", icon: Eye, base: 14523 },
  { label: "Live Readers", icon: BookOpen, base: 892 },
  { label: "Writers", icon: PenTool, base: 47 },
  { label: "Articles", icon: FileText, base: 236 },
];

const AnimatedNumber = ({ value }: { value: number }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const _start = 0;
    const duration = 2000;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [value]);

  return <span>{display.toLocaleString()}</span>;
};

const LiveCounters = () => {
  const [values, setValues] = useState(counters.map((c) => c.base));

  useEffect(() => {
    const interval = setInterval(() => {
      setValues((prev) =>
        prev.map((v, i) => v + Math.floor(Math.random() * (i === 0 ? 5 : i === 1 ? 3 : 1)))
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {counters.map((counter, i) => (
        <motion.div
          key={counter.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-glass rounded-lg p-5 text-center glow-gold group hover:scale-105 transition-transform duration-300"
        >
          <counter.icon className="mx-auto mb-2 text-primary w-6 h-6 group-hover:animate-pulse-glow" />
          <div className="font-tech text-3xl md:text-4xl font-bold text-primary">
            <AnimatedNumber value={values[i]} />
          </div>
          <div className="font-tech text-xs tracking-[0.2em] text-muted-foreground uppercase mt-1">
            {counter.label}
          </div>
          <div className="w-2 h-2 rounded-full bg-emerald-500 mx-auto mt-2 animate-pulse-glow" />
        </motion.div>
      ))}
    </div>
  );
};

export default LiveCounters;
