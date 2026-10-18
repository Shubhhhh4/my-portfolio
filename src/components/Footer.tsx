import { ArrowUp, MapPin } from "lucide-react";
import { CONTACT, NAV_LINKS } from "../lib/data";
import { LinkedInIcon, MailIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-night pb-10 pt-20 text-snow">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 pb-16 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* brand */}
          <div>
            <a href="#top" className="flex items-center gap-3" aria-label="Back to top of page">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-snow font-mono text-sm font-semibold text-night">
                SU
              </span>
              <span>
                <span className="block font-display text-lg font-semibold tracking-tight">
                  {CONTACT.name}
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-snow/50">
                  Software Developer · Clean Code Advocate
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-snow/55">
              Java &amp; Python developer turning real-world problems into clean, scalable software —
              one pull request at a time.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Shubham Ukkoji on LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-xl border border-snow/15 text-snow/70 transition-all duration-300 hover:-translate-y-1 hover:border-teal-2 hover:text-teal-2"
              >
                <LinkedInIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                aria-label={`Email ${CONTACT.name}`}
                className="grid h-11 w-11 place-items-center rounded-xl border border-snow/15 text-snow/70 transition-all duration-300 hover:-translate-y-1 hover:border-teal-2 hover:text-teal-2"
              >
                <MailIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* navigate */}
          <nav aria-label="Footer">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-snow/40">
              Navigate
            </p>
            <ul className="mt-6 space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-sm text-snow/70 transition-colors hover:text-snow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* availability */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-snow/40">
              Availability
            </p>
            <ul className="mt-6 space-y-3.5 text-sm text-snow/70">
              <li className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Open to SDE · Backend · Data roles
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-teal-2" />
                Greater Bengaluru Area · Hybrid / Onsite
              </li>
              <li>0-day notice period</li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="link-underline text-snow/70 transition-colors hover:text-snow"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-snow/10 pt-8 sm:flex-row">
          <p className="font-mono text-[11px] text-snow/40">
            © {year} {CONTACT.name} · All rights reserved
          </p>
          <p className="font-mono text-[11px] text-snow/40">
            Built with React, Tailwind &amp; way too much coffee
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="group grid h-11 w-11 place-items-center rounded-full border border-snow/15 text-snow/70 transition-all duration-300 hover:-translate-y-1 hover:border-teal-2 hover:text-teal-2"
          >
            <ArrowUp className="h-4.5 w-4.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* watermark */}
      <div
        className="pointer-events-none mt-14 select-none overflow-hidden text-center font-display text-[16.5vw] font-bold leading-[0.8] tracking-tight text-outline"
        aria-hidden="true"
      >
        SHUBHAM
      </div>
    </footer>
  );
}
