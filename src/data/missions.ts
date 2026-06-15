export type Mission = {
  slug: string;
  issue: string;
  emoji: string;
  cover: string;
  title: string;
  subtitle: string;
  blurb: string;
  villain: { name: string; emoji: string; crime: string };
  story: string[];
  features: { icon: string; title: string; text: string }[];
  tags: string[];
  stats: { label: string; value: string }[];
  challenge: string;
  solution: string;
  repoUrl?: string;
  liveUrl?: string;
};

export const MISSIONS: Mission[] = [
  {
    slug: "service-opportunities",
    issue: "#1",
    emoji: "🏥",
    cover: "bg-comic-red",
    title: "Service Opportunities",
    subtitle: "Lead backend developer · VITAS Healthcare",
    blurb:
      "Lead developer for the backend of a healthcare service system — REST APIs and tuned EF Core pipelines that boosted data-processing efficiency by 30%!",
    villain: {
      name: "DR. DRAG",
      emoji: "🐌",
      crime: "Slowing healthcare data pipelines to a crawl!",
    },
    story: [
      "It began as an internship assignment: foundational backend components and API integrations for the Service Opportunities project at VITAS Healthcare. Most interns just watch. Our hero shipped.",
      "Promoted to full-time, he took the lead on the system's backend — designing RESTful APIs within a Clean Architecture framework, where domain logic stays pure and infrastructure stays replaceable.",
      "Then came the showdown with Dr. Drag: SQL and EF Core operations were profiled, projected, and optimized until data-processing efficiency jumped 30%. The pipelines have been flowing fast ever since.",
    ],
    features: [
      {
        icon: "🔗",
        title: "RESTful API Arsenal",
        text: "Designed and built the system's REST API layer end to end as lead backend developer.",
      },
      {
        icon: "🧅",
        title: "Clean Architecture Core",
        text: "Domain at the center, infrastructure at the edges — scalable and maintainable by design.",
      },
      {
        icon: "⚡",
        title: "EF Core Tuning",
        text: "Optimized SQL and EF Core operations for a 30% gain in data-processing efficiency.",
      },
      {
        icon: "🤝",
        title: "Agile Delivery",
        text: "Unit tests, peer code reviews, and Azure DevOps CI/CD pipelines on every release.",
      },
    ],
    tags: ["C#", ".NET", "ASP.NET Core", "EF Core", "SQL Server", "Clean Architecture", "Azure DevOps"],
    stats: [
      { label: "EFFICIENCY GAIN", value: "+30%" },
      { label: "ROLE", value: "LEAD" },
      { label: "SECTOR", value: "HEALTH" },
      { label: "ARCHITECTURE", value: "CLEAN" },
    ],
    challenge:
      "Healthcare-scale data processing was dragging — heavy SQL and EF Core operations slowed the system, and the backend had to stay maintainable while growing fast.",
    solution:
      "Rebuilt the backend within Clean Architecture, optimized the hottest SQL/EF Core paths, and protected every change with unit tests and Azure DevOps CI/CD — landing a 30% data-processing efficiency gain.",
  },
  {
    slug: "offline-first-emr",
    issue: "#2",
    emoji: "🩺",
    cover: "bg-comic-sky",
    title: "The Offline Avenger",
    subtitle: "EMR platform · offline-first Blazor",
    blurb:
      "Gave clinicians an EMR that works with zero bars — offline-first Blazor with care-plan conflict resolution, cutting sync failures by 25%!",
    villain: {
      name: "THE DEAD ZONE",
      emoji: "📵",
      crime: "Cutting clinicians off from patient records mid-visit!",
    },
    story: [
      "Clinicians visit patients where the network doesn't follow — basements, rural homes, hospital dead zones. Every dropped connection meant lost work and failed syncs. The Dead Zone was winning.",
      "The counterattack: offline-first Blazor. Local storage and in-memory cached objects keep the app fully functional with zero connectivity, holding state reliably until the network returns.",
      "But two clinicians editing the same care plan offline? That's where the conflict-resolution logic strikes — merging changes safely on sync. Sync failures fell 25%, and the Dead Zone lost its power over patient care.",
    ],
    features: [
      {
        icon: "📴",
        title: "Offline-First Blazor",
        text: "Fully functional with no connection — local storage keeps clinicians working anywhere.",
      },
      {
        icon: "🧠",
        title: "In-Memory Cache",
        text: "Cached objects keep state fast and reliable between syncs.",
      },
      {
        icon: "⚔️",
        title: "Conflict Resolution",
        text: "Care-plan conflict logic merges concurrent edits safely when devices reconnect.",
      },
      {
        icon: "🔄",
        title: "Resilient Sync",
        text: "Sync failures reduced by 25% — dramatically better usability in low-connectivity field work.",
      },
    ],
    tags: ["Blazor", "C#", ".NET", "Local Storage", "Caching", "EMR"],
    stats: [
      { label: "SYNC FAILURES", value: "-25%" },
      { label: "BARS NEEDED", value: "0" },
      { label: "PLATFORM", value: "BLAZOR" },
      { label: "USERS", value: "CLINICIANS" },
    ],
    challenge:
      "Clinicians in low-connectivity environments kept losing work — sync failures and unreliable state made the EMR frustrating exactly when patients needed attention most.",
    solution:
      "Implemented offline-first Blazor backed by local storage and in-memory caching, plus care-plan conflict-resolution logic for concurrent edits — cutting clinician sync failures by 25%.",
  },
  {
    slug: "code-forge",
    issue: "#3",
    emoji: "⚙️",
    cover: "bg-comic-purple",
    title: "The Code Forge",
    subtitle: "Production-grade code generation platform",
    blurb:
      "Built a platform that forges entire backend layers automatically — data models, DbContexts, GraphQL types, and WebAPIs — banishing Baron Boilerplate forever!",
    villain: {
      name: "BARON BOILERPLATE",
      emoji: "📋",
      crime: "Forcing developers to hand-write the same layers, again and again!",
    },
    story: [
      "Every new entity demanded tribute: a data model, a DbContext registration, GraphQL types, a WebAPI layer. Hours of identical, error-prone typing — Baron Boilerplate's favorite tax on developers.",
      "Our hero built the Forge: a production-grade code generation platform that stamps out all four layers automatically, with support for HotChocolate v13+ GraphQL schemas.",
      "And it isn't just a backend tool — a Blazor frontend drives the whole thing, letting developers configure and execute generation workflows visually. The Baron's tax was abolished.",
    ],
    features: [
      {
        icon: "🏗️",
        title: "Four-Layer Forge",
        text: "Generates data models, DbContexts, GraphQL types, and WebAPI layers from configuration.",
      },
      {
        icon: "🍫",
        title: "HotChocolate v13+",
        text: "First-class support for modern HotChocolate GraphQL schemas.",
      },
      {
        icon: "🖥️",
        title: "Blazor Control Room",
        text: "A full Blazor frontend for configuring and executing generation workflows.",
      },
      {
        icon: "🏭",
        title: "Production Grade",
        text: "Built for real teams shipping real systems — not a toy generator.",
      },
    ],
    tags: ["C#", ".NET", "Code Generation", "GraphQL", "HotChocolate", "Blazor", "WebAPI"],
    stats: [
      { label: "LAYERS GENERATED", value: "4" },
      { label: "HOTCHOCOLATE", value: "v13+" },
      { label: "BOILERPLATE", value: "0" },
      { label: "FRONTEND", value: "BLAZOR" },
    ],
    challenge:
      "Every new feature required hand-writing the same stack of layers — models, DbContexts, GraphQL types, WebAPIs — slow, repetitive, and a breeding ground for copy-paste bugs.",
    solution:
      "Designed a code generation platform with both the backend processing engine and a Blazor configuration frontend, generating consistent, production-ready layers with HotChocolate v13+ support.",
  },
  {
    slug: "graphql-upgrade-saga",
    issue: "#4",
    emoji: "🚀",
    cover: "bg-comic-orange",
    title: "The Upgrade Saga",
    subtitle: "GraphQL modernization · .NET 10 + HotChocolate 16",
    blurb:
      "Modernizing the organization's GraphQL stack to .NET 10 and HotChocolate 16 — targeting 40% faster query execution!",
    villain: {
      name: "LEGACY LORD",
      emoji: "🦖",
      crime: "Trapping the GraphQL stack in outdated framework versions!",
    },
    story: [
      "The Legacy Lord's curse: an aging GraphQL stack where queries ran slower than they should and every schema change fought the framework instead of flowing with it.",
      "The modernization campaign began — upgrading the organization's stack to .NET 10 and HotChocolate 16, the cutting edge of the .NET GraphQL ecosystem.",
      "The targets are bold: 40% faster query execution and a schema that's genuinely maintainable. Version by version, the Legacy Lord's grip is breaking. This saga is still being written...",
    ],
    features: [
      {
        icon: "⬆️",
        title: ".NET 10 Migration",
        text: "Moving the GraphQL stack onto the latest .NET runtime.",
      },
      {
        icon: "🍫",
        title: "HotChocolate 16",
        text: "Upgrading to the newest HotChocolate for modern GraphQL features and performance.",
      },
      {
        icon: "📈",
        title: "40% Faster Queries",
        text: "Targeting a 40% improvement in query execution speed across the stack.",
      },
      {
        icon: "🧬",
        title: "Schema Maintainability",
        text: "Restructuring schemas so future changes are easy instead of risky.",
      },
    ],
    tags: ["GraphQL", "HotChocolate 16", ".NET 10", "C#", "Performance"],
    stats: [
      { label: "QUERY SPEED", value: "+40%" },
      { label: ".NET", value: "10" },
      { label: "HOTCHOCOLATE", value: "16" },
      { label: "STATUS", value: "ONGOING" },
    ],
    challenge:
      "An organization-wide GraphQL stack stuck on older framework versions — slower query execution, harder schema maintenance, and growing distance from the ecosystem's best features.",
    solution:
      "Leading the upgrade to .NET 10 and HotChocolate 16 with performance as a first-class goal: 40% faster query execution and a schema structure built for long-term maintainability.",
  },
  {
    slug: "wealthlens",
    issue: "#5",
    emoji: "📊",
    cover: "bg-comic-blue",
    title: "WealthLens",
    subtitle: "Portfolio analytics for Indian investors",
    blurb:
      "Built a portfolio analytics platform that sees what broker apps can't — multi-broker imports, live NSE/BSE pricing, AI insights, and capital-gains tax intelligence!",
    villain: {
      name: "THE FOG",
      emoji: "🌫️",
      crime: "Hiding investors' real returns and tax liabilities behind broker-app blind spots!",
    },
    story: [
      "Indian investors juggle holdings across Zerodha, Groww, and spreadsheets — and every broker app shows only its own slice. The Fog kept the full picture, the real returns, and the looming tax bill out of sight.",
      "WealthLens cut through it: a Next.js 16 platform that imports holdings from any broker with format auto-detection, then pulls live NSE/BSE quotes and mutual-fund NAVs to show one unified, real-time portfolio with P&L and sector allocation.",
      "Then it goes where broker apps won't — FIFO transaction history with XIRR, STCG/LTCG splits, ₹1.25L LTCG allowance tracking, tax-loss-harvesting suggestions, and an AI insights engine that escalates from rule-based analysis to Claude. The Fog never stood a chance.",
    ],
    features: [
      {
        icon: "📥",
        title: "Multi-Broker Import",
        text: "Auto-detects Zerodha, Groww, and generic CSV formats to unify holdings from anywhere.",
      },
      {
        icon: "📈",
        title: "Live Market Data",
        text: "Real-time NSE/BSE quotes and mutual-fund NAVs power a dashboard with P&L and sector allocation.",
      },
      {
        icon: "🧮",
        title: "Tax Intelligence",
        text: "STCG/LTCG splits, ₹1.25L LTCG allowance tracking, tax-loss harvesting, and holding-period countdowns.",
      },
      {
        icon: "🤖",
        title: "AI Insights Ladder",
        text: "A provider ladder from a rule-based engine up to Gemini, OpenRouter, and Claude for portfolio reviews.",
      },
    ],
    tags: ["Next.js 16", "React 19", "TypeScript", "Prisma", "Tailwind CSS", "yahoo-finance2", "Claude"],
    stats: [
      { label: "BROKERS", value: "MULTI" },
      { label: "PRICING", value: "LIVE" },
      { label: "TAX", value: "STCG/LTCG" },
      { label: "AI", value: "CLAUDE" },
    ],
    challenge:
      "Indian investors had holdings scattered across brokers and spreadsheets, with no single view of real returns — and broker apps offered nothing for XIRR, FIFO cost basis, or capital-gains tax planning.",
    solution:
      "Built a Next.js 16 platform that imports from any broker, prices holdings live off NSE/BSE and mfapi.in, and layers on FIFO/XIRR analytics, capital-gains tax intelligence, and an AI insights engine backed by Claude.",
    repoUrl: "https://github.com/SudhanshuPanthri/WealthLens",
  },
];

export function getMission(slug: string): Mission | undefined {
  return MISSIONS.find((m) => m.slug === slug);
}
