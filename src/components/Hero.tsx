import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, MapPin, Trophy } from "lucide-react";
import { CONTACT, HERO_ROLES, HERO_STATS, AMBIENT_BLOBS } from "../lib/data";
import { ArrowLink, Blobs, EASE, Magnetic, Stat } from "./ui";
import { LinkedInIcon, MailIcon } from "./icons";

/* rotating typed word */
function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wi];
    let t: number;
    if (!deleting && text.length < word.length) {
      t = window.setTimeout(() => setText(word.slice(0, text.length + 1)), 62);
    } else if (!deleting) {
      t = window.setTimeout(() => setDeleting(true), 1700);
    } else if (deleting && text.length > 0) {
      t = window.setTimeout(() => setText(word.slice(0, text.length - 1)), 34);
    } else {
      setDeleting(false);
      setWi((w) => (w + 1) % words.length);
    }
    return () => window.clearTimeout(t);
  }, [text, deleting, wi, words]);

  return text;
}

/* auto-typing terminal */
const TERMINAL = [
  { cmd: "whoami", out: "shubham-ukkoji · software developer" },
  { cmd: "stack --current", out: "java · python · sql · node.js" },
  { cmd: "status", out: "=> open to opportunities" },
];

function useTerminal() {
  const [progress, setProgress] = useState({ line: 0, chars: 0, phase: "typing" as "typing" | "hold" });

  useEffect(() => {
    const current = TERMINAL[progress.line];
    let t: number;
    if (progress.phase === "typing") {
      if (progress.chars < current.cmd.length) {
        t = window.setTimeout(
          () => setProgress((p) => ({ ...p, chars: p.chars + 1 })),
          58
        );
      } else {
        t = window.setTimeout(() => setProgress((p) => ({ ...p, phase: "hold" })), 1300);
      }
    } else {
      t = window.setTimeout(
        () => setProgress((p) => ({ line: (p.line + 1) % TERMINAL.length, chars: 0, phase: "typing" })),
        700
      );
    }
    return () => window.clearTimeout(t);
  }, [progress]);

  return progress;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export default function Hero() {
  const typed = useTypewriter(HERO_ROLES);
  const terminal = useTerminal();
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 sm:pt-40 lg:pb-24">
      <div className="absolute inset-0 bg-grid mask-fade" aria-hidden="true" />
      <Blobs colors={AMBIENT_BLOBS} />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* left — intro */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-surface/70 py-2 pl-3 pr-4 text-xs font-medium text-ink-2 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to Software Development, Backend &amp; Data roles
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-5xl font-semibold leading-[0.98] tracking-tight text-ink sm:text-7xl lg:text-[5.4rem]"
          >
            Shubham
            <br />
            <span className="text-grad">Ukkoji</span>
            <span className="text-ink">.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 h-7 font-mono text-sm text-teal-1 sm:text-base"
            aria-live="polite"
          >
            <span className="text-ink-3">&gt;</span> i build{" "}
            <span className="font-medium text-brand">{typed}</span>
            <span className="animate-blink ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-teal-1 sm:h-[18px]" />
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-2 sm:text-lg"
          >
            Computer Science graduate <strong className="font-semibold text-ink">CGPA 9.14</strong>{" "}
            with hands-on experience in <strong className="font-semibold text-ink">Java &amp; Python</strong>{" "}
            — building scalable systems, data-driven products and AI-powered features for teams that ship.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <ArrowLink
                primary
                href={`mailto:${CONTACT.email}?subject=Opportunity%20for%20${CONTACT.name}`}
              >
                Hire Me
              </ArrowLink>
            </Magnetic>
            <ArrowLink href="#projects">View selected work</ArrowLink>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-ink-3"
          >
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-brand"
            >
              <MailIcon className="h-4 w-4 text-teal-1" />
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-brand"
            >
              <LinkedInIcon className="h-4 w-4 text-teal-1" />
              /in/shubhamukkoji
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal-1" />
              {CONTACT.location}
            </span>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink/10 pt-8 sm:grid-cols-4"
          >
            {HERO_STATS.map((s) => (
              <Stat key={s.label} value={s.value} decimals={s.decimals} suffix={s.suffix} label={s.label} />
            ))}
          </motion.div>
        </motion.div>

        {/* right — portrait + floating cards */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.45, ease: EASE }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <motion.div
            className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-teal-1/25 via-transparent to-amber/25 blur-3xl"
            aria-hidden="true"
          />

          <motion.div
            whileHover={{ rotate: -1.2, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="card relative overflow-hidden rounded-[2rem] p-2.5"
          >
            <img
              src="/images/portrait.jpg"
              alt="Professional portrait of Shubham Ukkoji, Software Developer"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-center justify-between gap-3 rounded-2xl border border-white/50 bg-surface/70 px-4 py-3 backdrop-blur-md">
              <div>
                <p className="font-display text-sm font-semibold text-ink">{CONTACT.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
                  Clean Code Advocate
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-paper">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Hire
              </span>
            </div>
          </motion.div>

          {/* floating achievement chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.05, duration: 0.7, ease: EASE }}
            className="absolute -right-3 top-10 sm:-right-6"
          >
            <div className="animate-float card flex items-center gap-2.5 rounded-2xl px-4 py-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-sand">
                <Trophy className="h-4.5 w-4.5 text-amber" />
              </span>
              <div>
                <p className="font-display text-xs font-semibold text-ink">1st Place · IPC 2023</p>
                <p className="text-[10px] text-ink-3">National Idea Pitching</p>
              </div>
            </div>
          </motion.div>

          {/* floating certification chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.25, duration: 0.7, ease: EASE }}
            className="absolute -left-3 top-1/3 sm:-left-10"
          >
            <div
              className="animate-float-slow card flex items-center gap-2.5 rounded-2xl px-4 py-3"
              style={{ animationDelay: "1.2s" }}
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint">
                <BadgeCheck className="h-4.5 w-4.5 text-teal-1" />
              </span>
              <div>
                <p className="font-display text-xs font-semibold text-ink">4 Certifications</p>
                <p className="text-[10px] text-ink-3">AI · Security · Full Stack</p>
              </div>
            </div>
          </motion.div>

          {/* terminal card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45, duration: 0.8, ease: EASE }}
            className="absolute -bottom-8 left-0 sm:-left-8"
          >
            <div className="card w-60 rounded-2xl p-4 font-mono text-[11px] leading-relaxed sm:w-64">
              <div className="mb-3 flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              {TERMINAL.map((line, i) => {
                const isCurrent = i === terminal.line;
                const showCmd = isCurrent ? line.cmd.slice(0, terminal.chars) : i < terminal.line;
                const showOut = isCurrent ? terminal.phase === "hold" : i < terminal.line;
                if (!showCmd && !showOut) return null;
                return (
                  <div key={line.cmd} className="mb-1.5">
                    <p className="text-ink">
                      <span className="mr-1.5 text-teal-1">$</span>
                      {line.cmd}
                      {isCurrent && terminal.phase === "typing" && (
                        <span className="animate-blink inline-block h-3 w-[6px] translate-y-0.5 bg-teal-1" />
                      )}
                    </p>
                    {showOut && <p className="pl-4 text-[10px] text-ink-3">{line.out}</p>}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
