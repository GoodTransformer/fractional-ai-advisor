export type LinkItem = {
  href: string;
  label: string;
};

export type OfferTier = {
  name: string;
  length: string;
  summary: string;
  fit: string;
  cadence: string;
  outputs: string[];
};

export const siteConfig = {
  offerName: "Fractional AI Advisor",
  descriptor: "Embedded AI strategy and adoption lead",
  umbrellaBrand: "Good Transformer",
  primaryCta: {
    label: "Book a 25-minute AI Clarity Call",
    href: "/book",
  },
  secondaryCta: {
    label: "See how it works",
    href: "/how-it-works",
  },
  calendarEnvName: "NEXT_PUBLIC_CLARITY_CALL_URL",
};

export const navigation: LinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/engagements", label: "Engagements" },
  { href: "/proof", label: "Proof" },
  { href: "/about", label: "About Patrick" },
  { href: "/book", label: "Book a Call" },
];

export const operatingModel = [
  {
    name: "Lead",
    summary: "Executive direction, prioritisation, and governance judgement.",
    outcome:
      "Leadership gets a clear view of what matters, what is premature, and who owns which decisions.",
  },
  {
    name: "Embed",
    summary: "Operational rollout, workflow redesign, pilot shaping, tool choices, and coordination.",
    outcome:
      "Functions move from scattered experimentation to a working plan that fits how the business actually runs.",
  },
  {
    name: "Enable",
    summary: "Team capability, confidence, champions, and working habits.",
    outcome:
      "Frontline teams gain practical confidence, shared practice, and enough structure for usage to stick.",
  },
];

export const offers: OfferTier[] = [
  {
    name: "AI Reality Check Sprint",
    length: "2 weeks",
    summary: "A fixed-scope entry offer for leaders who need clarity fast.",
    fit: "Best when AI use is already happening but ownership, guardrails, and priority are still unclear.",
    cadence:
      "Focused interviews, current-state review, tool and risk triage, and a short decision-making workshop.",
    outputs: [
      "AI direction brief",
      "Use-case scorecard with top priorities and a do-not-do-yet list",
      "90-day adoption plan with owners, rhythm, and next decisions",
    ],
  },
  {
    name: "90-Day Adoption Build",
    length: "12 weeks",
    summary: "An implementation bridge for organisations stuck at experimentation.",
    fit: "Best when leadership intent exists but teams still need workflows, pilots, and habits to change.",
    cadence:
      "Weekly working session, bi-weekly team enablement, and a monthly leadership checkpoint.",
    outputs: [
      "Two lighthouse workflow pilots",
      "Team playbooks with prompt patterns, checks, and safe-use rules",
      "Champion network and train-the-trainer structure",
      "Simple governance pack for approved use, escalation, and disclosure",
    ],
  },
  {
    name: "Fractional AI Advisor Retainer",
    length: "3-month minimum",
    summary:
      "A retained engagement for steady momentum, governance judgement, and cross-functional adoption support.",
    fit: "Best when multiple teams need progress at once and leadership wants a part-time senior operator in the loop.",
    cadence:
      "Monthly executive session, weekly or fortnightly working block, office hours, and monthly plain-English reporting.",
    outputs: [
      "Prioritised next-30-day plan",
      "Cross-functional coordination on pilots, tooling, and working standards",
      "Ongoing enablement for champions and team leads",
      "Monthly progress report focused on what changed, what blocked, and what comes next",
    ],
  },
];

