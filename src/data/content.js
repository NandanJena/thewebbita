export const CONTACT = {
  brand: "thewebBita",
  email: "hello@thewebbita.com",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsappHref:
    "https://wa.me/919876543210?text=Hi%20thewebBita!%20I%20want%20to%20discuss%20a%20project.",
  emailHref:
    "mailto:hello@thewebbita.com?subject=Project%20inquiry%20for%20thewebBita",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export const MARQUEE_ITEMS = [
  "React JS",
  "Node JS",
  "Google Map Pack #1",
  "Technical SEO",
  "Core Web Vitals 100",
  "Local SEO",
  "UI / UX Design",
  "Schema Markup",
];

export const SERVICES = [
  {
    id: "web-dev",
    num: "01",
    icon: "code",
    title: "Website Development",
    desc: "Blazing-fast, scalable web products engineered with React JS and Node JS — from marketing sites that convert to complex SaaS platforms.",
    features: [
      "React JS & next-gen UI engineering",
      "Node JS APIs & real-time backends",
      "Core Web Vitals scores of 99+",
      "Headless CMS & e-commerce builds",
    ],
  },
  {
    id: "seo",
    num: "02",
    icon: "search",
    title: "SEO & Organic Growth",
    desc: "Surgical, technical SEO that compounds. We fix the foundation, target the right keywords and build authority that Google trusts.",
    features: [
      "Technical SEO audits & fixes",
      "Keyword & content strategy",
      "Authority link acquisition",
      "Transparent monthly reporting",
    ],
  },
  {
    id: "map-ranking",
    num: "03",
    icon: "map",
    title: "Google Map Ranking",
    desc: "Own the Map Pack in your city. We optimize your Google Business Profile and local signals so nearby customers find you first.",
    features: [
      "Google Business Profile optimization",
      "Local citations & NAP consistency",
      "Geo-grid rank tracking",
      "Review growth systems",
    ],
  },
];

export const FILTERS = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Development" },
  { id: "seo", label: "SEO" },
  { id: "maps", label: "Google Maps" },
];

export const PROJECTS = [
  {
    id: "project-1",
    title: "Aetheria SaaS Analytics",
    category: "React JS / Node JS",
    filters: ["web"],
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHAlMjBkYXNoYm9hcmQlMjB1aSUyMHByZXNlbnRhdGlvbnxlbnwwfHx8fDE3OTA1Mjg1NDZ8MA&ixlib=rb-4.1.0&q=85",
    desc: "Enterprise cloud telemetry dashboard with real-time websocket updates and a dark-mode visualizer built for data-heavy teams.",
    stat: "99.9%",
    statLabel: "uptime, real-time",
    tags: ["React JS", "Node JS", "WebSockets", "MongoDB"],
    year: "2025",
  },
  {
    id: "project-2",
    title: "Nova Commerce Experience",
    category: "Full Stack / Web Dev",
    filters: ["web"],
    url: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjB3ZWIlMjBhcHAlMjBkYXNoYm9hcmQlMjB1aSUyMHByZXNlbnRhdGlvbnxlbnwwfHx8fDE3OTA1Mjg1NDZ8MA&ixlib=rb-4.1.0&q=85",
    desc: "Ultra-fast headless storefront with instant search, optimistic cart and a checkout engineered for conversion.",
    stat: "+38%",
    statLabel: "checkout conversion",
    tags: ["React JS", "Node JS", "Headless", "Stripe"],
    year: "2025",
  },
  {
    id: "project-3",
    title: "MetroDent Local SEO Dominance",
    category: "Google Map Ranking / Local SEO",
    filters: ["maps", "seo"],
    url: "https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjB3ZWIlMjBhcHAlMjBkYXNoYm9hcmQlMjB1aSUyMHByZXNlbnRhdGlvbnxlbnwwfHx8fDE3OTA1Mjg1NDZ8MA&ixlib=rb-4.1.0&q=85",
    desc: "Multi-clinic dental brand pushed to the top of the local map pack with geo-grid tracking, citations and review velocity.",
    stat: "#18 → #1",
    statLabel: "Google Map Pack in 45 days",
    tags: ["Local SEO", "GBP", "Citations", "Reviews"],
    year: "2026",
  },
  {
    id: "project-4",
    title: "Apex FinTech Web App",
    category: "React JS / Node JS",
    filters: ["web"],
    url: "https://images.unsplash.com/photo-1720135885007-454165745e21?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjB3ZWIlMjBhcHAlMjBkYXNoYm9hcmQlMjB1aSUyMHByZXNlbnRhdGlvbnxlbnwwfHx8fDE3OTA1Mjg1NDZ8MA&ixlib=rb-4.1.0&q=85",
    desc: "High-concurrency investment portal handling micro-transactions, live charts and bank-grade security requirements.",
    stat: "120ms",
    statLabel: "average API response",
    tags: ["React JS", "Node JS", "Redis", "D3.js"],
    year: "2026",
  },
  {
    id: "project-5",
    title: "Urban Legal SEO Growth",
    category: "Google Map Ranking / SEO",
    filters: ["maps", "seo"],
    url: "https://images.unsplash.com/photo-1548430077-773fa74bda9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWdlbmN5JTIwd2ViJTIwZGVzaWduJTIwcHJvamVjdCUyMHBvcnRmb2xpb3xlbnwwfHx8fDE3OTA1Mjg1NTR8MA&ixlib=rb-4.1.0&q=85",
    desc: "Multi-location law firm SEO strategy with location pages, schema and local entity building across three cities.",
    stat: "+320%",
    statLabel: "organic phone inquiries",
    tags: ["Technical SEO", "Schema", "Multi-location"],
    year: "2025",
  },
  {
    id: "project-6",
    title: "Pulse AI Workspace",
    category: "React JS / Node JS / SEO",
    filters: ["web", "seo"],
    url: "https://images.unsplash.com/photo-1726594699522-d7c2f5459f52?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwYWdlbmN5JTIwd2ViJTIwZGVzaWduJTIwcHJvamVjdCUyMHBvcnRmb2xpb3xlbnwwfHx8fDE3OTA1Mjg1NTR8MA&ixlib=rb-4.1.0&q=85",
    desc: "AI content workspace paired with automated schema markup, programmatic landing pages and local geo-tagging.",
    stat: "3.4×",
    statLabel: "organic traffic in 6 months",
    tags: ["React JS", "Node JS", "AI", "Programmatic SEO"],
    year: "2026",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We map your market, competitors and keywords, then define a build and ranking roadmap with measurable targets.",
  },
  {
    num: "02",
    title: "Architecture & Design",
    desc: "Conversion-first wireframes, a distinctive visual identity and a technical architecture built to scale.",
  },
  {
    num: "03",
    title: "High-Speed Engineering",
    desc: "React JS frontends and Node JS backends tuned for Core Web Vitals — every millisecond and byte accounted for.",
  },
  {
    num: "04",
    title: "Map Ranking & Growth",
    desc: "Launch is day one. We deploy SEO and Google Map systems, track rankings and compound your visibility monthly.",
  },
];

