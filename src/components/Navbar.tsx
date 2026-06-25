import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Board", path: "/board" },
  { label: "CSR Initiatives & Educational Sessions", path: "/csr" },
  { label: "Gallery", path: "/gallery" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{ backgroundColor: scrolled ? "rgba(0,0,0,0.85)" : "transparent" }}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex flex-col items-start">
          <span className="font-display text-2xl font-bold text-gold-gradient tracking-[0.2em]">
            CHAKRAVYUH
          </span>
          <span className="text-[10px] font-tech tracking-[0.3em] text-muted-foreground uppercase">
            Unfiltered · Unbiased · Uninfluenced
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden xl:flex items-center gap-5 2xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-display text-sm tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-300 hover:text-primary ${
                location.pathname === item.path ? "text-primary" : "text-foreground/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="xl:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden bg-glass overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`font-display text-sm tracking-[0.15em] uppercase ${
                    location.pathname === item.path ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
