import { ShieldCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { CLIENTS } from '@/lib/constants';

export default function ClientsSection() {
  return (
    <Section className="bg-gradient-to-b from-white to-neutral-100 py-14 md:py-24">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">Experiencia</p>
        <h2 className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl">Organizaciones que han confiado en nuestro trabajo</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
          Hemos colaborado con empresas, instituciones públicas y organismos internacionales en
          distintos países de América Latina.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {CLIENTS.map((client, index) => (
          <Reveal key={client.id} delay={index * 0.03}>
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white px-3 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                {client.shortName}
              </div>
              <p className="mt-3 text-xs font-semibold leading-tight text-neutral-700">{client.name}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-10">
        <div className="mx-auto flex max-w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700">
          <ShieldCheck size={16} />
          Más de 50 organizaciones han trabajado con nosotros.
        </div>
      </Reveal>
    </Section>
  );
}
