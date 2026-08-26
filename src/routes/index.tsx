import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileDown, Mail } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import heroImage from "@/assets/hero-engine-line.jpg";
import leadershipImage from "@/assets/expertise-leadership.jpg";
import technologyImage from "@/assets/expertise-technology.jpg";
import industrializationImage from "@/assets/expertise-industrialization.jpg";
import electrificationImage from "@/assets/expertise-electrification.jpg";
import portraitAsset from "@/assets/portrait.jpg";
import cvAsset from "@/assets/cv.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vittorio Doria | Global Powertrain Executive & Engine Strategy" },
      {
        name: "description",
        content:
          "Global powertrain executive directing four engine families, 1.22M units a year across three plants and four market regions. 30+ years in engine development, industrialization and technology strategy.",
      },
      {
        property: "og:title",
        content: "Vittorio Doria | Global Powertrain Executive",
      },
      {
        property: "og:description",
        content:
          "Engine product development, industrialization and technology strategy leader. Two Engine of the Year awards, two granted powertrain patents.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const metrics = [
  { value: "1.22M", label: "Units per year owned" },
  { value: "205", label: "Reports led, peak" },
  { value: "€15M", label: "Annual budget owned" },
  { value: "92%", label: "Peak defect reduction" },
  { value: "5", label: "Plants, five countries" },
  { value: "2", label: "Engine of the Year awards" },
];

