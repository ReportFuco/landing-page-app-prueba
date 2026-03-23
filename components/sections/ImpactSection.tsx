import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';

const CASES = [
  {
    title: 'Mesa territorial para inversión minera',
    summary:
      'Diseño y facilitación de una mesa multiactor para alinear expectativas entre comunidades, empresa y autoridades.',
    result: 'Acuerdos de corto plazo + plan de seguimiento con indicadores compartidos.',
    tag: 'Relacionamiento',
  },
  {
    title: 'Participación ciudadana para política pública',
    summary:
      'Estructuración metodológica de procesos participativos en distintas comunas, con trazabilidad de aportes.',
    result: 'Más de 1.200 participantes y hoja de ruta validada por actores locales.',
    tag: 'Participación',
  },
  {
    title: 'Gobernanza para colaboración interinstitucional',
    summary:
      'Acompañamiento para definir reglas del juego, roles y criterios de decisión entre instituciones públicas y privadas.',
    result: 'Modelo de gobernanza operativo con comité técnico y evaluación trimestral.',
    tag: 'Multiactor',
  },
];

export default function ImpactSection() {
  return (
    <Section className="bg-white py-14 md:py-24">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">Proyectos e impacto</p>
        <h2 className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl">Resultados que combinan diálogo y ejecución</h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {CASES.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="h-full rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-md">
              <p className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">{item.tag}</p>
              <h3 className="mt-4 text-xl font-bold text-neutral-900">{item.title}</h3>
              <p className="mt-3 text-sm text-neutral-600">{item.summary}</p>
              <p className="mt-4 text-sm font-medium text-neutral-800">{item.result}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12} className="mt-10 text-center">
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 rounded-xl border border-primary-200 bg-white px-5 py-3 text-sm font-semibold text-primary-700 transition-all hover:-translate-y-0.5 hover:border-primary-300"
        >
          Conversemos sobre tu caso
          <ArrowUpRight size={16} />
        </Link>
      </Reveal>
    </Section>
  );
}
