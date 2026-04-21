import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Clients",
  description: `Organizations ${SITE.name} partners with across industries.`,
};

const stories = [
  {
    company: "Meridian Health",
    sector: "Healthcare",
    text: "HIPAA-aware messaging workflows with audit trails and template governance.",
  },
  {
    company: "Atlas Logistics",
    sector: "Logistics",
    text: "Driver notifications via WhatsApp Business API with CRM sync and fallbacks.",
  },
  {
    company: "Vertex Finance",
    sector: "Fintech",
    text: "Hardened integrations between core banking APIs and internal risk tooling.",
  },
];

export default function ClientsPage() {
  return (
    <div className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            Clients
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Partners across regulated and high-growth spaces
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Names are representative of the profiles we serve—integrations-heavy,
            uptime-sensitive, and documentation-minded.
          </p>
        </FadeUp>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <StaggerItem key={s.company}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white/70 p-6 dark:border-white/10 dark:bg-slate-950/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  {s.sector}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                  {s.company}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {s.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp className="mt-14 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Want a reference call in your industry? Ask when you reach out.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white dark:from-cyan-500 dark:to-cyan-400 dark:text-slate-950"
          >
            Contact {SITE.shortName}
          </Link>
        </FadeUp>
      </div>
    </div>
  );
}
