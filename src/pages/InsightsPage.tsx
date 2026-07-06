import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import bgBoqReview from "@/assets/bg-boq-review.jpg";
import bgDigitalEstimation from "@/assets/bg-digital-estimation.jpg";
import bgSiteSupervision from "@/assets/bg-site-supervision.jpg";
import heroImg from "@/assets/hero-building.jpg";
import projectHousing from "@/assets/project-housing.jpg";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  body: string[];
}

const articles: Article[] = [
  {
    slug: "cost-overruns-kenya-construction",
    title: "Why Kenyan Construction Projects Overrun — and How to Prevent It",
    excerpt:
      "A closer look at the root causes of cost and time overruns in Kenya's construction sector, and the practical controls quantity surveyors use to keep projects on budget.",
    image: bgBoqReview,
    category: "Cost Management",
    author: "Quantsol Editorial",
    date: "March 4, 2026",
    readTime: "6 min read",
    body: [
      "Cost overruns remain one of the most persistent problems in Kenya's construction industry. Studies by the Institution of Surveyors of Kenya and the National Construction Authority consistently show that a significant share of public and private projects exceed their original budgets by 20% or more. On multi-billion-shilling developments, that gap can mean stalled sites, disputed final accounts, and reputational damage that follows a developer for years.",
      "The causes are rarely a single event. Most overruns are the compound result of weak pre-contract cost planning, incomplete design at tender stage, unrealistic client-driven programmes, and a procurement culture that still rewards the lowest bid instead of the most competent one. Once construction starts, variations pile up, provisional sums balloon, and the project team ends up managing claims instead of delivering the building.",
      "The good news is that most of these risks are controllable. Rigorous feasibility and elemental cost planning at concept stage set a realistic budget before design freezes. A properly measured Bill of Quantities — priced against current Kenyan market rates, not a copy-pasted historical rate — gives a defensible baseline. Structured tender evaluation, contract administration under a recognised form (JBC or FIDIC), and monthly cost reporting to the client close the loop.",
      "For developers, the practical takeaway is simple: engage a BORAQS-registered quantity surveyor before design is complete, insist on a monthly cost report against the approved budget, and treat variations as decisions to be authorised, not surprises to be discovered. Projects that follow this discipline routinely land within 3% to 5% of their contract sum — even in a volatile materials market.",
    ],
  },
  {
    slug: "reading-a-boq",
    title: "How to Read a Bill of Quantities Without Getting Lost",
    excerpt:
      "A plain-English guide for developers, project owners, and first-time clients on what a BoQ actually contains and how to use it to control your project.",
    image: bgDigitalEstimation,
    category: "Client Guides",
    author: "Quantsol Editorial",
    date: "February 18, 2026",
    readTime: "5 min read",
    body: [
      "For many first-time developers in Kenya, the Bill of Quantities is the first serious construction document they encounter — and often the most intimidating. A typical BoQ for a residential apartment block can run to 200 pages of line items, preambles, and provisional sums. But once you understand its structure, it becomes the most powerful cost-control tool you have.",
      "A BoQ is organised into sections that follow the way a building is actually constructed: preliminaries, substructure, superstructure, finishes, services, and external works. Each section lists measured quantities of work — cubic metres of concrete, square metres of plaster, numbers of doors — with a rate against each item. The total is your contract sum.",
      "The parts most clients miss are the preliminaries and the provisional sums. Preliminaries cover the contractor's site setup, insurances, and supervision — usually 8% to 15% of the contract sum on a typical Kenyan project. Provisional sums are placeholders for work not yet fully designed; they must be spent against actual quotations and reconciled at final account. If you don't track them, they quietly become your biggest source of overrun.",
      "Three practical habits protect you as a client. First, ask your QS to walk you through the summary page and explain any figure that surprises you. Second, insist that every variation is priced against BoQ rates before it is instructed. Third, request a monthly cost report that compares work done, work certified, and remaining commitments against the contract sum. These three habits alone will remove most of the financial anxiety from your project.",
    ],
  },
  {
    slug: "affordable-housing-programme",
    title: "Kenya's Affordable Housing Programme: What It Means for Developers",
    excerpt:
      "An overview of the Affordable Housing Act framework, the role of the Housing Levy, and where private developers and consultants fit into the delivery pipeline.",
    image: projectHousing,
    category: "Policy & Markets",
    author: "Quantsol Editorial",
    date: "January 27, 2026",
    readTime: "7 min read",
    body: [
      "The Affordable Housing Programme is now the single largest driver of construction activity in Kenya. Backed by the Affordable Housing Act and funded partly through the Housing Levy, it targets the delivery of hundreds of thousands of units across the country under a mix of public delivery, Public-Private Partnerships, and private-sector-led social housing.",
      "For developers, the opportunity is significant but the compliance layer is real. Projects delivered under the programme must meet a defined typology — one, two, and three-bedroom units at controlled sale prices — and follow procurement rules that require open tendering, registered professionals, and independent cost verification. The State Department for Housing and the Affordable Housing Board have made clear that projects that cut corners on cost transparency will not be gazetted.",
      "This is where the quantity surveyor's role has changed. On affordable housing schemes, the QS is no longer just a cost accountant. They sit at the centre of feasibility modelling — testing whether a site can deliver units at the mandated price point given current material and labour costs — and they hold the audit trail that the Board and the Auditor-General will eventually review. On PPP projects, the QS also carries the financial model that justifies the concession period and the offtake price.",
      "For private developers looking to participate, the practical route is to build a compliant team early: a registered architect, a BORAQS-registered QS, a project manager with public-sector experience, and a contractor pre-qualified under the National Construction Authority. Get the feasibility and cost plan right at concept stage, and the programme becomes one of the most predictable segments of the Kenyan market to build in.",
    ],
  },
  {
    slug: "site-supervision-that-works",
    title: "What Good Site Supervision Actually Looks Like",
    excerpt:
      "Beyond the site meeting minutes — the daily practices that separate well-run Kenyan construction sites from the ones that quietly drift off programme.",
    image: bgSiteSupervision,
    category: "Project Management",
    author: "Quantsol Editorial",
    date: "January 9, 2026",
    readTime: "4 min read",
    body: [
      "Every project has a site meeting every week. Every project also has minutes. What separates a well-run Kenyan site from a struggling one is almost never the meetings — it is the daily practice in between.",
      "Good supervision starts with a live programme that everyone on site can see. Not a printed Gantt chart from month one, but a rolling four-week look-ahead that is updated every Monday and posted in the site office. When the foreman, the QS, and the client's representative are all working off the same look-ahead, delays get flagged in days, not months.",
      "The second habit is measurement. On a healthy site, work is measured jointly by the contractor's QS and the consultant QS every month, against the BoQ, before any interim certificate is issued. Photos are dated, materials on site are counted, and defects are logged with a target close-out date. This routine removes almost all of the friction that normally shows up at final account.",
      "The third — and least glamorous — habit is a clean paper trail. Instructions in writing, RFIs answered within 48 hours, variations priced before they are executed, and a single shared drive where the latest drawing revision lives. When a project ends up in dispute, it is almost always because one of these three habits was skipped. When a project ends quietly and on budget, it is almost always because all three were kept.",
    ],
  },
  {
    slug: "material-price-volatility",
    title: "Managing Material Price Volatility in a Shifting Market",
    excerpt:
      "Steel, cement, and imported finishes have moved sharply in the last 24 months. Here is how developers and contractors can protect margins without stalling projects.",
    image: heroImg,
    category: "Cost Management",
    author: "Quantsol Editorial",
    date: "December 12, 2025",
    readTime: "5 min read",
    body: [
      "The last two years have been unusually volatile for Kenyan construction materials. Reinforcement steel, cement, aluminium sections, and imported finishes have all seen double-digit swings in either direction, driven by a mix of shilling movement, global commodity cycles, and shipping costs through Mombasa.",
      "For fixed-price contracts, this volatility is a direct hit to contractor margins — and eventually to the developer, because a contractor squeezed on materials will find the money somewhere, usually in quality or programme. For cost-reimbursable and target-cost contracts, the pain lands on the developer's balance sheet.",
      "There are three practical tools that experienced consultants use. The first is a fluctuations clause tied to a published index — the KNBS construction input price index is the most defensible reference in the Kenyan market. The second is early procurement of key long-lead items: order and pay for reinforcement, structural steel, and imported finishes early, and store them properly on site or in a bonded warehouse. The third is a materials reserve within the contingency — typically 3% to 5% of the contract sum, ring-fenced specifically for price movement and released only against evidence.",
      "None of these tools remove volatility, but together they convert an unmanaged risk into a managed one. The projects that struggle are almost always the ones that ignored the risk at contract stage and tried to negotiate it under pressure halfway through construction.",
    ],
  },
];

