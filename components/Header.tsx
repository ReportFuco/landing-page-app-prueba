'use client';

import Link from 'next/link';
import { Menu, MoonStar, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NAV_MENU } from '@/lib/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  function applyTheme(theme: 'light' | 'dark') {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.remove('theme-light', 'theme-dark');
    root.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
    window.localStorage.setItem('theme', theme);
  }

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme =
      storedTheme === 'light' || storedTheme === 'dark'
        ? storedTheme
        : preferredDark
          ? 'dark'
          : 'light';

    applyTheme(initialTheme);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsAtTop(window.scrollY < 24);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  const expanded = isAtTop && !isOpen;

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border backdrop-blur-xl transition-all duration-300 ${
        expanded ? 'bg-surface/75' : 'bg-surface/92'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${expanded ? 'h-24' : 'h-20'}`}>
          <Link href="/" className="flex items-center gap-3.5" onClick={() => setIsOpen(false)}>
            <div
              className={`flex shrink-0 items-center justify-center rounded-full border border-border bg-surface text-base font-semibold text-foreground shadow-sm transition-all duration-300 ${
                expanded ? 'h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] sm:text-xl' : 'h-13 w-13 sm:h-14 sm:w-14 sm:text-lg'
              }`}
            >
              CE
            </div>
            <div>
              <p className={`uppercase tracking-[0.22em] text-muted transition-all duration-300 ${expanded ? 'text-xs' : 'text-[11px]'}`}>
                Consultora
              </p>
              <p
                className={`font-semibold leading-tight text-foreground transition-all duration-300 ${
                  expanded ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
                }`}
              >
                Colaboración Estratégica
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:bg-surface-soft"
            >
              <MoonStar size={18} />
            </button>

            <Link
              href="/#contacto"
              className="hidden rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-soft lg:inline-flex"
            >
              Contáctanos
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Abrir menú"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted lg:hidden"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="border-t border-border bg-surface py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {NAV_MENU.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-muted hover:bg-surface-soft"
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
