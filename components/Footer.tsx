'use client';

import { CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-neutral-600">© {currentYear} Colaboración Estratégica. Todos los derechos reservados.</p>
        <a href={`mailto:${CONTACT_INFO.email}`} className="text-neutral-700 hover:text-neutral-950">
          {CONTACT_INFO.email}
        </a>
      </div>
    </footer>
  );
}
