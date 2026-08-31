import type { Project, SiteSettings, Testimonial } from "@/types";

export const COMPANY = {
  name: "SOSync AI Tech",
  legalName: "SOSync AI Tech IT Solutions",
  tagline: "Innovate. Integrate. Elevate.",
  subTagline: "Digital Solutions for a Smarter Tomorrow",
  phonePrimary: "+91 91724 03714",
  email: "support@sosyncaitech.in",
  address: "Office No. 204, Bhagwati Chowk, Kharadi, Pune, Maharashtra 411014",
  city: "Kharadi, Pune",
  operatingHours: "Mon – Sat · 9:30 AM – 7:00 PM",
  mapEmbed:
    "https://www.google.com/maps?q=Kharadi,+Pune,+Maharashtra+411014&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Kharadi+Pune",
  socials: {
    linkedin: "https://www.linkedin.com/company/sosyncaitech",
    instagram: "https://www.instagram.com/sosyncaitech",
    facebook: "https://www.facebook.com/sosyncaitech",
    twitter: "https://twitter.com/sosyncaitech",
  },
};

export const DEFAULT_SETTINGS: SiteSettings = {
  phonePrimary: COMPANY.phonePrimary,
  phoneSecondary: "+91 91724 03714",
  email: COMPANY.email,
  address: COMPANY.address,
  operatingHours: COMPANY.operatingHours,
  announcementText:
    "🚀 Limited Offer — Book a ₹1 Demo Consultation & get 6 Months FREE Technical Support (Worth ₹25,000+)",
  announcementEnabled: true,
  maintenanceMode: false,
};

export interface ServiceDivision {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  features: string[];
  capabilities: string[];
  startingAt: string;
}

export const SERVICES: ServiceDivision[] = [
  {
    id: "website",
    title: "Website Development",
    short: "Website Dev",
    icon: "Globe",
    description:
      "Conversion-focused corporate websites, e-commerce storefronts and landing funnels engineered for speed, SEO and scale.",
    features: [
      "Business & corporate websites",
      "E-commerce with payment gateway",
      "Landing pages & funnels",
      "Core Web Vitals + technical SEO",
    ],
    capabilities: [
      "React / Next.js frontends",
      "Headless CMS integration",
      "Razorpay / Stripe checkout",
      "Multilingual & accessibility ready",
      "CDN, caching & 99.9% uptime hosting",
    ],
    startingAt: "₹24,999",
  },
  {
    id: "software",
    title: "Software & ERP Solutions",
    short: "Software & ERP",
    icon: "Boxes",
    description:
      "Custom business software, ERP, CRM and billing platforms that replace spreadsheets with a single source of truth.",
    features: [
      "Custom ERP & CRM builds",
      "Inventory, billing & GST invoicing",
      "School / college management systems",
      "Role-based dashboards & reporting",
    ],
    capabilities: [
      "Multi-branch, multi-user architecture",
      "Approval workflows & audit trails",
      "Data migration from legacy systems",
      "Offline-first POS modules",
      "API-first integration layer",
    ],
    startingAt: "₹79,999",
  },
  {
    id: "enterprise",
    title: "Enterprise IT Services",
    short: "Enterprise IT",
    icon: "ServerCog",
    description:
      "Cloud, DevOps and managed IT infrastructure with hardened security baselines and 24×7 monitoring.",
    features: [
      "AWS / Azure cloud migration",
      "DevOps, CI/CD & containerisation",
      "Network, firewall & endpoint security",
      "Managed IT support & AMC",
    ],
    capabilities: [
      "Infrastructure as code (Terraform)",
      "Kubernetes & Docker orchestration",
      "Backup, DR & business continuity",
      "SSO, MFA & access governance",
      "Cost optimisation audits",
    ],
    startingAt: "₹49,999",
  },
  {
    id: "marketing",
    title: "Growth & Digital Marketing",
    short: "Growth Marketing",
    icon: "TrendingUp",
    description:
      "Performance marketing engines that turn traffic into qualified pipeline — SEO, paid ads and lifecycle automation.",
    features: [
      "SEO & content strategy",
      "Google & Meta performance ads",
      "Social media management",
      "WhatsApp & email automation",
    ],
    capabilities: [
      "Keyword & competitor intelligence",
      "Landing page CRO experiments",
      "GA4 + PowerBI attribution dashboards",
      "Lead scoring & CRM sync",
      "Monthly growth reporting",
    ],
    startingAt: "₹19,999/mo",
  },
  {
    id: "design",
    title: "Graphic & Brand Design",
    short: "Graphic Design",
    icon: "Palette",
    description:
      "Brand identity, product UI and campaign creatives built by designers who think in systems, not one-offs.",
    features: [
      "Logo & complete brand identity",
      "UI/UX product design systems",
      "Packaging & print collateral",
      "Ad creatives & motion graphics",
    ],
    capabilities: [
      "Design tokens & component libraries",
      "Figma prototypes with handoff specs",
      "Brand guideline documentation",
      "Product explainer videos",
      "Catalogue & pitch deck design",
    ],
    startingAt: "₹14,999",
  },
  {
    id: "ai",
    title: "AI & Automation",
    short: "AI Automation",
    icon: "BrainCircuit",
    description:
      "AI agents, RAG assistants and workflow automation that remove manual work from your operations.",
    features: [
      "Custom AI chatbots & voice agents",
      "RAG knowledge assistants",
      "Document & invoice data extraction",
      "Workflow & back-office automation",
    ],
    capabilities: [
      "LLM orchestration & guardrails",
      "Vector search & private knowledge bases",
      "NLP classification & sentiment",
      "Predictive analytics models",
      "Human-in-the-loop review consoles",
    ],
    startingAt: "₹59,999",
  },
];