export const STATS = [
  { value: 50, suffix: "+", label: "Projects Shipped" },
  { value: 99.8, suffix: "%", decimals: 1, label: "Avg. Core Web Vitals Score" },
  { value: 3.4, suffix: "×", decimals: 1, label: "Avg. Local Traffic Lift" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export const POSTS = [
  {
    id: "post-1",
    title: "How to Dominate the Google Map Pack in 2026: The Geo-Grid Playbook",
    category: "Local SEO & Google Maps",
    date: "July 12, 2026",
    readTime: "6 min read",
    url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY6NzZ8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5JTIwYmxvZyUyMHdlYiUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwwfHx8fDE3OTA1Mjg1NTV8MA&ixlib=rb-4.1.0&q=85",
    excerpt:
      "Proximity signals, citation consistency and hyper-local entity building — the three levers that decide who owns the top 3 on Google Maps.",
    body: [
      "The Map Pack is the most valuable piece of real estate in local search. When someone searches 'dentist near me' or 'best cafe in Indiranagar', Google serves exactly three businesses — and those three capture the majority of every call, direction request and booking.",
      "Start with your Google Business Profile: complete every field, choose the most specific primary category, and upload geo-tagged photos weekly. Then fix your citations — your name, address and phone number must be byte-for-byte identical across every directory. Inconsistent NAP data is the silent ranking killer we find in almost every audit.",
      "Finally, measure like an engineer. We run geo-grid scans around every client location weekly, tracking rank by distance in each direction. What gets measured gets moved — and once you can see your rank hexagon, you can systematically expand it.",
    ],
  },
  {
    id: "post-2",
    title: "React 19 & Core Web Vitals: Engineering Sub-50ms Interaction Times",
    category: "Web Development",
    date: "July 04, 2026",
    readTime: "8 min read",
    url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY6NzZ8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwYmxvZyUyMHdlYiUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwwfHx8fDE3OTA1Mjg1NTV8MA&ixlib=rb-4.1.0&q=85",
    excerpt:
      "A deep dive into server components, code splitting and asset pre-caching for flawless Google speed audits.",
    body: [
      "Google's speed audits are unforgiving, and they should be — every 100ms of delay measurably costs conversions. With React 19, the tools to hit perfect Core Web Vitals are finally built into the library itself.",
      "The biggest wins come from ruthless bundle discipline: route-level code splitting, suspending below-the-fold widgets, and shipping zero JavaScript for static sections. We combine that with pre-caching critical assets so repeat visits feel instant, even on mid-range phones.",
      "The result we engineer for is simple: LCP under 1.2s, INP under 50ms, CLS near zero. Not because the audit demands it — but because users can feel the difference, and Google's rankings quietly reward it.",
    ],
  },
  {
    id: "post-3",
    title: "Why Pure Node.js Microservices Outperform Bloated Stacks in 2026",
    category: "Backend Engineering",
    date: "June 28, 2026",
    readTime: "5 min read",
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY6NzZ8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYmxvZyUyMHdlYiUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwwfHx8fDE3OTA1Mjg1NTV8MA&ixlib=rb-4.1.0&q=85",
    excerpt:
      "Streamlining API responses, handling high database concurrency and cutting server bills by 60%.",
    body: [
      "Every layer you add to a backend is a tax on every request. We keep seeing startups drown in orchestration layers, message queues and ORMs before they have a thousand users — then wonder why their cloud bill grows faster than their revenue.",
      "A disciplined Node JS service with a thin data layer handles remarkable concurrency on modest hardware. Non-blocking I/O, connection pooling and response shaping — returning exactly the fields a screen needs — routinely cuts server costs by more than half.",
      "Boring architecture, exciting results. That's our backend philosophy: fewer moving parts, honest measurements, and performance you can feel on the very first request.",
    ],
  },
];
