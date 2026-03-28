import Link from 'next/link';
import Section from '@/components/Section';

export default function HeroSection() {
  return (
    <Section id="inicio" className="border-b border-neutral-200 bg-white py-12 sm:py-16 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Acción colectiva con resultados
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl md:text-6xl">
            Facilitamos procesos de colaboración para abordar desafíos complejos.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-700 sm:text-lg">
            Acompañamos a empresas, instituciones públicas y organizaciones en el diseño de
            estrategias de diálogo, relacionamiento y articulación territorial con foco en
            resultados sostenibles.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-100"
            >
              Contáctanos
            </Link>
            <Link
              href="#quienes-somos"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100"
            >
              Conoce nuestro trabajo
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-[28px] border border-neutral-200 bg-white p-6 sm:p-7">
            <p className="text-sm font-semibold text-neutral-950">Qué hacemos</p>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              Diseñamos procesos de participación, relacionamiento y coordinación entre actores
              diversos para construir acuerdos viables y sostenibles.
            </p>
          </div>

          <div className="rounded-[28px] border border-neutral-200 bg-white p-6 sm:p-7">
            <p className="text-sm font-semibold text-neutral-950">Cómo trabajamos</p>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              Combinamos escucha, análisis, facilitación y seguimiento para convertir conversaciones
              complejas en decisiones implementables.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
