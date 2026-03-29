import Section from '@/components/Section';
import { IMPACT_PROJECTS } from '@/lib/constants';

export default function ImpactTruchasSection() {
  const detailedProjects = [
    { id: 'impacto-truchas-sra', number: 1 },
    { id: 'impacto-camelidos', number: 2 },
    { id: 'impacto-turismo', number: 3 },
  ]
    .map(({ id, number }) => {
      const project = IMPACT_PROJECTS.find((item) => item.id === id);
      if (!project) {
        return null;
      }

      return { project, number };
    })
    .filter((item): item is { project: (typeof IMPACT_PROJECTS)[number]; number: number } => Boolean(item));

  if (!detailedProjects.length) {
    return null;
  }

  return (
    <Section className="bg-surface py-14 sm:py-16 md:py-20">
      <div className="space-y-8">
        {detailedProjects.map(({ project, number }) => (
          <article key={project.id} className="rounded-[30px] border border-border bg-surface p-6 sm:p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Proyecto {number} de 5</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
              {number}. {project.title}
            </h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Proyectos formulados</h3>
                <ul className="mt-4 space-y-3">
                  {project.projects?.map((item) => (
                    <li
                      key={item}
                      className="whitespace-pre-line rounded-xl bg-surface-soft px-4 py-3 text-base text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-foreground">Resumen</h3>
                <div className="mt-4 space-y-5">
                  {project.summary.split('\n\n').map((paragraph) => (
                    <p key={paragraph} className="text-base leading-7 text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">Galería del proyecto</p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="flex min-h-[220px] items-end rounded-[22px] border border-dashed border-border bg-surface-soft p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Espacio para foto principal
                    </p>
                  </div>
                  <div className="flex min-h-[220px] items-end rounded-[22px] border border-dashed border-border bg-surface-soft p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Espacio para foto secundaria
                    </p>
                  </div>
                  <div className="flex min-h-[220px] items-end rounded-[22px] border border-dashed border-border bg-surface-soft p-4 sm:col-span-2 lg:col-span-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Espacio para foto de proceso/terreno
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
