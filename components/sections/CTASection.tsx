import Link from 'next/link';
import Section from '@/components/Section';
import { CONTACT_INFO } from '@/lib/constants';

export default function CTASection() {
  return (
    <Section id="contacto" className="bg-surface py-14 sm:py-16 md:py-20">
      <div className="rounded-[32px] border border-border bg-surface p-6 sm:p-8 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">Contacto</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
              Conversemos sobre el desafío que necesitas abordar.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Si estás buscando apoyo para articular actores, ordenar conversaciones complejas o
              diseñar una estrategia de colaboración, podemos ayudarte a construir una ruta de trabajo
              clara y realista.
            </p>
          </div>

          <div className="space-y-4 rounded-[28px] border border-border bg-surface p-6 sm:p-7">
            <div>
              <p className="text-sm font-semibold text-foreground">Correo electrónico</p>
              <a href={`mailto:${CONTACT_INFO.email}`} className="mt-1 block text-base text-muted hover:text-foreground">
                {CONTACT_INFO.email}
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">Teléfono</p>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="mt-1 block text-base text-muted hover:text-foreground">
                {CONTACT_INFO.phone}
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">Ubicación</p>
              <p className="mt-1 text-base text-muted">{CONTACT_INFO.address}</p>
            </div>

            <div className="pt-3">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-soft"
              >
                Ir al formulario de contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
