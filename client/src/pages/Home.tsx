/**
 * ARTISAN WARMTH DESIGN — Yuliya Mogilny Landing Page
 * Palette: Stone (#F7F3EE) | Navy (#1A2B3C) | Forest Green (#2D6A4F) | Amber (#E8A838)
 * Fonts: Cormorant Garamond (display) + Source Sans 3 (body)
 * Sections: Navbar | Hero | Brand Story | Services | Featured Listings | Social Proof | Contact | Footer
 */

import { useState, useEffect, useRef } from "react";
import { Phone, Mail, Globe, MapPin, Star, ChevronDown, Menu, X, Home as HomeIcon, Trees, Building2, Search, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// CDN Asset URLs
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451840054/Kj7uVMqMvLFGy8XLMv7mcP/hero_bg-cBD34Nis7q3miMCbhDVeFe.webp";
const YULIYA_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451840054/Kj7uVMqMvLFGy8XLMv7mcP/yuliya_professional_photo_4624abc6.png";
const SERVICE_BUYERS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451840054/Kj7uVMqMvLFGy8XLMv7mcP/service_buyers-jWc5TD6iUe9oMCCvCNffQt.webp";
const SERVICE_SELLERS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451840054/Kj7uVMqMvLFGy8XLMv7mcP/service_sellers-eFsCU3yFM5ADmRwuKp47zK.webp";
const SERVICE_LAND = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451840054/Kj7uVMqMvLFGy8XLMv7mcP/service_land-STCntRTWH7gZqarLu39FA7.webp";
const LISTING_HOUSE1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451840054/Kj7uVMqMvLFGy8XLMv7mcP/listing_house1_b02cf5c5.jpeg";
const LISTING_HOUSE2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451840054/Kj7uVMqMvLFGy8XLMv7mcP/listing_house2_7f525c0f.jpeg";

// ─── Navbar ───────────────────────────────────────────────────────────────────
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
    { label: "Listings", href: "#listings" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Financial Planning", href: "#mortgage-calculator" },
    { label: "Contact", href: "#contact" },
  ];

  const externalLinks = [
    { label: "Mortgage calculator", href: "https://www.realtor.ca/calculator#v=payment", external: true },
  ];

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
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
            className={`font-display font-semibold text-xl transition-colors ${
              scrolled ? "text-[oklch(0.22_0.04_240)]" : "text-white"
            }`}
          >
            Yuliya Mogilny
          </span>
          <span
            className={`font-body text-xs tracking-widest uppercase transition-colors ${
              scrolled ? "text-[oklch(0.42_0.1_155)]" : "text-white/80"
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
              className={`font-body text-sm font-medium tracking-wide transition-colors hover:text-[oklch(0.42_0.1_155)] ${
                scrolled ? "text-[oklch(0.22_0.04_240)]" : "text-white/90"
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
              className={`font-body text-sm font-medium tracking-wide transition-colors hover:text-[oklch(0.42_0.1_155)] ${
                scrolled ? "text-[oklch(0.22_0.04_240)]" : "text-white/90"
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

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Gradient overlay — dark on left for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.04_240/0.85)] via-[oklch(0.22_0.04_240/0.55)] to-[oklch(0.22_0.04_240/0.15)]" />
      {/* Bottom diagonal fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[oklch(0.97_0.012_80)] to-transparent" />

      <div className="container relative z-10 pt-24 pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <div className="h-px w-12 bg-[oklch(0.72_0.12_75)]" />
            <span className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[oklch(0.72_0.12_75)]">
              EXIT Realty Seaway · Cornwall, ON
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white leading-[1.05] mb-6 animate-fade-up animate-delay-100">
            It's More Than<br />
            <em className="italic text-[oklch(0.72_0.12_75)]">a Home.</em><br />
            It's Your Life.
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg text-white/85 leading-relaxed mb-8 max-w-xl animate-fade-up animate-delay-200">
            Dedicated REALTOR® serving Eastern Ontario with care, creativity, and integrity.
            Fluent in English, Russian, and Ukrainian — here to guide you every step of the way.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-300">
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[oklch(0.42_0.1_155)] hover:bg-[oklch(0.36_0.1_155)] text-white font-body font-semibold px-8 py-4 rounded transition-all duration-200 hover:shadow-xl flex items-center gap-2"
            >
              Get Free Home Evaluation
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => document.querySelector("#listings")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white/70 hover:border-white text-white font-body font-semibold px-8 py-4 rounded transition-all duration-200 hover:bg-white/10 flex items-center gap-2"
            >
              View Listings
            </button>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-8 mt-12 animate-fade-up animate-delay-400">
            {[
              { value: "9+", label: "Active Listings" },
              { value: "3", label: "Languages Spoken" },
              { value: "5.0★", label: "Google Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-white">
                <div className="font-display text-3xl font-bold text-[oklch(0.72_0.12_75)]">{stat.value}</div>
                <div className="font-body text-sm text-white/70 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={28} className="text-white/60" />
      </div>
    </section>
  );
}

// ─── Brand Story / About Section ──────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[oklch(0.97_0.012_80)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo side */}
          <div className="relative">
            {/* Decorative background block */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[oklch(0.42_0.1_155/0.08)] rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[oklch(0.72_0.12_75/0.1)] rounded-full blur-3xl" />

            <div className="relative">
              {/* Offset border frame */}
              <div className="absolute top-4 left-4 right-0 bottom-0 border-2 border-[oklch(0.42_0.1_155/0.3)] rounded-2xl" />
              <img
                src={YULIYA_PHOTO}
                alt="Yuliya Mogilny — REALTOR®"
                className="relative z-10 w-full max-w-sm mx-auto rounded-2xl shadow-2xl object-cover"
              />
              {/* Badge */}
              <div className="absolute z-20 -bottom-5 -right-5 bg-[oklch(0.42_0.1_155)] text-white rounded-xl px-5 py-3 shadow-xl">
                <div className="font-display text-2xl font-bold">REALTOR®</div>
                <div className="font-body text-xs tracking-wider uppercase opacity-80">EXIT Realty Seaway</div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[oklch(0.72_0.12_75)]" />
              <span className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[oklch(0.42_0.1_155)]">
                Brand Story
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[oklch(0.22_0.04_240)] mb-6 leading-tight">
              Passion for Real Estate,<br />
              <em className="italic">Rooted in Community</em>
            </h2>

            <div className="space-y-4 font-body text-base text-[oklch(0.35_0.02_240)] leading-relaxed">
              <p>
                I'm a dedicated REALTOR® and proud member in good standing with the Cornwall & District Real Estate Board and the Canadian Real Estate Association. Fluent in Russian, Ukrainian, and English, I connect easily with a diverse range of clients, offering personalized service to each one.
              </p>
              <p>
                Real estate is more than buying and selling - it’s about building trust, creating relationships, and helping people navigate important life decisions. Whether you're a young family or planning your retirement, Cornwall offers the perfect balance of lifestyle and convenience, with proximity to shopping, schools, St. Lawrence College, and easy access to Montreal, Ottawa, and the U.S. border.
              </p>
              <p>
                My interest in real estate began when I purchased my first home — a project that ignited my passion for home design, staging, and transformation. Today, I combine my real estate expertise with my design sense to help clients envision the full potential of every property. Originally from abroad, my husband and I immigrated to Canada in 2007. I chose a career in real estate out of passion, not necessity.
              </p>
            </div>
            {/* Google Rating Badge */}
            <div className="mt-6 inline-flex items-center gap-3 bg-white border border-[oklch(0.88_0.015_80)] rounded-xl px-5 py-3 shadow-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} size={13} className="fill-[oklch(0.72_0.12_75)] text-[oklch(0.72_0.12_75)]" />)}
                  <span className="font-body font-bold text-sm text-[oklch(0.22_0.04_240)] ml-1">5.0</span>
                </div>
                <div className="font-body text-xs text-[oklch(0.55_0.015_60)]">2 Google Reviews · EXIT Realty Seaway</div>
              </div>
            </div>

            {/* Credentials */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: <MapPin size={18} />, text: "Cornwall & Eastern Ontario" },
                { icon: <Globe size={18} />, text: "EN · RU · UK Languages" },
                { icon: <HomeIcon size={18} />, text: "OREA Licensed Salesperson" },
                { icon: <Star size={18} />, text: "Always Open for Clients" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 text-[oklch(0.35_0.02_240)]">
                  <span className="text-[oklch(0.42_0.1_155)]">{item.icon}</span>
                  <span className="font-body text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Contact quick links */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+16133304112"
                className="flex items-center gap-2 bg-[oklch(0.22_0.04_240)] text-white font-body text-sm font-semibold px-5 py-3 rounded transition-all hover:bg-[oklch(0.3_0.05_240)] hover:shadow-lg"
              >
                <Phone size={16} />
                613-330-4112
              </a>
              <a
                href="https://findhometown.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-[oklch(0.42_0.1_155)] text-[oklch(0.42_0.1_155)] font-body text-sm font-semibold px-5 py-3 rounded transition-all hover:bg-[oklch(0.42_0.1_155)] hover:text-white"
              >
                <Globe size={16} />
                findhometown.ca
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────
function ServicesSection() {
  const services = [
    {
      title: "Buying a Home",
      subtitle: "Find Your Perfect Match",
      description:
        "Whether you're a first-time buyer or upgrading your lifestyle, I guide you through every step — from search to keys in hand. I'll help you navigate the market with confidence and find a home that truly fits your life.",
      image: SERVICE_BUYERS,
      icon: <HomeIcon size={24} />,
      features: ["MLS® Property Search", "Neighbourhood Guidance", "Offer Negotiation", "Closing Support"],
    },
    {
      title: "Selling Your Home",
      subtitle: "Maximize Your Return",
      description:
        "With my background in home design and staging, I help you present your property at its absolute best. From pricing strategy to marketing and negotiation, I work to get you the best possible outcome.",
      image: SERVICE_SELLERS,
      icon: <Building2 size={24} />,
      features: ["Free Home Evaluation", "Professional Staging Tips", "Strategic Pricing", "Full Marketing Package"],
    },
    {
      title: "City Living in Cornwall",
      subtitle: "Urban Convenience",
      description:
        "Discover the vibrant lifestyle of downtown Cornwall and urban neighbourhoods. From modern condos to family homes near schools and amenities, I help you find the perfect urban property that balances convenience and community.",
      image: SERVICE_SELLERS,
      icon: <Building2 size={24} />,
      features: ["Downtown Condos", "Family Homes", "Walk-to-Amenities", "School Proximity"],
    },
    {
      title: "Rural & Land Properties",
      subtitle: "Build Your Dream",
      description:
        "Specializing in Stormont, Dundas & Glengarry (SD&G) and Eastern Ontario's countryside, I connect buyers and sellers of rural parcels, hobby farms, and development land. If you dream of country living just minutes from the city, I know exactly where to look.",
      image: SERVICE_LAND,
      icon: <Trees size={24} />,
      features: ["Land Parcels", "Hobby Farms", "Rural Retreats", "Development Lots"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-[oklch(0.22_0.04_240)]">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[oklch(0.72_0.12_75)]" />
            <span className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[oklch(0.72_0.12_75)]">
              How I Can Help
            </span>
            <div className="h-px w-10 bg-[oklch(0.72_0.12_75)]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight">
            Services Tailored<br />
            <em className="italic text-[oklch(0.72_0.12_75)]">to Your Goals</em>
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group bg-[oklch(0.28_0.04_240)] rounded-2xl overflow-hidden border border-[oklch(0.35_0.04_240)] hover:border-[oklch(0.42_0.1_155/0.5)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.28_0.04_240)] to-transparent" />
                {/* Icon badge */}
                <div className="absolute bottom-4 left-4 bg-[oklch(0.42_0.1_155)] text-white p-2.5 rounded-xl">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-[oklch(0.72_0.12_75)] mb-1">
                  {service.subtitle}
                </p>
                <h3 className="font-display text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-white/65 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-body text-sm text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.42_0.1_155)]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-6 w-full border border-[oklch(0.42_0.1_155)] text-[oklch(0.52_0.09_155)] hover:bg-[oklch(0.42_0.1_155)] hover:text-white font-body text-sm font-semibold py-2.5 rounded transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Featured Listings Section ────────────────────────────────────────────────
function ListingsSection() {
  const listings = [
    {
      status: "ACTIVE",
      type: "SINGLE FAMILY",
      price: "$365,000",
      address: "5 Adolphus Street",
      city: "Cornwall, ON K6H3R9",
      mls: "X12879212",
      beds: 3,
      baths: 2,
      sqft: null,
      highlight: "Charming 3-bed home in a desirable Cornwall neighbourhood — move-in ready with great curb appeal.",
      color: "oklch(0.42_0.1_155)",
      image: LISTING_HOUSE1,
    },
    {
      status: "ACTIVE",
      type: "SINGLE FAMILY",
      price: "$624,850",
      address: "16825 County Rd 15 Road",
      city: "Moose Creek, ON K0C1W0",
      mls: "X12808980",
      beds: 3,
      baths: 2,
      sqft: "1,521",
      highlight: "Spacious country home on 1,521 sq ft — peaceful rural setting just minutes from Cornwall.",
      color: "oklch(0.52_0.09_155)",
      image: LISTING_HOUSE2,
    },
    {
      status: "ACTIVE",
      type: "CONDO / TOWNHOME",
      price: "$399,000",
      address: "341 Water W Street, Unit 201",
      city: "Cornwall, ON K6J1A5",
      mls: "X12462107",
      beds: 2,
      baths: 2,
      sqft: null,
      highlight: "Stunning waterfront condo in the heart of Cornwall — move-in ready with modern finishes.",
      color: "oklch(0.72_0.12_75)",
      image: null,
    },
    {
      status: "ACTIVE",
      type: "LOTS / LAND",
      price: "$69,000",
      address: "Third W Street",
      city: "Cornwall, ON K6J2P5",
      mls: "X12797378",
      beds: null,
      baths: null,
      sqft: null,
      highlight: "Prime land opportunity in Cornwall — ideal for development or investment.",
      color: "oklch(0.62_0.1_75)",
      image: null,
    },
  ];

  return (
    <section id="listings" className="py-24 bg-[oklch(0.97_0.012_80)]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-[oklch(0.72_0.12_75)]" />
              <span className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[oklch(0.42_0.1_155)]">
                Current Listings
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[oklch(0.22_0.04_240)] leading-tight">
              Featured Properties<br />
              <em className="italic">in Eastern Ontario</em>
            </h2>
          </div>
          <a
            href="https://findhometown.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-sm font-semibold text-[oklch(0.42_0.1_155)] hover:text-[oklch(0.36_0.1_155)] transition-colors whitespace-nowrap"
          >
            View All Listings <ArrowRight size={16} />
          </a>
        </div>

        {/* Listings grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <div key={listing.mls} className="warm-card rounded-2xl overflow-hidden">
              {/* Property image or status bar */}
              {listing.image ? (
                <div className="relative h-44 overflow-hidden">
                  <img src={listing.image} alt={listing.address} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="font-body text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[oklch(0.42_0.1_155)] text-white">{listing.status}</span>
                    <span className="font-body text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-black/40 text-white">{listing.type}</span>
                  </div>
                </div>
              ) : null}

              <div className="p-6">
                {/* Status + Type (only shown when no image) */}
                {!listing.image && (
                  <>
                    <div
                      className="h-1.5 -mx-6 -mt-6 mb-4"
                      style={{ background: listing.color }}
                    />
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="font-body text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                        style={{
                          background: `color-mix(in oklch, ${listing.color} 12%, transparent)`,
                          color: listing.color,
                        }}
                      >
                        {listing.status}
                      </span>
                      <span className="font-body text-xs text-[oklch(0.55_0.015_60)] tracking-wide">
                        {listing.type}
                      </span>
                    </div>
                  </>
                )}

                {/* Price */}
                <div className="font-display text-3xl font-bold text-[oklch(0.22_0.04_240)] mb-2">
                  {listing.price}
                </div>

                {/* Address */}
                <div className="font-body text-sm font-semibold text-[oklch(0.22_0.04_240)] mb-0.5">
                  {listing.address}
                </div>
                <div className="font-body text-sm text-[oklch(0.55_0.015_60)] mb-4">
                  {listing.city}
                </div>

                {/* Highlight */}
                <p className="font-body text-sm text-[oklch(0.45_0.02_240)] leading-relaxed mb-4 border-t border-[oklch(0.88_0.015_80)] pt-4">
                  {listing.highlight}
                </p>

                {/* Details row */}
                <div className="flex items-center gap-3 text-[oklch(0.55_0.015_60)] text-xs font-body">
                  {listing.beds && <span>{listing.beds} bed</span>}
                  {listing.baths && <><span>·</span><span>{listing.baths} bath</span></>}
                  {listing.sqft && <span>{listing.sqft}</span>}
                  <span className="ml-auto">MLS® {listing.mls}</span>
                </div>

                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-4 w-full bg-[oklch(0.22_0.04_240)] hover:bg-[oklch(0.3_0.05_240)] text-white font-body text-sm font-semibold py-2.5 rounded transition-all duration-200"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Social Proof / Testimonials ──────────────────────────────────────────────
function TestimonialsSection() {
  const testimonials = [

    {
      name: "Benoit Louise",
      location: "Cornwall, ON",
      text: "It was very pleasant the house purchase experience with Yuliya. She showed understanding, patience and was always available to answer questions through the whole process. Yuliya is very reliable and also very respectful, really appreciated the experience with her.",
      rating: 5,
      type: "Buyer",
      source: "Google Review",
    },
    {
      name: "Andrei V.",
      location: "St. Andrews West, ON",
      text: "As a Russian-speaking family, we were so relieved to find a REALTOR® who could communicate with us in our language. Yuliya was patient, professional, and genuinely cared about finding us the right property. She went above and beyond.",
      rating: 5,
      type: "Buyer",
      source: "Facebook",
    },
    {
      name: "James T.",
      location: "Cornwall, ON",
      text: "Yuliya sold our home faster than we expected and at a great price. Her staging advice was spot-on and her marketing was excellent. She kept us informed every step of the way. A true professional!",
      rating: 5,
      type: "Seller",
      source: "Facebook",
    },
    {
      name: "Olena P.",
      location: "Cornwall, ON",
      text: "I was looking for a home in the heart of Cornwall with easy access to everything. Yuliya understood exactly what I needed and found me the perfect home close to everyday amenities as well as elementary school for my daughter. She knows the city neighbourhoods inside and out. Couldn't be happier!",
      rating: 5,
      type: "Buyer",
      source: "Facebook",
    },


    {
      name: "Juliet DM",
      location: "Cornwall, ON",
      text: "Positive experience — Quality, Professionalism, Value. Yuliya brings a unique combination of market knowledge, personal care, and genuine commitment to her clients. Highly recommended for anyone navigating the Eastern Ontario real estate market.",
      rating: 5,
      type: "Client",
      source: "Google Review",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[oklch(0.94_0.015_80)]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[oklch(0.72_0.12_75)]" />
            <span className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[oklch(0.42_0.1_155)]">
              Client Stories
            </span>
            <div className="h-px w-10 bg-[oklch(0.72_0.12_75)]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[oklch(0.22_0.04_240)] leading-tight">
            What Clients Are<br />
            <em className="italic">Saying About Yuliya</em>
          </h2>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-[oklch(0.88_0.015_80)] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote icon */}
              <Quote size={32} className="text-[oklch(0.42_0.1_155/0.3)] mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-[oklch(0.72_0.12_75)] text-[oklch(0.72_0.12_75)]" />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-base text-[oklch(0.35_0.02_240)] leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-[oklch(0.88_0.015_80)] pt-4">
                <div>
                  <div className="font-body font-semibold text-[oklch(0.22_0.04_240)]">{t.name}</div>
                  <div className="font-body text-sm text-[oklch(0.55_0.015_60)]">{t.location}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-body text-xs font-semibold tracking-wide uppercase px-3 py-1.5 bg-[oklch(0.42_0.1_155/0.1)] text-[oklch(0.42_0.1_155)] rounded-full">
                    {t.type}
                  </span>
                  {t.source === "Google Review" && (
                    <span className="font-body text-xs text-[oklch(0.55_0.015_60)] flex items-center gap-1">
                      <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Google
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social media follow prompt */}
        <div className="mt-12 text-center">
          <p className="font-body text-[oklch(0.55_0.015_60)] mb-4">
            Follow Yuliya's latest listings and community updates on Facebook
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=100066956116772"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#1565D8] text-white font-body font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Yuliya Mogilny | Cornwall ON
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Mortgage Calculator Section ─────────────────────────────────────────────
function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [amortization, setAmortization] = useState(25);

  const principal = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = amortization * 12;
  const monthlyPayment = monthlyRate === 0 
    ? principal / numberOfPayments 
    : (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const downPaymentPercent = ((downPayment / homePrice) * 100).toFixed(1);
  const totalPaid = monthlyPayment * numberOfPayments;
  const totalInterest = totalPaid - principal;

  return (
    <section id="mortgage-calculator" className="py-24 bg-gradient-to-b from-[oklch(0.98_0.001_286.375)] to-[oklch(0.94_0.002_286.375)]">
      <div className="container">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div className="h-px w-10 bg-[oklch(0.42_0.1_155)]" />
          <span className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[oklch(0.42_0.1_155)]">
            Financial Planning
          </span>
          <div className="h-px w-10 bg-[oklch(0.42_0.1_155)]" />
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-center text-[oklch(0.22_0.04_240)] leading-tight mb-4">
          Mortgage Calculator
        </h2>
        <p className="font-body text-center text-[oklch(0.55_0.015_60)] max-w-2xl mx-auto mb-12">
          Estimate your monthly mortgage payments and see what's possible with your budget. This calculator provides estimates only — contact me for personalized financing advice.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Input Controls */}
          <div className="space-y-8">
            {/* Home Price */}
            <div>
              <label className="font-body text-sm font-semibold text-[oklch(0.22_0.04_240)] mb-3 block">
                Home Price: <span className="text-[oklch(0.42_0.1_155)] font-bold">${homePrice.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min="50000"
                max="2000000"
                step="10000"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full h-2 bg-[oklch(0.88_0.015_80)] rounded-lg appearance-none cursor-pointer accent-[oklch(0.42_0.1_155)]"
              />
              <div className="flex justify-between font-body text-xs text-[oklch(0.55_0.015_60)] mt-2">
                <span>$50K</span>
                <span>$2M</span>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <label className="font-body text-sm font-semibold text-[oklch(0.22_0.04_240)] mb-3 block">
                Down Payment: <span className="text-[oklch(0.42_0.1_155)] font-bold">${downPayment.toLocaleString()} ({downPaymentPercent}%)</span>
              </label>
              <input
                type="range"
                min="0"
                max={homePrice * 0.5}
                step="5000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-2 bg-[oklch(0.88_0.015_80)] rounded-lg appearance-none cursor-pointer accent-[oklch(0.42_0.1_155)]"
              />
              <div className="flex justify-between font-body text-xs text-[oklch(0.55_0.015_60)] mt-2">
                <span>$0</span>
                <span>${(homePrice * 0.5).toLocaleString()}</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="font-body text-sm font-semibold text-[oklch(0.22_0.04_240)] mb-3 block">
                Interest Rate: <span className="text-[oklch(0.42_0.1_155)] font-bold">{interestRate.toFixed(2)}%</span>
              </label>
              <input
                type="range"
                min="1"
                max="12"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-[oklch(0.88_0.015_80)] rounded-lg appearance-none cursor-pointer accent-[oklch(0.42_0.1_155)]"
              />
              <div className="flex justify-between font-body text-xs text-[oklch(0.55_0.015_60)] mt-2">
                <span>1%</span>
                <span>12%</span>
              </div>
            </div>

            {/* Amortization */}
            <div>
              <label className="font-body text-sm font-semibold text-[oklch(0.22_0.04_240)] mb-3 block">
                Amortization Period: <span className="text-[oklch(0.42_0.1_155)] font-bold">{amortization} years</span>
              </label>
              <input
                type="range"
                min="5"
                max="40"
                step="1"
                value={amortization}
                onChange={(e) => setAmortization(Number(e.target.value))}
                className="w-full h-2 bg-[oklch(0.88_0.015_80)] rounded-lg appearance-none cursor-pointer accent-[oklch(0.42_0.1_155)]"
              />
              <div className="flex justify-between font-body text-xs text-[oklch(0.55_0.015_60)] mt-2">
                <span>5 years</span>
                <span>40 years</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[oklch(0.88_0.015_80)]">
            <h3 className="font-display text-2xl font-semibold text-[oklch(0.22_0.04_240)] mb-8">Estimated Payment</h3>
            
            <div className="space-y-6">
              {/* Monthly Payment */}
              <div className="bg-gradient-to-br from-[oklch(0.42_0.1_155/0.1)] to-[oklch(0.42_0.1_155/0.05)] rounded-xl p-6 border border-[oklch(0.42_0.1_155/0.2)]">
                <p className="font-body text-sm text-[oklch(0.55_0.015_60)] mb-1">Monthly Payment</p>
                <p className="font-display text-4xl font-bold text-[oklch(0.42_0.1_155)]">
                  ${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </p>
              </div>

              {/* Breakdown */}
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-[oklch(0.88_0.015_80)] pb-3">
                  <span className="font-body text-sm text-[oklch(0.55_0.015_60)]">Mortgage Amount</span>
                  <span className="font-body font-semibold text-[oklch(0.22_0.04_240)]">${principal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b border-[oklch(0.88_0.015_80)] pb-3">
                  <span className="font-body text-sm text-[oklch(0.55_0.015_60)]">Total Interest ({amortization}y)</span>
                  <span className="font-body font-semibold text-[oklch(0.22_0.04_240)]">${totalInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm text-[oklch(0.55_0.015_60)]">Total Amount Paid</span>
                  <span className="font-body font-semibold text-[oklch(0.22_0.04_240)]">${totalPaid.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full mt-6 bg-[oklch(0.42_0.1_155)] hover:bg-[oklch(0.36_0.1_155)] text-white font-body font-semibold py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
              >
                Get Pre-Approved
              </button>
            </div>

            <p className="font-body text-xs text-[oklch(0.65_0.01_80)] text-center mt-6">
              *Estimates are for informational purposes. Contact Yuliya for accurate financing details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Form Section ─────────────────────────────────────────────────────
function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    toast.success("Thank you! Yuliya will be in touch with you shortly.");
    setForm({ firstName: "", lastName: "", email: "", phone: "", interest: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[oklch(0.22_0.04_240)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[oklch(0.72_0.12_75)]" />
              <span className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-[oklch(0.72_0.12_75)]">
                Get in Touch
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
              Let's Find Your<br />
              <em className="italic text-[oklch(0.72_0.12_75)]">Perfect Home</em>
            </h2>
            <p className="font-body text-base text-white/70 leading-relaxed mb-10">
              Whether you're ready to buy, sell, or simply have questions about the Eastern Ontario market — I'm here to help. Reach out and I'll respond promptly and in confidence.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                {
                  icon: <Phone size={20} />,
                  label: "Phone",
                  value: "+1 (613) 330-4112",
                  href: "tel:+16133304112",
                },
                {
                  icon: <Mail size={20} />,
                  label: "Email",
                  value: "yuliya@exitrealtyseaway.com",
                  href: "mailto:yuliya@exitrealtyseaway.com",
                },
                {
                  icon: <Globe size={20} />,
                  label: "Website",
                  value: "findhometown.ca",
                  href: "https://findhometown.ca",
                },
                {
                  icon: <MapPin size={20} />,
                  label: "Office",
                  value: "425 E. Fourth St. W., Cornwall, ON",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="bg-[oklch(0.42_0.1_155/0.2)] text-[oklch(0.52_0.09_155)] p-2.5 rounded-lg mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-body text-xs font-semibold tracking-wider uppercase text-white/40 mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="font-body text-white hover:text-[oklch(0.72_0.12_75)] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-body text-white">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-10 p-5 bg-[oklch(0.28_0.04_240)] rounded-xl border border-[oklch(0.35_0.04_240)]">
              <p className="font-body text-sm font-semibold text-white mb-2">Languages Spoken</p>
              <div className="flex gap-3">
                {["🇨🇦 English", "🇷🇺 Russian", "🇺🇦 Ukrainian"].map((lang) => (
                  <span key={lang} className="font-body text-sm text-white/70 bg-[oklch(0.35_0.04_240)] px-3 py-1.5 rounded-full">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="font-display text-2xl font-semibold text-[oklch(0.22_0.04_240)] mb-2">
              Send a Message
            </h3>
            <p className="font-body text-sm text-[oklch(0.55_0.015_60)] mb-6">
              I'll respond to you in confidence, typically within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-xs font-semibold text-[oklch(0.35_0.02_240)] uppercase tracking-wider mb-1.5 block">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Yuliya"
                    required
                    className="w-full border border-[oklch(0.88_0.015_80)] rounded-lg px-4 py-3 font-body text-sm text-[oklch(0.22_0.04_240)] placeholder:text-[oklch(0.75_0.01_80)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.42_0.1_155)] transition-all"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-semibold text-[oklch(0.35_0.02_240)] uppercase tracking-wider mb-1.5 block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Smith"
                    className="w-full border border-[oklch(0.88_0.015_80)] rounded-lg px-4 py-3 font-body text-sm text-[oklch(0.22_0.04_240)] placeholder:text-[oklch(0.75_0.01_80)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.42_0.1_155)] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-xs font-semibold text-[oklch(0.35_0.02_240)] uppercase tracking-wider mb-1.5 block">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full border border-[oklch(0.88_0.015_80)] rounded-lg px-4 py-3 font-body text-sm text-[oklch(0.22_0.04_240)] placeholder:text-[oklch(0.75_0.01_80)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.42_0.1_155)] transition-all"
                />
              </div>

              <div>
                <label className="font-body text-xs font-semibold text-[oklch(0.35_0.02_240)] uppercase tracking-wider mb-1.5 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(613) 000-0000"
                  className="w-full border border-[oklch(0.88_0.015_80)] rounded-lg px-4 py-3 font-body text-sm text-[oklch(0.22_0.04_240)] placeholder:text-[oklch(0.75_0.01_80)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.42_0.1_155)] transition-all"
                />
              </div>

              <div>
                <label className="font-body text-xs font-semibold text-[oklch(0.35_0.02_240)] uppercase tracking-wider mb-1.5 block">
                  I'm Interested In
                </label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className="w-full border border-[oklch(0.88_0.015_80)] rounded-lg px-4 py-3 font-body text-sm text-[oklch(0.22_0.04_240)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.42_0.1_155)] transition-all bg-white"
                >
                  <option value="">Select an option...</option>
                  <option value="buying">Buying a Home</option>
                  <option value="selling">Selling My Home</option>
                  <option value="land">Rural / Land Property</option>
                  <option value="evaluation">Free Home Evaluation</option>
                  <option value="rental">Rental Property</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="font-body text-xs font-semibold text-[oklch(0.35_0.02_240)] uppercase tracking-wider mb-1.5 block">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your real estate goals..."
                  required
                  className="w-full border border-[oklch(0.88_0.015_80)] rounded-lg px-4 py-3 font-body text-sm text-[oklch(0.22_0.04_240)] placeholder:text-[oklch(0.75_0.01_80)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.42_0.1_155)] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[oklch(0.42_0.1_155)] hover:bg-[oklch(0.36_0.1_155)] disabled:opacity-60 text-white font-body font-semibold py-4 rounded-lg transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              <p className="font-body text-xs text-[oklch(0.65_0.01_80)] text-center leading-relaxed">
                Your information is kept strictly confidential. By submitting, you agree to be contacted by Yuliya Mogilny and EXIT Realty Seaway.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
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
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ListingsSection />
      <TestimonialsSection />
      <MortgageCalculator />
      <ContactSection />
      <Footer />
    </div>
  );
}