export const homeContent = {
  hero: {
    label: "Good Transformer",
    title: "Fractional AI Advisor",
    descriptor: siteConfig.descriptor,
    summary:
      "Patrick Hussey works with leaders on direction and guardrails, then with teams on workflows, pilots, and practical uptake, without the overhead of a full-time hire.",
  },
  situation: {
    label: "The Real Situation",
    heading: "AI is already in the business. The problem is that it is uneven.",
    body:
      "Some teams are experimenting. Some are ignoring it. Leadership feels pressure to move, but the practical translation from intent to day-to-day use is under-owned. That creates confusion, uneven quality, and avoidable risk.",
    points: [
      "Tools are being used without a shared standard.",
      "Training happens, but working practices do not change.",
      "Pilots multiply, but scale decisions stall.",
      "Governance is either heavy-handed or missing.",
    ],
  },
  definition: {
    label: "What This Is",
    heading: "A part-time senior role with enough reach to make AI usable.",
    body:
      "Fractional AI Advisor is not a software platform, a keynote, or a generic consultancy page dressed up with AI language. It is a productised advisory role: senior judgement at leadership level, hands-on workflow work with functions, and practical enablement with teams.",
  },
  operatingModel: {
    label: "Operating Model",
    heading: "Lead. Embed. Enable.",
    body:
      "The offer spans three layers on purpose. The value comes from connecting them without losing clarity on what happens next.",
  },
  fit: {
    label: "Fit",
    heading: "Clear fit creates better work.",
    intro:
      "This offer is designed first for UK mid-market professional services firms where AI pressure is real, usage is already happening, and someone needs to connect direction, rollout, and capability.",
    fitSignals: [
      "Leadership wants a real plan, not more noise.",
      "Staff are already using AI, but inconsistently or quietly.",
      "You need prioritisation across functions, not isolated experiments.",
      "You want internal capability to strengthen, not dependence on an outside vendor.",
    ],
    nonFitSignals: [
      "You want a software vendor to sell you a platform.",
      "You need a full engineering team to build bespoke AI products immediately.",
      "You only want a one-off inspiration session with no operational follow-through.",
      "You want guaranteed ROI without giving teams time to change how the work gets done.",
    ],
  },
  process: {
    label: "How It Works",
    heading: "Decide. Build. Normalise.",
    body:
      "The method is deliberately simple. First we set direction. Then we redesign a small number of workflows that matter. Then we make the new habits normal enough to hold without constant supervision.",
    steps: [
      {
        name: "Decide",
        summary:
          "Set priorities, boundaries, decision rights, and what good AI use looks like in your context.",
      },
      {
        name: "Build",
        summary:
          "Pick one or two lighthouse workflows, redesign them with AI in mind, and shape pilots around quality controls and handoffs.",
      },
      {
        name: "Normalise",
        summary:
          "Train teams in context, support champions, and put lightweight guardrails in place so usage becomes useful, safe, and ordinary.",
      },
    ],
  },
  engagements: {
    label: "Engagement Options",
    heading: "Three ways to buy the work, depending on how much clarity you already have.",
    body:
      "The commercial structure is part of the positioning. Buyers should know what they can buy first, what happens next, and how retained work stays concrete.",
    note:
      "Engagements are usually sold as a fixed sprint fee or a monthly retainer. The recommendation after the clarity call is always the smallest engagement that can credibly create momentum.",
  },
  proof: {
    label: "Proof",
    heading: "Trust comes from what gets produced and what starts moving.",
    body:
      "Where hard numbers are sensitive or unavailable, the substitute is operational proof: a board-ready brief, a scorecard, a playbook, a governance pack, a sharper working rhythm, and a clearer next 30 days.",
    signals: [
      "Existing feedback themes: clarity, depth, and helping leadership move from noise to action.",
      "Direct access to Patrick rather than a rotating delivery team.",
      "An anti-hype editorial posture translated into practical judgement, not slogans.",
    ],
    artefacts: [
      "AI direction brief",
      "Use-case scorecard",
      "Team playbook excerpt",
      "Simple governance pack",
    ],
  },
  about: {
    label: "About Patrick",
    heading: "Patrick is the centre of gravity in the offer.",
    body:
      "Good Transformer is the umbrella brand. The buyer experience should still feel direct: you are hiring Patrick's judgement, facilitation, prioritisation, and follow-through. The role is designed to steady leadership, support operators, and leave teams more capable than before.",
    points: [
      "Clear judgement over hype",
      "Cross-functional working style",
      "Plain-English reporting and sensible boundaries",
    ],
  },
  faqs: [
    {
      question: "What does fractional mean in practice?",
      answer:
        "It means senior support on a defined cadence rather than a full-time hire. Typical rhythms include a monthly executive session, weekly or fortnightly working blocks, office hours, and direct access for short triage between sessions.",
    },
    {
      question: "Is this strategy or training?",
      answer:
        "It is strategy-to-adoption work. Direction matters, but so do workflows, pilots, and team capability. The point is to connect those layers so the strategy actually shows up in the work.",
    },
    {
      question: "Are you acting as our Head of AI?",
      answer:
        "Not formally. Functionally, the role can provide senior AI leadership across direction, governance, and adoption, while still being structured as a part-time engagement built to transfer capability into the organisation.",
    },
    {
      question: "Will you implement tools for us?",
      answer:
        "Patrick helps shape tool choices, standards, and workflow integration. Bespoke engineering is not the default sale. If build work is needed, he can help scope and govern the right implementation partner.",
    },
    {
      question: "How do you handle risk and data protection?",
      answer:
        "The approach is proportionate: approved tools, workflow-specific guidance, clear do-not-paste rules, escalation paths, and alignment with legal or data-protection owners where needed.",
    },
    {
      question: "How do you measure progress?",
      answer:
        "Progress is tracked in operational terms: which workflows changed, how often AI is used within them, what checks are in place, what confidence looks like, and what the next 30 days should focus on.",
    },
    {
      question: "What happens in the clarity call?",
      answer:
        "The call is a short working conversation, not a generic sales chat. Patrick reviews your current reality, pressure points, and desired 90-day outcome, then recommends the smallest credible next step.",
    },
  ],
  finalCta: {
    label: "Next Step",
    heading: "If AI is already in the organisation, the next move is to make it coherent.",
    body:
      "Bring the current reality: what teams are doing, what leadership expects, and what risks are slowing decisions down. The aim of the call is a clear view of what should change in the next 30 days.",
  },
};

