import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "../lib/data";
import { Reveal, SectionHead, Stagger, StaggerItem } from "./ui";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          align="center"
          no="08"
          eyebrow="Testimonials"
          title={
            <>
              People say it <span className="text-grad">better than I can.</span>
            </>
          }
          sub="Kind words from mentors, leads and judges who have worked with me."
        />

        <Stagger className="mt-16 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <StaggerItem key={t.name} className="h-full">
              <figure className="group card card-hover relative flex h-full flex-col p-6 sm:p-7">
                <Quote
                  className="absolute -right-2 -top-2 h-16 w-16 rotate-180 text-ink/[0.04] transition-colors duration-500 group-hover:text-teal-1/15"
                  aria-hidden="true"
                />
                <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-amber text-amber" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink-2">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3.5 border-t border-ink/8 pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-xs font-semibold text-paper">
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-3">{t.role}</p>
                  </div>
                  <span className="ml-auto font-mono text-[10px] text-ink-3">0{i + 1}</span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15} className="mt-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-ink-3">
            More references available on request — including via LinkedIn
          </p>
        </Reveal>
      </div>
    </section>
  );
}
