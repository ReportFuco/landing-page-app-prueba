'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/Button';
import Section from '@/components/Section';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from('[data-hero-badge]', {
        y: 18,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      });

      gsap.from('[data-hero-title]', {
        y: 26,
        opacity: 0,
        duration: 0.9,
        delay: 0.1,
        ease: 'power3.out',
      });

      gsap.from('[data-hero-copy]', {
        y: 18,
        opacity: 0,
        duration: 0.75,
        delay: 0.25,
        ease: 'power2.out',
      });

      gsap.from('[data-hero-actions]', {
        y: 16,
        opacity: 0,
        duration: 0.65,
        delay: 0.38,
        ease: 'power2.out',
      });

      gsap.from('[data-hero-panel]', {
        y: 24,
        opacity: 0,
        duration: 0.85,
        delay: 0.24,
        ease: 'power3.out',
      });

      gsap.to('[data-hero-glow="a"]', {
        yPercent: -12,
        xPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('[data-hero-glow="b"]', {
        yPercent: 14,
        xPercent: -7,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-[86vh] overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 py-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div data-hero-glow="a" className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-primary-200/55 blur-3xl" />
        <div data-hero-glow="b" className="absolute top-1/3 -left-20 h-64 w-64 rounded-full bg-cyan-200/50 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-emerald-200/45 blur-3xl" />
      </div>

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div data-hero-badge className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/85 px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm">
            <Sparkles size={16} />
            Consultoría para acción colectiva
          </div>

          <h1 data-hero-title className="mt-6 text-4xl font-bold leading-tight text-neutral-900 md:text-6xl">
            Generamos{' '}
            <span className="bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 bg-clip-text text-transparent">
              colaboración estratégica
            </span>{' '}
            para resultados sostenibles.
          </h1>

          <p data-hero-copy className="mt-6 max-w-2xl text-lg text-neutral-600 md:text-xl">
            Diseñamos y facilitamos procesos de diálogo para que empresas, gobiernos y sociedad civil
            tomen decisiones compartidas y conviertan acuerdos en resultados.
          </p>

          <div data-hero-actions className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contacto">
              <Button size="lg" className="w-full sm:w-auto">
                Conversemos
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="#servicios">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Ver servicios
              </Button>
            </Link>
          </div>
        </div>

        <div data-hero-panel className="rounded-3xl border border-white/80 bg-white/90 p-7 shadow-[0_24px_65px_-36px_rgba(2,132,199,0.55)] backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">Nuestra propuesta</p>
          <ul className="mt-6 space-y-4">
            {[
              'Neutralidad metodológica frente a intereses de las partes.',
              'Procesos participativos diseñados para decidir y ejecutar.',
              'Acompañamiento técnico con foco en sostenibilidad territorial.',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-neutral-700 md:text-base">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-neutral-200 pt-6 text-center">
            <div>
              <p className="text-2xl font-bold text-primary-700">15+</p>
              <p className="text-xs text-neutral-500">Años</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent-700">100+</p>
              <p className="text-xs text-neutral-500">Proyectos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-700">7+</p>
              <p className="text-xs text-neutral-500">Países</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
