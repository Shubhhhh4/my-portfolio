import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

/* Scroll-reveal wrapper */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* Staggered container */
export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.09, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 26 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* Section heading with mono eyebrow */
export function SectionHead({
  no,
  eyebrow,
  title,
  sub,
  align = "left",
  dark = false,
}: {
  no: string;
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <p
        className={`font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        } ${dark ? "text-teal-2" : "text-teal-1"}`}
      >
        <span className={`inline-block h-px w-8 ${dark ? "bg-teal-2/70" : "bg-teal-1/70"}`} />
        {no} · {eyebrow}
      </p>
      <h2
        className={`mt-5 font-display text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.08] font-semibold tracking-tight text-balance ${
          dark ? "text-snow" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-5 max-w-2xl text-base sm:text-lg leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-snow/65" : "text-ink-2"}`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}

/* Magnetic hover wrapper for CTAs */
export function Magnetic({
  children,
  strength = 16,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 160, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 160, damping: 15, mass: 0.4 });

  if (reduce) {
    return <>{children}</>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy, display: "inline-block" }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set(((e.clientX - r.left) / r.width - 0.5) * strength);
        y.set(((e.clientY - r.top) / r.height - 0.5) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* Animated counter stat */
export function Stat({
  value,
  decimals = 0,
  suffix = "",
  label,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value.toFixed(decimals));
      return;
    }
    const controls = animate(0, value, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals, reduce]);

  return (
    <div ref={ref} className="flex flex-col items-start">
      <p className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink tabular-nums">
        {display}
        <span className="text-teal-1">{suffix}</span>
      </p>
      <p className="mt-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-ink-3">
        {label}
      </p>
    </div>
  );
}

/* Primary / secondary buttons with arrow micro-interaction */
export function ArrowLink({
  children,
  href,
  primary = false,
  className = "",
  dark = false,
  light = false,
}: {
  children: ReactNode;
  href: string;
  primary?: boolean;
  className?: string;
  dark?: boolean;
  light?: boolean;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className={`group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-colors duration-300 ${
        primary
          ? "bg-ink text-paper hover:bg-brand"
          : light
            ? "border border-transparent bg-snow text-night hover:bg-teal-2"
            : dark
              ? "border border-snow/20 text-snow hover:bg-snow hover:text-night"
              : "border border-ink/15 text-ink hover:border-ink hover:bg-ink hover:text-paper"
      } ${className}`}
    >
      {children}
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      >
        <path d="M7 17 17 7" />
        <path d="M8 7h9v9" />
      </svg>
    </motion.a>
  );
}

/* Ambient floating gradient blobs */
const BLOB_POSITIONS = [
  "-top-40 -left-40 w-[40rem] h-[40rem]",
  "top-1/4 -right-52 w-[36rem] h-[36rem]",
  "-bottom-48 left-1/4 w-[32rem] h-[32rem]",
];

export function Blobs({ colors }: { colors: string[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {colors.map((c, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${BLOB_POSITIONS[i % BLOB_POSITIONS.length]}`}
          style={{ background: c }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [0, 44 * (i % 2 === 0 ? 1 : -1), 0],
            y: [0, i === 1 ? -34 : 28, 0],
          }}
          transition={{
            opacity: { duration: 2, delay: 0.2 * i },
            x: { duration: 15 + i * 3, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 13 + i * 2, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
    </div>
  );
}
