"use client";

import { useFormState, useFormStatus } from "react-dom";
import { SERVICES } from "@/lib/services";
import { submitQuoteForm, type QuoteState } from "@/app/quote/actions";

const initial: QuoteState | null = null;

const budgetOptions = [
  { value: "", label: "Budget range (optional)" },
  { value: "under-50k", label: "Under ₹50,000" },
  { value: "50k-2l", label: "₹50,000 – ₹2,00,000" },
  { value: "2l-5l", label: "₹2,00,000 – ₹5,00,000" },
  { value: "5l-plus", label: "₹5,00,000+" },
  { value: "unsure", label: "Prefer to discuss" },
];

const timelineOptions = [
  { value: "", label: "Timeline (optional)" },
  { value: "asap", label: "ASAP" },
  { value: "2-4w", label: "2–4 weeks" },
  { value: "1-3m", label: "1–3 months" },
  { value: "3m-plus", label: "3+ months" },
  { value: "flex", label: "Flexible" },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition enabled:hover:from-cyan-500 enabled:hover:to-cyan-400 disabled:cursor-not-allowed disabled:opacity-60 dark:from-cyan-500 dark:to-cyan-400 dark:text-slate-950 dark:shadow-cyan-500/25"
    >
      {pending ? "Sending…" : "Request quote"}
    </button>
  );
}

export function QuoteForm() {
  const [state, formAction] = useFormState(submitQuoteForm, initial);

  const field =
    "w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-cyan-500/30 transition placeholder:text-slate-400 focus:border-cyan-500/50 focus:ring-2 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500";

  return (
    <form action={formAction} className="relative space-y-4">
      <div className="pointer-events-none absolute -left-[9999px] opacity-0" aria-hidden>
        <label htmlFor="website_url">Website URL</label>
        <input
          id="website_url"
          type="text"
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
            Name
          </label>
          <input
            id="q-name"
            name="name"
            required
            maxLength={120}
            autoComplete="name"
            className={field}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="q-email" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
            Email
          </label>
          <input
            id="q-email"
            name="email"
            type="email"
            required
            maxLength={180}
            autoComplete="email"
            className={field}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="q-phone" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
            Mobile
          </label>
          <input
            id="q-phone"
            name="phone"
            type="tel"
            required
            maxLength={20}
            autoComplete="tel"
            className={field}
            placeholder="8688504460"
          />
        </div>
        <div>
          <label htmlFor="q-company" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
            Company <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            id="q-company"
            name="company"
            maxLength={160}
            autoComplete="organization"
            className={field}
            placeholder="Organization"
          />
        </div>
      </div>

      <div>
        <label htmlFor="q-service" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
          Primary need
        </label>
        <select
          id="q-service"
          name="service"
          required
          className={field}
          defaultValue=""
        >
          <option value="" disabled>
            Select one
          </option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="other">Other / multiple areas</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="q-budget" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
            Budget
          </label>
          <select id="q-budget" name="budget" className={field} defaultValue="">
            {budgetOptions.map((o) => (
              <option key={o.value || "empty"} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="q-timeline" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
            Timeline
          </label>
          <select id="q-timeline" name="timeline" className={field} defaultValue="">
            {timelineOptions.map((o) => (
              <option key={o.value || "empty"} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="q-details" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
          Project details
        </label>
        <textarea
          id="q-details"
          name="details"
          required
          rows={6}
          maxLength={6000}
          className={`${field} resize-y min-h-[10rem]`}
          placeholder="Goals, current stack, links, deadlines, success criteria—more context helps us quote faster."
        />
      </div>

      {state ? (
        <p
          role="status"
          className={`rounded-xl border px-4 py-3 text-sm ${
            state.ok
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100"
              : "border-rose-500/30 bg-rose-500/10 text-rose-900 dark:text-rose-100"
          }`}
        >
          {state.message}
        </p>
      ) : null}

      <SubmitButton />
    </form>
  );
}
