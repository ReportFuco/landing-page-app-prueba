import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { IMPACT_PROJECTS } from '@/lib/constants';

interface ImpactProjectsSectionProps {
  withIntro?: boolean;
}

export default function ImpactProjectsSection({ withIntro = true }: ImpactProjectsSectionProps) {
  return (
    <Section className="bg-surface py-14 sm:py-16 md:py-20">
      {withIntro ? (
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">Proyectos de Impacto</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
            Un espacio para presentar cinco proyectos clave.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
            Esta sección quedó preparada como base editable para ir sumando tus proyectos generales,
            resultados y estado de avance.
          </p>
        </Reveal>
      ) : null}

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {IMPACT_PROJECTS.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.05}>
            <article className="group relative h-full overflow-hidden rounded-[26px] border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(2,132,199,0.11),_transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{project.year}</span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold leading-tight text-foreground">{project.title}</h3>
                <p className="mt-4 flex-grow text-sm leading-6 text-muted sm:text-base">{project.summary}</p>

                {project.projects?.length ? (
                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Proyectos</p>
                    <ul className="mt-3 space-y-2">
                      {project.projects.map((item) => (
                        <li key={item} className="rounded-lg bg-surface-soft px-3 py-2 text-sm text-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Estado</p>
                  <p className="mt-1 text-sm font-medium text-foreground">{project.status}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
