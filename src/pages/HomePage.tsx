import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calculator, ClipboardList, Building2, ShieldCheck, Eye, Users,
  TrendingUp, Award, ArrowRight, CheckCircle, Quote, Download,
  Target, Zap, BarChart3
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import CountUp from "@/components/CountUp";
import heroImg from "@/assets/hero-building.jpg";
import projectHousing from "@/assets/project-housing.jpg";
import projectRiverside from "@/assets/project-riverside.jpg";
import kdf1 from "@/assets/kdf-1.jpg";
import projectTilisi from "@/assets/project-tilisi.jpg";
import bgBoqReview from "@/assets/bg-boq-review.jpg";
import bgDigitalEstimation from "@/assets/bg-digital-estimation.jpg";
import bgSiteSupervision from "@/assets/bg-site-supervision.jpg";

const services = [
  {
    icon: Calculator,
    num: "01",
    title: "Quantity Surveying",
    desc: "Comprehensive cost management from feasibility through to final account — ensuring projects are delivered within budget with full financial transparency.",
    highlights: ["Cost Estimation & BoQ", "Tendering & Procurement", "Contract Administration"],
  },
  {
    icon: ClipboardList,
    num: "02",
    title: "Project Management",
    desc: "End-to-end project coordination, planning, and delivery ensuring timely completion to the desired quality standards.",
    highlights: ["Full Project Coordination", "Risk & Cost Management", "Timeline Control"],
  },
  {
    icon: Building2,
    num: "03",
    title: "Facilities Management",
    desc: "Strategic and operational management of physical assets to maximize value, reduce costs, and ensure sustainability.",
    highlights: ["Maintenance Planning", "Asset Management", "Sustainability Systems"],
  },
];

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Cost Certainty",
    desc: "Avoid budget overruns with precise cost management and forecasting at every project stage.",
  },
  {
    icon: Target,
    title: "Risk Reduction",
    desc: "Early issue detection and proactive management to keep your project on track.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    desc: "Clear reporting and open communication so you always know where your project stands.",
  },
  {
    icon: Award,
    title: "Registered Experts",
    desc: "BORAQS registered professionals with University of Nairobi qualifications.",
  },
  {
    icon: Zap,
    title: "On-Time Delivery",
    desc: "Efficient processes that ensure your project is completed on schedule.",
  },
  {
    icon: BarChart3,
    title: "Proven Results",
    desc: "Multi-billion shilling portfolio across residential, commercial, and government projects.",
  },
];

const projects = [
  { name: "Affordable Housing – Tilisi", cost: "Ksh 1.05B", status: "Completed", image: projectHousing },
  { name: "KDF Housing Project", cost: "Ksh 4.17B", status: "60% Complete", image: kdf1 },
  { name: "Riverside Apartments", cost: "Ksh 1.2B", status: "Completed", image: projectRiverside },
  { name: "Tilisi Mid-Range Housing", cost: "Ksh 1.2B", status: "95% Complete", image: projectTilisi },
];

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "+", label: "Projects Delivered" },
  { prefix: "Ksh ", value: 30, suffix: "B+", label: "Portfolio Value" },
  { value: 3, suffix: "", label: "Registered Directors" },
];

const trustBadges = [
  "10+ Years Industry Experience",
  "BORAQS Registered Professionals",
  "Multi-Billion Shilling Projects Managed",
  "Trusted by Leading Developers",
];

const testimonials = [
  {
    quote: "Quantsol's attention to detail in cost management saved us significant resources on our Tilisi development. Their professionalism is unmatched.",
    author: "James Mwangi",
    role: "Director, Nirma Holdings Ltd",
  },
  {
    quote: "Working with Quantsol gave us complete confidence in our budget projections. Their team delivered precise BoQs and maintained excellent cost control throughout.",
    author: "Sarah Odhiambo",
    role: "Project Manager, Kopoa Developers",
  },
  {
    quote: "Their project management expertise ensured our development stayed on schedule despite complex challenges. A truly reliable partner in construction.",
    author: "David Kamau",
    role: "CEO, Panorama Ltd",
  },
];

