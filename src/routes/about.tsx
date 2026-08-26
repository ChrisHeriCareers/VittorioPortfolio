import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, FileDown, GraduationCap, Lightbulb, Mail, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import portraitAsset from "@/assets/portrait.jpeg";
import cvAsset from "@/assets/cv.pdf";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vittorio Doria | Powertrain Executive Biography" },
      {
        name: "description",
        content:
          "Biography, career timeline, education, patents and core competencies of Vittorio Doria — global powertrain executive with 30+ years at Stellantis, FCA, FPT and Centro Ricerche Fiat.",
      },
      { property: "og:title", content: "About Vittorio Doria | Powertrain Executive" },
      {
        property: "og:description",
        content:
          "Career overview, work experience timeline, education, certifications and professional philosophy of a global engine product development leader.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  {
    period: "2024 — Present",
    role: "Global Engine Family Manager, Executive Director",
    org: "Stellantis · Belo Horizonte, Brazil",
    scope:
      "4 engine families · 1.22M units annually · 3 plants · 4 market regions · 55 direct and indirect reports · €15M annual budget",
    points: [
      "Direct four base engine families from development through industrialization and serial life across Enlarged Europe, South America, Middle East Africa and North America.",
      "Delivered €22.49 per vehicle in consolidated 2025 savings — roughly €27M annualized — more than doubling the prior year against a €26 per vehicle 2026 target.",
      "Reduced field defect rates by 69 to 92 percent from launch on three families, including 6 kppm to 0.5, 7 to 1.1 and 10 to 3.1.",
      "Own the efficiency roadmap against Euro 6, Euro 7, PROCONVE PL7/PL8 and US Bin 50/40/30 across three regulatory jurisdictions.",
      "Define optimal engine architectures for next-generation HEV, PHEV and REEV powertrains against South American market and electrification timelines.",
      "Chair the Change Management Board and govern status, risk and issue resolution through the Global Harmonized Process; grew budget ownership from €10M to €15M over three planning cycles.",
    ],
  },
  {
    period: "2021 — 2023",
    role: "Global Engine Family Manager, Executive Director",
    org: "Stellantis · Torino, Italy",
    scope: "Small Gasoline Engine portfolio · 3 market regions · development to serial life",
    points: [
      "Led Small Gasoline Engine program execution across Enlarged Europe, North America and South America, reducing engine complexity and aligning delivery between regions.",
      "Supported relocation of an engine production line from Europe to South America, expanding capacity while minimizing capital through reuse of existing manufacturing assets.",
      "Held full accountability for base engine development, industrialization and serial life across the portfolio.",
    ],
  },
  {
    period: "2017 — 2021",
    role: "Senior Technical Director",
    org: "FCA · Belo Horizonte, Brazil",
    scope:
      "205 reports (155 engine, 50 transmission) · 900K units annually · 2 plants · 3 market regions · €25M peak budget",
    points: [
      "Reorganized and led a 205-person multidisciplinary engineering organization spanning engine and transmission development.",
      "Directed the GSE Turbo FLEX family from concept through validation, industrialization and launch across Fiat, Jeep and Abarth platforms.",
      "Delivered the CVT transmission introduction on Fiat Pulse, contributing to one of the strongest performers in its Latin American segment.",
      "Managed annual engineering budgets peaking at €25M across a Brazil–Italy two-plant footprint.",
    ],
  },
  {
    period: "2015 — 2016",
    role: "Advanced Gasoline Technology Manager",
    org: "FCA · Torino, Italy",
    scope: "35 reports · €6.5M annual budget · 3 market regions",
    points: [
      "Led a 35-person multidisciplinary team developing next-generation gasoline engine technologies.",
      "Drove innovation strategy and technology roadmap definition, delivering technical outcomes across four strategic innovation programs.",
    ],
  },
  {
    period: "2013 — 2014",
    role: "Engine Global Platform Manager",
    org: "FPT (Fiat Powertrain Technologies) · Torino, Italy",
    scope: "5 global platform teams · 1.5M units annually · 5 plants in 5 countries · €27M budget",
    points: [
      "Led five global platform teams across EMEA, NAFTA, LATAM and APAC, aligning product strategy, quality, cost, timing and performance targets.",
      "Directed worldwide platform management of the FIRE engine family across plants in Italy, Brazil, the United States, China and India — 1.5 million units in 2014.",
      "Enabled the successful launch of more than ten vehicle applications and localized FIRE MAIR Turbo production in China, improving industrial competitiveness.",
    ],
  },
  {
    period: "2010 — 2013",
    role: "Chief Engineer Coordinator Manager",
    org: "FPT (Fiat Powertrain Technologies) · Torino, Italy",
    scope: "Global base engine programs · four gasoline engine families",
    points: [
      "Led technical governance of global base engine programs from product definition through validation and launch.",
      "Held end-to-end technical responsibility for TwinAir, FIRE, FIRE MAIR and 1.8 GDI families.",
      "Accountable for product strategy, competitiveness and technology roadmap definition across the base engine portfolio.",
    ],
  },
  {
    period: "2008 — 2010",
    role: "Chief Engineer",
    org: "FPT (Fiat Powertrain Technologies) · Torino and Napoli, Italy",
    scope: "Two award-winning engine programs",
    points: [
      "Directed development and industrialization of the FIRE MAIR Turbo with MultiAir variable valve actuation — Best New Engine of the Year, 2009.",
      "Subsequently led the TwinAir family from development through market launch — International Engine of the Year, 2011.",
    ],
  },
  {
    period: "1993 — 2008",
    role: "Advanced Gasoline Technology Engineer",
    org: "Centro Ricerche Fiat · Orbassano, Italy",
    scope: "Advanced research to production implementation",
    points: [
      "Contributed to development and industrialization of advanced gasoline technologies, including the production implementation of MultiAir fully variable valve actuation.",
      "Led engineering activity across combustion development, fluid dynamics, valvetrain systems, fuel injection, calibration, testing and demonstrator vehicles.",
    ],
  },
];

