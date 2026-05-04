import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { SITE, formatAddressLines } from "@/lib/site";
import { FadeUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach ${SITE.name} — email, phone, office, and project form.`,
};

const faqs = [
  {
    q: "Do you work on short freelance spikes?",
    a: "Yes—when the scope is crisp (e.g., WhatsApp template setup, a single integration). We still begin with a short discovery to de-risk assumptions.",
  },
  {
    q: "Can you help with WhatsApp Business API compliance?",
    a: "We align templates, opt-in flows, and handoffs to CRM/helpdesk tools. For regulated sectors we document audit-friendly trails.",
  },
  {
    q: "What timezones do you cover?",
    a: "Core overlap is IST-friendly with flexible hours for US/EU partners on retainer programs.",
  },
];

export default function ContactPage() {
  const lines = formatAddressLines();

  return (
    <div className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Let&apos;s scope the next release
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Share goals, links, and deadlines. We read every message and respond
            with next steps—not a generic autoresponder essay.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Office & lines
              </h2>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-slate-500 dark:text-slate-500">
                    Email (general)
                  </dt>
                  <dd className="mt-1">
                    <Link
                      href={`mailto:${SITE.email}`}
                      className="font-medium text-cyan-700 hover:underline dark:text-cyan-400"
                    >
                      {SITE.email}
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500 dark:text-slate-500">
                    Office / HR
                  </dt>
                  <dd className="mt-1">
                    <Link
                      href={`mailto:${SITE.officeEmail}`}
                      className="font-medium text-cyan-700 hover:underline dark:text-cyan-400"
                    >
                      {SITE.officeEmail}
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500 dark:text-slate-500">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${SITE.phoneTel}`}
                      className="font-medium text-slate-900 hover:text-cyan-700 dark:text-white dark:hover:text-cyan-300"
                    >
                      {SITE.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500 dark:text-slate-500">
                    Address
                  </dt>
                  <dd className="mt-1 text-slate-600 dark:text-slate-400">
                    {lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500 dark:text-slate-500">
                    Map
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={SITE.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-cyan-700 hover:underline dark:text-cyan-400"
                    >
                      Open in OpenStreetMap
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-8 overflow-hidden rounded-xl border border-slate-200/90 dark:border-white/10">
                <iframe
                  title="Samvan Technologies office region map"
                  src={SITE.mapEmbedUrl}
                  className="aspect-[16/10] h-auto min-h-[200px] w-full bg-slate-100 dark:bg-slate-900"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/90 bg-white/80 p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-slate-950/50">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Contact us
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                We never sell your details. Fields marked implicit by HTML5{" "}
                <code className="rounded bg-slate-100 px-1 text-xs dark:bg-white/10">
                  required
                </code>{" "}
                are mandatory.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        <section
          id="faq"
          className="scroll-mt-28 mt-20 border-t border-slate-200/80 pt-16 dark:border-white/10"
        >
          <FadeUp>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              FAQs
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Quick answers—happy to go deeper on a call.
            </p>
          </FadeUp>
          <ul className="mt-10 space-y-6">
            {faqs.map((f) => (
              <li
                key={f.q}
                className="rounded-2xl border border-slate-200/80 bg-white/60 p-6 dark:border-white/10 dark:bg-slate-950/40"
              >
                <p className="font-medium text-slate-900 dark:text-white">
                  {f.q}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {f.a}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
