import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CONTACT, NAV_LINKS } from "../lib/data";
import { Magnetic } from "./ui";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-ink/8 py-3" : "bg-transparent py-5"
      }`}
    >
      {/* scroll progress */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[2.5px] origin-left bg-gradient-to-r from-brand via-teal-1 to-teal-2"
        style={{ scaleX: reduce ? 0 : scrollYProgress }}
        aria-hidden="true"
      />

      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <a href="#top" className="group flex items-center gap-3" aria-label="Shubham Ukkoji — home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink font-mono text-sm font-semibold text-paper shadow-sm transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:rounded-2xl">
            SU
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-semibold tracking-tight text-ink">
              {CONTACT.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3">
              Software Developer
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline text-sm font-medium text-ink-2 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Magnetic strength={12}>
            <motion.a
              href={`mailto:${CONTACT.email}?subject=Opportunity%20for%20${CONTACT.name}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper shadow-sm transition-colors duration-300 hover:bg-brand sm:inline-flex"
            >
              Hire Me
            </motion.a>
          </Magnetic>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 bg-surface/60 text-ink backdrop-blur transition-colors hover:bg-surface lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="glass mx-4 overflow-hidden rounded-2xl border border-ink/8 shadow-xl lg:hidden"
          >
            <ul className="flex flex-col p-3">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.35 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-base font-medium text-ink transition-colors hover:bg-ink/5"
                  >
                    {link.label}
                    <span className="font-mono text-[10px] text-ink-3">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
              <li className="p-2">
                <a
                  href={`mailto:${CONTACT.email}?subject=Opportunity%20for%20${CONTACT.name}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-ink px-4 py-3.5 text-center font-display text-base font-medium text-paper"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
