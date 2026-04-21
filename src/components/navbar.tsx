"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";

const serviceLinks = SERVICES.slice(0, 6).map((s) => ({
  href: `/services#${s.slug}`,
  title: s.title,
  hint: s.tag,
}));

const companyLinks = [
  { href: "/about", title: "About us", hint: "Team, values, how we work" },
  { href: "/clients", title: "Clients", hint: "Who we partner with" },
  { href: "/quote", title: "Get a quote", hint: "Scope, budget, timeline" },
];

const resourceLinks = [
  { href: "/services", title: "Service catalog", hint: "Full capability map" },
  { href: "/quote", title: "Get a quote", hint: "Scope, budget, timeline" },
  { href: "/about#pricing", title: "Pricing approach", hint: "How we scope work" },
  { href: "/contact#faq", title: "FAQs", hint: "Engagements & timelines" },
];

type MenuKey = "services" | "company" | "resources" | null;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`ml-0.5 h-4 w-4 opacity-60 transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DropdownPanel({
  items,
  footer,
  align = "left",
}: {
  items: { href: string; title: string; hint: string }[];
  footer?: { href: string; label: string };
  align?: "left" | "right";
}) {
  const pos =
    align === "right" ? "right-0 left-auto" : "left-0 right-auto";
  return (
    <div
      className={`absolute top-full z-50 mt-2 w-[min(100vw-2rem,20rem)] origin-top rounded-xl border border-slate-200/90 bg-white/95 p-2 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/95 dark:shadow-black/40 dark:ring-white/10 ${pos}`}
      role="menu"
    >
      <ul className="max-h-[min(70vh,22rem)] space-y-0.5 overflow-y-auto overscroll-contain pr-1">
        {items.map((item) => (
          <li key={item.href} role="none">
            <Link
              href={item.href}
              role="menuitem"
              className="block rounded-lg px-3 py-2.5 transition hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <span className="block text-sm font-medium text-slate-900 dark:text-slate-100">
                {item.title}
              </span>
              <span className="mt-0.5 block text-xs text-slate-500 dark:text-slate-400">
                {item.hint}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {footer ? (
        <div className="mt-2 border-t border-slate-200/80 pt-2 dark:border-white/10">
          <Link
            href={footer.href}
            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-50 dark:text-cyan-300 dark:hover:bg-cyan-500/10"
          >
            {footer.label}
            <span aria-hidden>→</span>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const closeAll = useCallback(() => {
    setMenu(null);
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeAll]);

  useEffect(() => {
    const onPointer = (e: MouseEvent | TouchEvent) => {
      if (!navRef.current) return;
      const t = e.target as Node;
      if (!navRef.current.contains(t)) setMenu(null);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const barClass = scrolled
    ? "glass border-b border-slate-200/80 shadow-sm shadow-slate-900/5 dark:border-white/5 dark:shadow-cyan-500/5"
    : "border-b border-transparent bg-white/40 dark:bg-slate-950/20";

  const linkBase =
    "rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white";

  const active = (path: string) =>
    pathname === path
      ? "bg-slate-900 text-white shadow-sm dark:bg-white/10 dark:text-white"
      : "";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow] duration-300 ${barClass}`}>
      <nav
        ref={navRef}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8"
      >
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200/90 bg-white/70 text-slate-800 shadow-sm md:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileOpen ? <IconClose /> : <IconMenu />}
          </button>

          <Link
            href="/"
            className="group flex min-w-0 items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-slate-100"
            onClick={closeAll}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 text-xs font-bold text-white shadow-md shadow-cyan-500/25 transition group-hover:shadow-cyan-400/35 dark:from-cyan-400 dark:to-violet-500 dark:text-slate-950">
              SV
            </span>
            <span className="hidden truncate text-sm sm:inline sm:text-base">
              {SITE.shortName}
              <span className="text-cyan-700 dark:text-cyan-400"> IT</span>
            </span>
          </Link>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          <Link href="/" className={`${linkBase} ${active("/")}`}>
            Home
          </Link>

          <div className="relative">
            <button
              type="button"
              className={`${linkBase} inline-flex items-center ${menu === "services" ? "bg-slate-100 dark:bg-white/10" : ""}`}
              aria-expanded={menu === "services"}
              aria-haspopup="menu"
              onClick={() =>
                setMenu((m) => (m === "services" ? null : "services"))
              }
            >
              Services
              <Chevron open={menu === "services"} />
            </button>
            {menu === "services" ? (
              <DropdownPanel
                items={serviceLinks}
                footer={{ href: "/services", label: "View all services" }}
              />
            ) : null}
          </div>

          <div className="relative">
            <button
              type="button"
              className={`${linkBase} inline-flex items-center ${menu === "company" ? "bg-slate-100 dark:bg-white/10" : ""}`}
              aria-expanded={menu === "company"}
              aria-haspopup="menu"
              onClick={() =>
                setMenu((m) => (m === "company" ? null : "company"))
              }
            >
              Company
              <Chevron open={menu === "company"} />
            </button>
            {menu === "company" ? (
              <DropdownPanel items={companyLinks} />
            ) : null}
          </div>

          <div className="relative">
            <button
              type="button"
              className={`${linkBase} inline-flex items-center ${menu === "resources" ? "bg-slate-100 dark:bg-white/10" : ""}`}
              aria-expanded={menu === "resources"}
              aria-haspopup="menu"
              onClick={() =>
                setMenu((m) => (m === "resources" ? null : "resources"))
              }
            >
              Resources
              <Chevron open={menu === "resources"} />
            </button>
            {menu === "resources" ? (
              <DropdownPanel items={resourceLinks} align="right" />
            ) : null}
          </div>

          <Link href="/contact" className={`${linkBase} ${active("/contact")}`}>
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/quote"
            className={`hidden rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-cyan-500/20 transition hover:from-cyan-500 hover:to-cyan-400 md:inline-flex dark:from-cyan-500 dark:to-cyan-400 dark:text-slate-950 dark:shadow-cyan-500/25 ${
              pathname === "/quote"
                ? "ring-2 ring-cyan-300/80 ring-offset-2 ring-offset-slate-50 dark:ring-cyan-400/60 dark:ring-offset-slate-950"
                : ""
            }`}
          >
            Get a quote
          </Link>
        </div>
      </nav>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-slate-200/80 bg-white/95 p-4 pb-10 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/95 md:hidden"
        >
          <div className="mx-auto flex max-w-lg flex-col gap-6">
            <Link
              href="/"
              className="rounded-xl border border-slate-200/80 px-4 py-3 text-sm font-semibold dark:border-white/10"
              onClick={closeAll}
            >
              Home
            </Link>

            <MobileGroup title="Services" defaultOpen>
              <Link
                href="/services"
                className="font-medium text-cyan-700 dark:text-cyan-300"
                onClick={closeAll}
              >
                View all services →
              </Link>
              <ul className="mt-2 space-y-1">
                {serviceLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="block rounded-lg px-2 py-2 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
                      onClick={closeAll}
                    >
                      {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </MobileGroup>

            <MobileGroup title="Company">
              <ul className="space-y-1">
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="block rounded-lg px-2 py-2 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
                      onClick={closeAll}
                    >
                      {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </MobileGroup>

            <MobileGroup title="Resources">
              <ul className="space-y-1">
                {resourceLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="block rounded-lg px-2 py-2 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
                      onClick={closeAll}
                    >
                      {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </MobileGroup>

            <div className="grid gap-2 sm:grid-cols-2">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 py-3 text-center text-sm font-semibold text-white dark:from-cyan-500 dark:to-cyan-400 dark:text-slate-950"
                onClick={closeAll}
              >
                Get a quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200/90 py-3 text-center text-sm font-semibold text-slate-900 dark:border-white/15 dark:text-white"
                onClick={closeAll}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function MobileGroup({
  title,
  children,
  defaultOpen,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="rounded-xl border border-slate-200/80 p-3 dark:border-white/10">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900 dark:text-slate-100"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {title}
        <Chevron open={open} />
      </button>
      {open ? <div className="mt-3">{children}</div> : null}
    </div>
  );
}

function IconMenu() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconClose() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
