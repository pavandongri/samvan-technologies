export type ServiceItem = {
  slug: string;
  title: string;
  desc: string;
  tag: string;
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "freelancing",
    title: "Freelancing & Staff Augmentation",
    desc: "Senior engineers embedded with your squad—clear scopes, async-friendly collaboration, and fast ramp-up for peaks or specialized skills.",
    tag: "Talent",
  },
  {
    slug: "whatsapp-api",
    title: "WhatsApp Business API",
    desc: "Official API onboarding, template messaging, chatbot flows, CRM handoffs, and compliance-aware rollout with Meta partners where needed.",
    tag: "Messaging",
  },
  {
    slug: "web-apps",
    title: "Web & Mobile Applications",
    desc: "Modern React/Next.js frontends, APIs, and mobile-friendly experiences with performance, accessibility, and SEO in mind.",
    tag: "Build",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    desc: "AWS/Azure/GCP foundations, CI/CD, observability, and cost guardrails so releases stay boring—in the best way.",
    tag: "Platform",
  },
  {
    slug: "integrations",
    title: "Systems Integrations",
    desc: "ERP, payments, logistics, and SaaS connectors with resilient retries, idempotency, and audit-friendly logging.",
    tag: "Integrate",
  },
  {
    slug: "managed-it",
    title: "Managed IT & Support",
    desc: "Helpdesk, device policies, backups, and proactive monitoring with sensible SLAs for growing teams.",
    tag: "Operations",
  },
  {
    slug: "security",
    title: "Security Hardening",
    desc: "Threat modeling basics, secrets hygiene, IAM reviews, and secure SDLC checks for shipping without surprises.",
    tag: "Security",
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    desc: "Pipelines, warehouses-lite, and dashboards that leadership actually uses—without a science project.",
    tag: "Insights",
  },
];
