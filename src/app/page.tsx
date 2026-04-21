import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";
import { FadeUp, FloatBlob, Stagger, StaggerItem } from "@/components/motion";

const clients = [
  "Meridian Health",
  "Atlas Logistics",
  "Vertex Finance",
  "Northwind Manufacturing",
  "Pulse Retail",
  "Cobalt Energy",
];

const stats = [
  { value: "12+", label: "Years collective experience" },
  { value: "180+", label: "Deliveries & retainers" },
  { value: "24/7", label: "Coverage on managed programs" },
];

const preview = SERVICES.slice(0, 3);

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:px-8">
        <FloatBlob className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/25 via-violet-500/15 to-transparent blur-3xl dark:from-cyan-500/20" />
        <FloatBlob className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-gradient-to-tr from-cyan-500/15 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <FadeUp>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-widest text-cyan-800 dark:text-cyan-300/90">
              {SITE.name}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Ship faster with integrations, apps, and{" "}
              <span className="text-gradient">WhatsApp-grade messaging.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400">
              {SITE.tagline} Whether you need a focused freelancer squad or a
              full WhatsApp Business API rollout, we stay close from discovery
              to steady-state.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:from-cyan-500 hover:to-cyan-400 dark:from-cyan-500 dark:to-cyan-400 dark:text-slate-950 dark:shadow-cyan-500/25"
              >
                Explore services
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200/90 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-white/25 dark:hover:bg-white/10"
              >
                Get a quote
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold text-cyan-800 underline-offset-4 transition hover:underline dark:text-cyan-400"
              >
                Contact
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white/60 px-4 py-12 backdrop-blur-sm dark:border-white/5 dark:bg-slate-950/40 sm:px-6 lg:px-8">
        <Stagger className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="text-center sm:text-left">
              <p className="font-mono text-3xl font-semibold tabular-nums text-cyan-700 sm:text-4xl dark:text-cyan-400">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
                {s.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <FadeUp className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-violet-700 dark:text-violet-400">
              Snapshot
            </h2>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              A partner for delivery—not slideware.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Samvan blends product thinking with hands-on engineering. Expect
              crisp communication, pragmatic security, and documentation your
              team can run with.
            </p>
          </FadeUp>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {preview.map((svc, i) => (
              <FadeUp key={svc.slug} delay={i * 0.06}>
                <article className="glass h-full rounded-2xl p-6">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-cyan-700 dark:text-cyan-300/90">
                    {svc.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {svc.desc}
                  </p>
                  <Link
                    href={`/services#${svc.slug}`}
                    className="mt-4 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-300"
                  >
                    Details →
                  </Link>
                </article>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="mt-10 text-center lg:text-left">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200/90 bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              View full catalog
            </Link>
          </FadeUp>
        </div>
      </section>

      <section className="border-t border-slate-200/80 px-4 py-20 dark:border-white/5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
              Trusted by teams who ship
            </h2>
          </FadeUp>
          <div className="mt-8 overflow-hidden">
            <div
              className="flex w-max gap-x-14 gap-y-6 pr-14 animate-marquee"
              style={{ willChange: "transform" }}
            >
              {[...clients, ...clients].map((name, idx) => (
                <span
                  key={`${name}-${idx}`}
                  className="shrink-0 text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-500"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <FadeUp className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-cyan-500/25 bg-gradient-to-br from-cyan-50/90 via-white to-violet-50/80 p-10 sm:p-14 dark:from-cyan-950/50 dark:via-slate-900 dark:to-violet-950/40">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Have a WhatsApp or integration deadline?
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Share context and timelines—we will suggest a lean path forward,
              whether that is a short freelance spike or a managed rollout.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-50"
              >
                Get a quote
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold text-slate-700 underline-offset-4 transition hover:underline dark:text-slate-300"
              >
                General contact
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
