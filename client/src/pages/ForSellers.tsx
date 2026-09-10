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
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    // { label: "Listings", href: "#listings" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Financial Planning", href: "/#mortgage-calculator" },
    { label: "Contact", href: "/#contact" },
  ];

  const externalLinks = [
    { label: "Mortgage calculator", href: "https://www.realtor.ca/calculator#v=payment", external: true },
    { label: "EXIT team", href: "https://exitrealtyseaway.com/our-agents" }
  ];

  const navGoTo = (id: string) => {
    // document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    // setMenuOpen(false);

    window.location.href = id;
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
              onClick={() => navGoTo(link.href)}
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
            onClick={() => navGoTo("#contact")}
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
              onClick={() => navGoTo(link.href)}
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
            onClick={() => navGoTo("#contact")}
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
                // { label: "Featured Listings", href: "#listings" },
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

import { ArrowRight, Check, Download, Home, MessageCircle } from "lucide-react";

// ─── Selling Your Home Page ──────────────────────────────────────────────────

function SellingPage() {
  const processSteps = [
    {
      number: "01",
      title: "Understand the Market",
      description:
        "We look at current market conditions, competition, and buyer demand.",
    },
    {
      number: "02",
      title: "Establish the Right Price",
      description:
        "Your pricing strategy is based on comparable sales, current competition, and your home's characteristics.",
    },
    {
      number: "03",
      title: "Prepare Your Home",
      description:
        "We focus on the improvements that can make your home clean, inviting, and market-ready.",
    },
    {
      number: "04",
      title: "Market Your Home",
      description:
        "Professional presentation and strategic exposure help your home reach more buyers.",
    },
    {
      number: "05",
      title: "Showings & Buyer Experience",
      description:
        "Flexible showings and thoughtful presentation help create a positive experience for buyers.",
    },
    {
      number: "06",
      title: "Review & Negotiate Offers",
      description:
        "We look beyond the price and carefully consider conditions, deposit, closing date, and the overall strength of each offer.",
    },
    {
      number: "07",
      title: "Conditions & Closing",
      description:
        "Once conditions are fulfilled, we move toward a successful closing and the transfer of ownership.",
    },
  ];

  const focusAreas = [
    {
      title: "Pricing Strategy",
      description:
        "Positioning your home correctly from day one can make a significant difference.",
    },
    {
      title: "Presentation",
      description:
        "A clean, well-presented home creates a stronger first impression online and in person.",
    },
    {
      title: "Negotiation",
      description:
        "The strongest offer isn't always simply the highest offer.",
    },
  ];

  const reasons = [
    "Local market knowledge",
    "Strategic pricing approach",
    "Strong marketing exposure",
    "Guidance from start to finish",
  ];
  // const navigate = useNavigate();

  // const goToContact = () => {
  //   navigate("/#contact");
  // };
  const goToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.012_80)] text-[oklch(0.22_0.04_240)]">
      
      {/* ─── Page Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[oklch(0.22_0.04_240)] pt-36 pb-28">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[oklch(0.72_0.12_75)]" />
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[oklch(0.72_0.12_75)]" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[oklch(0.72_0.12_75)]" />
              <span className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[oklch(0.72_0.12_75)]">
                EXIT Realty Seaway · Cornwall, ON
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] text-white">
              Selling Your
              <br />
              <em className="italic text-[oklch(0.72_0.12_75)]">
                Home.
              </em>
            </h1>

            <p className="font-display text-2xl md:text-3xl text-white/90 mt-6">
              A simple, effective plan from preparation to closing day.
            </p>

            <p className="font-body text-lg text-white/70 leading-relaxed max-w-2xl mt-7">
              Selling your home is a major financial decision. I'll help you
              understand the market, prepare your home, choose the right
              strategy, and navigate the sale with confidence.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <a
                href="/documents/Seller-Guide-2026-Yuliya.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[oklch(0.42_0.1_155)] hover:bg-[oklch(0.36_0.1_155)] text-white font-body font-semibold px-7 py-3.5 rounded transition-all duration-200 hover:shadow-xl"
              >
                <Download size={18} />
                Download Seller Guide
              </a>

              <button
                onClick={goToContact}
                className="inline-flex items-center gap-2 border border-white/50 hover:border-white text-white font-body font-semibold px-7 py-3.5 rounded transition-all duration-200 hover:bg-white/10"
              >
                Let's Talk
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ─── Selling Process ───────────────────────────────────────────────── */}
      <section className="py-24 bg-[oklch(0.97_0.012_80)]">
        <div className="container">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[oklch(0.42_0.1_155)]" />

              <span className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[oklch(0.42_0.1_155)]">
                The Process
              </span>

              <div className="h-px w-10 bg-[oklch(0.42_0.1_155)]" />
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              A Clear Plan
              <br />
              <em className="italic text-[oklch(0.42_0.1_155)]">
                for Your Sale
              </em>
            </h2>

            <p className="font-body text-[oklch(0.55_0.015_60)] mt-5 leading-relaxed">
              Every home is different, but the selling process follows a
              clear path. I'll be there to guide you through every step.
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                // Styling done through classnames (utility-first frameworks - NEED TO LEARN)
                className={`
                  group relative bg-white border border-[oklch(0.88_0.015_80)]
                  rounded-xl p-7 transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                  hover:border-[oklch(0.42_0.1_155/0.4)] text-center
                  
                  ${index === processSteps.length - 1
                    ? "md:col-span-2 lg:col-span-2 text-center"
                    : ""}
                `}
              >
                <span className="font-display text-5xl font-semibold text-[oklch(0.42_0.1_155/0.15)] group-hover:text-[oklch(0.42_0.1_155/0.3)] transition-colors">
                  {step.number}
                </span>

                <h3 className="font-display text-2xl font-semibold mt-2 mb-3">
                  {step.title}
                </h3>

                <p className="font-body text-sm text-[oklch(0.55_0.015_60)] leading-relaxed">
                  {step.description}
                </p>

                <div className="absolute bottom-0 left-7 right-7 h-px bg-[oklch(0.42_0.1_155/0.2)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ─── What Makes a Difference ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center max-w-6xl mx-auto">

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-[oklch(0.72_0.12_75)]" />

                <span className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[oklch(0.42_0.1_155)]">
                  What Matters
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                What Makes
                <br />
                <em className="italic text-[oklch(0.42_0.1_155)]">
                  a Difference
                </em>
              </h2>

              <p className="font-body text-[oklch(0.55_0.015_60)] leading-relaxed mt-6 max-w-md">
                Selling isn't simply about putting a property on the market.
                The right preparation, positioning, and strategy can have a
                meaningful impact on the outcome.
              </p>
            </div>


            <div className="grid md:grid-cols-3 gap-6">
              {focusAreas.map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-[oklch(0.42_0.1_155)] pl-6"
                >
                  <h3 className="font-display text-2xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="font-body text-sm text-[oklch(0.55_0.015_60)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ─── Why Work With Me ───────────────────────────────────────────────── */}
      <section className="py-24 bg-[oklch(0.22_0.04_240)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">

            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-[oklch(0.72_0.12_75)]" />

              <span className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[oklch(0.72_0.12_75)]">
                Your Realtor
              </span>

              <div className="h-px w-10 bg-[oklch(0.72_0.12_75)]" />
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">
              Why Work With Me
            </h2>

            <p className="font-body text-white/65 leading-relaxed max-w-2xl mx-auto mt-5">
              You deserve more than a listing. You deserve someone who
              understands your goals and can guide you through the entire
              process.
            </p>


            <div className="grid sm:grid-cols-2 gap-4 mt-12 text-left max-w-2xl mx-auto">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg px-5 py-4"
                >
                  <div className="flex-shrink-0 rounded-full bg-[oklch(0.42_0.1_155)] p-1.5">
                    <Check size={15} className="text-white" />
                  </div>

                  <span className="font-body text-sm font-medium text-white/90">
                    {reason}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ─── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 bg-[oklch(0.97_0.012_80)]">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">

            <Home
              size={34}
              strokeWidth={1.5}
              className="mx-auto mb-6 text-[oklch(0.42_0.1_155)]"
            />

            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              Thinking About Selling?
            </h2>

            <p className="font-body text-lg text-[oklch(0.55_0.015_60)] leading-relaxed max-w-xl mx-auto mt-5">
              Let's talk about your home, your goals, and what the current
              market means for you.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">

              <button
                onClick={goToContact}
                className="inline-flex items-center gap-2 bg-[oklch(0.42_0.1_155)] hover:bg-[oklch(0.36_0.1_155)] text-white font-body font-semibold px-8 py-3.5 rounded transition-all duration-200 hover:shadow-lg"
              >
                <MessageCircle size={18} />
                Get in Touch
              </button>

              <a
                href="/documents/Seller-Guide-2026-Yuliya.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[oklch(0.42_0.1_155)] text-[oklch(0.42_0.1_155)] hover:bg-[oklch(0.42_0.1_155)] hover:text-white font-body font-semibold px-8 py-3.5 rounded transition-all duration-200"
              >
                <Download size={18} />
                Download Full Guide
              </a>

            </div>

          </div>
        </div>
      </section>


      {/* ─── Footer ────────────────────────────────────────────────────────── */}
      <footer className="bg-[oklch(0.18_0.035_240)] py-8">
        <div className="container">
          <div className="text-center">
            <p className="font-display text-xl text-white mb-1">
              Yuliya Mogilny
            </p>

            <p className="font-body text-xs tracking-wider uppercase text-white/50">
              REALTOR® · Cornwall, ON · SD&G
            </p>

            <p className="font-body text-xs text-white/40 mt-5">
              © 2026 Yuliya Mogilny. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

// ─── Main Page Export ─────────────────────────────────────────────────────────
export default function ForSellers() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* SECTION TO BE COMPLETE WITH CONTENT */}
      <SellingPage/>
      
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