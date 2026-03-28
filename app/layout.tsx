import type { Metadata, Viewport } from 'next';
import { Manrope, Sora } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemaScript from '@/components/SchemaScript';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Colaboración Estratégica | Acción Colectiva con Resultados',
  description:
    'Generamos colaboración estratégica para alcanzar resultados sostenibles en empresas, gobiernos y organizaciones de la sociedad civil.',
  keywords: [
    'colaboración estratégica',
    'relacionamiento comunitario',
    'participación ciudadana',
    'sostenibilidad',
    'colaboración multiactor',
  ],
  authors: [{ name: 'Colaboración Estratégica' }],
  creator: 'Colaboración Estratégica',
  metadataBase: new URL('https://colaboracionestrategica.cl'),
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://colaboracionestrategica.cl',
    title: 'Colaboración Estratégica | Acción Colectiva con Resultados',
    description:
      'Diseñamos y facilitamos procesos de diálogo para construir acuerdos sostenibles.',
    siteName: 'Colaboración Estratégica',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colaboración Estratégica',
    description: 'Acción colectiva con resultados sostenibles.',
  },
};

export const viewport: Viewport = {
  themeColor: '#0284c7',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeInitScript = `
    (function() {
      try {
        var stored = localStorage.getItem('theme');
        var preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = stored === 'light' || stored === 'dark' ? stored : (preferredDark ? 'dark' : 'light');
        var root = document.documentElement;
        root.setAttribute('data-theme', theme);
        root.classList.remove('theme-light', 'theme-dark');
        root.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
      } catch (e) {}
    })();
  `;

  return (
    <html lang="es" className={`${manrope.variable} ${sora.variable} h-full antialiased scroll-smooth`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SchemaScript />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
