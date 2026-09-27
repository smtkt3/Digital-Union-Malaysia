export type TradeProject = {
  slug: string;
  title: string;
  client?: string;
  sector: string;
  summary: string;
  outcomes: string[];
  year?: string;
  image?: string;
};

export type TradeService = {
  number: string;
  slug: string;
  icon: string;
  name: string;
  eyebrow: string;
  summary: string;
  promise: string;
  capabilities: string[];
  deliverables: string[];
  audiences: string[];
  projects: TradeProject[];
};

export const tradeServices: TradeService[] = [
  {
    number: "01",
    slug: "consultancy",
    icon: "◇",
    name: "Consultancy",
    eyebrow: "Practical analysis and implementation planning",
    summary: "Structured consultancy that turns complex commercial questions into evidence, priorities and an executable plan.",
    promise: "You receive clear findings, practical recommendations and a roadmap shaped around the decision your organisation needs to make.",
    capabilities: ["Business planning", "Feasibility assessment", "Market research", "Operating model design", "Growth planning", "Implementation roadmaps"],
    deliverables: ["Current-state assessment", "Opportunity and feasibility analysis", "Recommendations and priorities", "Implementation roadmap", "Leadership presentation", "Decision-ready documentation"],
    audiences: ["Businesses evaluating a new opportunity", "Leaders planning transformation or expansion", "Teams requiring independent analysis"],
    projects: []
  },
  {
    number: "02",
    slug: "advisory-services",
    icon: "◈",
    name: "Advisory Services",
    eyebrow: "Independent direction for critical decisions",
    summary: "Commercial and strategic advisory that helps leaders evaluate options, manage risk and move with greater confidence.",
    promise: "Advice stays connected to commercial reality, stakeholder responsibilities and the practical steps required to move forward.",
    capabilities: ["Strategic advisory", "Commercial decision support", "Market-entry guidance", "Governance advisory", "Risk evaluation", "Executive facilitation"],
    deliverables: ["Decision framework", "Strategic options assessment", "Risk and dependency review", "Market-entry guidance", "Governance recommendations", "Executive action plan"],
    audiences: ["Boards and leadership teams", "Businesses entering new markets", "Organisations facing high-impact decisions"],
    projects: []
  },
  {
    number: "03",
    slug: "management-services",
    icon: "▦",
    name: "Management Services",
    eyebrow: "Coordination, control and visible execution",
    summary: "Hands-on management support that aligns people, workstreams and reporting around defined business outcomes.",
    promise: "Stakeholders gain clearer ownership, dependable coordination and useful visibility from planning through completion.",
    capabilities: ["Programme management", "Operational coordination", "Project controls", "Performance reporting", "Stakeholder management", "Process improvement"],
    deliverables: ["Programme structure", "Roles and responsibilities", "Milestone and risk controls", "Management reporting", "Stakeholder cadence", "Operational improvement plan"],
    audiences: ["Growing organisations", "Complex multi-party programmes", "Leadership teams needing execution support"],
    projects: []
  },
  {
    number: "04",
    slug: "training-of-personnel",
    icon: "◎",
    name: "Training of Personnel",
    eyebrow: "Capability development for stronger teams",
    summary: "Purposeful personnel training designed around the skills, behaviours and operating standards an organisation needs.",
    promise: "Training is tailored to real roles and measurable capability needs, with practical delivery and reinforcement built into the programme.",
    capabilities: ["Training needs analysis", "Custom curriculum design", "Leadership development", "Professional skills", "Workshops and facilitation", "Assessment and reinforcement"],
    deliverables: ["Capability needs assessment", "Learning objectives", "Tailored training materials", "Facilitated learning sessions", "Participant assessment", "Post-training recommendations"],
    audiences: ["Corporate teams", "Managers and emerging leaders", "Organisations introducing new standards or ways of working"],
    projects: []
  },
  {
    number: "05",
    slug: "entertainment",
    icon: "✦",
    name: "Entertainment",
    eyebrow: "Professionally coordinated experiences and programmes",
    summary: "Entertainment and experience coordination for corporate, cultural and audience-focused programmes.",
    promise: "Every programme is shaped around the audience, purpose, operational requirements and partners needed for a controlled delivery.",
    capabilities: ["Programme concept development", "Corporate entertainment", "Cultural programmes", "Talent and vendor coordination", "Production planning", "Guest experience coordination"],
    deliverables: ["Creative programme concept", "Talent and supplier plan", "Production schedule", "Venue and guest coordination", "Run of show", "Delivery oversight"],
    audiences: ["Corporate organisations", "Event and programme owners", "Brands creating stakeholder or audience experiences"],
    projects: []
  }
];

export function getTradeService(slug: string) {
  return tradeServices.find(service => service.slug === slug);
}

export function tradeEnquiryLink(service: TradeService) {
  const params = new URLSearchParams({ interest: "Global Trade & Advisory", service: service.name });
  return `/contact?${params.toString()}`;
}