const expertise = [
  {
    title: "Enterprise & Organizational Leadership",
    image: leadershipImage,
    imageAlt: "Night operations room overlooking an industrial plant with a global site map",
    body: "Builds and reorganizes engineering organizations that deliver. Restructured and led a 205-person multidisciplinary engine and transmission organization, and today directs global engine family teams spanning Enlarged Europe, South America, Middle East Africa and North America. Runs decision-making through the Change Management Board and a Global Harmonized Process so risk, status and escalation stay visible at executive level.",
    imageIdea:
      "Image idea: leadership at the plant — executive briefing room overlooking an engine facility, global site map on screen.",
  },
  {
    title: "Product & Technology Strategy",
    image: technologyImage,
    imageAlt: "Macro detail of a variable valve actuation cylinder head",
    body: "Defines where engine technology goes next and what it must cost. Owns portfolio architecture decisions for HEV, PHEV and REEV applications, sets efficiency roadmaps against Euro 6, Euro 7, PROCONVE PL7/PL8 and US Bin 50/40/30, and drives commonality and complexity strategy across families. Contributed to the production implementation of MultiAir fully variable valve actuation and holds two granted powertrain patents.",
    imageIdea:
      "Image idea: technology close-up — MultiAir-style valvetrain cutaway lit against a dark technical backdrop.",
  },
  {
    title: "Industrialization & Launch Execution",
    image: industrializationImage,
    imageAlt: "Robotic machining and assembly stations inside a modern powertrain plant",
    body: "Takes engines from concept to saleable product. Directed the FIRE MAIR Turbo, TwinAir and GSE Turbo FLEX families through validation, industrialization and launch, enabled more than ten vehicle applications from a single platform, localized FIRE MAIR Turbo production in China, and relocated a European engine line to South America while reusing existing manufacturing assets to protect capital.",
    imageIdea:
      "Image idea: industrialization — long perspective down a modern engine machining line with robotic stations.",
  },
  {
    title: "Quality, Cost & Regulatory Governance",
    image: electrificationImage,
    imageAlt: "Technical cutaway visualisation of a hybrid powertrain",
    body: "Protects margin and reputation across serial life. Cut field defect rates by 69 to 92 percent from launch on three engine families, driving one from 6 kppm to 0.5, and delivered €22.49 per vehicle in consolidated 2025 savings — roughly €27M annualized and more than double the prior year — while holding programs to three regulatory jurisdictions simultaneously.",
    imageIdea:
      "Image idea: hybrid architecture — transparent cutaway of a hybrid powertrain with electric motor and combustion engine.",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden border-b border-border">
          <img
            src={heroImage}
            alt="Machined engine blocks moving along a production line at dusk"
            width={1920}
            height={1088}
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div className="hero-scrim absolute inset-0 -z-10" />

          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.35fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">Powertrain leadership · 30+ years</p>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                From advanced research to a million engines a year
                <span className="text-gradient-accent"> — and kept there.</span>
              </h1>
              <p className="mt-4 font-display text-lg font-semibold text-primary sm:text-xl">
                Global Powertrain Executive · Engine Product Development, Industrialization &amp;
                Technology Strategy
              </p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                I own four base engine families end to end — architecture, industrialization and
                serial life — delivering 1.22 million units a year across three plants and four
                market regions, on a €15M annual engineering budget. Performance, cost, timing and
                quality sit on my desk, and they stay there until the numbers move.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  View case studies
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <a
                  href={cvAsset}
                  download="Vittorio-Doria-CV.pdf"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <FileDown className="size-4" aria-hidden="true" />
                  Download résumé
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 -z-10 rounded-lg border border-primary/25" />
              <img
                src={portraitAsset}
                alt="Portrait of Vittorio Doria"
                width={640}
                height={720}
                loading="lazy"
                className="w-full rounded-lg border border-border object-cover shadow-elevated"
              />
              <div className="panel mt-4 p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Belo Horizonte, Brazil · Torino, Italy
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Italian citizen with EU work authorization. Italian (native), Portuguese (fluent),
                  English.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 py-12 sm:px-8 md:grid-cols-3 lg:grid-cols-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="px-2 py-4">
                <p className="font-display text-3xl font-extrabold text-primary">{metric.value}</p>
                <p className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Executive summary */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="eyebrow">Executive summary</p>
          <div className="accent-rule mt-4" />
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              Three decades turning engine technology into industrial results
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                My career runs the full length of the powertrain value chain. It started in advanced
                research at Centro Ricerche Fiat, where I spent fifteen years on combustion, fluid
                dynamics, valvetrain, injection and calibration work — including the production
                implementation of MultiAir fully variable valve actuation. That grounding still
                shapes how I lead: I make architecture decisions with the physics in view, not just
                the spreadsheet.
              </p>
              <p>
                As Chief Engineer at Fiat Powertrain Technologies I carried two breakthrough programs
                to market. The FIRE MAIR Turbo was named Best New Engine of the Year in 2009, and the
                TwinAir family took International Engine of the Year in 2011. From there I moved into
                global platform ownership — five platform teams across EMEA, NAFTA, LATAM and APAC,
                1.5 million units a year from five plants in Italy, Brazil, the United States, China
                and India, on a €27M budget.
              </p>
              <p>
                At FCA in Brazil I rebuilt the regional powertrain organization: 205 engine and
                transmission engineers, 900,000 units a year, two plants and a €25M peak budget. That
                team delivered the GSE Turbo FLEX family from concept through launch across Fiat, Jeep
                and Abarth platforms, and introduced the CVT transmission on the Fiat Pulse — one of
                the strongest performers in its Latin American segment.
              </p>
              <p>
                Today, as Global Engine Family Manager and Executive Director at Stellantis, I own
                four base engine families and the roadmap that keeps them compliant and profitable
                across Euro 6, Euro 7, PROCONVE and US Bin frameworks — while defining the engine
                architectures that will sit inside the next generation of HEV, PHEV and REEV
                powertrains. Recent results include a 69 to 92 percent reduction in field defects and
                €22.49 per vehicle in consolidated savings, roughly €27M annualized.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <p className="eyebrow">Featured expertise</p>
            <div className="accent-rule mt-4" />
            <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl">
              Four disciplines where I move the numbers
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {expertise.map((item) => (
                <article
                  key={item.title}
                  className="panel group overflow-hidden transition-colors hover:border-primary/40"
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                    <p className="mt-4 border-t border-border pt-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-primary/80">
                      {item.imageIdea}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="panel p-8 sm:p-14">
            <p className="eyebrow">Let's connect</p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">
              If you're deciding what your next engine generation should be, I've made that call
              before.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              I work with organizations that need engine programs delivered on cost, on timing and on
              compliance — across regions, plants and regulatory frameworks. Tell me what you're
              building and where it's stuck.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="mailto:vittorio.doria@libero.it"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="size-4" aria-hidden="true" />
                Start a conversation
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                Full background
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