export const TECH_STACK = [
  { name: "React", group: "Frontend" },
  { name: "Next.js", group: "Frontend" },
  { name: "TypeScript", group: "Frontend" },
  { name: "Node.js", group: "Backend" },
  { name: "Python", group: "Backend" },
  { name: "PostgreSQL", group: "Data" },
  { name: "AWS", group: "Cloud" },
  { name: "Docker", group: "Cloud" },
  { name: "AI/ML", group: "AI" },
  { name: "NLP", group: "AI" },
  { name: "RAG", group: "AI" },
  { name: "PowerBI", group: "Data" },
  { name: "Razorpay", group: "Integrations" },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Requirement Analysis",
    detail: "Deep discovery workshops to map goals, users, and success metrics.",
  },
  {
    step: "02",
    title: "Architecture Roadmap",
    detail: "System design, tech selection, timelines and milestone planning.",
  },
  {
    step: "03",
    title: "UI/UX Prototype",
    detail: "Clickable Figma prototypes approved before a line of code is written.",
  },
  {
    step: "04",
    title: "Clean Development",
    detail: "Modular, documented code shipped in weekly reviewable sprints.",
  },
  {
    step: "05",
    title: "QA & Security",
    detail: "Functional, load and security testing with OWASP hardening.",
  },
  {
    step: "06",
    title: "Client Demo",
    detail: "Guided walkthrough on staging with your team's feedback captured.",
  },
  {
    step: "07",
    title: "Production Deployment",
    detail: "Zero-downtime release with monitoring, backups and CDN setup.",
  },
  {
    step: "08",
    title: "Admin Handover & Training",
    detail: "Full source, credentials, documentation and hands-on training.",
  },
  {
    step: "09",
    title: "6 Months Free Support Warranty",
    detail: "Priority bug fixes and technical support included at no cost.",
  },
];

