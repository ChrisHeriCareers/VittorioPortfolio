import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileDown, Mail } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import heroImage from "@/assets/hero-engine-line.jpg";
import technologyImage from "@/assets/expertise-technology.jpg";
import industrializationImage from "@/assets/expertise-industrialization.jpg";
import leadershipImage from "@/assets/expertise-leadership.jpg";
import electrificationImage from "@/assets/expertise-electrification.jpg";
import cvAsset from "@/assets/cv.pdf";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Case Studies | Vittorio Doria, Powertrain Executive" },
      {
        name: "description",
        content:
          "Six powertrain case studies: MultiAir industrialization, FIRE MAIR Turbo, TwinAir, global FIRE platform management, GSE Turbo FLEX in Brazil, and a portfolio-wide quality and cost turnaround.",
      },
      { property: "og:title", content: "Projects & Case Studies | Vittorio Doria" },
      {
        property: "og:description",
        content:
          "Challenge, approach, results and impact across six major engine programs spanning research, industrialization and multi-region serial life.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

type CaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  challenge: string;
  approach: string[];
  results: string[];
  conclusion: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "multiair",
    eyebrow: "Centro Ricerche Fiat · 1993–2008",
    title: "MultiAir: Bringing Fully Variable Valve Actuation Into Production",
    image: technologyImage,
    imageAlt: "Macro view of a variable valve actuation cylinder head assembly",
    challenge:
      "Fully variable valve actuation promised a step change in gasoline efficiency, torque response and emissions control — but only on the test bench. Electro-hydraulic valve control introduced tolerances, thermal behaviour, durability risk and unit cost that no series production plant had absorbed before. The technology risked staying a research showcase while regulators tightened limits every cycle.",
    approach: [
      "Ran the physics first: combustion development, fluid dynamics and valvetrain analysis to establish which control strategies delivered real efficiency gains rather than bench artefacts.",
      "Moved actuation hardware through progressively harder validation — component rigs, engine dynamometers, calibration cycles and demonstrator vehicles — closing durability and tolerance gaps before industrial commitment.",
      "Worked side by side with fuel injection and calibration teams so valve control, mixture preparation and engine mapping were developed as one system, not three handoffs.",
      "Partnered with manufacturing engineering early to convert research specifications into producible tolerances, assembly sequences and plant-level process capability.",
    ],
    results: [
      "MultiAir fully variable valve actuation reached series production — a first-of-its-kind system in volume gasoline engines.",
      "Became the enabling technology for the FIRE MAIR Turbo, later named Best New Engine of the Year in 2009.",
      "Established a validated technology base that carried across multiple engine families and market regions for more than a decade.",
      "Contributed to two granted patents in powertrain technology.",
    ],
    conclusion:
      "This program set the pattern for everything that followed: a research idea is only valuable once a plant can build it repeatably and a customer can drive it for ten years. It demonstrates deep technical command of combustion and valvetrain engineering combined with the industrial realism to make breakthrough technology manufacturable.",
  },
  {
    id: "fire-mair-turbo",
    eyebrow: "FPT · Chief Engineer · 2008–2010",
    title: "FIRE MAIR Turbo: An Award-Winning Engine, Delivered to Market",
    image: heroImage,
    imageAlt: "Engine blocks on an assembly line at dusk",
    challenge:
      "Fiat needed a small gasoline engine that delivered downsized fuel consumption without surrendering driveability — and it needed to launch on schedule, at cost, across multiple vehicle applications. The engine's differentiator, MultiAir, was also its biggest risk: new actuation hardware, new calibration strategy and a supply base with no volume history.",
    approach: [
      "Took chief engineer accountability for the complete program: architecture definition, performance targets, validation plan, industrialization and launch readiness.",
      "Integrated MultiAir with turbocharging as a single performance system, tuning valve strategy and boost control together to protect low-end torque and transient response.",
      "Sequenced validation to retire the highest technical risks first, keeping timing decisions grounded in test evidence rather than program optimism.",
      "Aligned engineering, manufacturing, purchasing and quality behind one launch plan, with clear escalation for open issues.",
    ],
    results: [
      "Named Best New Engine of the Year in 2009 — external validation of both technology and execution.",
      "Launched into series production and became a cornerstone of the FIRE family's global footprint.",
      "Delivered downsized consumption with competitive torque and driveability, opening multiple vehicle applications.",
      "Proved MultiAir as a volume-production technology, unlocking its use across the wider portfolio.",
    ],
    conclusion:
      "The program shows what a chief engineer role should look like: a novel technology carried across the finish line under real commercial constraints, and recognized by the industry for it. It marks the transition from technical contributor to program owner.",
  },
  {
    id: "twinair",
    eyebrow: "FPT · Chief Engineer · 2010–2011",
    title: "TwinAir: A Second Breakthrough Family From Concept to Launch",
    image: electrificationImage,
    imageAlt: "Technical cutaway visualisation of an advanced powertrain",
    challenge:
      "Repeating an award-winning launch is harder than achieving one. TwinAir pushed downsizing further with a radically compact two-cylinder architecture, which meant new NVH, thermal and durability problems — and a market that would judge it against far larger engines.",
    approach: [
      "Directed the family from development through market launch, holding architecture, performance, refinement and cost targets in balance rather than optimising one at the expense of the others.",
      "Applied variable valve actuation expertise to extract efficiency from an extremely small displacement while managing combustion stability and noise behaviour.",
      "Ran validation and calibration programs across market regions so the engine met differing regulatory and customer-usage profiles.",
      "Coordinated cross-functional teams across Torino and Napoli engineering and manufacturing sites through launch.",
    ],
    results: [
      "Named International Engine of the Year in 2011 — a second industry award in three years.",
      "Delivered a production two-cylinder gasoline family competitive on efficiency and character against larger conventional engines.",
      "Extended the group's downsizing technology leadership into a new architecture class.",
      "Positioned the family for use across multiple vehicle lines and regions.",
    ],
    conclusion:
      "Two award-winning engines in three years is not chance — it is a repeatable method for converting advanced technology into commercially successful product. TwinAir demonstrates consistency at the highest level of engine program leadership.",
  },
  {
    id: "fire-global-platform",
    eyebrow: "FPT · Engine Global Platform Manager · 2013–2014",
    title: "Global FIRE Platform: One Engine Family, Five Countries, 1.5M Units",
    image: leadershipImage,
    imageAlt: "Operations room with a global manufacturing site map",
    challenge:
      "The FIRE engine family was built in Italy, Brazil, the United States, China and India, each plant with its own process capability, supply base and regulatory environment. Divergence was accumulating: different specifications, quality performance and cost positions under a single family name — with 1.5 million units a year at stake.",
    approach: [
      "Led five global platform teams across EMEA, NAFTA, LATAM and APAC on a €27M annual budget, holding one aligned set of product strategy, quality, cost, timing and performance targets.",
      "Standardized platform management across the five manufacturing sites, driving commonality where it created value and permitting divergence only where market or regulation required it.",
      "Coordinated engineering and manufacturing to support more than ten simultaneous vehicle application launches from the shared platform.",
      "Led localization of FIRE MAIR Turbo production in China, transferring process know-how and qualifying a regional supply base.",
    ],
    results: [
      "1.5 million units delivered in 2014 across five plants in five countries.",
      "More than ten vehicle applications launched successfully from the common platform.",
      "Chinese localization improved industrial competitiveness and reduced manufacturing cost.",
      "Achieved consistent quality, cost and timing governance across four market regions.",
    ],
    conclusion:
      "Managing one platform across five countries is an exercise in disciplined standardization under genuine local difference. This program demonstrates global industrial leadership at scale — and the judgement to know which differences to eliminate and which to accommodate.",
  },
  {
    id: "gse-turbo-flex",
    eyebrow: "FCA · Senior Technical Director · 2017–2021",
    title: "GSE Turbo FLEX: Building the Organization and the Engine Family Together",
    image: industrializationImage,
    imageAlt: "Robotic assembly stations in a modern powertrain plant",
    challenge:
      "Brazil needed a new-generation flex-fuel turbocharged engine family for Fiat, Jeep and Abarth platforms, plus a CVT transmission introduction — while the regional engineering organization was not structured to deliver programs of that complexity. Ethanol-blend combustion, PROCONVE compliance and a two-country plant footprint added further difficulty.",
    approach: [
      "Reorganized and led a 205-person multidisciplinary engineering organization spanning 155 engine and 50 transmission engineers, clarifying ownership and decision rights before scaling delivery.",
      "Directed GSE Turbo FLEX from concept definition through validation, industrialization and market launch, engineering combustion and calibration for Brazil's ethanol-gasoline blend range.",
      "Ran the program across a Brazil–Italy two-plant footprint and three market regions, managing annual budgets peaking at €25M.",
      "Delivered the CVT transmission introduction on Fiat Pulse in parallel, coordinating engine and transmission development as a single powertrain outcome.",
      "Invested in talent development and coaching to build the internal capability the region needed for future programs.",
    ],
    results: [
      "GSE Turbo FLEX launched successfully, enabling a new generation of powertrain applications across Fiat, Jeep and Abarth.",
      "CVT introduction on Fiat Pulse contributed to one of the strongest performing vehicles in its Latin American segment.",
      "205-person organization restructured into the team carrying regional powertrain delivery — roughly 900,000 units annually.",
      "€25M peak annual budget managed across two plants and three market regions.",
    ],
    conclusion:
      "Flagship programs succeed or fail on the organization behind them. This case study shows the ability to fix the structure and deliver the product simultaneously — engineering leadership and executive organizational design in the same mandate.",
  },
  {
    id: "portfolio-turnaround",
    eyebrow: "Stellantis · Executive Director · 2021–Present",
    title: "Portfolio Turnaround: Cutting Defects and Cost Across Four Engine Families",
    image: heroImage,
    imageAlt: "Precision engine blocks in production under warm industrial light",
    challenge:
      "Four base engine families, 1.22 million units a year, three plants and four market regions — with field defect rates well above target on three of the families, cost savings trailing plan, and compliance obligations running simultaneously against Euro 6, Euro 7, PROCONVE PL7/PL8 and US Bin 50/40/30. Every fix had to hold in three regulatory jurisdictions at once.",
    approach: [
      "Instituted disciplined serial-life governance: chaired the Change Management Board and reported status, risk and issue resolution through the Global Harmonized Process so problems surfaced early and closed traceably.",
      "Drove root-cause resolution on the highest-frequency field defects across all three affected families rather than containing symptoms plant by plant.",
      "Built a consolidated cost programme around commonality, diversity reduction and interchangeability decisions taken at portfolio level.",
      "Owned the technical efficiency roadmap across all three regulatory frameworks, trading compliance obligations against economic performance explicitly instead of reactively.",
      "Grew and defended engineering budget ownership from €10M to €15M over three planning cycles to fund the work.",
    ],
    results: [
      "Field defect rates reduced 69 to 92 percent from launch: one family from 6 kppm to 0.5, a second from 7 to 1.1, a third from 10 to 3.1.",
      "Two families now running below their 2026 quality targets.",
      "€22.49 per vehicle in consolidated 2025 savings — approximately €27M annualized — more than double the prior year, against a €26 per vehicle 2026 target.",
      "Compliance roadmap maintained across Euro 6, Euro 7, PROCONVE PL7/PL8 and US Bin 50/40/30 simultaneously.",
      "Engine architectures defined for next-generation HEV, PHEV and REEV applications.",
      "An engine production line relocated from Europe to South America, adding capacity while minimizing capital through asset reuse.",
    ],
    conclusion:
      "This is portfolio-level executive delivery: quality, cost, compliance and future architecture managed as one system across regions. It demonstrates the rare combination of technical authority and financial discipline that turns a mature engine portfolio into a competitive asset.",
  },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <p className="eyebrow">Projects &amp; case studies</p>
            <div className="accent-rule mt-4" />
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl">
              Six programs that moved engines, plants and numbers
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Each case study follows the same structure: the business problem, the approach taken,
              the measurable result, and what it demonstrates. Together they span advanced research,
              award-winning launches, multi-country platform management and portfolio-level turnaround.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {caseStudies.map((study) => (
                <a
                  key={study.id}
                  href={`#${study.id}`}
                  className="rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {study.title.split(":")[0]}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              id={study.id}
              className="scroll-mt-24 border-b border-border py-20 last:border-b-0 sm:py-24"
            >
              <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr]">
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                    Case study {String(index + 1).padStart(2, "0")} · {study.eyebrow}
                  </p>
                  <h2 className="mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl">
                    {study.title}
                  </h2>
                  <img
                    src={study.image}
                    alt={study.imageAlt}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="mt-6 w-full rounded-lg border border-border object-cover"
                  />
                </div>

                <div className="space-y-9">
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-primary">
                      Challenge
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-primary">
                      Approach &amp; solution
                    </h3>
                    <ul className="mt-3 space-y-3">
                      {study.approach.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="panel p-6">
                    <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-primary">
                      Results
                    </h3>
                    <ul className="mt-3 space-y-3">
                      {study.results.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-foreground/90"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-l-2 border-primary/60 pl-5">
                    <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-primary">
                      Conclusion
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {study.conclusion}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="panel p-8 sm:p-14">
              <p className="eyebrow">Next step</p>
              <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">
                Bring the same discipline to your engine portfolio
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Whether the problem is a launch at risk, a quality trend that won't bend, or a
                portfolio strategy that has to survive Euro 7 and electrification at once — let's
                discuss it.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="mailto:vittorio.doria@libero.it"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  Contact Vittorio
                </a>
                <a
                  href={cvAsset}
                  download="Vittorio-Doria-CV.pdf"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <FileDown className="size-4" aria-hidden="true" />
                  Download résumé
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  Full biography
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
