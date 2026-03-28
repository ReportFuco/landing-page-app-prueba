import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { CLIENTS } from '@/lib/constants';

export default function ClientsSection() {
  return (
    <Section id="clientes" className="border-y border-neutral-200 bg-white py-14 sm:py-16 md:py-20">
      <Reveal className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">Clientes y experiencia</p>
        <h2 className="mt-4 text-3xl font-semibold text-neutral-950 sm:text-4xl md:text-5xl">
          Organizaciones que confían en procesos colaborativos bien diseñados.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-neutral-700 sm:text-lg">
          Hemos trabajado con instituciones públicas, empresas, fundaciones y actores territoriales
          en proyectos donde la coordinación, la legitimidad y la implementación importan.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {CLIENTS.map((client, index) => (
          <Reveal key={client.id} delay={index * 0.03}>
            <div className="flex min-h-[92px] items-center justify-center rounded-[24px] border border-neutral-200 bg-white px-4 py-6 text-center">
              <span className="text-sm font-medium tracking-[0.06em] text-neutral-800 sm:text-base">
                {client.name}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