export const howItWorksContent = {
  hero: {
    label: "How It Works",
    title: "A structured operating role, not loose-ended advisory.",
    description:
      "The work is designed to connect leadership direction, workflow change, and team capability without drifting into vague strategy or a disguised build shop.",
  },
  cadence: [
    {
      title: "Executive direction",
      body:
        "Monthly sessions focus on priorities, guardrails, decision rights, risk posture, and the next organisational bottlenecks.",
    },
    {
      title: "Operational working blocks",
      body:
        "Weekly or fortnightly working sessions focus on workflow redesign, pilot shaping, ownership, and cross-functional coordination.",
    },
    {
      title: "Team support",
      body:
        "Office hours, champion support, and practical team sessions keep new habits moving without turning every question into a governance event.",
    },
    {
      title: "Plain-English reporting",
      body:
        "A monthly report captures what changed, what is still blocked, and what the next 30 days should concentrate on.",
    },
  ],
  decisionRights: [
    "Patrick shapes direction, cadence, and guardrails with the sponsor.",
    "Function leads stay accountable for operational adoption inside their teams.",
    "IT, legal, or data-protection owners stay involved where tool, policy, or risk decisions require formal approval.",
    "Capability is meant to transfer into internal champions rather than sit permanently outside the organisation.",
  ],
  ninetyDays: [
    {
      phase: "Days 1-30",
      body:
        "Clarify direction, map use, identify pressure points, and choose the first lighthouse workflows worth redesigning.",
    },
    {
      phase: "Days 31-60",
      body:
        "Run pilots, shape guidance, make tool decisions visible, and give teams enough structure to use AI without constant guesswork.",
    },
    {
      phase: "Days 61-90",
      body:
        "Normalise good practice, support champions, tighten governance where needed, and report what changed in the operating reality.",
    },
  ],
  boundaries: [
    "Not a platform sale",
    "Not inspiration without implementation rhythm",
    "Not full bespoke engineering by default",
    "Not generic training detached from workflows",
  ],
};

export const engagementsContent = {
  hero: {
    label: "Engagements",
    title: "A clear commercial ladder from clarity to retained momentum.",
    description:
      "The offer is easier to buy when the next step is obvious. Each engagement has a purpose, a rhythm, and a defined set of outputs.",
  },
  pricingNote:
    "Hard prices are intentionally not published here. The scope depends on cadence, number of teams involved, and whether the work is clarifying direction or driving cross-functional adoption.",
  comparisonRows: [
    {
      label: "Best used when",
      values: [
        "You need clarity fast.",
        "You have intent but not enough follow-through.",
        "You need a steady senior operator in the loop.",
      ],
    },
    {
      label: "Primary sponsor",
      values: ["CEO or COO", "COO and functional heads", "CEO, COO, or CTO sponsor"],
    },
    {
      label: "Delivery rhythm",
      values: [
        "Short, focused diagnostic",
        "Weekly operational momentum",
        "Ongoing leadership plus team cadence",
      ],
    },
  ],
  samplePlan: [
    {
      phase: "Weeks 1-2",
      title: "Direction and triage",
      body:
        "Leadership interviews, current-state review, risk triage, tool inventory, and a shortlist of use cases worth backing.",
    },
    {
      phase: "Weeks 3-6",
      title: "Workflow pilots",
      body:
        "Two lighthouse workflows are redesigned with quality controls, handoffs, and clear ownership rather than generic prompt-sharing.",
    },
    {
      phase: "Weeks 7-10",
      title: "Enablement and standards",
      body:
        "Team labs, champion support, simple rules for approved use, and practical guidance for where human oversight matters.",
    },
    {
      phase: "Weeks 11-12",
      title: "Normalise and report",
      body:
        "Capture what changed, what should scale next, and what needs executive attention to keep momentum credible.",
    },
  ],
};

