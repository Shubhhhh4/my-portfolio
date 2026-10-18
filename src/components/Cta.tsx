import { Mail } from "lucide-react";
import { CONTACT } from "../lib/data";
import { ArrowLink, Blobs, Reveal } from "./ui";

export default function Cta() {
  return (
    <section aria-label="Call to action" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-night px-6 py-20 text-center sm:px-12 sm:py-24">
            <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />
            <Blobs
              colors={[
                "radial-gradient(closest-side, rgb(62 124 142 / 0.4), transparent)",
                "radial-gradient(closest-side, rgb(121 183 198 / 0.25), transparent)",
                "radial-gradient(closest-side, rgb(201 138 61 / 0.18), transparent)",
              ]}
            />

            <div className="relative">
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-teal-2">
                11 · Ready when you are
              </p>
              <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.04] tracking-tight text-snow text-balance sm:text-6xl">
                Let's build something{" "}
                <span className="text-grad-night">great</span> — together.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-snow/60 sm:text-lg">
                Internship, full-time seat, or a project that needs shipping — one email starts the
                conversation.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <ArrowLink
                  light
                  href={`mailto:${CONTACT.email}?subject=Opportunity%20for%20${CONTACT.name}`}
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Mail className="h-4 w-4" />
                    {CONTACT.email}
                  </span>
                </ArrowLink>
                <ArrowLink dark href={CONTACT.linkedin}>
                  Connect on LinkedIn
                </ArrowLink>
              </div>

              <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-snow/40">
                Typically replies within 24 hours · {CONTACT.location}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