const HomePage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0"
        >
          <img src={heroImg} alt="Modern building in Kenya" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/50" />
        </motion.div>

        <div className="section-container relative z-10 pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="h-[2px] bg-gold mb-8"
            />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-primary-foreground mb-6"
            >
              Precision in Cost.{" "}
              <span className="text-gold">Excellence</span> in Delivery.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-2xl mb-10"
            >
              Professional Quantity Surveying, Project Management, and Facilities Management solutions across Kenya.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-primary-foreground px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-accent/90 transition-colors"
              >
                Request Consultation
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
              >
                View Our Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-navy-light py-6">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-center gap-3 py-3"
              >
                <CheckCircle size={16} className="text-gold flex-shrink-0" />
                <span className="text-xs text-primary-foreground/70 font-medium">{badge}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-12 md:py-16 border-t border-primary-foreground/5">
        <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-1 tabular-nums">
                <CountUp end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="text-xs tracking-widest uppercase text-primary-foreground/50">
                {stat.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* About Intro */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgBoqReview} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="section-container max-w-4xl text-center relative z-10">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">Who We Are</span>
            <div className="gold-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance">
              Trusted Consultancy Partner in Kenya's Construction Industry
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
              Quantsol Consultants Limited is a trusted consultancy firm delivering cost-effective, sustainable, and client-focused solutions from concept to completion. Registered under Kenyan law with BORAQS-certified directors from the University of Nairobi, we bring over a decade of expertise to every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all"
              >
                Learn More About Us <ArrowRight size={14} />
              </Link>
              <a
                href="/quantsol-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-muted-foreground text-sm font-medium hover:text-accent transition-colors"
              >
                <Download size={14} />
                Download Company Profile
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgDigitalEstimation} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
          <div className="absolute inset-0 bg-surface/90" />
        </div>
        <div className="section-container relative z-10">
          <SectionHeader
            label="What We Do"
            title="Our Core Services"
            description="We provide comprehensive consultancy services that cover every stage of the construction and property lifecycle."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.15}>
                <div className="bg-card p-8 md:p-10 card-hover h-full group flex flex-col">
                  <span className="text-xs font-mono tracking-widest text-muted-foreground">{s.num}</span>
                  <s.icon className="w-8 h-8 text-accent mt-4 mb-4 group-hover:translate-y-[-4px] transition-transform duration-500" />
                  <h3 className="text-xl font-semibold tracking-tight mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <div className="flex flex-col gap-2 mt-auto mb-6">
                    {s.highlights.map((h, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-accent flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{h}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/services" className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all mt-auto">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgSiteSupervision} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="section-container relative z-10">
          <SectionHeader
            label="Why Quantsol"
            title="Why Choose Us"
            description="We combine technical expertise with a client-focused approach to deliver measurable results on every project."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-navy">
        <div className="section-container">
          <SectionHeader
            label="Our Work"
            title="Featured Projects"
            description="A proven track record of delivering high-value projects across Kenya's construction landscape."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link to="/portfolio" className="group relative block overflow-hidden aspect-[16/10]">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/70 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono tracking-widest text-gold">{p.cost}</span>
                      <span className="text-xs text-primary-foreground/50">•</span>
                      <span className="text-xs text-primary-foreground/60">{p.status}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-primary-foreground">{p.name}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 border border-gold/30 text-gold px-8 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-gold hover:text-primary-foreground transition-all"
            >
              View All Projects <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            label="Client Testimonials"
            title="What Our Clients Say"
            description="Trusted by leading developers, contractors, and institutions across Kenya."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="bg-card p-8 h-full flex flex-col card-hover">
                  <Quote size={24} className="text-accent/30 mb-4" />
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 italic">
                    "{t.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold">{t.author}</p>
                    <p className="text-xs text-accent">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-primary-foreground text-balance">
              Have a Project in <span className="text-gold">Mind</span>?
            </h2>
            <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto mb-8">
              Let's help you deliver it on time and within budget. Partner with a team that delivers precision, transparency, and results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-primary-foreground px-10 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-accent/90 transition-colors"
              >
                Request Consultation
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-10 py-4 text-xs font-semibold tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
