import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "About",
  description: `How ${SITE.name} works with teams—from discovery to delivery.`,
};

const principles = [
  {
    title: "Clarity over noise",
    body: "We write decisions down, keep interfaces small, and avoid mystery meat architecture.",
  },
  {
    title: "Security by default",
    body: "Secrets, IAM, and logging are part of day one—not a panic patch before launch.",
  },
  {
    title: "Handoff you can own",
    body: "Runbooks, diagrams, and code comments so your team is never locked in.",
  },
];

export default function AboutPage() {
  return (
    <div className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-700 dark:text-violet-400">
            About
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Built for operators, founders, and product leads
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {SITE.name} is a boutique IT solutions practice focused on
            integrations, customer messaging (including WhatsApp Business API),
            and dependable cloud foundations. We keep teams small, senior, and
            accountable to outcomes—not hours billed for busywork.
          </p>
        </FadeUp>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {principles.map((p) => (
            <StaggerItem key={p.title}>
              <div className="glass h-full rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="rounded-2xl border border-slate-200/90 bg-white/70 p-8 dark:border-white/10 dark:bg-slate-950/50">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              How engagements run
            </h2>
            <ol className="mt-6 space-y-5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <span className="font-mono text-cyan-700 dark:text-cyan-400">
                  01
                </span>{" "}
                — Discovery call + async brief review (usually 2–3 days).
              </li>
              <li>
                <span className="font-mono text-cyan-700 dark:text-cyan-400">
                  02
                </span>{" "}
                — Proposal with milestones, risks, and rollback plans.
              </li>
              <li>
                <span className="font-mono text-cyan-700 dark:text-cyan-400">
                  03
                </span>{" "}
                — Build in tight loops with weekly demos until go-live.
              </li>
              <li>
                <span className="font-mono text-cyan-700 dark:text-cyan-400">
                  04
                </span>{" "}
                — Optional retainers for monitoring, API changes, and cost
                hygiene.
              </li>
            </ol>
          </div>

          <div
            id="pricing"
            className="scroll-mt-28 rounded-2xl border border-cyan-500/25 bg-gradient-to-br from-cyan-50/90 to-white p-8 dark:from-cyan-950/40 dark:to-slate-900"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Pricing philosophy
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              We price against outcomes and risk—not generic day rates on a
              spreadsheet. Smaller scopes can start time-and-materials with a
              capped ceiling; larger programs move to milestone billing once
              paths are de-risked.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-50"
            >
              Request a tailored quote
            </Link>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
