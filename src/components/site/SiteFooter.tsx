import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 font-display text-xl font-bold">Let's talk powertrain strategy</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Open to executive engineering leadership, technology strategy and industrial
            transformation mandates in Europe, South America and North America.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <a
            href="mailto:vittorio.doria@libero.it"
            className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-4 shrink-0" aria-hidden="true" />
            vittorio.doria@libero.it
          </a>
          <a
            href="tel:+5531972039811"
            className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-4 shrink-0" aria-hidden="true" />
            +55 31 97203 9811
          </a>
          <p className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="size-4 shrink-0" aria-hidden="true" />
            Belo Horizonte, Brazil · Italian citizen (EU work authorization)
          </p>
        </div>

        <div className="text-sm">
          <p className="eyebrow">Navigate</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/about" className="text-muted-foreground transition-colors hover:text-primary">
              About
            </Link>
            <Link
              to="/projects"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border/70 px-5 py-6 sm:px-8">
        <p className="mx-auto max-w-6xl font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          © {new Date().getFullYear()} Vittorio Doria · Engine product development, industrialization
          &amp; technology strategy
        </p>
      </div>
    </footer>
  );
}
