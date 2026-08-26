import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import cvAsset from "@/assets/cv.pdf";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground">
            Vittorio Doria
          </span>
          <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Global Powertrain Executive
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={cvAsset}
            download="Vittorio-Doria-CV.pdf"
            className="ml-3 inline-flex items-center gap-2 rounded-md border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <FileDown className="size-4" aria-hidden="true" />
            Résumé
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={cvAsset}
              download="Vittorio-Doria-CV.pdf"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-primary/40 px-4 py-3 text-sm font-semibold text-primary"
            >
              <FileDown className="size-4" aria-hidden="true" />
              Download résumé
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
