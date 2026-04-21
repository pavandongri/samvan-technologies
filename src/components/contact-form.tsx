"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm, type ContactState } from "@/app/contact/actions";

const initial: ContactState | null = null;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition enabled:hover:from-cyan-500 enabled:hover:to-cyan-400 disabled:cursor-not-allowed disabled:opacity-60 dark:from-cyan-500 dark:to-cyan-400 dark:text-slate-950 dark:shadow-cyan-500/25"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initial);

  const field =
    "w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-cyan-500/30 transition placeholder:text-slate-400 focus:border-cyan-500/50 focus:ring-2 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500";

  return (
    <form action={formAction} className="relative space-y-4">
      <div className="pointer-events-none absolute -left-[9999px] opacity-0" aria-hidden>
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={120}
            autoComplete="name"
            className={field}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
            Email
          </label>
          <input
            id="email"
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

      <div>
        <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
          Company <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          maxLength={160}
          autoComplete="organization"
          className={field}
          placeholder="Organization"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={4000}
          className={`${field} resize-y min-h-[8rem]`}
          placeholder="Goals, timelines, stack, links—anything useful."
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
