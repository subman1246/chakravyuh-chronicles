import { Mail, Instagram, Linkedin } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// EDIT CONTACT / SOCIAL LINKS HERE
// Replace the placeholder values below with the real ones.
// ─────────────────────────────────────────────────────────────
const SOCIAL = {
  EMAIL: "hello@example.com",
  INSTAGRAM: "https://instagram.com/PLACEHOLDER",
  LINKEDIN: "https://linkedin.com/company/PLACEHOLDER",
};
// ─────────────────────────────────────────────────────────────

const socialLinks = [
  { label: "Email", href: `mailto:${SOCIAL.EMAIL}`, icon: Mail, external: false },
  { label: "Instagram", href: SOCIAL.INSTAGRAM, icon: Instagram, external: true },
  { label: "LinkedIn", href: SOCIAL.LINKEDIN, icon: Linkedin, external: true },
];

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gold">
      <div className="container mx-auto text-center">
        <h3 className="font-display text-xl font-bold text-gold-gradient tracking-[0.2em] mb-2">
          CHAKRAVYUH
        </h3>
        <p className="font-body text-sm text-muted-foreground italic">
          Where words are free, will the youth dare to dream.
        </p>

        <div className="flex items-center justify-center gap-6 my-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              <link.icon className="w-5 h-5" />
              <span className="font-tech text-sm tracking-wider hidden sm:inline">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="divider-gold w-32 mx-auto my-4" />
        <p className="font-tech text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Chakravyuh Magazine. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
