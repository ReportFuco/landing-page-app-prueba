import { Client, MethodologyPhase, Service } from '@/types';

export const COLORS = {
  primary: '#0f766e',
  secondary: '#115e59',
  accent: '#0f766e',
  neutral: '#475569',
  light: '#ffffff',
  dark: '#0f172a',
};

export const SERVICES: Service[] = [
  {
    id: 'dialogo',
    title: 'Diseño y facilitación de diálogo',
    description: 'Procesos de conversación estratégica para construir acuerdos entre actores diversos.',
    icon: 'users',
    color: 'from-neutral-100 to-neutral-50',
  },
  {
    id: 'territorio',
    title: 'Relacionamiento y gestión territorial',
    description: 'Estrategias para fortalecer confianza, coordinación y legitimidad en contextos complejos.',
    icon: 'network',
    color: 'from-neutral-100 to-neutral-50',
  },
  {
    id: 'implementacion',
    title: 'Acompañamiento para la implementación',
    description: 'Priorización, seguimiento y ordenamiento de decisiones para pasar del acuerdo a la acción.',
    icon: 'handshake',
    color: 'from-neutral-100 to-neutral-50',
  },
];

export const METHODOLOGY_PHASES: MethodologyPhase[] = [
  {
    phase: 1,
    title: 'Escucha y diagnóstico',
    description: 'Comprensión del contexto, actores, tensiones y oportunidades.',
    items: ['Mapeo de actores', 'Levantamiento de información', 'Definición del marco de trabajo'],
  },
  {
    phase: 2,
    title: 'Diseño y facilitación',
    description: 'Construcción de espacios y reglas para una conversación productiva.',
    items: ['Diseño metodológico', 'Facilitación de sesiones', 'Sistematización de acuerdos'],
  },
  {
    phase: 3,
    title: 'Seguimiento e implementación',
    description: 'Acompañamiento posterior para sostener decisiones y compromisos.',
    items: ['Priorización', 'Hoja de ruta', 'Monitoreo de avances'],
  },
];

export const CLIENTS: Client[] = [
  { id: '1', name: 'Empresa minera internacional', shortName: 'EMI' },
  { id: '2', name: 'Fundación territorial', shortName: 'FT' },
  { id: '3', name: 'Gobierno regional', shortName: 'GR' },
  { id: '4', name: 'Compañía energética', shortName: 'CE' },
  { id: '5', name: 'Organismo multilateral', shortName: 'OM' },
  { id: '6', name: 'Municipalidad asociada', shortName: 'MA' },
  { id: '7', name: 'Institución pública', shortName: 'IP' },
  { id: '8', name: 'Consorcio productivo', shortName: 'CP' },
]

export const CONTACT_INFO = {
  email: 'contacto@colaboracionestrategica.cl',
  phone: '+56 9 6235 4240',
  linkedin: 'https://www.linkedin.com/company/colaboracion-estrategica/',
  address: 'Santiago, Chile',
};

export const NAV_MENU = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },
];
