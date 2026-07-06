import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import SiteGallery from "@/components/SiteGallery";
import projectHousing from "@/assets/project-housing.jpg";
import projectRiverside from "@/assets/project-riverside.jpg";
import projectTilisi from "@/assets/project-tilisi.jpg";
import projectOffice from "@/assets/project-office.jpg";
import kdf1 from "@/assets/kdf-1.jpg";
import kdfLangata from "@/assets/kdf-langata.jpg";
import projectMayfairFitout from "@/assets/project-mayfair-fitout.jpg";
import projectSchoolLane from "@/assets/project-school-lane.jpg";
import projectAeroclub from "@/assets/project-aeroclub.jpg";
import projectLoreto from "@/assets/project-loreto.jpg";
import projectBankFitout from "@/assets/project-bank-fitout.jpg";
import projectRehema from "@/assets/project-rehema.jpg";
import projectHacienda from "@/assets/project-hacienda.jpg";
import projectMoran from "@/assets/project-moran.jpg";
import projectMasalani from "@/assets/project-masalani.jpg";

// Tilisi / Maisha Development photos
import tilisi1 from "@/assets/tilisi-1.jpg";
import tilisi2 from "@/assets/tilisi-2.jpg";
import tilisi3 from "@/assets/tilisi-3.jpg";
import tilisi4 from "@/assets/tilisi-4.jpg";
import tilisi5 from "@/assets/tilisi-5.jpg";
import tilisi6 from "@/assets/tilisi-6.jpg";
import tilisi7 from "@/assets/tilisi-7.jpg";
import tilisi8 from "@/assets/tilisi-8.jpg";
import tilisi9 from "@/assets/tilisi-9.jpg";

// Roysambu photos
import roysambu1 from "@/assets/roysambu-1.jpg";
import roysambu2 from "@/assets/roysambu-2.jpg";
import roysambu3 from "@/assets/roysambu-3.jpg";
import roysambu4 from "@/assets/roysambu-4.jpg";
import roysambu5 from "@/assets/roysambu-5.jpg";
import roysambu6 from "@/assets/roysambu-6.jpg";
import roysambu7 from "@/assets/roysambu-7.jpg";
import roysambu8 from "@/assets/roysambu-8.jpg";
import roysambu9 from "@/assets/roysambu-9.jpg";
import roysambu10 from "@/assets/roysambu-10.jpg";

// Roysambu Phase 2 photos
import roysambuP21 from "@/assets/roysambu-p2-1.jpg";
import roysambuP22 from "@/assets/roysambu-p2-2.jpg";
import roysambuP23 from "@/assets/roysambu-p2-3.jpg";
import roysambuP24 from "@/assets/roysambu-p2-4.jpg";
import roysambuP25 from "@/assets/roysambu-p2-5.jpg";
import roysambuP26 from "@/assets/roysambu-p2-6.jpg";
import roysambuP27 from "@/assets/roysambu-p2-7.jpg";
import roysambuP28 from "@/assets/roysambu-p2-8.jpg";

import kahawa1 from "@/assets/kahawa-1.jpg";
import kahawa2 from "@/assets/kahawa-2.jpg";
import kahawa3 from "@/assets/kahawa-3.jpg";
import kahawa4 from "@/assets/kahawa-4.jpg";
import kahawa5 from "@/assets/kahawa-5.jpg";
import kahawa6 from "@/assets/kahawa-6.jpg";
import kahawa7 from "@/assets/kahawa-7.jpg";
import kahawa8 from "@/assets/kahawa-8.jpg";
import kahawa9 from "@/assets/kahawa-9.jpg";
import kahawa10 from "@/assets/kahawa-10.jpg";
import kahawa11 from "@/assets/kahawa-11.jpg";
import kahawa12 from "@/assets/kahawa-12.jpg";
import kahawa13 from "@/assets/kahawa-13.jpg";
import kahawa14 from "@/assets/kahawa-14.jpg";
import kahawa15 from "@/assets/kahawa-15.jpg";
import kahawa16 from "@/assets/kahawa-16.jpg";
import kahawa17 from "@/assets/kahawa-17.jpg";
import kahawa18 from "@/assets/kahawa-18.jpg";
import kahawa19 from "@/assets/kahawa-19.jpg";
import kahawa20 from "@/assets/kahawa-20.jpg";

