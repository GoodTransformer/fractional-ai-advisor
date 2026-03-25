export type LinkItem = {
  href: string;
  label: string;
};

export type Offer = {
  name: string;
  duration: string;
  purpose: string;
  outputs: string[];
  fit?: string;
  cadence?: string[];
};

export type ProofArtefact = {
  title: string;
  label: string;
  subtitle: string;
  rows: string[];
};

export type ProofOrganisation = {
  name: string;
  slug: string;
  src: string;
  width: number;
  height: number;
  maxWidth: number;
};

export const siteConfig = {
  offerName: "Fractional AI Advisor",
  descriptor: "Embedded AI strategy and adoption lead",
  brand: "Good Transformer",
  primaryCta: {
    label: "Book a 25-minute AI Clarity Call",
    href: "/book",
  },
  heroSecondaryCta: {
    label: "See services",
    href: "/services",
  },
  calendarEnvName: "NEXT_PUBLIC_CLARITY_CALL_URL",
  briefEndpointEnvName: "NEXT_PUBLIC_BOOKING_BRIEF_ENDPOINT",
  briefEmailEnvName: "NEXT_PUBLIC_BOOKING_BRIEF_EMAIL",
};

export const navigation: LinkItem[] = [
  { href: "/services", label: "Services" },
  { href: "/patrick", label: "Patrick" },
  { href: "/book", label: "Book" },
];

export const operatingModel = [
  {
    name: "Lead",
    line: "Direction, prioritisation, governance judgement.",
  },
  {
    name: "Embed",
    line: "Workflow redesign, pilots, coordination, tool choices.",
  },
  {
    name: "Enable",
    line: "Team confidence, champions, habits, safe use.",
  },
];

export const offers: Offer[] = [
  {
    name: "AI Reality Check Sprint",
    duration: "2 weeks",
    purpose: "Clarity fast for leaders who need a real starting point.",
    outputs: [
      "AI direction brief",
      "Use-case scorecard",
      "90-day adoption plan",
    ],
    fit: "Best when AI use is already happening, but ownership and guardrails are still unclear.",
    cadence: [
      "Leadership and function interviews",
      "Current-use and risk triage",
      "Board-ready decision brief",
    ],
  },
  {
    name: "90-Day Adoption Build",
    duration: "12 weeks",
    purpose: "For organisations stuck between intent and changed practice.",
    outputs: [
      "Two lighthouse workflow pilots",
      "Team playbooks",
      "Simple governance pack",
    ],
    fit: "Best when the direction exists, but working practice still needs to move.",
    cadence: [
      "Weekly working session",
      "Team enablement rhythm",
      "Monthly sponsor checkpoint",
    ],
  },
  {
    name: "Fractional Retainer",
    duration: "3-month minimum",
    purpose: "For ongoing cross-functional momentum and judgement.",
    outputs: [
      "Monthly executive session",
      "Working cadence across teams",
      "Plain-English progress reporting",
    ],
    fit: "Best when multiple teams need progress, prioritisation, and steadier decision-making.",
    cadence: [
      "Executive direction and guardrails",
      "Operational blocks with teams",
      "Office hours and follow-through",
    ],
  },
];

export const testimonial = {
  quote:
    "Their clarity and depth kickstarted our AI response, helping leadership not only see further but plan.",
  attribution: "Gaynor Finlay, marketing leader",
};

export const proofSignals = {
  label: "Worked with leaders at",
  organisations: [
    {
      name: "OneAdvanced",
      slug: "oneadvanced",
      src: "/logos/oneadvanced.svg",
      width: 640,
      height: 80,
      maxWidth: 8.8,
    },
    {
      name: "Sana Commerce",
      slug: "sana-commerce",
      src: "/logos/sana-commerce.svg",
      width: 92,
      height: 20,
      maxWidth: 6.3,
    },
    {
      name: "Google",
      slug: "google",
      src: "/logos/google.svg",
      width: 74,
      height: 24,
      maxWidth: 5.1,
    },
    {
      name: "Microsoft",
      slug: "microsoft",
      src: "/logos/microsoft.svg",
      width: 216,
      height: 46,
      maxWidth: 5.6,
    },
  ] satisfies ProofOrganisation[],
  artefacts: [
    {
      title: "AI direction brief",
      label: "Leadership direction",
      subtitle: "Priority decisions, sponsor cadence, and the next 90 days.",
      rows: ["Decision themes", "Use-case order", "Sponsor rhythm"],
    },
    {
      title: "Use-case scorecard",
      label: "Portfolio review",
      subtitle: "Scored against value, readiness, and delivery risk.",
      rows: ["Value", "Readiness", "Risk"],
    },
    {
      title: "Team playbook",
      label: "Working practice",
      subtitle: "Workflow patterns, quality checks, and champion support.",
      rows: ["Prompt patterns", "Checks in flow", "Escalation notes"],
    },
    {
      title: "Governance pack",
      label: "Operational guardrails",
      subtitle: "Approved tools, do-not-paste rules, escalation routes, and plain-English guidance.",
      rows: ["Approved tool set", "Sensitive-data handling", "Escalation route"],
    },
  ] satisfies ProofArtefact[],
};