const InsightsPage = () => {
  const [selected, setSelected] = useState<Article | null>(null);

  if (selected) {
    return (
      <main>
        <SEO
          title={`${selected.title} — Quantsol Insights`}
          description={selected.excerpt}
          path="/insights"
        />
        <article className="pt-32 pb-20">
          <div className="section-container max-w-3xl">
            <button
              onClick={() => setSelected(null)}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Back to Insights
            </button>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">{selected.category}</span>
            <div className="gold-line mt-4 mb-6" />
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-balance mb-6">
              {selected.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground mb-10">
              <span className="inline-flex items-center gap-2"><User size={12} /> {selected.author}</span>
              <span className="inline-flex items-center gap-2"><Calendar size={12} /> {selected.date}</span>
              <span className="inline-flex items-center gap-2"><Clock size={12} /> {selected.readTime}</span>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden mb-10">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              {selected.body.map((p, i) => (
                <p key={i} className="text-base md:text-lg leading-relaxed text-foreground/85">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-16 pt-8 border-t border-border">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-8 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-accent/90 transition-colors"
              >
                Discuss Your Project <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </article>
      </main>
    );
  }

  return (
    <main>
      <SEO
        title="Insights — Construction & Cost Management in Kenya"
        description="Articles, guides, and market commentary on quantity surveying, project management, and Kenya's construction sector from Quantsol Consultants."
        path="/insights"
      />
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="section-container">
          <ScrollReveal>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Insights</span>
            <div className="gold-line mt-4 mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground max-w-3xl">
              Perspectives on Kenya's Built Environment
            </h1>
            <p className="text-primary-foreground/60 text-lg mt-6 max-w-2xl">
              Practical articles on cost management, project delivery, and the policy shifts shaping construction across Kenya — written for developers, contractors, and institutional clients.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <ScrollReveal key={a.slug} delay={(i % 3) * 0.1}>
                <button
                  onClick={() => { setSelected(a); window.scrollTo(0, 0); }}
                  className="group text-left w-full h-full flex flex-col bg-card card-hover overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 bg-navy/80 text-primary-foreground text-[10px] font-mono tracking-wider px-3 py-1 uppercase">
                      {a.category}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-[11px] text-muted-foreground mb-3">
                      <span className="inline-flex items-center gap-1.5"><Calendar size={11} />{a.date}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock size={11} />{a.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight mb-3 group-hover:text-accent transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {a.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-widest uppercase group-hover:gap-3 transition-all">
                      Read Article <ArrowRight size={12} />
                    </span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default InsightsPage;
