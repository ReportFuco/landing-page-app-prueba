import Link from 'next/link';
import { ArrowRight, PhoneCall } from 'lucide-react';
import Button from '@/components/Button';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';

export default function CTASection() {
  return (
    <Section id="contacto" className="py-14 md:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-primary-500/15 bg-gradient-to-r from-primary-700 via-primary-600 to-accent-700 px-6 py-12 text-center text-white shadow-[0_26px_70px_-36px_rgba(2,132,199,0.8)] md:px-12 md:py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 right-0 h-52 w-52 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-24 left-6 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold md:text-4xl">¿Necesitas colaboración estratégica?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-blue-50 md:text-lg">
              Conversemos sobre tu desafío y diseñemos una ruta de trabajo realista, participativa y
              orientada a resultados.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contacto">
                <Button size="lg" className="bg-white text-primary-700 hover:bg-blue-50 hover:text-primary-700">
                  Enviar mensaje
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <a
                href="tel:+56229739113"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/80 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <PhoneCall size={18} />
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
