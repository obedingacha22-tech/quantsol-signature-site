import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, ClipboardList, Building2, ShieldCheck, Eye, Users, TrendingUp, Award, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import CountUp from "@/components/CountUp";
import heroImg from "@/assets/hero-building.jpg";
import projectHousing from "@/assets/project-housing.jpg";
import projectRiverside from "@/assets/project-riverside.jpg";
import projectKdf from "@/assets/project-kdf.jpg";
import projectTilisi from "@/assets/project-tilisi.jpg";

const services = [
  {
    icon: Calculator,
    num: "01",
    title: "Quantity Surveying",
    desc: "Comprehensive cost management from feasibility through to final account, ensuring projects are delivered within budget.",
  },
  {
    icon: ClipboardList,
    num: "02",
    title: "Project Management",
    desc: "End-to-end project coordination, planning, and delivery ensuring timely completion to the desired quality standards.",
  },
  {
    icon: Building2,
    num: "03",
    title: "Facilities Management",
    desc: "Strategic and operational management of physical assets to maximize value, reduce costs, and ensure sustainability.",
  },
];

const whyUs = [
  { icon: ShieldCheck, text: "Cost certainty and control" },
  { icon: Eye, text: "Transparent processes and communication" },
  { icon: Users, text: "Experienced registered professionals" },
  { icon: TrendingUp, text: "Proven track record across major projects" },
  { icon: Award, text: "Reduced risks through proactive management" },
];

const projects = [
  { name: "Affordable Housing – Tilisi", cost: "Ksh 1.05B", status: "Completed", image: projectHousing },
  { name: "KDF Housing Project", cost: "Ksh 4.17B", status: "60% Complete", image: projectKdf },
  { name: "Riverside Apartments", cost: "Ksh 1.2B", status: "Completed", image: projectRiverside },
  { name: "Tilisi Mid-Range Housing", cost: "Ksh 1.2B", status: "95% Complete", image: projectTilisi },
];

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "+", label: "Projects Delivered" },
  { prefix: "Ksh ", value: 30, suffix: "B+", label: "Portfolio Value" },
  { value: 3, suffix: "", label: "Registered Directors" },
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
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
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
              The Hallmark of{" "}
              <span className="text-gold">Quantity Surveying</span>{" "}
              Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-2xl mb-10"
            >
              Delivering cost-effective, sustainable, and client-centered solutions from concept to completion.
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
                Request a Quote
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-12 md:py-16">
        <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-1">
                <CountUp end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="text-xs tracking-widest uppercase text-primary-foreground/50">
                {stat.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="section-container max-w-4xl text-center">
          <ScrollReveal>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Quantsol Consultants Limited is a reputable consultancy firm specializing in Quantity Surveying, Project Management, and Facilities Management. With over a decade of combined experience, we deliver value-driven solutions that ensure project success, cost efficiency, and long-term asset performance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader
            label="What We Do"
            title="Our Core Services"
            description="We provide comprehensive consultancy services that cover every stage of the construction and property lifecycle."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.15}>
                <div className="bg-card p-8 md:p-10 card-hover h-full group">
                  <span className="text-xs font-mono tracking-widest text-muted-foreground">{s.num}</span>
                  <s.icon className="w-8 h-8 text-accent mt-4 mb-4 group-hover:translate-y-[-4px] transition-transform duration-500" />
                  <h3 className="text-xl font-semibold tracking-tight mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-accent text-sm font-medium mt-6 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="Why Quantsol"
                title="Why Choose Us"
                align="left"
                description="We combine technical expertise with a client-focused approach to deliver measurable results on every project."
              />
              <div className="flex flex-col gap-5">
                {whyUs.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-accent" />
                      </div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border border-gold/20" />
                <img src={projectRiverside} alt="Riverside project" className="w-full aspect-[4/3] object-cover" loading="lazy" width={800} height={600} />
              </div>
            </ScrollReveal>
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

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Start Your Project With <span className="text-accent">Confidence</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Partner with a team that delivers precision, transparency, and results on every engagement.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-10 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-accent/90 transition-colors"
            >
              Get a Free Consultation
              <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
