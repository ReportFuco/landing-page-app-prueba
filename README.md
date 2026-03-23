# Colaboración Estratégica - Landing Page

## 📋 Descripción

Landing page moderna y profesional desarrollada con **Next.js 14**, **React 18**, **TypeScript** y **Tailwind CSS** para la empresa Colaboración Estratégica.

La aplicación es totalmente responsiva, optimizada para SEO, y preparada para integración con un backend API (Python/FastAPI u otro).

---

## 🚀 Características

- ✅ **Diseño Responsivo**: Mobile-first con Tailwind CSS
- ✅ **Optimización SEO**: Metadata dinámicas, sitemap.xml, robots.txt, Schema.org JSON-LD
- ✅ **Performance**: Server Components, Image Optimization, Code Splitting
- ✅ **TypeScript**: Type-safe en todo el proyecto
- ✅ **Accesibilidad**: Semántica HTML correcta, contraste de colores adecuado
- ✅ **Formulario de Contacto**: Con validación frontend, preparado para backend
- ✅ **Paletá Corporativa**: Colores profesionales (azules, verdes, tonos neutrales)
- ✅ **Componentes Reutilizables**: Button, Card, Section, Header, Footer
- ✅ **API Client Preparado**: Función `submitContactForm()` lista para integración

---

## 📁 Estructura del Proyecto

```
landing-page-app/
├── app/
│   ├── layout.tsx              # Layout base (metadatos, Header, Footer)
│   ├── page.tsx                # Página de inicio
│   ├── globals.css             # Estilos globales
│   ├── contacto/
│   │   └── page.tsx            # Página de contacto
│   ├── sitemap.ts              # Mapa del sitio para SEO
│   └── robots.ts               # Archivo robots.txt
│
├── components/
│   ├── Header.tsx              # Navegación principal
│   ├── Footer.tsx              # Pie de página
│   ├── Button.tsx              # Componente Button reutilizable
│   ├── Card.tsx                # Componente Card reutilizable
│   ├── Section.tsx             # Contenedor Section reutilizable
│   ├── ContactForm.tsx         # Formulario de contacto (UI)
│   ├── SchemaScript.tsx        # Schema.org JSON-LD
│   └── sections/
│       ├── HeroSection.tsx     # Sección hero principal
│       ├── AboutSection.tsx    # Sección "Quiénes somos"
│       ├── ServicesSection.tsx # Sección de servicios (3 cards)
│       ├── MethodologySection.tsx # Sección de metodología (3 fases)
│       ├── ClientsSection.tsx  # Grid de clientes
│       └── CTASection.tsx      # Llamada final a acción
│
├── lib/
│   ├── constants.ts            # Constantes, data mockup, colores
│   ├── api-client.ts           # Cliente API para backend (preparado)
│   └── hooks/
│       └── useContactForm.ts   # Hook personalizado para formulario
│
├── types/
│   └── index.ts                # Tipos TypeScript centralizados
│
├── public/                      # Assets estáticos
├── tailwind.config.ts          # Configuración de Tailwind CSS
├── tsconfig.json               # Configuración de TypeScript
└── README.md

```

---

## 🛠️ Instalación y Setup

### Requisitos
- **Node.js**: 18.17+ o 19.8+
- **npm** o **yarn** o **pnpm**

### Pasos

