import { FadeUp } from "@/components/motion";

export interface LegalSection {
  number: string;
  title: string;
  body?: string;
  items?: string[];
}

interface LegalLayoutProps {
  badge: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export function LegalLayout({
  badge,
  title,
  lastUpdated,
  intro,
  sections,
}: LegalLayoutProps) {
  return (
    <div className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-700 dark:text-violet-400">
            {badge}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            {title}
          </h1>
          <p className="mt-3 text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Last Updated: {lastUpdated}
          </p>
          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {intro}
          </p>
        </FadeUp>

        <div className="mt-12 space-y-8">
          {sections.map((section) => (
            <FadeUp key={section.number}>
              <div className="rounded-2xl border border-slate-200/90 bg-white/70 p-6 dark:border-white/10 dark:bg-slate-950/50">
                <h2 className="flex items-baseline gap-2.5 text-lg font-semibold text-slate-900 dark:text-white">
                  <span className="font-mono text-sm text-cyan-700 dark:text-cyan-400">
                    {section.number}.
                  </span>
                  {section.title}
                </h2>
                {section.body && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {section.body}
                  </p>
                )}
                {section.items && section.items.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}
