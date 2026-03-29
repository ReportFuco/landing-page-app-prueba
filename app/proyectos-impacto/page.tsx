import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import ImpactTruchasSection from '@/components/sections/ImpactTruchasSection';

export const metadata: Metadata = {
  title: 'Proyectos de Impacto | Colaboración Estratégica',
  description:
    'Página base para presentar proyectos de impacto y su estado de avance dentro de Colaboración Estratégica.',
};

export default function ProyectosImpactoPage() {
  return (
    <>
      <Section className="border-b border-border bg-surface py-12 sm:py-16 md:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Proyectos de Impacto
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl">
              Proyectos de Impacto con foco social, económico y ambiental.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Aquí presentamos los cinco proyectos priorizados por Originaria, su localización
              territorial y su propuesta de valor para comunidades y empresas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-soft"
              >
                Hablemos de un proyecto
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-soft"
              >
                Volver al inicio
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] border border-border bg-[radial-gradient(circle_at_top_right,_rgba(2,132,199,0.12),_transparent_58%),var(--surface)] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Enfoque</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              Desarrollo de proyectos de agregación de valor en cinco regiones del país.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Cada iniciativa busca fortalecer ecosistemas territoriales sostenibles mediante
              encadenamiento productivo, innovación local y colaboración multiactor.
            </p>
          </div>
        </div>
      </Section>

      <ImpactTruchasSection />
    </>
  );
}