export const LEADERSHIP = [
  {
    name: "Shashant Shekhar",
    role: "Founder & Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    focus: "Business strategy & enterprise delivery",
  },
  {
    name: "Omkar Bachanatti",
    role: "Co-Founder & Chief Technology Officer",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=80",
    focus: "Cloud architecture & platform engineering",
  },
  {
    name: "Sanika Chougule",
    role: "Head of Design & Client Experience",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    focus: "Product design systems & UX research",
  },
  {
    name: "Vivek Dhumal",
    role: "Head of Growth Marketing",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    focus: "Performance marketing & analytics",
  },
  {
    name: "Aslam Pathan",
    role: "Head of Enterprise IT & Security",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    focus: "Infrastructure, DevOps & compliance",
  },
];

export const SENIOR_SQUAD = [
  {
    name: "Tridev Sharma",
    role: "Senior Full-Stack Engineer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    focus: "React · Node · Microservices",
  },
  {
    name: "Sharik Ahmed",
    role: "Senior AI & Automation Engineer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    focus: "LLM agents · RAG · NLP",
  },
  {
    name: "Vicky Kumar",
    role: "Senior Backend Engineer",
    image:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=600&q=80",
    focus: "Python · PostgreSQL · APIs",
  },
  {
    name: "Ashish Ranjan",
    role: "Senior DevOps Engineer",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    focus: "AWS · Kubernetes · CI/CD",
  },
  {
    name: "Anurag Kumar",
    role: "Senior QA & Security Analyst",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    focus: "Automation testing · OWASP audits",
  },
];