const competencies = [
  {
    heading: "Enterprise & Organizational Leadership",
    items: [
      "Global engineering organizations",
      "Multi-region team leadership",
      "Organizational transformation",
      "Talent development & coaching",
      "Cross-functional & matrix leadership",
      "Multi-million euro budget ownership",
    ],
  },
  {
    heading: "Product & Technology Strategy",
    items: [
      "Powertrain portfolio strategy",
      "Technology roadmap definition",
      "Hybrid architecture (HEV, PHEV, REEV)",
      "Product lifecycle management",
      "Advanced research & innovation",
      "Complexity & commonality strategy",
    ],
  },
  {
    heading: "Industrial & Quality Governance",
    items: [
      "Engine industrialization",
      "Serial-life management",
      "Regulatory compliance",
      "Field defect reduction",
      "Manufacturing localization",
      "Risk & change governance",
    ],
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Intro */}
        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_340px] lg:items-start">
            <div>
              <p className="eyebrow">Professional biography</p>
              <div className="accent-rule mt-4" />
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl">
                Vittorio Doria
              </h1>
              <p className="mt-3 font-display text-lg font-semibold text-primary">
                Global Powertrain Executive · Engine Product Development, Industrialization &amp;
                Technology Strategy
              </p>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Vittorio Doria is a global powertrain executive with more than thirty years of
                  experience taking engine technology from advanced research into series production
                  — and keeping it competitive across its full commercial life. A mechanical
                  engineer from Politecnico di Torino, he has led programs across Europe, South
                  America, North America and Asia, and today owns four base engine families
                  producing 1.22 million units a year.
                </p>
                <p>
                  His authority is built on depth, not distance from the work. Fifteen years inside
                  Centro Ricerche Fiat gave him a working command of combustion, fluid dynamics,
                  valvetrain design, injection systems and calibration, and put him on the team that
                  brought MultiAir fully variable valve actuation into production. That technology
                  later powered the FIRE MAIR Turbo, named Best New Engine of the Year in 2009 — a
                  program he directed as Chief Engineer. He followed it with TwinAir, International
                  Engine of the Year in 2011.
                </p>
                <p>
                  As his scope widened, so did his remit: global platform ownership across five
                  countries, a 205-person engineering reorganization in Brazil, and executive
                  accountability for portfolio strategy, industrialization and serial life at
                  Stellantis. He holds two granted patents in powertrain technology with a third
                  application under review.
                </p>
                <p>
                  Based in Belo Horizonte and an Italian citizen with EU work authorization, he
                  works in Italian, Portuguese and English, and is equally at home in a Torino
                  design review and a Brazilian plant audit.
                </p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24">
              <img
  src={portraitAsset}
                alt="Portrait of Vittorio Doria"
                width={640}
                height={720}
                loading="lazy"
                className="w-full rounded-lg border border-border object-cover shadow-elevated"
              />
              <div className="panel mt-5 space-y-3 p-5 text-sm">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                  At a glance
                </p>
                <p className="text-muted-foreground">30+ years in powertrain engineering</p>
                <p className="text-muted-foreground">4 engine families · 1.22M units per year</p>
                <p className="text-muted-foreground">€15M annual engineering budget</p>
                <p className="text-muted-foreground">2 Engine of the Year awards · 2 patents</p>
              </div>
            </aside>
          </div>
        </section>

        {/* Career overview */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="eyebrow">Career overview</p>
          <div className="accent-rule mt-4" />
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              Research bench to executive committee, without leaving the engineering behind
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Four distinct phases define this career. Research and technology creation at Centro
                Ricerche Fiat. Chief engineer program leadership at FPT, where award-winning engines
                reached market. Global platform and organizational leadership at FPT and FCA,
                scaling delivery across continents. And executive portfolio ownership at Stellantis,
                where technology strategy, regulatory compliance and industrial economics converge.
              </p>
              <p>
                The through-line is accountability for outcomes that can be counted: units produced,
                defects removed, euros saved, launches completed, standards met. Each step increased
                the span — from single programs to five global platform teams to a full engine
                portfolio — while the operating method stayed constant.
              </p>
            </div>
          </div>
        </section>

        {/* Experience timeline */}
        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <p className="eyebrow">Work experience</p>
            <div className="accent-rule mt-4" />
            <h2 className="mt-6 font-display text-3xl font-bold sm:text-4xl">Career timeline</h2>

            <ol className="mt-12 space-y-10 border-l border-border pl-6 sm:pl-10">
              {timeline.map((entry) => (
                <li key={entry.period + entry.role} className="relative">
                  <span
                    className="absolute -left-[31px] top-2 size-3 rounded-full border-2 border-primary bg-background sm:-left-[47px]"
                    aria-hidden="true"
                  />
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                    {entry.period}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold">{entry.role}</h3>
                  <p className="mt-1 text-sm font-medium text-foreground/80">{entry.org}</p>
                  <p className="mt-3 rounded-md border border-border bg-background/50 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                    <span className="font-mono uppercase tracking-[0.14em] text-primary/80">
                      Scope ·{" "}
                    </span>
                    {entry.scope}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {entry.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Education, patents, recognition */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="panel p-6">
              <GraduationCap className="size-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 font-display text-lg font-bold">Education</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Mechanical Engineering Degree
                <br />
                Politecnico di Torino, Italy
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Languages: Italian (native), Portuguese (fluent), English.
              </p>
            </div>

            <div className="panel p-6">
              <Lightbulb className="size-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 font-display text-lg font-bold">
                Patents &amp; Technical Credentials
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Two granted patents in powertrain technology, with a further application under
                review. Contributed to the production implementation of MultiAir fully variable
                valve actuation.
              </p>
            </div>

            <div className="panel p-6">
              <Award className="size-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 font-display text-lg font-bold">Industry Recognition</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>FIRE MAIR TC — Best New Engine of the Year, 2009</li>
                <li>TwinAir — International Engine of the Year, 2011</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core competencies */}
        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <p className="eyebrow">Core competencies</p>
            <div className="accent-rule mt-4" />
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {competencies.map((group) => (
                <div key={group.heading}>
                  <h2 className="font-display text-base font-bold uppercase tracking-wide text-primary">
                    {group.heading}
                  </h2>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-border/70 pb-2.5 text-sm text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy & mission */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="panel p-8">
              <p className="eyebrow">Professional philosophy</p>
              <h2 className="mt-4 font-display text-2xl font-bold">
                Technology only counts once it ships
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  An engine concept is a hypothesis. It becomes engineering when it survives
                  validation, industrialization, a plant's real capability and a decade of field
                  data. I lead from that conviction: decisions get made with the physics, the cost
                  model and the manufacturing constraint on the same table.
                </p>
                <p>
                  I also believe organizations deliver what their structure allows. When results
                  lag, the answer is usually clearer ownership, tighter governance and
                  better-developed people — not more reporting. Build the team, define the decision
                  rights, then hold the line on quality.
                </p>
              </div>
            </div>

            <div className="panel p-8">
              <p className="eyebrow">Mission statement</p>
              <h2 className="mt-4 font-display text-2xl font-bold">
                Efficient, compliant, profitable powertrains — everywhere they're built
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                To develop and industrialize engine portfolios that meet the world's toughest
                emissions standards while remaining economically viable for the markets they serve —
                and to build the engineering organizations capable of delivering them, generation
                after generation, across regions and through the transition to electrification.
              </p>
            </div>
          </div>
        </section>

        {/* Résumé + contact */}
        <section className="border-t border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2">
            <div className="panel p-8">
              <p className="eyebrow">Résumé</p>
              <h2 className="mt-4 font-display text-2xl font-bold">Download the full CV</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Complete career history, scope figures, programs and recognition in a single PDF —
                formatted for executive search and hiring committees.
              </p>
              <a
                href={cvAsset}
                download="Vittorio-Doria-CV.pdf"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <FileDown className="size-4" aria-hidden="true" />
                Download résumé (PDF)
              </a>
            </div>

            <div className="panel p-8">
              <p className="eyebrow">Contact</p>
              <h2 className="mt-4 font-display text-2xl font-bold">Get in touch directly</h2>
              <div className="mt-6 space-y-3 text-sm">
                <a
                  href="mailto:vittorio.doria@libero.it"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  vittorio.doria@libero.it
                </a>
                <a
                  href="tel:+5531972039811"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  +55 31 97203 9811
                </a>
              </div>
              <Link
                to="/projects"
                className="mt-7 inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                Review the case studies
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
