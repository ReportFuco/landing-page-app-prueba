'use client';

import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { VALUE_PROPOSITIONS } from '@/lib/constants';

export default function ValuePropositionSection() {
  const [openId, setOpenId] = useState<string>(VALUE_PROPOSITIONS[0]?.id ?? '');

  return (
    <Section className="border-b border-border bg-surface py-14 sm:py-16 md:py-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">Servicios</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
          Nuestra propuesta de valor
        </h2>
        <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
          Una vista más clara de nuestras líneas de trabajo. Expande cada bloque para ver el detalle.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 max-w-5xl space-y-3">
        {VALUE_PROPOSITIONS.map((item, index) => {
          const isOpen = openId === item.id;

          return (
            <Reveal key={item.id} delay={index * 0.04}>
              <article className="overflow-hidden rounded-[22px] border border-border bg-surface transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenId((prev) => (prev === item.id ? '' : item.id))}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <div>
                    <h3 className="text-xl font-semibold leading-tight text-foreground sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted sm:text-base">{item.summary}</p>
                  </div>
                  <span
                    className={`mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-soft text-muted transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown size={16} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="accordion-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border bg-surface-soft px-5 py-5 sm:px-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Qué ofrecemos</p>
                        <ul className="mt-4 space-y-2">
                          {item.offers.map((point) => (
                            <li key={point} className="rounded-xl bg-surface px-4 py-3 text-sm text-foreground">
                              {point}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-4 text-sm leading-6 text-muted">{item.statement}</p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
