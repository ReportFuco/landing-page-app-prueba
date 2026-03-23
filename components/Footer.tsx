'use client';

import Link from 'next/link';
import { ArrowUpRight, Globe2, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-9 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-500">
                <span className="text-base font-bold text-white">CE</span>
              </div>
              <span className="text-lg font-semibold">Colaboración Estratégica</span>
            </div>
            <p className="max-w-sm text-sm text-neutral-400">
              Acción colectiva con foco en acuerdos sostenibles, implementación y confianza entre actores.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-neutral-300">Contacto</h3>
            <a href={`mailto:${CONTACT_INFO.email}`} className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-primary-300">
              <Mail size={15} />
              {CONTACT_INFO.email}
            </a>
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-primary-300">
              <Phone size={15} />
              {CONTACT_INFO.phone}
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-neutral-300">Redes</h3>
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm text-neutral-400 hover:text-primary-300"
            >
              <Globe2 size={15} />
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-7 sm:flex-row">
          <p className="text-sm text-neutral-500">© {currentYear} Colaboración Estratégica. Todos los derechos reservados.</p>
          <div className="flex gap-5 text-sm text-neutral-500">
            <Link href="#" className="hover:text-neutral-300">Privacidad</Link>
            <Link href="#" className="hover:text-neutral-300">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

