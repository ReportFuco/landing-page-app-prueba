import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { VALUE_PROPOSITIONS } from '@/lib/constants';

export default function ValuePropositionSection() {
  return (
    <Section className="border-b border-border bg-surface py-14 sm:py-16 md:py-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">Servicios</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
          Nuestra propuesta de valor
        </h2>
        <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
          Estas líneas integran lo central de Originaria para fortalecer desarrollo territorial
          sostenible, confianza y resultados de largo plazo.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {VALUE_PROPOSITIONS.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <article className="rounded-[26px] border border-border bg-surface p-6 sm:p-7">
              <h3 className="text-2xl font-semibold leading-tight text-foreground">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted sm:text-base">{item.summary}</p>

              <ul className="mt-5 space-y-2">
                {item.highlights.map((point) => (
                  <li key={point} className="rounded-xl bg-surface-soft px-4 py-3 text-sm text-foreground">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
