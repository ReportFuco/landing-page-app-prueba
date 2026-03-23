'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NAV_MENU } from '@/lib/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-100/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-600">
              <span className="text-base font-bold text-white">CE</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm text-neutral-500">Consultora</p>
              <p className="text-lg font-semibold text-neutral-900">Colaboración Estratégica</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV_MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-neutral-600 transition-colors hover:text-primary-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contacto"
              className="hidden md:inline-flex items-center justify-center rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-700"
            >
              Hablemos
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Abrir menú"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 text-neutral-700 md:hidden"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="border-t border-neutral-200/80 py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {NAV_MENU.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white"
              >
                Hablemos
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}

