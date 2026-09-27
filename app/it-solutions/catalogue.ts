export type CatalogueProduct = {
  code: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  includes: string[];
  timeline: string;
  engagement: string;
  audiences?: string[];
  requirements?: string[];
  faqs?: { question: string; answer: string }[];
};

export type ITProject = {
  slug: string;
  title: string;
  client?: string;
  sector: string;
  summary: string;
  outcomes: string[];
  year?: string;
  image?: string;
};

export type ITService = {
  number: string;
  slug: string;
  icon: string;
  name: string;
  eyebrow: string;
  summary: string;
  promise: string;
  capabilities: string[];
  products: CatalogueProduct[];
  projects?: ITProject[];
};

export const itServices: ITService[] = [
  {
    number: "01",
    slug: "digital-experiences",
    icon: "⌘",
    name: "Digital Experiences",
    eyebrow: "Websites, commerce and customer platforms",
    summary: "High-performance digital experiences designed to earn attention, build trust and turn interest into action.",
    promise: "From the first click to the final conversion, every detail works toward a measurable business outcome.",
    capabilities: ["Experience strategy", "UX and UI design", "Next.js development", "Commerce integration", "Content systems", "Performance optimisation"],
    products: [
      { code: "DX-01", slug: "launch-website", name: "Launch Website", tagline: "A premium digital presence built to convert.", description: "A focused company or campaign website with strategy, design, responsive development and launch support included.", includes: ["Discovery workshop", "Up to 8 core pages", "Responsive UX and UI", "CMS-ready build", "SEO foundations", "Launch support"], timeline: "Planned around your requirements", engagement: "Scoped website delivery" },
      { code: "DX-02", slug: "commerce-experience", name: "Commerce Experience", tagline: "A storefront that makes buying feel effortless.", description: "A conversion-focused ecommerce experience connected to your products, payments and operating workflow.", includes: ["Commerce strategy", "Product catalogue UX", "Checkout integration", "Customer accounts", "Analytics setup", "Team handover"], timeline: "Planned around your requirements", engagement: "Scoped commerce delivery" },
      { code: "DX-03", slug: "customer-portal", name: "Customer Portal", tagline: "One secure place for customers to get things done.", description: "A branded self-service portal for orders, documents, requests, updates and customer communication.", includes: ["User journey design", "Secure authentication", "Account dashboard", "Workflow integration", "Admin controls", "Deployment support"], timeline: "Planned around your requirements", engagement: "Custom product delivery" }
    ]
  },
  {
    number: "02",
    slug: "custom-software",
    icon: "◇",
    name: "Custom Software",
    eyebrow: "Purpose-built business systems",
    summary: "Software shaped around your operation, your teams and the advantage you want to create.",
    promise: "We replace disconnected work and limiting tools with one dependable system built to evolve with the business.",
    capabilities: ["Product discovery", "Web applications", "API development", "Systems integration", "Role-based access", "Ongoing enhancement"],
    products: [
      { code: "CS-01", slug: "operations-hub", name: "Operations Hub", tagline: "Run critical work from one connected workspace.", description: "A tailored internal platform that centralises processes, approvals, records and operational visibility.", includes: ["Workflow mapping", "Role-based dashboard", "Records and search", "Approvals", "Notifications", "Management reporting"], timeline: "Planned around your requirements", engagement: "Custom product delivery" },
      { code: "CS-02", slug: "workflow-platform", name: "Workflow Platform", tagline: "Turn repeatable work into a reliable system.", description: "A focused application that standardises a high-value workflow and removes manual coordination.", includes: ["Process discovery", "Custom workflow engine", "Forms and validation", "Status tracking", "Team permissions", "Audit history"], timeline: "Planned around your requirements", engagement: "Scoped implementation" },
      { code: "CS-03", slug: "integration-suite", name: "Integration Suite", tagline: "Make your existing systems work as one.", description: "Secure APIs and integrations that connect data and actions across the tools your business already uses.", includes: ["Integration architecture", "API development", "Data mapping", "Error handling", "Monitoring", "Technical documentation"], timeline: "Planned around your requirements", engagement: "Integration project" }
    ]
  },
  {
    number: "03",
    slug: "ai-automation",
    icon: "◉",
    name: "AI & Automation",
    eyebrow: "Intelligent workflows and assistants",
    summary: "Practical AI and automation that removes repetitive work, accelerates decisions and improves service.",
    promise: "We apply intelligence where it creates a clear operating advantage, with people, controls and measurable value built in.",
    capabilities: ["AI opportunity mapping", "Knowledge assistants", "Workflow automation", "Document intelligence", "Agentic systems", "Governance and monitoring"],
    products: [
      { code: "AI-01", slug: "ai-knowledge-assistant", name: "AI Knowledge Assistant", tagline: "Trusted answers from your business knowledge.", description: "A secure assistant that helps teams search, understand and act on approved company information.", includes: ["Knowledge audit", "Secure retrieval system", "Branded chat interface", "Source citations", "Access controls", "Usage analytics"], timeline: "Planned around your requirements", engagement: "AI implementation" },
      { code: "AI-02", slug: "workflow-automation", name: "Workflow Automation", tagline: "Let routine work move without routine effort.", description: "A connected automation layer for repetitive tasks, approvals, notifications and data movement.", includes: ["Automation discovery", "Priority workflow build", "System connectors", "Human approval points", "Exception handling", "Performance dashboard"], timeline: "Planned around your requirements", engagement: "Automation delivery" },
      { code: "AI-03", slug: "intelligent-service-desk", name: "Intelligent Service Desk", tagline: "Faster support with a human path built in.", description: "An AI-enabled service experience that handles common enquiries and routes complex cases to the right person.", includes: ["Service journey design", "AI response layer", "Ticket integration", "Human escalation", "Quality controls", "Team training"], timeline: "Planned around your requirements", engagement: "Service transformation" }
    ]
  },
  {
    number: "04",
    slug: "cloud-engineering",
    icon: "⬡",
    name: "Cloud Engineering",
    eyebrow: "Secure, scalable digital foundations",
    summary: "Cloud environments engineered for resilience, delivery speed and controlled growth.",
    promise: "Your teams get a foundation they can trust, operate and improve without hidden complexity.",
    capabilities: ["Cloud architecture", "Application hosting", "DevOps pipelines", "Security foundations", "Migration planning", "Reliability engineering"],
    products: [
      { code: "CL-01", slug: "cloud-foundation", name: "Cloud Foundation", tagline: "A secure landing zone ready for growth.", description: "A production-ready cloud baseline with identity, networking, security, monitoring and cost controls.", includes: ["Architecture blueprint", "Environment setup", "Identity and access", "Network security", "Monitoring", "Cost visibility"], timeline: "Planned around your requirements", engagement: "Foundation build" },
      { code: "CL-02", slug: "devops-accelerator", name: "DevOps Accelerator", tagline: "Ship software faster with confidence.", description: "Automated delivery pipelines and engineering standards that make releases repeatable and visible.", includes: ["Pipeline design", "Automated deployments", "Environment strategy", "Quality gates", "Release monitoring", "Team enablement"], timeline: "Planned around your requirements", engagement: "Engineering enablement" },
      { code: "CL-03", slug: "modernisation-planning", name: "Modernisation Planning", tagline: "Move a critical workload toward its next chapter.", description: "A structured assessment and implementation path for modernising or migrating an existing application.", includes: ["Workload assessment", "Target architecture", "Migration plan", "Pilot implementation", "Risk controls", "Handover roadmap"], timeline: "Planned around your requirements", engagement: "Modernisation project" }
    ]
  },
  {
    number: "05",
    slug: "data-intelligence",
    icon: "◎",
    name: "Data Intelligence",
    eyebrow: "Connected data and decision systems",
    summary: "Clear, timely insight built from the data your business already creates.",
    promise: "We connect fragmented information into decision tools leaders and teams can use every day.",
    capabilities: ["Data strategy", "Executive dashboards", "Analytics engineering", "Data integration", "Operational reporting", "Data quality"],
    products: [
      { code: "DI-01", slug: "executive-dashboard", name: "Executive Dashboard", tagline: "The decisions that matter, visible in one place.", description: "A focused leadership dashboard that connects priority metrics, trends and action signals.", includes: ["KPI alignment", "Data source mapping", "Dashboard design", "Automated refresh", "Role-based views", "Leadership handover"], timeline: "Planned around your requirements", engagement: "Insight delivery" },
      { code: "DI-02", slug: "analytics-foundation", name: "Analytics Foundation", tagline: "A dependable base for reporting and growth.", description: "A structured analytics layer that creates consistent definitions, trusted reporting and room to scale.", includes: ["Data audit", "Metric framework", "Analytics model", "Reporting workspace", "Quality checks", "Documentation"], timeline: "Planned around your requirements", engagement: "Foundation build" },
      { code: "DI-03", slug: "data-integration-layer", name: "Data Integration Layer", tagline: "Bring operational data into one reliable flow.", description: "Automated data pipelines that connect core systems and make information available where it is needed.", includes: ["Source assessment", "Pipeline architecture", "Data transformation", "Scheduling", "Monitoring", "Support runbook"], timeline: "Planned around your requirements", engagement: "Integration project" }
    ]
  },
  {
    number: "06",
    slug: "technology-advisory",
    icon: "▦",
    name: "Technology Advisory",
    eyebrow: "Clear direction for technology decisions",
    summary: "Independent guidance that aligns technology investment, delivery and risk with business priorities.",
    promise: "You leave with a practical decision, a realistic roadmap and the confidence to move.",
    capabilities: ["Technology strategy", "Architecture review", "Delivery assurance", "Vendor evaluation", "Digital due diligence", "AI readiness"],
    products: [
      { code: "TA-01", slug: "technology-roadmap", name: "Technology Roadmap", tagline: "A clear sequence from today to the target state.", description: "A practical technology plan that aligns priorities, investments, dependencies and delivery stages.", includes: ["Leadership interviews", "Current-state review", "Priority model", "Target architecture", "Investment roadmap", "Executive presentation"], timeline: "Planned around your requirements", engagement: "Advisory engagement" },
      { code: "TA-02", slug: "architecture-review", name: "Architecture Review", tagline: "Know what is strong, risky and ready to change.", description: "An independent review of a platform or proposed solution with clear findings and recommendations.", includes: ["Technical discovery", "Architecture assessment", "Security review", "Scalability review", "Risk register", "Action plan"], timeline: "Planned around your requirements", engagement: "Independent review" },
      { code: "TA-03", slug: "digital-due-diligence", name: "Digital Due Diligence", tagline: "Make a technology decision with evidence.", description: "Structured technical diligence for acquisitions, investments, partnerships or major vendor commitments.", includes: ["Technology assessment", "Product and code review", "Operating capability review", "Risk analysis", "Value opportunities", "Decision report"], timeline: "Planned around your requirements", engagement: "Due diligence" }
    ]
  },
  {
    number: "07",
    slug: "airline-ticketing-systems",
    icon: "✈",
    name: "Airline Ticketing Systems",
    eyebrow: "B2B and B2C airline retailing technology",
    summary: "Professional airline booking websites and ticketing platforms for travel sellers, agency networks and customer-facing travel brands.",
    promise: "We design the customer journey, agency controls and operational workflows around your content sources, commercial model and servicing requirements.",
    capabilities: ["B2C booking websites", "B2B agency portals", "GDS and NDC connectivity", "Offers and orders", "Payments and agency credit", "Ticketing operations"],
    products: [
      {
        code: "AT-01",
        slug: "b2c-airline-booking-website",
        name: "B2C Airline Booking Website",
        tagline: "A branded flight-shopping experience built for direct customers.",
        description: "A responsive airline booking website for searching fares, presenting flight options, capturing traveller details, accepting payment and managing booking communications.",
        includes: ["Flight search and fare display", "Traveller and ancillary journey", "Booking and ticketing API integration", "Secure payment flow", "Customer accounts and notifications", "Admin dashboard and reporting"],
        timeline: "Planned around your requirements",
        engagement: "B2C travel platform delivery",
        audiences: ["Online travel agencies", "Travel companies launching direct online sales", "Airlines or consolidators requiring a branded booking channel"],
        requirements: ["Approved air-content or airline API access", "Payment gateway and settlement arrangements", "Fare, refund and servicing policies", "Brand, market and regulatory requirements"],
        faqs: [
          { question: "Can the booking website connect to GDS, NDC or airline APIs?", answer: "Yes. The integration approach is selected after reviewing your approved content sources, API documentation, commercial access and servicing requirements. Provider access and transaction agreements must be supplied or arranged by the client." },
          { question: "Can customers manage bookings after purchase?", answer: "Yes. Supported servicing can include itinerary access, notifications, change or cancellation requests, and other actions available through the connected provider APIs and agreed business rules." }
        ]
      },
      {
        code: "AT-02",
        slug: "b2b-travel-agent-portal",
        name: "B2B Travel Agent Portal",
        tagline: "A controlled ticketing workspace for agencies, subagents and corporate sellers.",
        description: "A secure B2B airline ticketing portal with agency onboarding, role-based access, fare controls, markups, credit management, booking workflows and operational reporting.",
        includes: ["Agency and subagent onboarding", "Roles and access controls", "Markup and commission rules", "Wallet and credit-limit workflows", "Booking, ticketing and refund servicing", "Sales, reconciliation and audit reporting"],
        timeline: "Planned around your requirements",
        engagement: "B2B ticketing platform delivery",
        audiences: ["Airline consolidators", "Travel wholesalers", "Travel management companies", "Agency and subagent networks"],
        requirements: ["Air-content and ticketing authority", "Agency commercial and credit policies", "Payment, settlement and reconciliation rules", "User roles, markets and compliance requirements"],
        faqs: [
          { question: "Can each agency have different markups and credit limits?", answer: "Yes. The portal can apply configurable commercial rules by agency, group, route, carrier or product, subject to the agreed operating model and source-system capabilities." },
          { question: "Does the portal support booking servicing and refunds?", answer: "It can support ticketing, void, reissue, cancellation and refund workflows where those actions are available through the selected providers and permitted by your operational rules." }
        ]
      },
      {
        code: "AT-03",
        slug: "unified-airline-ticketing-platform",
        name: "Unified Airline Ticketing Platform",
        tagline: "One operating core for B2C customers and B2B travel sellers.",
        description: "A unified airline retailing platform that connects customer booking, agency sales, air-content integrations, payments, ticket servicing and management reporting.",
        includes: ["B2C booking and B2B agency channels", "Shared air-content and offer layer", "GDS, NDC and airline API connectivity", "Central booking and servicing workspace", "Payment, credit and reconciliation controls", "Administration, audit and analytics"],
        timeline: "Planned around your requirements",
        engagement: "Enterprise travel technology delivery",
        audiences: ["Airlines and airline groups", "Large travel companies", "Consolidators operating multiple sales channels", "Travel businesses replacing disconnected booking tools"],
        requirements: ["Target distribution and retailing model", "Approved provider and airline connectivity", "Payment, settlement and accounting workflows", "Security, compliance and operating responsibilities"],
        faqs: [
          { question: "Can B2B and B2C channels share the same content and operations?", answer: "Yes. A shared integration and administration layer can serve both channels while applying separate pricing, access, payment and servicing rules for customers and trade partners." },
          { question: "Does the platform support modern Offers and Orders architecture?", answer: "The architecture can be planned for NDC-based Offer and Order workflows and an evolution path toward modern airline retailing, subject to provider capabilities and the client transformation roadmap." }
        ]
      }
    ]
  }
];

export function getITService(slug: string) {
  return itServices.find(service => service.slug === slug);
}

export function getITProduct(service: ITService, productSlug: string) {
  return service.products.find(product => product.slug === productSlug);
}

export function orderLink(service: ITService, product: CatalogueProduct) {
  const params = new URLSearchParams({ interest: "IT Solutions", service: service.name, product: product.name, code: product.code });
  return `/contact?${params.toString()}`;
}
