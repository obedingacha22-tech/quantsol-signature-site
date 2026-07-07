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
            <p className="text-primary-foreground/70 text-lg mt-6 max-w-2xl leading-relaxed">
              Three connected practices covering the full life of a building, from the earliest cost decisions right through to how the finished asset is run day to day.
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
                Quantity surveying is the discipline that manages every cost and contractual decision on a construction project, from the earliest feasibility numbers right through to the closing of the final account. It's our principal service, and it's how we protect the budget from the pressures that pull most projects off course.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The work combines measurement, market knowledge, procurement discipline and contract administration. Done properly, it turns cost from something that happens to you into something you can actually see coming.
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
                We manage construction and development projects on the client's behalf, running the design team, the contractor and the wider stakeholder group so that programme, cost and quality all land where they were meant to.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our project managers act as your representative on site. We align objectives at the start, resolve issues before they escalate, and give you a monthly report that tells you exactly where the project stands.
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
                Facilities management is the work that keeps a building performing after the contractor has gone home. We handle the strategic and operational side of managing physical assets, bringing together people, planned maintenance and reporting into one coordinated service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The aim is straightforward. Extend the asset's useful life, keep operating costs predictable, and give the owner or occupier a building that supports their business rather than getting in the way of it.
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
