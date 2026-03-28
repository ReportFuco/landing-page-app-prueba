import { Client, ImpactProject, MethodologyPhase, ProposalScroll, Service, ValueProposition } from '@/types';

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
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Propuestas', href: '/#propuestas' },
  { label: 'Quiénes somos', href: '/#quienes-somos' },
  { label: 'Proyectos de Impacto', href: '/proyectos-impacto' },
  { label: 'Contacto', href: '/#contacto' },
];

export const PROPOSAL_SCROLLS: ProposalScroll[] = [
  {
    id: 'propuesta-1',
    tag: 'Propuesta 01',
    title: 'Desarrollo territorial sostenible desde la confianza',
    subtitle: 'Propósito de Originaria',
    description:
      'Nuestro propósito es facilitar el desarrollo territorial sostenible a partir de la generación de confianza entre empresas, actores públicos y comunidades locales. Creemos en relaciones horizontales, de conocimiento y respeto mutuo y abiertas a la creatividad e innovación.',
    bullets: [
      'Confianza entre empresas, sector público y comunidades',
      'Relaciones horizontales y de respeto mutuo',
      'Apertura a creatividad e innovación territorial',
    ],
  },
  {
    id: 'propuesta-2',
    tag: 'Propuesta 02',
    title: 'Valor compartido sostenible en cadenas de valor',
    subtitle: 'Integración de emprendimientos locales',
    description:
      'El valor compartido sostenible es un desafío urgente. En Originaria apoyamos en la integración de emprendimientos locales a las cadenas de agregación de valor de las empresas que comparten el uso de estos territorios.',
    bullets: [
      'Integración de emprendimientos locales',
      'Cadenas de agregación de valor sostenibles',
      'Articulación con empresas en el territorio',
    ],
  },
  {
    id: 'propuesta-3',
    tag: 'Propuesta 03',
    title: 'Alianzas para impacto social, económico y ambiental',
    subtitle: 'Articulación multiactor',
    description:
      'Originaria impulsa el desarrollo territorial sostenible articulando alianzas entre empresas, comunidades y gobiernos para generar impacto social, económico y ambiental.',
    bullets: [
      'Alianzas entre empresas, comunidades y gobiernos',
      'Impacto social, económico y ambiental',
      'Sostenibilidad territorial de largo plazo',
    ],
  },
];

export const IMPACT_PROJECTS: ImpactProject[] = [
  {
    id: 'impacto-truchas-sra',
    title: 'Engorda de Truchas en Sistemas de Recirculación',
    summary:
      'Instalación de plantas de engorda de truchas en ciclo cerrado para generar empleo e ingresos en comunidades indígenas, con enfoque ambientalmente sustentable.',
    category: 'Diversificación Productiva',
    status: 'Formulado',
    year: '2026',
  },
  {
    id: 'impacto-camelidos',
    title: 'Agregación de Valor a la Carne de Camélidos',
    summary:
      'Implementación de sala de proceso para desarrollar productos cárnicos con valor agregado en Putre, con base técnica y comercial validada.',
    category: 'Agroindustria Indígena',
    status: 'Formulado (COBIN)',
    year: '2026',
  },
  {
    id: 'impacto-turismo',
    title: 'Hotelería y Turismo Indígena',
    summary:
      'Tres proyectos de turismo con propuesta de valor cultural y de naturaleza, complementados con tour operadores indígenas y servicios a empresas del territorio.',
    category: 'Turismo de Identidad',
    status: 'Formulado',
    year: '2026',
  },
  {
    id: 'impacto-procesados',
    title: 'Mínimamente Procesados (Papas y Hortalizas)',
    summary:
      'Proyecto de selección, limpieza, envasado y transformación de papa para abastecer mercados locales y regionales, incluyendo subproductos.',
    category: 'Encadenamiento Local',
    status: 'Formulado',
    year: '2026',
  },
  {
    id: 'impacto-madera-lena',
    title: 'Agregación de Valor a Madera y Leña',
    summary:
      'Centros de acopio y secado para comercialización de productos forestales, incluyendo pellets y leña certificada, con viabilidad técnica, comercial y ambiental.',
    category: 'Economía Forestal Comunitaria',
    status: 'Formulado (incluye COBIN)',
    year: '2026',
  },
];

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    id: 'relacionamiento-comunitario',
    title: 'Relacionamiento Comunitario Sostenible',
    summary:
      'Diseño de estrategias de diálogo y articulación para construir relaciones de largo plazo entre empresas, actores públicos y comunidades.',
    highlights: [
      'Análisis de riesgo social y territorial (IFC)',
      'Reportes GRI 413 y cumplimiento en territorios indígenas',
      'Relacionamiento temprano e inversión social de impacto',
    ],
  },
  {
    id: 'inversion-social',
    title: 'Inversión Social de Impacto',
    summary:
      'Asesoría para aumentar el efecto multiplicador de la inversión privada mediante planificación participativa y financiamiento compartido.',
    highlights: [
      'Evaluación de impacto y sistemas de monitoreo territorial',
      'Negocios inclusivos, redes y valor compartido',
      'Preinversión y configuración financiera de proyectos',
    ],
  },
  {
    id: 'servicios-indigenas',
    title: 'Servicios a Organizaciones y Empresas Indígenas',
    summary:
      'Acompañamiento para el desarrollo y escalamiento de negocios indígenas, agregación de valor y formulación de proyectos de triple impacto.',
    highlights: [
      'Estrategias de valor agregado para productos y servicios',
      'Sistemas de segundo piso y certificaciones',
      'Escalamiento y articulación en cadenas de valor',
    ],
  },
  {
    id: 'gestion-ambiental',
    title: 'Gestión Ambiental Territorial',
    summary:
      'Monitoreo participativo y seguimiento de compromisos ambientales para fortalecer confianza y reducir conflictividad territorial.',
    highlights: [
      'Monitoreo ambiental participativo',
      'Seguimiento de compromisos RCA',
      'Transferencia de capacidades a organizaciones indígenas',
    ],
  },
];
