import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import projectHousing from "@/assets/project-housing.jpg";
import projectRiverside from "@/assets/project-riverside.jpg";
import projectTilisi from "@/assets/project-tilisi.jpg";
import projectOffice from "@/assets/project-office.jpg";
import kdf1 from "@/assets/kdf-1.jpg";
import kdf5 from "@/assets/kdf-5.jpg";

const projects = [
  {
    name: "Affordable Housing at Tilisi",
    client: "Nirma Holdings Ltd",
    cost: "Ksh 1.05 Billion",
    status: "Complete",
    image: projectHousing,
  },
  {
    name: "Mid-Range Housing at Tilisi",
    client: "Nirma Holdings Ltd",
    cost: "Ksh 1.2 Billion",
    status: "95% Complete",
    image: projectTilisi,
  },
  {
    name: "Residential Apartments, Riverside Drive",
    client: "Kopoa Developers Ltd",
    cost: "Ksh 1.2 Billion",
    status: "Complete",
    image: projectRiverside,
  },
  {
    name: "KDF Accommodation Housing PPP",
    client: "China Railway No 10 / Linda Project Company",
    cost: "Ksh 4.17 Billion",
    status: "60% Complete",
    image: projectKdf,
  },
  {
    name: "KDF Accommodation – Affordable Housing",
    client: "China Railway No 10 / Linda Consortium",
    cost: "Ksh 17.9 Billion",
    status: "In Progress",
    image: projectKdf,
  },
  {
    name: "Residential Apartments, Rhapta Road",
    client: "Kopoa Developers Ltd",
    cost: "Ksh 1.5 Billion",
    status: "70% Complete",
    image: projectRiverside,
  },
  {
    name: "56 Residential Apartments, Karuna Road",
    client: "Panorama Ltd",
    cost: "Ksh 850 Million",
    status: "Precontract",
    image: projectOffice,
  },
  {
    name: "3 Residential Development, Kibagare Loresho",
    client: "Andrea Ltd",
    cost: "Ksh 205 Million",
    status: "Complete",
    image: projectHousing,
  },
  {
    name: "5 Residential Development, Spring Valley",
    client: "Rushmore Investment Ltd",
    cost: "Ksh 450 Million",
    status: "50% Complete",
    image: projectTilisi,
  },
  {
    name: "Office Block Development",
    client: "Mayfair Insurance Rwanda Ltd",
    cost: "RWF 9.5 Billion",
    status: "Award Stage",
    image: projectOffice,
  },
  {
    name: "186 Residential Apartments, Mombasa Road",
    client: "Deer Premium Investment Ltd",
    cost: "Ksh 1.3 Billion",
    status: "40% Complete",
    image: projectHousing,
  },
];

const clients = [
  "Prime Bank Ltd", "Mayfair Insurance", "Zep-Re (PTA Reinsurance)", "Aero Club of East Africa",
  "Lab & Allied Ltd", "Kabarak University", "Loreto Convent Schools", "Gelian Hotel Machakos",
  "Nirma Holdings Ltd", "Shelter Solutions Ltd", "Kria Developers Ltd", "Centcrete Ltd",
];

const PortfolioPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="section-container">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Portfolio</span>
            <div className="gold-line mt-4 mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground max-w-3xl">
              Our Project Portfolio
            </h1>
            <p className="text-primary-foreground/60 text-lg mt-6 max-w-2xl">
              A proven track record of excellence across the built environment — from affordable housing to multi-billion shilling developments.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 0.1}>
                <div className="group overflow-hidden card-hover bg-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-mono tracking-wider px-3 py-1 ${
                        p.status === "Complete" ? "bg-accent/90 text-primary-foreground" : "bg-navy/80 text-primary-foreground"
                      }`}>
                        {p.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-semibold tracking-tight mb-2">{p.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{p.client}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono font-semibold text-accent">{p.cost}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <SectionHeader label="Trusted By" title="Our Clients" description="We are proud to have worked with leading organizations across East Africa." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((c, i) => (
              <ScrollReveal key={i} delay={(i % 4) * 0.05}>
                <div className="bg-card p-6 text-center text-sm font-medium text-muted-foreground">
                  {c}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-center">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground mb-4">
              Let's Build Something <span className="text-gold">Remarkable</span>
            </h2>
            <p className="text-primary-foreground/60 max-w-xl mx-auto mb-8">
              Ready to start your next project? We'd love to discuss how we can deliver value for you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-10 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-accent/90 transition-colors"
            >
              Start a Conversation <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
