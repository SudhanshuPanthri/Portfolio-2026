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
    slug: "operation-mega-api",
    issue: "#1",
    emoji: "🔗",
    cover: "bg-comic-red",
    title: "Operation: Mega API",
    subtitle: "The day latency met its match",
    blurb:
      "Enterprise REST APIs serving thousands of requests per second. Defeated the evil Dr. Latency with caching and async wizardry!",
    villain: {
      name: "DR. LATENCY",
      emoji: "🐌",
      crime: "Holding response times hostage at 3+ seconds!",
    },
    story: [
      "The city's enterprise systems were under siege. Every API call crawled through layers of blocking I/O, N+1 queries multiplied in the shadows, and users abandoned requests mid-flight.",
      "Armed with ASP.NET Core and async/await, our hero rebuilt the API layer from the ground up — RESTful resources, versioned endpoints, and a clean architecture core that no spaghetti code could corrupt.",
      "The final blow: a Redis caching layer that intercepted repeat requests before they ever reached the database. Dr. Latency's reign ended at 80 milliseconds.",
    ],
    features: [
      {
        icon: "⚡",
        title: "Async Everything",
        text: "Fully async request pipeline — no thread left blocked behind.",
      },
      {
        icon: "🧅",
        title: "Clean Architecture",
        text: "Domain at the core, infrastructure at the edges. Swappable, testable, unbreakable.",
      },
      {
        icon: "🚀",
        title: "Redis Cache Shield",
        text: "Hot data served from memory — the database only fights battles worth fighting.",
      },
      {
        icon: "📜",
        title: "Swagger Codex",
        text: "Every endpoint documented with OpenAPI so allies can integrate in minutes.",
      },
    ],
    tags: ["ASP.NET Core", "C#", "EF Core", "Redis", "Swagger", "xUnit"],
    stats: [
      { label: "RESPONSE TIME", value: "80ms" },
      { label: "REQUESTS / SEC", value: "1000s" },
      { label: "UPTIME", value: "99.9%" },
      { label: "ENDPOINTS", value: "40+" },
    ],
    challenge:
      "Legacy endpoints mixed business logic with data access, making every change a gamble and every query a potential N+1 ambush.",
    solution:
      "Introduced repository + service layers with EF Core projections, added response caching with smart invalidation, and wrapped it all in integration tests so regressions get caught before villains do.",
  },
  {
    slug: "the-microservice-league",
    issue: "#2",
    emoji: "🧩",
    cover: "bg-comic-sky",
    title: "The Microservice League",
    subtitle: "No monolith stands forever",
    blurb:
      "Split a crumbling monolith into a league of microservices — each with its own superpower, united by message queues!",
    villain: {
      name: "THE MONOLITH",
      emoji: "🗿",
      crime: "One deploy to break them all — a single bug took down everything!",
    },
    story: [
      "It loomed over the codebase: a ten-year-old monolith where touching the invoicing module mysteriously broke user login. Deploys happened at midnight, with prayers.",
      "The plan: recruit a league of specialists. Each bounded context — orders, billing, notifications — became its own .NET 8 service with its own database and its own destiny.",
      "RabbitMQ became the league's communication network. Events flowed asynchronously between services, so when one hero fell, the others kept fighting. Midnight deploys became Tuesday-afternoon non-events.",
    ],
    features: [
      {
        icon: "🦸",
        title: "Bounded Contexts",
        text: "Each service owns one domain and one database. No shared-table betrayals.",
      },
      {
        icon: "📨",
        title: "Event-Driven Comms",
        text: "RabbitMQ topics broadcast domain events — services react, never block.",
      },
      {
        icon: "🛡️",
        title: "Resilience Patterns",
        text: "Retries, circuit breakers, and dead-letter queues for when villains strike.",
      },
      {
        icon: "🐳",
        title: "Container Fleet",
        text: "Dockerized services with health checks, ready to scale on demand.",
      },
    ],
    tags: ["C#", ".NET 8", "RabbitMQ", "Docker", "MassTransit", "PostgreSQL"],
    stats: [
      { label: "SERVICES", value: "8" },
      { label: "DEPLOY TIME", value: "5 min" },
      { label: "DOWNTIME DEPLOYS", value: "0" },
      { label: "EVENTS / DAY", value: "500k" },
    ],
    challenge:
      "Decomposing a tightly-coupled monolith without freezing feature work — the business couldn't stop while the rewrite happened.",
    solution:
      "Used the strangler-fig pattern: new services peeled off one bounded context at a time behind an API gateway, with RabbitMQ events keeping old and new worlds in sync until the monolith was hollowed out.",
  },
  {
    slug: "database-of-justice",
    issue: "#3",
    emoji: "🗄️",
    cover: "bg-comic-purple",
    title: "Database of Justice",
    subtitle: "Every query gets a fair trial",
    blurb:
      "Tuned villainous slow queries into lightning-fast lookups. No rogue table scan escapes my index-vision!",
    villain: {
      name: "TABLE SCAN TERROR",
      emoji: "👹",
      crime: "Reading every row in million-record tables... for a single lookup!",
    },
    story: [
      "Reports that once took seconds now took minutes. Dashboards timed out. Somewhere deep in SQL Server, the Table Scan Terror was reading entire tables row by row, laughing at the missing indexes.",
      "Our hero summoned the execution plans. Each one revealed the villain's tracks: key lookups gone wild, implicit conversions sabotaging indexes, and stored procedures recompiling on every call.",
      "Covering indexes were forged. Queries were rewritten to be SARGable. Statistics were updated, and the worst offenders were rebuilt as set-based operations. The Terror fled — reports now load before the coffee cools.",
    ],
    features: [
      {
        icon: "🔍",
        title: "Execution Plan Vision",
        text: "Reads query plans like comic panels — spots the villain in every scan.",
      },
      {
        icon: "🗂️",
        title: "Covering Indexes",
        text: "Precision indexes that serve queries without ever touching the table.",
      },
      {
        icon: "⚙️",
        title: "Stored Proc Arsenal",
        text: "Set-based stored procedures replacing row-by-row cursor crimes.",
      },
      {
        icon: "📈",
        title: "Azure Monitoring",
        text: "Query Store and alerts watching the streets so regressions never return.",
      },
    ],
    tags: ["SQL Server", "T-SQL", "Stored Procedures", "Azure SQL", "Query Store"],
    stats: [
      { label: "QUERY TIME", value: "-95%" },
      { label: "ROWS TAMED", value: "10M+" },
      { label: "INDEXES FORGED", value: "30+" },
      { label: "TIMEOUTS", value: "0" },
    ],
    challenge:
      "Million-row tables with queries written for thousand-row days — and no one could say which index changes were safe in production.",
    solution:
      "Profiled with Query Store to find the true top offenders, tested index changes against production-scale data, and rewrote hot paths as SARGable set-based queries with covering indexes.",
  },
];

export function getMission(slug: string): Mission | undefined {
  return MISSIONS.find((m) => m.slug === slug);
}
