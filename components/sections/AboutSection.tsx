import { Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';

const FEATURES = [
  {
    title: 'Experiencia multidisciplinaria',
    description: 'Equipo senior en facilitación, política pública, territorio y sostenibilidad.',
  },
  {
    title: 'Red aliada en América Latina',
    description: 'Profesionales y empresas que permiten implementación contextualizada por país.',
  },
  {
    title: 'Orientación a resultados',
    description: 'Pasamos de acuerdos a planes accionables con seguimiento e indicadores.',
  },
];

export default function AboutSection() {
  return (
    <Section className="bg-white py-14 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <Reveal>
          <div className="relative rounded-3xl border border-primary-100 bg-gradient-to-br from-primary-700 to-accent-700 p-10 text-white shadow-[0_28px_60px_-36px_rgba(2,132,199,0.7)]">
            <p className="text-sm uppercase tracking-[0.12em] text-primary-100">Quiénes somos</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Diseñamos acuerdos que sí se implementan.</h2>
            <p className="mt-5 text-blue-50">
              Somos una consultora con trayectoria en diálogo y colaboración multiactor para empresas,
              gobiernos y organismos internacionales.
            </p>
            <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5 text-sm text-blue-50">
              Trabajamos por la efectividad del proceso y la calidad del resultado, manteniendo
              neutralidad respecto de los intereses de las partes.
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <h3 className="text-3xl font-bold text-neutral-900 md:text-4xl">Capacidad técnica + trabajo territorial</h3>
            <p className="mt-5 text-lg text-neutral-600">
              Acompañamos procesos complejos de colaboración con metodologías claras, información útil y
              una facilitación que fortalece confianza entre actores diversos.
            </p>

            <div className="mt-8 space-y-5">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="flex gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{feature.title}</h4>
                    <p className="mt-1 text-sm text-neutral-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