1. **Clonar o descargar el proyecto**
```bash
cd landing-page-app
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Crear archivo de configuración de entorno**
```bash
cp .env.example .env.local
```

4. **Ejecutar servidor de desarrollo**
```bash
npm run dev
```

5. **Abrir en el navegador**
```
http://localhost:3000
```

---

## 📱 Páginas

### 1. Página de Inicio (`/`)
Secciones principales:
- **Hero**: Título, descripción y CTA
- **About**: Información sobre la empresa
- **Services**: 3 servicios principales con descripción
- **Methodology**: 3 fases de la metodología
- **Clients**: Grid de logos de clientes
- **CTA Final**: Llamada a acción final

### 2. Página de Contacto (`/contacto`)
Incluye:
- **Formulario de Contacto**: Campos (nombre, email, teléfono, empresa, servicio, mensaje)
- **Información de Contacto**: Email, teléfono, LinkedIn
- **Información adicional**: Tiempo de respuesta, etc.

---

## 🎨 Personalización

### Cambiar Colores
Edita `tailwind.config.ts` en la sección `colors`:
```typescript
primary: {
  600: '#0284c7', // Azul principal
},
accent: {
  600: '#16a34a', // Verde acento
},
```

### Cambiar Contenido
Edita `lib/constants.ts` para cambiar:
- Servicios (`SERVICES`)
- Fases metodológicas (`METHODOLOGY_PHASES`)
- Clientes (`CLIENTS`)
- Información de contacto (`CONTACT_INFO`)
- Menú de navegación (`NAV_MENU`)

### Cambiar Imágenes Placeholder
En los componentes de secciones, cambia los placeholders por imágenes reales:
```tsx
// Antes (placeholder)
<div className="h-96 rounded-lg bg-gradient-to-br from-primary-100 to-primary-200">
  <p className="text-5xl">🎯</p>
</div>

// Después (con next/image)
import Image from 'next/image';
<Image src="/images/about.jpg" alt="Sobre nosotros" ... />
```

---

## 🔗 Integración con API

### Setup del Cliente API

1. **Configurar URL del API**
   - Edita `.env.local`:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000/api
   ```

2. **Usar en Componentes**
   ```typescript
   import { submitContactForm } from '@/lib/api-client';
   
   const response = await submitContactForm({
     name: 'Juan',
     email: 'juan@empresa.com',
     message: 'Hola...',
   });
   ```

3. **Hook Personalizado**
   ```typescript
   'use client';
   import { useContactForm } from '@/lib/hooks/useContactForm';
   
   const { submit, isLoading, isSuccess } = useContactForm();
   
   const handleSubmit = async (data) => {
     await submit(data);
   };
   ```

### Endpoints esperados del Backend
El API debe exponer estos endpoints:

```
POST /api/contact
  Body: {
    name: string
    email: string
    phone?: string
    company?: string
    message: string
    service?: string
  }
  Response: { success: boolean, message: string }

GET /api/health
  Response: { status: 'ok' }

GET /api/services
  Response: Service[]
```

---

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Docker
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

### Local (Producción)
```bash
npm run build
npm start
```

---

## 🧪 Testing Local

1. **Verificar que todo compila**
```bash
npm run build
```

2. **Validar tipos TypeScript**
```bash
npx tsc --noEmit
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Verificar SEO**
   - Abre DevTools → Elements
   - Verifica que los `<meta>` tags estén presentes
   - Revisa `http://localhost:3000/sitemap.xml`
   - Revisa `http://localhost:3000/robots.txt`

---

## 📊 Performance & SEO

### Metrics esperados
- **Lighthouse Score**: 85+
- **Core Web Vitals**: Green
- **Accessibility**: 90+

### Optimizaciones incluidas
- ✅ Server Components para mejor rendimiento
- ✅ Code splitting automático
- ✅ Image optimization (next/image)
- ✅ Font optimization (next/font)
- ✅ CSS optimizado con Tailwind
- ✅ Meta tags dinámicos
- ✅ Schema.org JSON-LD para búsqueda enriquecida

---

## 🔧 Variables de Entorno

```env
# Requeridas
NEXT_PUBLIC_API_URL=http://localhost:8000/api

# Opcional (Para correo de notificaciones, etc.)
# SMTP_HOST=...
# SMTP_PORT=...
# SMTP_USER=...
# SMTP_PASS=...
```

---

## 📚 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

## 🤝 Soporte

Para preguntas o problemas, contacta con el equipo de desarrollo.

---

## 📝 Notas

- ✅ **Formulario de contacto**: UI completamente funcional, sin integración de backend aún
- ✅ **Datos mockup**: Todos los datos (servicios, clientes, etc.) están en `lib/constants.ts`
- ✅ **Imágenes placeholder**: Usar placeholders color sólido con emojis (dinámicos y manejables)
- ✅ **Preparado para API externa**: Cliente API configurado, listo para integrar FastAPI o similar

---

**Última actualización**: Marzo 2026
