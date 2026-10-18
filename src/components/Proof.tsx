import { PROOF_LOGOS, TECH_MARQUEE } from "../lib/data";
import { Reveal } from "./ui";

export default function Proof() {
  const marqueeItems = [...TECH_MARQUEE, ...TECH_MARQUEE];

  return (
    <section aria-label="Social proof" className="relative border-y border-ink/8 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* company proof */}
        <Reveal className="border-b border-ink/8 py-12 sm:py-14">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.3em] text-ink-3">
            Trusted by teams at
          </p>
          <div className="mt-8 flex flex-wrap items-start justify-center gap-x-12 gap-y-8 sm:gap-x-16">
            {PROOF_LOGOS.map((logo, i) => (
              <Reveal key={logo.name} delay={0.06 * i} className="text-center">
                <p className="font-display text-xl font-semibold tracking-tight text-ink/55 transition-colors duration-300 hover:text-ink sm:text-2xl">
                  {logo.name}
                </p>
                <p className="mt-1.5 text-[11px] font-medium text-ink-3">{logo.note}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>

      {/* tech marquee */}
      <div className="marquee-hover-pause overflow-hidden py-6" aria-hidden="true">
        <div className="animate-marquee flex w-max items-center gap-8 pr-8">
          {marqueeItems.map((tech, i) => (
            <span key={`${tech}-${i}`} className="flex items-center gap-8">
              <span className="font-mono text-sm font-medium tracking-wide text-ink-2">{tech}</span>
              <span className="h-1 w-1 rounded-full bg-teal-1/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
