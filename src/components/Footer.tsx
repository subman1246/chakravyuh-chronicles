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
        <div className="divider-gold w-32 mx-auto my-4" />
        <p className="font-tech text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Chakravyuh Magazine. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
