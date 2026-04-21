import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/quote-form";
import { SITE, formatAddressLines } from "@/lib/site";
import { FadeUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "Get a quote",
  description: `Request a project quote from ${SITE.name} — scope, timeline, and budget.`,
};

export default function QuotePage() {
  const lines = formatAddressLines();

  return (
    <div className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            Get a quote
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Tell us what you are building
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Share enough context for a meaningful first response—we may follow up
            with a short call or clarifying questions before a formal estimate.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="space-y-6 lg:col-span-4">
            <div className="glass rounded-2xl p-6">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                Prefer email or phone?
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <span className="block text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
                    General
                  </span>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-medium text-cyan-700 hover:underline dark:text-cyan-400"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <span className="block text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
                    Office / HR
                  </span>
                  <a
                    href={`mailto:${SITE.officeEmail}`}
                    className="font-medium text-cyan-700 hover:underline dark:text-cyan-400"
                  >
                    {SITE.officeEmail}
                  </a>
                </li>
                <li>
                  <span className="block text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
                    Phone
                  </span>
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="font-medium text-slate-900 hover:text-cyan-700 dark:text-white dark:hover:text-cyan-300"
                  >
                    {SITE.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white/70 p-6 text-sm dark:border-white/10 dark:bg-slate-950/50">
              <h2 className="font-semibold text-slate-900 dark:text-white">
                Office
              </h2>
              <address className="not-italic mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                {lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <Link
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-cyan-700 hover:underline dark:text-cyan-400"
              >
                View on map →
              </Link>
            </div>

            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-500">
              For quick questions without pricing, use the{" "}
              <Link href="/contact" className="font-medium text-cyan-700 underline dark:text-cyan-400">
                contact form
              </Link>{" "}
              instead.
            </p>
          </aside>

          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-slate-200/90 bg-white/80 p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-slate-950/50">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Quote request
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Fields marked with HTML5 validation are required. Your details
                stay with {SITE.shortName}—no resale, no spam lists.
              </p>
              <div className="mt-6">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
