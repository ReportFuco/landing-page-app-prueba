'use client';

import { useEffect, useRef } from 'react';
import { Handshake, Network, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '@/components/Card';
import Section from '@/components/Section';
import { SERVICES } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

const ICONS = {
  network: Network,
  users: Users,
  handshake: Handshake,
};

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from('[data-services-heading]', {
        y: 20,
        opacity: 0,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      });

      gsap.from('[data-service-card]', {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 62%',
          once: true,
        },
      });

      gsap.to('[data-services-progress]', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 35%',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Section ref={sectionRef} id="servicios" className="bg-gradient-to-b from-neutral-50 to-white py-14 md:py-24">
      <div data-services-heading className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">Servicios</p>
        <h2 className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl">Cómo te ayudamos a colaborar mejor</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
          Diseñamos estrategias de colaboración adaptadas al territorio, al contexto institucional y a la
          complejidad de cada proyecto.
        </p>
      </div>

      <div className="mx-auto mt-6 h-1 w-full max-w-xl overflow-hidden rounded-full bg-primary-100">
        <div data-services-progress className="h-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary-600 to-accent-600" />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = ICONS[service.icon];

          return (
            <div key={service.id} data-service-card>
              <Card className="h-full border-primary-100/80">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-primary-700`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-neutral-900">{service.title}</h3>
                <p className="mt-3 text-neutral-600">{service.description}</p>
                <a
                  href="/contacto"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-all hover:gap-3"
                >
                  Explorar servicio
                  <span aria-hidden>→</span>
                </a>
              </Card>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
