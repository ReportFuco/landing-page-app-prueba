import { ArrowRight, Clock3, Globe2, Mail, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { CONTACT_INFO } from '@/lib/constants';

const STEPS = [
  {
    title: 'Levantamiento inicial',
    description: 'Revisamos contexto, actores críticos y objetivos esperados para tu proceso.',
  },
  {
    title: 'Propuesta de trabajo',
    description: 'Diseñamos una ruta metodológica con fases, entregables y tiempos estimados.',
  },
  {
    title: 'Inicio de implementación',
    description: 'Comenzamos acompañamiento con hitos de seguimiento y decisiones compartidas.',
  },
];

const FAQS = [
  {
    q: '¿Trabajan solo en Chile?',
    a: 'No. Hemos acompañado procesos en varios países de América Latina, tanto de forma presencial como híbrida.',
  },
  {
    q: '¿Atienden proyectos públicos y privados?',
    a: 'Sí. Trabajamos con empresas, gobiernos, organismos internacionales y sociedad civil.',
  },
  {
    q: '¿Cuánto demora una propuesta inicial?',
    a: 'Generalmente enviamos una propuesta en pocos días hábiles, según alcance y disponibilidad de información.',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Section className="bg-gradient-to-br from-primary-50 to-white py-14 md:py-16">
        <Reveal className="text-center">
          <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl">¿Necesitas de nuestros servicios?</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Cuéntanos sobre tu desafío y trabajemos una estrategia de colaboración a la medida.
          </p>
        </Reveal>
      </Section>

      <Section className="py-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900">Envíanos un mensaje</h2>
              <p className="mt-2 text-sm text-neutral-600">Describe tu contexto y los actores involucrados. Así te responderemos mejor.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="space-y-5">
            <div className="rounded-2xl border border-primary-200 bg-primary-50 p-6">
              <h3 className="flex items-center gap-2 font-semibold text-neutral-900">
                <Mail size={18} className="text-primary-700" /> Escríbenos
              </h3>
              <a href={`mailto:${CONTACT_INFO.email}`} className="mt-3 block font-semibold text-primary-700 hover:underline">
                {CONTACT_INFO.email}
              </a>
            </div>

            <div className="rounded-2xl border border-accent-200 bg-accent-50 p-6">
              <h3 className="flex items-center gap-2 font-semibold text-neutral-900">
                <Phone size={18} className="text-accent-700" /> Llámanos
              </h3>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="mt-3 block font-semibold text-accent-700 hover:underline">
                {CONTACT_INFO.phone}
              </a>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="flex items-center gap-2 font-semibold text-neutral-900">
                <Globe2 size={18} className="text-blue-700" /> Interactuemos
              </h3>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block font-semibold text-blue-700 hover:underline"
              >
                LinkedIn: Colaboración Estratégica
              </a>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <h3 className="flex items-center gap-2 font-semibold text-neutral-900">
                <Clock3 size={18} className="text-neutral-700" /> Tiempo de respuesta
              </h3>
              <p className="mt-3 text-sm text-neutral-600">Respondemos tus mensajes en un plazo máximo de 48 horas.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white py-12 md:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold text-neutral-900">¿Qué pasa después de que nos escribes?</h2>
            <div className="mt-7 space-y-4">
              {STEPS.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-700">Paso {index + 1}</p>
                  <h3 className="mt-2 text-lg font-bold text-neutral-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <h2 className="text-2xl font-bold text-neutral-900">Preguntas frecuentes</h2>
              <div className="mt-5 space-y-3">
                {FAQS.map((faq) => (
                  <details key={faq.q} className="rounded-xl border border-neutral-200 bg-white p-4">
                    <summary className="cursor-pointer list-none font-semibold text-neutral-900">{faq.q}</summary>
                    <p className="mt-2 text-sm text-neutral-600">{faq.a}</p>
                  </details>
                ))}
              </div>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
              >
                Solicitar reunión inicial
                <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
