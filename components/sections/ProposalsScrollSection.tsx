'use client';

import { motion } from 'motion/react';
import Section from '@/components/Section';
import { PROPOSAL_SCROLLS } from '@/lib/constants';

export default function ProposalsScrollSection() {
  return (
    <Section
      id="propuestas"
      className="border-y border-border bg-background py-14 text-foreground sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Propuestas en construcción
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
            Tres instancias de scroll listas para presentar tus próximas propuestas.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted sm:text-lg">
            Dejamos estos bloques preparados para que reemplaces los textos por contenido final cuando
            lo tengas. Cada sección tiene una estructura clara para relato, enfoque y resultados.
          </p>
        </motion.div>

        <div className="mt-10 space-y-8">
          {PROPOSAL_SCROLLS.map((proposal, index) => (
            <motion.article
              key={proposal.id}
              initial={{ opacity: 0, y: 36, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.05 }}
              className="sticky top-24 min-h-[72svh] overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8 md:p-10"
            >
              <div className="grid h-full gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
                <div>
                  <span className="inline-flex rounded-md border border-border bg-surface-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    {proposal.tag}
                  </span>
                  <h3 className="mt-6 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                    {proposal.title}
                  </h3>
                  <p className="mt-4 text-sm uppercase tracking-[0.12em] text-muted">{proposal.subtitle}</p>
                  <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                    {proposal.description}
                  </p>
                </div>

                <div className="flex items-end">
                  <div className="w-full rounded-xl border border-border bg-surface-soft p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                      Estructura sugerida
                    </p>
                    <ul className="mt-5 space-y-3">
                      {proposal.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted">
                      Listo para reemplazar por texto final
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