export const proofContent = {
  hero: {
    label: "Proof",
    title: "The trust system is practical by design.",
    description:
      "This offer should be trusted because the work is legible: what gets produced, what rhythms are introduced, and what decisions become easier.",
  },
  proofBar: [
    {
      title: "Practical signals",
      body:
        "The most credible evidence here is operational clarity: artefacts, cadence, and visible shifts in who owns what.",
    },
    {
      title: "Direct delivery",
      body:
        "Patrick leads the work directly, which matters in a category where buyers are often hiring judgement more than headcount.",
    },
    {
      title: "Anti-hype stance",
      body:
        "The editorial voice is calm and exact. It is there to improve judgement, not to dress up an ordinary consultancy page.",
    },
  ],
  deliverables: [
    {
      title: "AI direction brief",
      body:
        "A short leadership document covering priorities, boundaries, decision rights, and the conditions for useful progress.",
    },
    {
      title: "Use-case scorecard",
      body:
        "A ranked view of opportunities, dependencies, and what should be held back until the organisation is ready.",
    },
    {
      title: "Team playbook excerpt",
      body:
        "Workflow guidance, prompt patterns, review checks, and safe-use rules tied to a real team context.",
    },
    {
      title: "Simple governance pack",
      body:
        "Approved-use guidance, disclosure expectations, escalation rules, and controls that do not kill productivity.",
    },
  ],
  caseNoteSlots: [
    {
      label: "Case note slot 01",
      title: "Professional services team",
      status: "Ready for approved anonymised proof",
      body:
        "Use this slot to show the situation, what changed in the first 30 days, and which operating artefacts existed afterwards.",
    },
    {
      label: "Case note slot 02",
      title: "Cross-functional adoption programme",
      status: "Ready for approved anonymised proof",
      body:
        "Use this slot to show how leadership direction, workflow pilots, and capability-building were connected into one rhythm.",
    },
  ],
  authority: [
    "Selected experience signals can be added once approvals are clear.",
    "Writing and media credentials can support authority without carrying the whole trust burden.",
    "The strongest proof upgrade from here is a redacted sample pack plus approved case notes.",
  ],
};

export const aboutContent = {
  hero: {
    label: "About Patrick",
    title: "Senior judgement, practical cadence, and direct access.",
    description:
      "The offer is intentionally personal. Buyers are not hiring a faceless capability statement; they are hiring Patrick Hussey to connect leadership intent with day-to-day operational change.",
  },
  principles: [
    {
      title: "Clarity over hype",
      body:
        "The work should reduce noise. That means precise language, careful prioritisation, and advice that survives real operational scrutiny.",
    },
    {
      title: "Operational usefulness",
      body:
        "The job is not to produce abstract interest in AI. It is to help teams work differently in ways that are useful, safe, and sustainable.",
    },
    {
      title: "Capability transfer",
      body:
        "Good fractional work leaves the organisation stronger. Champions, managers, and sponsors should become more capable as the engagement progresses.",
    },
  ],
  whatClientsGet: [
    "Direct access to Patrick rather than a layered agency structure",
    "A cross-functional working style that can speak to leadership, operations, and teams",
    "Clear boundaries around what is advisory, what is enablement, and what should be handled by implementation partners",
  ],
  notSelling: [
    "A broad AI-readiness generalism",
    "A hidden software resale model",
    "A disguised engineering bench",
    "A one-off workshop with no follow-through",
  ],
};

export const bookingContent = {
  hero: {
    label: "Book a Call",
    title: "Start with a short qualification step, then book the call.",
    description:
      "The call is meant to be useful from the start. A short brief makes the conversation sharper and helps route you to the right engagement, whether that is the sprint, the 90-day build, or retained support.",
  },
  fields: {
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
  },
  callPrep: [
    "A view of the current reality rather than a polished story",
    "The tools people are already using",
    "What success would look like in 90 days",
    "Any governance, data, or buyer constraints that already matter",
  ],
};
