import { Award, GraduationCap, MapPin, Sparkles, Trophy, Zap } from "lucide-react";
import { CERTIFICATIONS, CONTACT, SKILLS, SKILLS_EXTRA } from "../lib/data";
import { Reveal, SectionHead, Stagger, StaggerItem } from "./ui";

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    stat: "CGPA 9.14",
    label: "BE · Computer Science, VTU",
    tint: "bg-mint text-teal-1",
  },
  {
    icon: Trophy,
    stat: "1st Place",
    label: "IPC 2023 · National Idea Pitching",
    tint: "bg-sand text-amber",
  },
  {
    icon: Zap,
    stat: "4th Place",
    label: "National Level IoT Hackathon",
    tint: "bg-mint text-teal-1",
  },
  {
    icon: MapPin,
    stat: "Bengaluru",
    label: "Open · 0-day notice period",
    tint: "bg-sand text-amber",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          no="01"
          eyebrow="About"
          title={
            <>
              The resume, <span className="text-grad">distilled.</span>
            </>
          }
          sub="A Computer Science graduate who turned internships into impact — and national stages into habits of shipping."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* bio */}
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-ink-2 sm:text-lg">
              <p>
                I am a Computer Science Engineering graduate from{" "}
                <strong className="font-semibold text-ink">
                  Visvesvaraya Technological University (CGPA: 9.14)
                </strong>{" "}
                with hands-on experience in Software Development, Full Stack Web Development and
                Data Analysis.
              </p>
              <p>
                I interned at <strong className="font-semibold text-ink">KodNest Technologies</strong> and{" "}
                <strong className="font-semibold text-ink">Pranaksh Technologies</strong>, working on Java,
                MySQL, RESTful APIs and frontend development in collaborative environments. I enjoy
                building scalable, data-driven applications that solve practical problems.
              </p>
              <p>
                Beyond day jobs, I built a <strong className="font-semibold text-ink">Vehicle Topple
                Detection System</strong> (IoT + ML) and an{" "}
                <strong className="font-semibold text-ink">AI Career Recommendation System</strong>, ran
                national-level data analytics on IPL 2022, and earned{" "}
                <strong className="font-semibold text-ink">1st Place at IPC 2023</strong> and 4th at a
                national IoT hackathon.
              </p>
              <p className="text-ink">
                I am seeking opportunities in Software Development, Backend Engineering or Data roles —
                where I can contribute, innovate, and grow within a high-performing team.
              </p>
            </div>

            <Reveal delay={0.15} className="mt-10">
              <div className="flex flex-wrap items-center gap-3">
                {SKILLS_EXTRA.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-ink/10 bg-surface px-4 py-1.5 font-mono text-xs text-ink-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-1/50 hover:text-brand"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </Reveal>

          {/* highlights */}
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((h) => (
              <StaggerItem key={h.stat}>
                <div className="card card-hover group h-full p-5">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 ${h.tint}`}
                  >
                    <h.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">
                    {h.stat}
                  </p>
                  <p className="mt-1 text-sm text-ink-2">{h.label}</p>
                </div>
              </StaggerItem>
            ))}

            <StaggerItem>
              <div className="card card-hover h-full bg-night p-5 text-snow sm:col-span-2">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-snow/10">
                      <Sparkles className="h-5 w-5 text-teal-2" />
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold">Now at KodNest</p>
                      <p className="text-sm text-snow/60">Software Development Intern · Bengaluru</p>
                    </div>
                  </div>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="rounded-full bg-snow px-5 py-2.5 text-sm font-semibold text-night transition-transform duration-300 hover:scale-105"
                  >
                    Ask about me
                  </a>
                </div>
              </div>
            </StaggerItem>
          </Stagger>
        </div>

        {/* skills */}
        <div id="skills" className="mt-24">
          <SectionHead
            no="02"
            eyebrow="Skills"
            title={
              <>
                Tools I reach for <span className="text-grad">daily.</span>
              </>
            }
            sub="Backend to database, frontend to analytics — the stack behind every project on this page."
          />

          <Stagger className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
            {SKILLS.map((skill, i) => (
              <StaggerItem key={skill.name}>
                <div
                  className="group card card-hover flex items-center gap-3.5 p-4 sm:p-5"
                  style={{ transitionDelay: `${(i % 4) * 20}ms` }}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink/[0.04] transition-all duration-500 group-hover:bg-brand group-hover:text-paper">
                    <skill.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-display text-sm font-semibold text-ink sm:text-base">
                      {skill.name}
                    </p>
                    <p className="text-[11px] font-medium text-ink-3">{skill.tag}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* certifications */}
        <div className="mt-24">
          <SectionHead
            no="03"
            eyebrow="Certifications"
            title={
              <>
                Certified, <span className="text-grad">not just curious.</span>
              </>
            }
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CERTIFICATIONS.map((cert) => (
              <StaggerItem key={cert.title}>
                <div className="group card card-hover relative h-full overflow-hidden p-5">
                  <Award
                    className="absolute -right-3 -top-3 h-16 w-16 text-ink/[0.05] transition-all duration-500 group-hover:rotate-12 group-hover:text-teal-1/15"
                    aria-hidden="true"
                  />
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-mint text-teal-1 transition-transform duration-500 group-hover:scale-110">
                    <cert.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 font-display text-[15px] font-semibold leading-snug text-ink">
                    {cert.title}
                  </p>
                  <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
                    {cert.org}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
