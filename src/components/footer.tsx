import Link from "next/link";
import { SITE, formatAddressLines } from "@/lib/site";

const quick = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/clients", label: "Clients" },
  { href: "/quote", label: "Get a quote" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const lines = formatAddressLines();

  return (
    <footer className="relative border-t border-slate-200/80 bg-white/70 dark:border-white/10 dark:bg-slate-950/80">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent dark:via-cyan-500/40" />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 text-xs font-bold text-white dark:from-cyan-400 dark:to-violet-500 dark:text-slate-950">
                SV
              </span>
              <span className="text-lg font-semibold text-slate-900 dark:text-white">
                {SITE.name}
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {SITE.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200/90 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                {SITE.name}
              </span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400/90">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {quick.map((q) => (
                <li key={q.href}>
                  <Link
                    href={q.href}
                    className="transition hover:text-cyan-700 dark:hover:text-cyan-300"
                  >
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400/90">
              Contact us
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <span className="mb-0.5 block text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  General
                </span>
                <Link
                  href={`mailto:${SITE.email}`}
                  className="transition hover:text-cyan-700 dark:hover:text-cyan-300"
                >
                  {SITE.email}
                </Link>
              </li>
              <li>
                <span className="mb-0.5 block text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  Office / HR
                </span>
                <Link
                  href={`mailto:${SITE.officeEmail}`}
                  className="transition hover:text-cyan-700 dark:hover:text-cyan-300"
                >
                  {SITE.officeEmail}
                </Link>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="transition hover:text-cyan-700 dark:hover:text-cyan-300"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="inline-flex font-medium text-cyan-700 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-300"
                >
                  Request a quote →
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex font-medium text-slate-700 hover:text-cyan-800 dark:text-slate-400 dark:hover:text-cyan-300"
                >
                  General contact form →
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400/90">
              Location
            </h3>
            <address className="not-italic text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              <p className="font-medium text-slate-900 dark:text-white">
                Registered office
              </p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                {lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-cyan-700 transition hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-300"
              >
                View on map
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-8 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-slate-400 dark:text-slate-600">
            Built with care for clarity, speed, and uptime.
          </p>
        </div>
      </div>
    </footer>
  );
}
