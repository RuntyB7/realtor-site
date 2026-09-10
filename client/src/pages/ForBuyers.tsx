import { X, Menu, Mail, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    // { label: "Listings", href: "#listings" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Financial Planning", href: "#mortgage-calculator" },
    { label: "Contact", href: "#contact" },
  ];

  const externalLinks = [
    { label: "Mortgage calculator", href: "https://www.realtor.ca/calculator#v=payment", external: true },
    { label: "EXIT team", href: "https://exitrealtyseaway.com/our-agents" }
  ];

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex flex-col leading-tight"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <span
            className={`font-display font-semibold text-xl transition-colors ${scrolled ? "text-[oklch(0.22_0.04_240)]" : "text-white"
              }`}
          >
            Yuliya Mogilny
          </span>
          <span
            className={`font-body text-xs tracking-widest uppercase transition-colors ${scrolled ? "text-[oklch(0.42_0.1_155)]" : "text-white/80"
              }`}
          >
            REALTOR® · Cornwall, ON · SD&G
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`font-body text-sm font-medium tracking-wide transition-colors hover:text-[oklch(0.42_0.1_155)] ${scrolled ? "text-[oklch(0.22_0.04_240)]" : "text-white/90"
                }`}
            >
              {link.label}
            </button>
          ))}
          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-body text-sm font-medium tracking-wide transition-colors hover:text-[oklch(0.42_0.1_155)] ${scrolled ? "text-[oklch(0.22_0.04_240)]" : "text-white/90"
                }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="bg-[oklch(0.42_0.1_155)] hover:bg-[oklch(0.36_0.1_155)] text-white font-body text-sm font-semibold px-5 py-2.5 rounded transition-all duration-200 hover:shadow-lg"
          >
            Free Evaluation
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-[oklch(0.22_0.04_240)]" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[oklch(0.88_0.015_80)] py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left font-body text-base text-[oklch(0.22_0.04_240)] hover:text-[oklch(0.42_0.1_155)] py-1"
            >
              {link.label}
            </button>
          ))}
          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-left font-body text-base text-[oklch(0.22_0.04_240)] hover:text-[oklch(0.42_0.1_155)] py-1"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="bg-[oklch(0.42_0.1_155)] text-white font-body text-sm font-semibold px-5 py-2.5 rounded text-center"
          >
            Free Evaluation
          </button>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.16_0.03_240)] py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-semibold text-white mb-1">Yuliya Mogilny</div>
            <div className="font-body text-sm text-[oklch(0.72_0.12_75)] tracking-wider uppercase mb-4">
              REALTOR® · EXIT Realty Seaway
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed">
              Serving Cornwall and Eastern Ontario with passion, integrity, and a personal touch.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-body text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Quick Links
            </div>
            <div className="space-y-2">
              {[
                { label: "About Yuliya", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Featured Listings", href: "#listings" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
                { label: "findhometown.ca", href: "https://findhometown.ca", external: true },
              ].map((link) => (
                <div key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-white/60 hover:text-[oklch(0.72_0.12_75)] transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                      className="font-body text-sm text-white/60 hover:text-[oklch(0.72_0.12_75)] transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-body text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Contact
            </div>
            <div className="space-y-3">
              <a href="tel:+16133304112" className="flex items-center gap-2 font-body text-sm text-white/60 hover:text-white transition-colors">
                <Phone size={14} className="text-[oklch(0.42_0.1_155)]" />
                (613) 330-4112
              </a>
              <a href="mailto:yuliya@exitrealtyseaway.com" className="flex items-center gap-2 font-body text-sm text-white/60 hover:text-white transition-colors">
                <Mail size={14} className="text-[oklch(0.42_0.1_155)]" />
                yuliya@exitrealtyseaway.com
              </a>
              <div className="flex items-start gap-2 font-body text-sm text-white/60">
                <MapPin size={14} className="text-[oklch(0.42_0.1_155)] mt-0.5 shrink-0" />
                425 E. Fourth St. W.,<br />Cornwall, ON
              </div>
            </div>

            {/* Social */}
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100066956116772"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2] hover:bg-[#1565D8] text-white p-2 rounded-lg transition-colors"
                title="Business Facebook Page"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/yuliya.mogilny/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[oklch(0.28_0.04_240)] hover:bg-[oklch(0.35_0.04_240)] text-white/70 hover:text-white p-2 rounded-lg transition-colors"
                title="Personal Facebook Page"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[oklch(0.25_0.03_240)] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/30">
            © {new Date().getFullYear()} Yuliya Mogilny · EXIT Realty Seaway, Brokerage · License #5020488
          </p>
          <p className="font-body text-xs text-white/30">
            425 E. Fourth St. W., Cornwall, ON · Not intended to solicit buyers or sellers under contract.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page Export ─────────────────────────────────────────────────────────
export default function ForBuyers() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* SECTION TO BE COMPLETE WITH CONTENT */}

      {/* <HeroSection />
      <AboutSection />
      <ServicesSection /> */}
      {/* <ListingsSection /> */}
      {/* <ExitTeamSection/>
      <TestimonialsSection />
      <MortgageCalculator />
      <ContactSection /> */}
      <Footer />
    </div>
  );
}