import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "../lib/data";
import { EASE, Reveal, SectionHead } from "./ui";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHead
          align="center"
          no="10"
          eyebrow="Questions"
          title={
            <>
              Everything a recruiter <span className="text-grad">asks next.</span>
            </>
          }
        />

        <div className="mt-14 space-y-3.5">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={0.04 * i}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-surface transition-all duration-400 ${
                    isOpen
                      ? "border-teal-1/40 shadow-[0_16px_40px_-16px_rgb(46_74_87/0.25)]"
                      : "border-ink/8"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span
                      className={`font-display text-base font-semibold tracking-tight transition-colors duration-300 sm:text-lg ${
                        isOpen ? "text-brand" : "text-ink"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                        isOpen ? "bg-brand text-paper" : "bg-ink/5 text-ink"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0.25 : 0.45, ease: EASE }}
                      >
                        <p className="px-6 pb-6 leading-relaxed text-ink-2">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
