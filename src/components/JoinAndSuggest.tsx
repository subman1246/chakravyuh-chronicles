import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Lightbulb, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";
import type { TeamApplication, TopicSuggestion } from "@/types/forms";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const JoinAndSuggest = () => {
  const [joinForm, setJoinForm] = useState<TeamApplication>({ name: "", email: "", role: "" });
  const [joinLoading, setJoinLoading] = useState(false);
  const [joinSuccess, setJoinSuccess] = useState(false);

  const [suggestion, setSuggestion] = useState<TopicSuggestion["description"]>("");
  const [suggestLoading, setSuggestLoading] = useState(false);
  const [suggestSuccess, setSuggestSuccess] = useState(false);

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!joinForm.name || !joinForm.email || !joinForm.role) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!emailRegex.test(joinForm.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setJoinLoading(true);
    try {
      const { error } = await supabase
        .from("team_applications")
        .insert([{ name: joinForm.name, email: joinForm.email, role: joinForm.role }]);

      if (error) {
        toast.error("Something went wrong. Please try again.");
      } else {
        setJoinSuccess(true);
        setJoinForm({ name: "", email: "", role: "" });
      }
    } finally {
      setJoinLoading(false);
    }
  };

  const handleSuggest = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!suggestion || suggestion.trim().length < 20) {
      toast.error("Please describe your topic idea (at least 20 characters).");
      return;
    }

    setSuggestLoading(true);
    try {
      const { error } = await supabase
        .from("topic_suggestions")
        .insert([{ description: suggestion.trim() }]);

      if (error) {
        toast.error("Something went wrong. Please try again.");
      } else {
        setSuggestSuccess(true);
        setSuggestion("");
      }
    } finally {
      setSuggestLoading(false);
    }
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
          {joinSuccess ? (
            <div className="text-center py-8 space-y-2">
              <p className="font-display text-xl font-bold text-gold-gradient tracking-wide">
                Welcome to the Vyuh.
              </p>
              <p className="font-body text-muted-foreground">
                Your journey begins here.
              </p>
            </div>
          ) : (
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
              <Button
                type="submit"
                disabled={joinLoading}
                className="w-full font-display tracking-[0.1em] uppercase text-sm bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {joinLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Apply Now
                  </>
                )}
              </Button>
            </form>
          )}
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
          {suggestSuccess ? (
            <div className="text-center py-8 space-y-2">
              <p className="font-display text-xl font-bold text-gold-gradient tracking-wide">
                Your voice has been heard.
              </p>
              <p className="font-body text-muted-foreground">
                We'll review your idea and be in touch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSuggest} className="space-y-4">
              <Textarea
                placeholder="Describe your topic idea..."
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                className="bg-secondary border-gold font-body text-foreground placeholder:text-muted-foreground min-h-[150px]"
                required
              />
              <Button
                type="submit"
                disabled={suggestLoading}
                className="w-full font-display tracking-[0.1em] uppercase text-sm bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {suggestLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Submit Suggestion
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default JoinAndSuggest;
