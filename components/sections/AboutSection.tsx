import Reveal from '@/components/Reveal';
import Section from '@/components/Section';

const BLOCKS = [
  {
    title: 'Experiencia territorial',
    description:
      'Trabajamos en contextos complejos donde conviven intereses públicos, privados y comunitarios.',
  },
  {
    title: 'Diseño de procesos',
    description:
      'Construimos hojas de ruta claras para diálogo, coordinación institucional y relacionamiento sostenible.',
  },
  {
    title: 'Implementación con foco',
    description:
      'No nos quedamos en la conversación: ordenamos decisiones, prioridades y seguimiento.',
  },
];

export default function AboutSection() {
  return (
    <Section id="quienes-somos" className="bg-white py-14 sm:py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Quiénes somos
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl md:text-5xl">
              Una consultora orientada a construir acuerdos duraderos.
            </h2>
            <p className="mt-5 text-base leading-7 text-neutral-700 sm:text-lg">
              Acompañamos procesos de colaboración estratégica entre empresas, sector público,
              organizaciones sociales y comunidades, ayudando a generar condiciones para decisiones
              compartidas y resultados sostenibles.
            </p>
            <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg">
              Nuestro enfoque combina criterio técnico, lectura territorial y una facilitación capaz
              de ordenar conversaciones difíciles sin perder de vista la implementación.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {BLOCKS.map((block) => (
              <div key={block.title} className="rounded-[28px] border border-neutral-200 bg-white p-6 sm:p-7">
                <p className="text-lg font-semibold text-neutral-950">{block.title}</p>
                <p className="mt-3 text-sm leading-6 text-neutral-700 sm:text-base">
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