// Embakasi photos
import embakasi1 from "@/assets/embakasi-1.jpg";
import embakasi2 from "@/assets/embakasi-2.jpg";
import embakasi3 from "@/assets/embakasi-3.jpg";
import embakasi4 from "@/assets/embakasi-4.jpg";
import embakasi5 from "@/assets/embakasi-5.jpg";
import embakasi6 from "@/assets/embakasi-6.jpg";
import embakasi7 from "@/assets/embakasi-7.jpg";
import embakasi8 from "@/assets/embakasi-8.jpg";
import embakasi9 from "@/assets/embakasi-9.jpg";
import embakasi10 from "@/assets/embakasi-10.jpg";

const kdfSites = [
  { name: "Langata", images: [kdfLangata] },
  { name: "Roysambu — Phase 1", images: [roysambu1, roysambu2, roysambu3, roysambu4, roysambu5, roysambu6, roysambu7, roysambu8, roysambu9, roysambu10] },
  { name: "Roysambu — Phase 2 (Ongoing)", images: [roysambuP21, roysambuP22, roysambuP23, roysambuP24, roysambuP25, roysambuP26, roysambuP27, roysambuP28] },
  { name: "Embakasi", images: [embakasi1, embakasi2, embakasi3, embakasi4, embakasi5, embakasi6, embakasi7, embakasi8, embakasi9, embakasi10] },
  { name: "Kahawa", images: [kahawa1, kahawa2, kahawa3, kahawa4, kahawa5, kahawa6, kahawa7, kahawa8, kahawa9, kahawa10, kahawa11, kahawa12, kahawa13, kahawa14, kahawa15, kahawa16, kahawa17, kahawa18, kahawa19, kahawa20] },
];

interface Project {
  name: string;
  client: string;
  status: string;
  image: string;
  isKdf?: boolean;
  isTilisi?: boolean;
}

const projects: Project[] = [
  { name: "Maisha Development — Tilisi", client: "Nirma Holdings Ltd", status: "Ongoing", image: tilisi4, isTilisi: true },
  { name: "Spring Valley Residential Development", client: "Rushmore Investment Ltd", status: "Ongoing", image: projectRiverside },
  { name: "Kyuna 39", client: "Mucyo & Hope", status: "Design", image: projectHousing },
  { name: "Kigali Office Block Development", client: "Mayfair Rwanda Ltd", status: "Award", image: projectOffice },
  { name: "Office Fitout Mayfair Centre", client: "Mayfair Kenya Ltd", status: "Ongoing", image: projectMayfairFitout },
  { name: "School Lane Apartments", client: "Panorama Ltd", status: "Design", image: projectSchoolLane },
  { name: "KDF Accommodation Housing — PPP & Affordable", client: "CREC 10", status: "Ongoing", image: kdf1, isKdf: true },
  { name: "Aeroclub Kitchen", client: "Aeroclub EA", status: "Design", image: projectAeroclub },
  { name: "Kitchen & Ablution Block", client: "Loreto Convent", status: "Ongoing", image: projectLoreto },
  { name: "Various Bank Fitouts (BoQ)", client: "Prime Bank", status: "Ongoing", image: projectBankFitout },
  { name: "New Rehema House Fitout", client: "NFDK", status: "Ongoing", image: projectRehema },
  { name: "Hacienda Michael", client: "Njau Ngacha Family", status: "Ongoing", image: projectHacienda },
  { name: "Moran Hotel", client: "Centcrete Ltd", status: "Award", image: projectMoran },
  { name: "Masalani Works", client: "DMS", status: "Ongoing", image: projectMasalani },
];

const clients = [
  "Prime Bank Ltd", "Mayfair Insurance", "Zep-Re (PTA Reinsurance)", "Aero Club of East Africa",
  "Lab & Allied Ltd", "Kabarak University", "Loreto Convent Schools", "Gelian Hotel Machakos",
  "Nirma Holdings Ltd", "Shelter Solutions Ltd", "Kria Developers Ltd", "Centcrete Ltd",
];

const PortfolioPage = () => {
  return (
    <main>
      <SEO
        title="Portfolio — Construction Projects Kenya"
        description="Explore Quantsol's portfolio of 25+ construction and real estate projects across Kenya worth over Ksh 30 Billion, including KDF Housing, Tilisi, and more."
        path="/portfolio"
      />
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
                <div className={`group overflow-hidden card-hover bg-card ${p.isTilisi ? "md:col-span-2 lg:col-span-3" : ""}`}>
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
                    <p className="text-xs text-muted-foreground">{p.client}</p>
                  </div>
                  {p.isTilisi && (
                    <div className="px-6 pb-6 space-y-6">
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold">Site Progress</p>
                      <SiteGallery siteName="Tilisi" images={[tilisi1, tilisi2, tilisi3, tilisi4, tilisi5, tilisi6, tilisi7, tilisi8, tilisi9]} />
                    </div>
                  )}
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