const now = new Date().toISOString();

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: "morpankh-saree",
    title: "Morpankh Saree",
    client: "Morpankh Saree, Pune",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Premium ethnic-wear storefront with catalogue automation and UPI-first checkout.",
    challenge:
      "Manual WhatsApp order taking capped daily sales and made inventory tracking impossible across two stores.",
    solution:
      "Built a headless commerce storefront with bulk catalogue import, variant-level stock sync, Razorpay checkout and an owner dashboard for offline + online orders.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Razorpay", "AWS"],
    metrics: [
      { label: "Online Orders", value: "+218%" },
      { label: "Page Load", value: "1.1s" },
      { label: "Cart Recovery", value: "31%" },
    ],
    featured: true,
    createdAt: now,
  },
  {
    id: "sp-art-hubs",
    title: "SP Art Hubs",
    client: "SP Art Hubs",
    category: "Portals",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Art gallery and commission portal with curated exhibitions and enquiry pipeline.",
    challenge:
      "Artists had no digital shopfront and enquiries were lost across social DMs.",
    solution:
      "Delivered a gallery portal with artist profiles, exhibition collections, high-resolution zoom viewer and a CRM-backed commission enquiry pipeline.",
    tech: ["React", "TypeScript", "Node.js", "Cloudinary"],
    metrics: [
      { label: "Qualified Enquiries", value: "4.6×" },
      { label: "Avg. Session", value: "5m 12s" },
      { label: "Artists Onboarded", value: "40+" },
    ],
    featured: true,
    createdAt: now,
  },
  {
    id: "suraj-naturo",
    title: "Suraj Naturo Dry Fruits",
    client: "Suraj Naturo Foods",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=1200&q=80",
    summary:
      "D2C dry fruits commerce platform with subscription packs and logistics integration.",
    challenge:
      "Seasonal demand spikes broke fulfilment and repeat buyers had no easy reorder path.",
    solution:
      "Launched a D2C store with weight-based pricing, subscription gift packs, courier rate integration and automated WhatsApp order updates.",
    tech: ["Next.js", "Python", "PostgreSQL", "Docker", "Razorpay"],
    metrics: [
      { label: "Repeat Purchase", value: "42%" },
      { label: "Festive GMV", value: "+310%" },
      { label: "Ops Time Saved", value: "22 hrs/wk" },
    ],
    featured: true,
    createdAt: now,
  },
  {
    id: "sonai-residential",
    title: "Sonai Residential World School",
    client: "Sonai Residential World School",
    category: "ERP / Software",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
    summary:
      "End-to-end school ERP covering admissions, fees, hostel and parent communication.",
    challenge:
      "Admissions, fee receipts and hostel records lived in disconnected registers and Excel files.",
    solution:
      "Implemented a unified school ERP with online admissions, GST-compliant fee receipting, hostel allocation, transport routing and a parent portal with instant notices.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS", "PowerBI"],
    metrics: [
      { label: "Fee Collection Cycle", value: "-58%" },
      { label: "Records Digitised", value: "12,000+" },
      { label: "Parent Adoption", value: "91%" },
    ],
    featured: true,
    createdAt: now,
  },
  {
    id: "karyon-college",
    title: "Karyon College",
    client: "Karyon College",
    category: "Portals",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Academic portal with programme directory, online applications and result publishing.",
    challenge:
      "Prospective students could not compare programmes and applications were paper-based.",
    solution:
      "Built a fast academic portal with programme explorer, document-upload applications, payment-linked forms and a secure result publishing console.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    metrics: [
      { label: "Online Applications", value: "3.8×" },
      { label: "Admin Hours Saved", value: "35/mo" },
      { label: "Mobile Traffic", value: "74%" },
    ],
    featured: false,
    createdAt: now,
  },
  {
    id: "sonai-group",
    title: "Sona I Group of Institutes",
    client: "Sona I Group of Institutes",
    category: "ERP / Software",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Multi-campus institute management suite with consolidated leadership analytics.",
    challenge:
      "Five campuses reported data separately, leaving management without a consolidated view.",
    solution:
      "Deployed a multi-tenant institute suite with per-campus roles, unified attendance and fee ledgers, plus PowerBI leadership dashboards.",
    tech: ["React", "Python", "PostgreSQL", "Docker", "PowerBI"],
    metrics: [
      { label: "Campuses Unified", value: "5" },
      { label: "Reporting Speed", value: "12× faster" },
      { label: "Data Accuracy", value: "99.4%" },
    ],
    featured: true,
    createdAt: now,
  },
];

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Rupali Deshmukh",
    company: "Morpankh Saree",
    rating: 5,
    review:
      "Our storefront went live in under three weeks and online orders tripled in the first festive season. The team stayed available long after handover.",
    status: "Approved",
    createdAt: now,
  },
  {
    id: "t-2",
    name: "Dr. A. Kulkarni",
    company: "Sonai Residential World School",
    rating: 5,
    review:
      "The ERP replaced six registers. Fee collection is now closed in days instead of weeks and parents finally get instant updates.",
    status: "Approved",
    createdAt: now,
  },
  {
    id: "t-3",
    name: "Suraj Patil",
    company: "Suraj Naturo Dry Fruits",
    rating: 5,
    review:
      "Clean code, clear timelines, complete IP ownership. The WhatsApp automation alone saves us over 20 hours every week.",
    status: "Approved",
    createdAt: now,
  },
  {
    id: "t-4",
    name: "Prof. S. Jadhav",
    company: "Sona I Group of Institutes",
    rating: 4,
    review:
      "Consolidated dashboards across five campuses gave our management real visibility for the first time.",
    status: "Approved",
    createdAt: now,
  },
];

export const FAQS = [
  {
    q: "What is the ₹1 Demo Consultation?",
    a: "It is a token-priced 45-minute strategy call where our senior engineers audit your requirement, propose an architecture and share an honest timeline and budget — no obligation to proceed.",
  },
  {
    q: "How fast can you deliver a project?",
    a: "Websites and landing funnels typically ship in 1–3 weeks. ERP and custom software timelines depend on scope and are locked during the architecture roadmap stage.",
  },
  {
    q: "Do I own the source code?",
    a: "Yes. You get 100% intellectual property ownership, full source code, repository access and complete documentation at handover.",
  },
  {
    q: "What does the 6 months free support include?",
    a: "Priority bug fixes, security patches, minor content updates and technical assistance — a package worth ₹25,000+ included free with every build.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes, we currently serve clients across 12+ countries with overlapping-hours communication and async weekly demos.",
  },
  {
    q: "How do payments work?",
    a: "Projects run on milestone-based payments — typically an advance, a mid-build milestone and a final release on deployment. GST invoices are issued for every payment.",
  },
];
