'use client';

import Script from 'next/script';

export default function SchemaScript() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Colaboración Estratégica',
    url: 'https://colaboracionestrategica.cl',
    logo: 'https://colaboracionestrategica.cl/logo.svg',
    description:
      'Generamos colaboración estratégica para lograr resultados sostenibles en empresas, gobiernos y sociedad civil.',
    sameAs: ['https://www.linkedin.com/company/colaboracion-estrategica/'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+56-2-2973-9113',
      contactType: 'sales',
      email: 'contacto@colaboracionestrategica.cl',
      areaServed: 'CL',
      availableLanguage: 'es',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Santiago',
      addressCountry: 'CL',
    },
  };

  return (
    <Script
      id="schema-organization"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
