import { Check, Crown } from "lucide-react";
import { CONTACT, ENGAGEMENTS } from "../lib/data";
import { Reveal, SectionHead, Stagger, StaggerItem } from "./ui";

export default function Engagements() {
  return (
    <section id="engagements" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          align="center"
          no="09"
          eyebrow="Ways to work together"
          title={
            <>
              Pick a lane. <span className="text-grad">I'll bring the engine.</span>
            </>
          }
          sub="Three ways to start — every one of them begins with a ten-minute conversation."
        />

        <Stagger className="mt-16 grid items-stretch gap-5 lg:grid-cols-3">
          {ENGAGEMENTS.map((e) => (
            <StaggerItem key={e.name} className="h-full">
              <div
                className={`group relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-500 sm:p-8 ${
                  e.featured
                    ? "border-night bg-night text-snow dark:border-snow/20 shadow-[0_32px_64px_-24px_rgb(21_34_43/0.45)] hover:-translate-y-2"
                    : "card card-hover"
                }`}
              >
                {e.featured && (
                  <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-teal-1 to-teal-2 px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-night shadow-md">
                    <Crown className="h-3 w-3" />
                    Recommended
                  </span>
                )}

                <p
                  className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
                    e.featured ? "text-teal-2" : "text-teal-1"
                  }`}
                >
                  {e.tagline}
                </p>
                <h3
                  className={`mt-3 font-display text-2xl font-semibold tracking-tight ${
                    e.featured ? "text-snow" : "text-ink"
                  }`}
                >
                  {e.name}
                </h3>

                <ul
                  className={`mt-6 flex-1 space-y-3 border-t pt-6 ${
                    e.featured ? "border-snow/12" : "border-ink/8"
                  }`}
                >
                  {e.points.map((point) => (
                    <li
                      key={point}
                      className={`flex items-start gap-3 text-sm ${
                        e.featured ? "text-snow/75" : "text-ink-2"
                      }`}
                    >
                      <span
                        className={`mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full ${
                          e.featured ? "bg-teal-2/20 text-teal-2" : "bg-mint text-teal-1"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                    `${e.name} — let's talk`
                  )}`}
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    e.featured
                      ? "bg-snow text-night hover:bg-teal-2"
                      : "border border-ink/15 text-ink hover:bg-ink hover:text-paper"
                  }`}
                >
                  {e.cta}
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-8 text-center">
          <p className="font-mono text-xs text-ink-3">
            * Prices are simple: your standard band for the role, my commitment at 100%. No retainers,
            no fuss.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
