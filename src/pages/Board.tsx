import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// ─────────────────────────────────────────────────────────────
// EDIT BOARD MEMBERS HERE
// Add, remove, or rename members. `name` and `role` are required.
// Avatars are placeholder initials derived from the name.
// ─────────────────────────────────────────────────────────────
const members = [
  { name: "Name One", role: "Editor in Chief" },
  { name: "Name Two", role: "Managing Editor" },
  { name: "Name Three", role: "Design Lead" },
  { name: "Name Four", role: "Content Lead" },
];
// ─────────────────────────────────────────────────────────────

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Board = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gold-gradient tracking-[0.1em] text-center mb-4">
              Board of Members
            </h1>
            <div className="divider-gold w-48 mx-auto mb-12" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {members.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-glass rounded-lg p-6 text-center group hover:glow-gold transition-all duration-500"
                >
                  <Avatar className="w-24 h-24 mx-auto mb-5 border border-gold group-hover:border-primary transition-colors">
                    <AvatarFallback className="bg-primary/10 font-display text-2xl font-bold text-gold-gradient tracking-wide">
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-display text-lg font-semibold text-foreground tracking-wide">
                    {member.name}
                  </h3>
                  <p className="font-tech text-sm text-primary/80 tracking-wider uppercase mt-1">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Board;
