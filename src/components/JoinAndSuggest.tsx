import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Lightbulb, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const JoinAndSuggest = () => {
  const { toast } = useToast();
  const [joinForm, setJoinForm] = useState({ name: "", email: "", role: "" });
  const [suggestion, setSuggestion] = useState("");

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Application Received!", description: "We'll get back to you soon." });
    setJoinForm({ name: "", email: "", role: "" });
  };

  const handleSuggest = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Topic Submitted!", description: "Thank you for your suggestion." });
    setSuggestion("");
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Join the Team */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-glass rounded-lg p-8 glow-gold"
        >
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-primary" />
            <h3 className="font-display text-2xl font-bold text-gold-gradient tracking-wide">
              Join The Team
            </h3>
          </div>
          <p className="font-body text-base text-muted-foreground mb-6">
            Be part of the revolution. Writers, editors, designers — the Chakravyuh awaits.
          </p>
          <form onSubmit={handleJoin} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={joinForm.name}
              onChange={(e) => setJoinForm({ ...joinForm, name: e.target.value })}
              className="bg-secondary border-gold font-body text-foreground placeholder:text-muted-foreground"
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={joinForm.email}
              onChange={(e) => setJoinForm({ ...joinForm, email: e.target.value })}
              className="bg-secondary border-gold font-body text-foreground placeholder:text-muted-foreground"
              required
            />
            <Input
              placeholder="Role (Writer, Editor, Designer...)"
              value={joinForm.role}
              onChange={(e) => setJoinForm({ ...joinForm, role: e.target.value })}
              className="bg-secondary border-gold font-body text-foreground placeholder:text-muted-foreground"
              required
            />
            <Button type="submit" className="w-full font-display tracking-[0.1em] uppercase text-sm bg-primary text-primary-foreground hover:bg-primary/90">
              <Send className="w-4 h-4 mr-2" />
              Apply Now
            </Button>
          </form>
        </motion.div>

        {/* Topic Suggestions */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-glass rounded-lg p-8 glow-gold"
        >
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h3 className="font-display text-2xl font-bold text-gold-gradient tracking-wide">
              Suggest a Topic
            </h3>
          </div>
          <p className="font-body text-base text-muted-foreground mb-6">
            Have an idea that deserves ink? Share your topic and let the discourse begin.
          </p>
          <form onSubmit={handleSuggest} className="space-y-4">
            <Textarea
              placeholder="Describe your topic idea..."
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              className="bg-secondary border-gold font-body text-foreground placeholder:text-muted-foreground min-h-[150px]"
              required
            />
            <Button type="submit" className="w-full font-display tracking-[0.1em] uppercase text-sm bg-primary text-primary-foreground hover:bg-primary/90">
              <Lightbulb className="w-4 h-4 mr-2" />
              Submit Suggestion
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinAndSuggest;
