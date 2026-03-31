import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { ArrowRight, Target, Eye, Heart, Star, Users, Lightbulb, MessageSquare, Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  { icon: Star, title: "Value Creation & Addition", desc: "We create measurable value in every engagement." },
  { icon: Shield, title: "Reliability", desc: "Consistent delivery you can count on." },
  { icon: MessageSquare, title: "Prompt Communication", desc: "Transparent and timely stakeholder updates." },
  { icon: Users, title: "Inclusivity", desc: "Collaborative approach with all project stakeholders." },
  { icon: Lightbulb, title: "Resourcefulness", desc: "Innovative solutions to complex challenges." },
];

const goals = [
  "To be a leading provider of consultancy services in Quantity Surveying, Project Management, and Facilities Management.",
  "To acquire, nurture, and deploy expertise that ensures fulfillment of our contractual commitments and client satisfaction.",
  "To deliver value for money through efficient cost management across all stages of the construction process.",
];

const AboutPage = () => {
  return (
    <main>
      <SEO
        title="About Us — Quantity Surveying Experts Kenya"
        description="Learn about Quantsol Consultants Limited, a BORAQS-registered firm with 10+ years delivering cost-effective construction consultancy across Kenya and East Africa."
        path="/about"
      />
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="section-container">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">About Us</span>
            <div className="gold-line mt-4 mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground max-w-3xl">
              Built on Expertise, Driven by Excellence
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">Company Overview</span>
              <div className="gold-line mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Quantsol Consultants Limited is a reputable consultancy firm specializing in Quantity Surveying, Project Management, and Facilities Management. The company is duly registered under the Companies Act and licensed in accordance with the Architects and Quantity Surveyors Act, Cap 525 of the Laws of Kenya.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With a team of three seasoned Directors, Quantsol brings together over a decade of professional experience in the construction and real estate sectors. Each Director holds a Bachelor's Degree in Quantity Surveying from the University of Nairobi and is a Registered Quantity Surveyor with the Board of Registration of Architects and Quantity Surveyors (BORAQS).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through innovation, professionalism, and attention to detail, the firm continues to provide value-driven services that ensure project success, cost efficiency, and long-term asset performance.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border border-gold/20" />
                <img src={aboutTeam} alt="Quantsol team" className="w-full aspect-[2/1] object-cover" loading="lazy" width={1200} height={600} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="bg-card p-10 h-full">
                <Eye className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-2xl font-bold tracking-tight mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To set new benchmarks of excellence in every project we undertake by consistently exceeding client expectations through high-quality, timely, and cost-effective solutions.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-card p-10 h-full">
                <Target className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-2xl font-bold tracking-tight mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To build lasting relationships with organizations seeking professional cost and project management solutions by continuously enhancing our capabilities through comprehensive Quantity Surveying services, cost consultancy, innovative methodology, and technically sound practices.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeader label="Our Objectives" title="Strategic Goals" />
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            {goals.map((goal, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-4 items-start">
                  <span className="text-xs font-mono tracking-widest text-accent mt-1">0{i + 1}</span>
                  <p className="text-muted-foreground leading-relaxed">{goal}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-navy">
        <div className="section-container">
          <SectionHeader label="What Drives Us" title="Core Values" light />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-6">
                  <v.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                  <h4 className="text-sm font-semibold text-primary-foreground mb-2">{v.title}</h4>
                  <p className="text-xs text-primary-foreground/50 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Work With <span className="text-accent">the Best</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Let us bring our expertise to your next project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-10 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-accent/90 transition-colors"
            >
              Get in Touch <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
