import { ArrowRight, Mail } from "lucide-react";
import { BENEFITS, CONTACT } from "../lib/data";
import { Reveal, SectionHead } from "./ui";

export default function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* sticky intro */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead
            no="07"
            eyebrow="Why recruit me"
            title={
              <>
                The short version of <span className="text-grad">a long resume.</span>
              </>
            }
            sub="Hiring is a bet on judgment and trajectory. Here is what four years of shipping says about mine."
          />
          <Reveal delay={0.15}>
            <div className="card mt-9 flex items-center gap-4 p-5">
              <img
                src="/images/portrait.jpg"
                alt="Shubham Ukkoji"
                className="h-14 w-14 rounded-2xl object-cover"
                loading="lazy"
              />
              <div className="min-w-0">
                <p className="font-display text-sm font-semibold text-ink">
                  10+ years of schooling, 4 of engineering, 3 of shipping.
                </p>
                <p className="mt-0.5 text-xs text-ink-3">One email away from a great conversation.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={`mailto:${CONTACT.email}?subject=Quick%20chat%3F`}
              className="group mt-6 inline-flex items-center gap-2 font-mono text-sm font-medium text-brand transition-colors hover:text-ink"
            >
              <Mail className="h-4 w-4" />
              {CONTACT.email}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {/* benefit rows */}
        <div>
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={0.06 * i}>
              <div className="group flex gap-5 border-t border-ink/10 py-8 transition-all duration-500 last:border-b hover:pl-2 sm:gap-7">
                <span className="font-mono text-xs font-medium text-ink-3 transition-colors duration-300 group-hover:text-teal-1">
                  0{i + 1}
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint text-teal-1 transition-all duration-500 group-hover:rotate-[-8deg] group-hover:bg-brand group-hover:text-paper">
                      <b.icon className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                      {b.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink-2">{b.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
