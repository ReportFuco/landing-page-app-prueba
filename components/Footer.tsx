'use client';

import { CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-muted">© {currentYear} Colaboración Estratégica. Todos los derechos reservados.</p>
        <a href={`mailto:${CONTACT_INFO.email}`} className="text-muted hover:text-foreground">
          {CONTACT_INFO.email}
        </a>
      </div>
    </footer>
  );
}
