import { Service, Client, MethodologyPhase } from '@/types';

// Configuración de colores
export const COLORS = {
  primary: '#0284c7',
  secondary: '#16a34a',
  accent: '#0369a1',
  neutral: '#475569',
  light: '#f8fafc',
  dark: '#0f172a',
};

// Servicios
export const SERVICES: Service[] = [
  {
    id: 'relacionamiento',
    title: 'Relacionamiento Comunitario y Gestión del Entorno',
    description:
      'Acompañamos a empresas y organizaciones para sostener relaciones colaborativas y construir una visión común de desarrollo territorial.',
    icon: 'network',
    color: 'from-cyan-100 to-sky-100',
  },
  {
    id: 'participacion',
    title: 'Participación Ciudadana',
    description:
      'Diseñamos, gestionamos y evaluamos procesos participativos con metodologías claras, capacidades humanas y comunicación comprensible.',
    icon: 'users',
    color: 'from-emerald-100 to-teal-100',
  },
  {
    id: 'colaboracion',
    title: 'Colaboración Multiactor',
    description:
      'Diseñamos e implementamos procesos para desafíos complejos que requieren coordinación entre actores con intereses diversos.',
    icon: 'handshake',
    color: 'from-blue-100 to-indigo-100',
  },
];

// Fases de metodología
export const METHODOLOGY_PHASES: MethodologyPhase[] = [
  {
    phase: 1,
    title: 'Condiciones para el diálogo',
    description: 'Establecimiento de bases y comprensión profunda del contexto.',
    items: [
      'Objetivos para el diálogo y la colaboración con resultados.',
      'Mapas de actores, intereses, redes y conflicto.',
      'Línea base de referencia para medir avances.',
    ],
  },
  {
    phase: 2,
    title: 'Diálogo para la colaboración',
    description: 'Construcción conjunta de soluciones y objetivos compartidos.',
    items: [
      'Reglas del juego consensuadas.',
      'Diagnóstico compartido y comunicación efectiva.',
      'Visión compartida con criterios de evaluación.',
      'Definición de objetivos estratégicos.',
    ],
  },
  {
    phase: 3,
    title: 'Colaboración para la acción',
    description: 'Implementación y resultados tangibles para todas las partes.',
    items: [
      'Acompañamiento a la implementación.',
      'Articulación para la acción colectiva efectiva.',
      'Monitoreo y evaluación de resultados.',
    ],
  },
];

// Clientes/Colaboradores
export const CLIENTS: Client[] = [
  { id: '1', name: 'Nodo Acti', shortName: 'NA' },
  { id: '2', name: 'IMI', shortName: 'IMI' },
  { id: '3', name: 'Barrick', shortName: 'BAR' },
  { id: '4', name: 'Andes Iron', shortName: 'AI' },
  { id: '5', name: 'PNUD', shortName: 'PNUD' },
  { id: '6', name: 'Kinross', shortName: 'KIN' },
  { id: '7', name: 'BID', shortName: 'BID' },
  { id: '8', name: 'UNO', shortName: 'UNO' },
  { id: '9', name: 'Teck', shortName: 'TECK' },
  { id: '10', name: 'Panamá', shortName: 'PA' },
  { id: '11', name: 'Corfo', shortName: 'COR' },
  { id: '12', name: 'CNID', shortName: 'CNID' },
];

// Información de contacto
export const CONTACT_INFO = {
  email: 'contacto@colaboracionestrategica.cl',
  phone: '+56 2 2973 9113',
  linkedin: 'https://www.linkedin.com/company/colaboracion-estrategica/',
  address: 'Santiago, Chile',
};

// Menú de navegación
export const NAV_MENU = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Contacto', href: '/contacto' },
];
