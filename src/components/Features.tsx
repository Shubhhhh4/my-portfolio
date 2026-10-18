import { FEATURES } from "../lib/data";
import { Reveal, SectionHead, Stagger, StaggerItem } from "./ui";

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          no="04"
          eyebrow="What you get"
          title={
            <>
              Not just a developer — <span className="text-grad">a delivery partner.</span>
            </>
          }
          sub="Six reasons recruiters shortlist Shubham, straight from the work itself."
        />

        <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <StaggerItem key={f.title}>
              <div className="group card card-hover relative h-full overflow-hidden p-6 sm:p-7">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-1/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-teal-1 text-paper shadow-md transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <f.icon className="h-5 w-5" />
                </span>
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-2">{f.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-12">
          <p className="text-center font-mono text-xs uppercase tracking-[0.24em] text-ink-3">
            Every claim above is backed by a project, an award, or a manager who will say it for me.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
