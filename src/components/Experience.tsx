import { motion } from "framer-motion";
import { BadgeCheck, CalendarDays, Check, GraduationCap, MapPin } from "lucide-react";
import { EDUCATION, EXPERIENCE } from "../lib/data";
import { EASE, Reveal, SectionHead } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-night py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-light mask-fade opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          dark
          no="06"
          eyebrow="Experience"
          title={
            <>
              Trained where it <span className="text-grad-night">counts.</span>
            </>
          }
          sub="Three industry roles — intern to full-stack to analyst — each one leaving a stronger engineer behind."
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* timeline */}
          <div className="relative pl-8 sm:pl-10">
            <motion.div
              className="absolute bottom-4 left-[7px] top-4 w-px origin-top bg-snow/15"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.4, ease: EASE }}
              aria-hidden="true"
            />
            <div className="space-y-12">
              {EXPERIENCE.map((job, i) => (
                <Reveal key={job.company} delay={0.08 * i}>
                  <article className="group relative">
                    <span
                      className={`absolute -left-8 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border-2 sm:-left-10 ${
                        job.current
                          ? "border-teal-2 bg-night shadow-[0_0_0_5px_rgb(121_183_198/0.15)]"
                          : "border-snow/30 bg-night"
                      }`}
                      aria-hidden="true"
                    >
                      {job.current && <span className="h-1.5 w-1.5 rounded-full bg-teal-2" />}
                    </span>

                    <div className="rounded-2xl border border-snow/10 bg-snow/[0.04] p-6 backdrop-blur-sm transition-all duration-500 group-hover:border-snow/20 group-hover:bg-snow/[0.06] sm:p-7">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-xl font-semibold tracking-tight text-snow">
                            {job.company}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-teal-2">{job.role}</p>
                        </div>
                        {job.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-2/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-teal-2 ring-1 ring-teal-2/30">
                            <BadgeCheck className="h-3.5 w-3.5" />
                            Current
                          </span>
                        )}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-snow/50">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="h-3.5 w-3.5 text-teal-2/70" />
                          {job.period} · {job.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-teal-2/70" />
                          {job.location}
                        </span>
                      </div>

                      <ul className="mt-5 space-y-2.5">
                        {job.points.map((point) => (
                          <li key={point} className="flex gap-3 text-sm leading-relaxed text-snow/70">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-2" />
                            {point.trim()}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* education */}
          <div>
            <Reveal>
              <h3 className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-snow/60">
                <GraduationCap className="h-4 w-4 text-teal-2" />
                Education
              </h3>
            </Reveal>
            <div className="mt-7 space-y-4">
              {EDUCATION.map((edu, i) => (
                <Reveal key={edu.school} delay={0.1 * i}>
                  <div className="group rounded-2xl border border-snow/10 bg-snow/[0.04] p-5 transition-all duration-500 hover:border-snow/20 hover:bg-snow/[0.06] sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-display text-base font-semibold tracking-tight text-snow">
                          {edu.school}
                        </p>
                        <p className="mt-1 text-sm text-snow/60">{edu.degree}</p>
                      </div>
                      {edu.note && (
                        <span className="shrink-0 rounded-full bg-sand/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-sand ring-1 ring-sand/25">
                          {edu.note}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-snow/40">
                      {edu.period}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-6 rounded-2xl border border-teal-2/20 bg-gradient-to-br from-teal-2/10 to-transparent p-5 sm:p-6">
                <p className="font-display text-sm font-semibold text-snow">
                  National Level Achievements
                </p>
                <ul className="mt-3 space-y-2 text-sm text-snow/70">
                  <li className="flex gap-2.5">
                    <span className="text-teal-2">◆</span> 1st Place — IPC 2023 · National Idea Pitching
                    Contest
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-teal-2">◆</span> 4th Place — National Level IoT Hackathon
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
