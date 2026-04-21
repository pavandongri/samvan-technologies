import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Services",
  description: `Capabilities from freelancing to WhatsApp Business API, cloud, and managed support — ${SITE.name}.`,
};

export default function ServicesPage() {
  return (
    <div className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            Services
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            What we deliver for you
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            From WhatsApp Business API integrations to freelance engineering
            pods, Samvan assembles the right depth for your stage—without
            inflating scope.
          </p>
        </FadeUp>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((svc) => (
            <StaggerItem key={svc.slug}>
              <article
                id={svc.slug}
                className="scroll-mt-28 rounded-2xl border border-slate-200/90 bg-white/70 p-6 shadow-sm transition hover:border-cyan-500/35 hover:shadow-md dark:border-white/10 dark:bg-slate-950/50 dark:hover:border-cyan-500/30"
              >
                <span className="inline-flex rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                  {svc.tag}
                </span>
                <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
                  {svc.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {svc.desc}
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-300"
                >
                  Discuss this →
                </Link>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp className="mt-16 rounded-2xl border border-slate-200/90 bg-slate-50/80 p-8 dark:border-white/10 dark:bg-slate-900/40">
          <p className="text-sm font-medium text-slate-900 dark:text-white">
            Not sure where to start?
          </p>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
            Send a short brief—stack, users, compliance needs, and timeline. We
            will recommend a sequencing plan (API first vs. platform first) and
            ballpark effort ranges before any formal SOW.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-50"
          >
            Contact {SITE.shortName}
          </Link>
        </FadeUp>
      </div>
    </div>
  );
}
