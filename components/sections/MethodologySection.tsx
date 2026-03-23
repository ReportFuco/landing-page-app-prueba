import Card from '@/components/Card';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { METHODOLOGY_PHASES } from '@/lib/constants';

export default function MethodologySection() {
  return (
    <Section id="metodologia" className="bg-white py-14 md:py-24">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-700">Metodología</p>
        <h2 className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl">Tres fases para pasar del diálogo a la acción</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
          Estructuramos cada proceso para facilitar acuerdos, priorizar decisiones y acompañar
          implementación con evidencia.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
        {METHODOLOGY_PHASES.map((phase, index) => (
          <Reveal key={phase.phase} delay={index * 0.08}>
            <Card className="relative h-full border-neutral-200">
              <div className="absolute -top-3 left-5 inline-flex rounded-full bg-primary-700 px-3 py-1 text-xs font-semibold text-white">
                Fase {phase.phase}
              </div>

              <h3 className="mt-4 text-xl font-bold text-neutral-900">{phase.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{phase.description}</p>

              <ul className="mt-5 space-y-3">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-neutral-700">
                    <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
