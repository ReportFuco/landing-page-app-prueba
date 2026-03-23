import Link from 'next/link';
import { BookOpenText, CalendarDays } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';

const INSIGHTS = [
  {
    title: 'Lecciones para sostener confianza en procesos multiactor',
    date: 'Enero 2026',
    type: 'Artículo',
  },
  {
    title: 'Cómo transformar participación en decisiones accionables',
    date: 'Diciembre 2025',
    type: 'Guía',
  },
  {
    title: 'Métricas para evaluar acuerdos colaborativos',
    date: 'Noviembre 2025',
    type: 'Publicación',
  },
];

export default function InsightsSection() {
  return (
    <Section className="bg-gradient-to-b from-neutral-100 to-white py-14 md:py-24">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-700">Publicaciones</p>
        <h2 className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl">Contenido para liderar procesos colaborativos</h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {INSIGHTS.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.07}>
            <article className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between text-xs font-semibold text-neutral-500">
                <span className="inline-flex items-center gap-1">
                  <BookOpenText size={14} />
                  {item.type}
                </span>
                <span className="inline-flex items-center gap-1">
                  <CalendarDays size={14} />
                  {item.date}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">{item.title}</h3>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12} className="mt-9 text-center">
        <Link
          href="https://www.linkedin.com/company/colaboracion-estrategica/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
        >
          Ver más en LinkedIn
        </Link>
      </Reveal>
    </Section>
  );
}
