'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NAV_MENU } from '@/lib/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3.5" onClick={() => setIsOpen(false)}>
            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-base font-semibold text-neutral-900 shadow-sm sm:h-14 sm:w-14 sm:text-lg">
              CE
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">Consultora</p>
              <p className="text-base font-semibold leading-tight text-neutral-950 sm:text-lg">Colaboración Estratégica</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contacto"
              className="hidden rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 md:inline-flex"
            >
              Contáctanos
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Abrir menú"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 md:hidden"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="border-t border-neutral-200 bg-white py-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {NAV_MENU.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
