import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mesh-bg text-slate-900 relative flex min-h-full flex-1 flex-col dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 grid-overlay" aria-hidden />
      <Navbar />
      <main className="relative flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