export const homePage = {
  hero: {
    brand: siteConfig.brand,
    title: siteConfig.offerName,
    descriptor: siteConfig.descriptor,
    support:
      "Patrick Hussey works with leadership on direction and guardrails, then with teams on workflows, pilots, and habits, without the overhead of a full-time hire.",
  },
  role: {
    heading: "AI is already in the business. The problem is that it is uneven.",
    support:
      "Some teams are experimenting. Some are not. Leadership wants progress, but ownership, guardrails, and working practice are patchy. Fractional AI Advisor is a part-time embedded role that connects direction, workflow change, and team capability.",
  },
  services: {
    heading: "Three clear ways to buy the work.",
    intro:
      "Start with clarity, then deepen only when the work justifies it.",
    note: "Most work starts with the smallest engagement that can create real momentum.",
  },
  patrick: {
    heading: "Patrick Hussey",
    body:
      "Patrick works between leadership, operations and teams. The job is to turn AI direction into working practice and leave capability inside the business. Good Transformer is the umbrella brand. The judgement you hire is Patrick’s.",
    frame: {
      label: "How the work shows up",
      heading: "Work that becomes part of how the business runs",
      body:
        "The job is not just to set direction, but to leave working structures behind. These are the documents teams actually use to decide, act, and stay aligned.",
      kicker:
        "Not a deck. Not a one-off plan. Something the business can run on.",
    },
  },
  faqs: [
    {
      question: "What does fractional mean in practice?",
      answer:
        "It means a defined senior cadence rather than a full-time hire: usually a monthly executive session, a weekly or fortnightly working block, access for short triage, and a clear view of what changes next.",
    },
    {
      question: "Is this strategy or training?",
      answer:
        "It is strategy-to-adoption work. Direction matters, but so do workflow redesign, pilots, and team capability. The point is to connect those layers so AI shows up in day-to-day work, not just in decks or workshops.",
    },
    {
      question: "Will you implement tools?",
      answer:
        "Patrick helps shape tool choices, standards, and workflow design. Bespoke engineering is not the default sale. If build work is needed, he can scope it properly and help select the right implementation partner.",
    },
    {
      question: "How do you handle risk and data protection?",
      answer:
        "With proportionate guardrails: approved tools, clear do-not-paste rules, workflow-specific guidance, escalation routes, and alignment with legal or data-protection owners where needed. The aim is safe progress, not bureaucracy for its own sake.",
    },
    {
      question: "What happens in the clarity call?",
      answer:
        "It is a short working conversation, not a generic sales chat. Patrick reviews the current reality, pressure points, tools in use, and desired 90-day outcome, then recommends the smallest credible next step.",
    },
  ],
  finalCta: {
    heading: "If AI is already in the organisation, the next move is to make it coherent.",
    body:
      "Bring the current reality, not a polished story. The aim of the call is a clear view of what should change in the next 30 days.",
  },
};

export const servicesPage = {
  title: "Services",
  intro:
    "Three routes, one operating logic: clarify the direction, change selected workflows, then keep momentum where it matters.",
  sampleArc: [
    {
      phase: "Weeks 1-2",
      body: "Direction, use-case triage, and a plan the leadership team can actually use.",
    },
    {
      phase: "Weeks 3-6",
      body: "Lighthouse workflows redesigned with clearer ownership, quality checks, and tool choices.",
    },
    {
      phase: "Weeks 7-10",
      body: "Team enablement, champion support, and working guidance tied to the real workflow.",
    },
    {
      phase: "Weeks 11-12",
      body: "A sharper operating rhythm, clearer guardrails, and a visible next 30 days.",
    },
  ],
  close:
    "If a smaller starting point can create real momentum, that is the recommendation.",
};

export const patrickPage = {
  title: "Patrick Hussey",
  intro:
    "Patrick is brought in when AI is already in the building but progress is uneven, pilots are not changing the work, or leadership needs a steadier operating hand.",
  sections: [
    {
      title: "How he works",
      body:
        "Calm, direct, anti-hype. The job is to clarify direction, help teams change real workflows, and leave capability inside the organisation.",
    },
    {
      title: "Selected experience",
      body:
        "Current Good Transformer positioning cites work with enterprise leaders at Google, SAP, Adobe, Microsoft, and Vodafone, alongside startups, charities, and cultural organisations.",
    },
    {
      title: "Writing and judgement",
      body:
        "Writing has appeared in Fast Company and The Guardian. The tone of the offer is the same: clear judgement, practical language, and no interest in inflated AI theatre.",
    },
    {
      title: "Boundary line",
      body:
        "Patrick shapes direction, prioritises work, builds operating rhythm, and helps teams adopt safely. He is not selling a software platform or a hidden engineering bench.",
    },
  ],
};

export const bookingPage = {
  title: "Book a 25-minute AI Clarity Call",
  intro:
    "Start with a short intake so the call can deal with the real situation, not a generic AI conversation.",
  body:
    "You will be asked about organisation size, sector, current AI use, tools in play, and what success should look like in 90 days. The brief is handed over before scheduling so the call starts with the real context.",
};

export const bookingForm = {
  orgSizes: [
    "50 to 100 employees",
    "101 to 250 employees",
    "251 to 500 employees",
    "More than 500 employees",
  ],
  sectors: [
    "Professional services",
    "Agency or B2B services",
    "Charity or cultural organisation",
    "Other knowledge-work business",
  ],
  currentState: [
    "AI use is already happening, but unevenly",
    "Leadership wants direction and guardrails",
    "Pilots are not scaling",
    "Training has not changed working habits",
    "Tool sprawl or shadow AI is becoming a risk",
  ],
  nextSteps: [
    "Fill in the short brief.",
    "Review the summary.",
    "Continue to scheduling when you are ready.",
  ],
};
