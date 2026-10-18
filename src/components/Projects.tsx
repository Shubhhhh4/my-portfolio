import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";
import { CONTACT, PROJECTS } from "../lib/data";
import { EASE, Reveal, SectionHead } from "./ui";

export default function Projects() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const project = PROJECTS[active];

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") setActive((a) => (a + 1) % PROJECTS.length);
    if (e.key === "ArrowLeft") setActive((a) => (a - 1 + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <section id="projects" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          no="05"
          eyebrow="Selected work"
          title={
            <>
              Projects that <span className="text-grad">do the talking.</span>
            </>
          }
          sub="Three builds — two of them national-recognised — that show how I think, ship and pitch."
        />

        {/* tabs */}
        <Reveal delay={0.1} className="mt-12">
          <div
            role="tablist"
            aria-label="Projects"
            onKeyDown={onKeyDown}
            className="inline-flex flex-wrap gap-2 rounded-full border border-ink/10 bg-surface p-1.5"
          >
            {PROJECTS.map((p, i) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={active === i}
                aria-controls={`project-panel-${p.id}`}
                id={`project-tab-${p.id}`}
                onClick={() => setActive(i)}
                className={`relative rounded-full px-4 py-2.5 font-mono text-xs font-medium tracking-wide transition-colors duration-300 sm:px-5 ${
                  active === i ? "text-paper" : "text-ink-2 hover:text-ink"
                }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="project-tab-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                <span className="relative">
                  {p.index} · {p.kind}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            id={`project-panel-${project.id}`}
            role="tabpanel"
            aria-labelledby={`project-tab-${project.id}`}
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -16 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
          >
            {/* copy */}
            <div>
              <p className="font-mono text-xs tracking-[0.24em] text-teal-1">
                PROJECT {project.index} — {project.kind.toUpperCase()}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-2 sm:text-lg">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-ink/10 bg-surface px-3.5 py-1.5 font-mono text-[11px] text-ink-2"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div>
                  <p className="font-display text-3xl font-semibold tracking-tight text-grad">
                    {project.metric.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-ink-3">{project.metric.label}</p>
                </div>
                <div className="h-10 w-px bg-ink/10" aria-hidden="true" />
                <div className="flex items-center gap-2 text-sm font-medium text-ink-2">
                  <Award className="h-4 w-4 text-amber" />
                  {project.award}
                </div>
              </div>

              <a
                href={`mailto:${CONTACT.email}?subject=About%20your%20project%3A%20${encodeURIComponent(
                  project.title
                )}`}
                className="group mt-9 inline-flex items-center gap-2 font-mono text-sm font-medium text-brand transition-colors hover:text-ink"
              >
                Ask me about this project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* visual */}
            <div className="relative">
              <div
                className={`pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl`}
                aria-hidden="true"
              />
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/40 bg-gradient-to-br ${project.gradient} shadow-xl`}
              >
                <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />
                <div
                  className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/15"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full border border-white/10"
                  aria-hidden="true"
                />

                <div className="absolute inset-0 grid place-items-center">
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
                    className="grid h-24 w-24 place-items-center rounded-3xl bg-white/12 backdrop-blur-md ring-1 ring-white/30"
                  >
                    <project.icon className="h-11 w-11 text-white" strokeWidth={1.6} />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.6, ease: EASE }}
                  className="absolute left-5 top-5 rounded-xl bg-white/12 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/90 backdrop-blur-md ring-1 ring-white/25"
                >
                  {project.index} / 03
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: EASE }}
                  className="absolute bottom-5 right-5 rounded-xl bg-white/12 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/90 backdrop-blur-md ring-1 ring-white/25"
                >
                  {project.metric.value}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
