import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { ArrowRight, Calculator, ClipboardList, Building2, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";

const qsServices = [
  "Cost Estimating & Budgeting",
  "Cost Planning & Value Management",
  "Bills of Quantities (BoQ) Preparation",
  "Tendering & Procurement Advice",
  "Contract Administration",
  "Cost Control & Forecasting",
  "Final Account & Dispute Support",
  "Lifecycle Costing & Facilities Handover",
];

const pmServices = [
  "End-to-end project coordination",
  "Planning and scheduling",
  "Risk identification and management",
  "Resource allocation and optimization",
  "Quality and timeline control",
  "Stakeholder communication",
  "Performance monitoring and reporting",
];

const fmServices = [
  "Maintenance Planning & Supervision",
  "Asset & Space Management",
  "Health, Safety & Environment Compliance",
  "Energy & Sustainability Management",
  "Vendor & Service Contract Management",
  "Cost Control & Budgeting",
];

const benefits = [
  "Reduce costs through precise management",
  "Improve efficiency at every project stage",
  "Ensure project success and client satisfaction",
  "Minimize risks with proactive strategies",
];

const ServicesPage = () => {
  return (
    <main>
      <SEO
        title="Services — Quantity Surveying, Project & Facilities Management"
        description="Comprehensive Quantity Surveying, Project Management & Facilities Management services in Kenya. Cost estimation, BoQ preparation, tendering & procurement advice."
        path="/services"
      />
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="section-container">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Our Services</span>
            <div className="gold-line mt-4 mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground max-w-3xl">
              Comprehensive Consultancy Solutions
            </h1>
            <p className="text-primary-foreground/60 text-lg mt-6 max-w-2xl">
              From concept to completion and beyond — we provide integrated services that protect your investment and maximize value.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* QS */}
      <section className="section-padding" id="quantity-surveying">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
                <Calculator className="w-10 h-10 text-accent" />
                <div>
                  <span className="text-xs font-mono tracking-widest text-muted-foreground">01</span>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Quantity Surveying</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Quantity Surveying is the discipline of managing all costs and contractual aspects of construction projects from inception to completion and beyond. As our principal service, QS ensures that projects are accurately priced, procured competitively, delivered within budget, and closed with transparent final accounts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                QS combines technical measurement, commercial acumen, procurement knowledge and contract administration to protect client investment and maximize value for money.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-surface p-8">
                <h3 className="text-sm font-semibold tracking-widest uppercase text-accent mb-6">Core Functions</h3>
                <div className="flex flex-col gap-4">
                  {qsServices.map((s, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-container"><div className="h-[1px] bg-border" /></div>

      {/* PM */}
      <section className="section-padding" id="project-management">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal className="lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <ClipboardList className="w-10 h-10 text-accent" />
                <div>
                  <span className="text-xs font-mono tracking-widest text-muted-foreground">02</span>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Project Management</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Providing end-to-end management and coordination of construction and development projects to ensure they are delivered on time, within budget, and to the desired quality standards. We take a holistic and results-driven approach to project delivery.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our project managers act as the client's trusted representatives — aligning objectives, managing resources efficiently, and proactively resolving issues before they escalate.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="lg:order-1">
              <div className="bg-surface p-8">
                <h3 className="text-sm font-semibold tracking-widest uppercase text-accent mb-6">Key Functions</h3>
                <div className="flex flex-col gap-4">
                  {pmServices.map((s, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-container"><div className="h-[1px] bg-border" /></div>

      {/* FM */}
      <section className="section-padding" id="facilities-management">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
                <Building2 className="w-10 h-10 text-accent" />
                <div>
                  <span className="text-xs font-mono tracking-widest text-muted-foreground">03</span>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Facilities Management</h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Focused on ensuring that buildings and infrastructure continue to operate efficiently, safely, and sustainably throughout their lifecycle. We provide strategic and operational management of physical assets, integrating people, processes, and technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our goal is to help clients maximize asset value, reduce operational costs, and create well-maintained, productive spaces that support business continuity.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-surface p-8">
                <h3 className="text-sm font-semibold tracking-widest uppercase text-accent mb-6">Our FM Services</h3>
                <div className="flex flex-col gap-4">
                  {fmServices.map((s, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-navy">
        <div className="section-container text-center">
          <SectionHeader label="The Quantsol Advantage" title="Benefits of Working With Us" light />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-center gap-3 p-4 border border-primary-foreground/10">
                  <CheckCircle size={18} className="text-gold flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80">{b}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-10 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-accent/90 transition-colors"
            >
              Discuss Your Project <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
