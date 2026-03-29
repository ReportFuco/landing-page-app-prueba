import {
  Client,
  ImpactProject,
  MethodologyPhase,
  ProposalScroll,
  Service,
  ValueProposition,
} from "@/types";

export const COLORS = {
  primary: "#0f766e",
  secondary: "#115e59",
  accent: "#0f766e",
  neutral: "#475569",
  light: "#ffffff",
  dark: "#0f172a",
};

export const SERVICES: Service[] = [
  {
    id: "dialogo",
    title: "Diseño y facilitación de diálogo",
    description:
      "Procesos de conversación estratégica para construir acuerdos entre actores diversos.",
    icon: "users",
    color: "from-neutral-100 to-neutral-50",
  },
  {
    id: "territorio",
    title: "Relacionamiento y gestión territorial",
    description:
      "Estrategias para fortalecer confianza, coordinación y legitimidad en contextos complejos.",
    icon: "network",
    color: "from-neutral-100 to-neutral-50",
  },
  {
    id: "implementacion",
    title: "Acompañamiento para la implementación",
    description:
      "Priorización, seguimiento y ordenamiento de decisiones para pasar del acuerdo a la acción.",
    icon: "handshake",
    color: "from-neutral-100 to-neutral-50",
  },
];

export const METHODOLOGY_PHASES: MethodologyPhase[] = [
  {
    phase: 1,
    title: "Escucha y diagnóstico",
    description:
      "Comprensión del contexto, actores, tensiones y oportunidades.",
    items: [
      "Mapeo de actores",
      "Levantamiento de información",
      "Definición del marco de trabajo",
    ],
  },
  {
    phase: 2,
    title: "Diseño y facilitación",
    description:
      "Construcción de espacios y reglas para una conversación productiva.",
    items: [
      "Diseño metodológico",
      "Facilitación de sesiones",
      "Sistematización de acuerdos",
    ],
  },
  {
    phase: 3,
    title: "Seguimiento e implementación",
    description:
      "Acompañamiento posterior para sostener decisiones y compromisos.",
    items: ["Priorización", "Hoja de ruta", "Monitoreo de avances"],
  },
];

export const CLIENTS: Client[] = [
  { id: "1", name: "Empresa minera internacional", shortName: "EMI" },
  { id: "2", name: "Fundación territorial", shortName: "FT" },
  { id: "3", name: "Gobierno regional", shortName: "GR" },
  { id: "4", name: "Compañía energética", shortName: "CE" },
  { id: "5", name: "Organismo multilateral", shortName: "OM" },
  { id: "6", name: "Municipalidad asociada", shortName: "MA" },
  { id: "7", name: "Institución pública", shortName: "IP" },
  { id: "8", name: "Consorcio productivo", shortName: "CP" },
];

export const CONTACT_INFO = {
  email: "contacto@colaboracionestrategica.cl",
  phone: "+56 9 6235 4240",
  linkedin: "https://www.linkedin.com/company/colaboracion-estrategica/",
  address: "Santiago, Chile",
};

export const NAV_MENU = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Propuestas", href: "/#propuestas" },
  { label: "Quiénes somos", href: "/#quienes-somos" },
  { label: "Proyectos de Impacto", href: "/proyectos-impacto" },
];

export const PROPOSAL_SCROLLS: ProposalScroll[] = [
  {
    id: "propuesta-1",
    tag: "Propuesta 01",
    title: "Desarrollo territorial sostenible desde la confianza",
    subtitle: "Propósito de Originaria",
    description:
      "Nuestro propósito es facilitar el desarrollo territorial sostenible a partir de la generación de confianza entre empresas, actores públicos y comunidades locales. Creemos en relaciones horizontales, de conocimiento y respeto mutuo y abiertas a la creatividad e innovación.",
    bullets: [
      "Confianza entre empresas, sector público y comunidades",
      "Relaciones horizontales y de respeto mutuo",
      "Apertura a creatividad e innovación territorial",
    ],
  },
  {
    id: "propuesta-2",
    tag: "Propuesta 02",
    title: "Valor compartido sostenible en cadenas de valor",
    subtitle: "Integración de emprendimientos locales",
    description:
      "El valor compartido sostenible es un desafío urgente. En Originaria apoyamos en la integración de emprendimientos locales a las cadenas de agregación de valor de las empresas que comparten el uso de estos territorios.",
    bullets: [
      "Integración de emprendimientos locales",
      "Cadenas de agregación de valor sostenibles",
      "Articulación con empresas en el territorio",
    ],
  },
  {
    id: "propuesta-3",
    tag: "Propuesta 03",
    title: "Alianzas para impacto social, económico y ambiental",
    subtitle: "Articulación multiactor",
    description:
      "Originaria impulsa el desarrollo territorial sostenible articulando alianzas entre empresas, comunidades y gobiernos para generar impacto social, económico y ambiental.",
    bullets: [
      "Alianzas entre empresas, comunidades y gobiernos",
      "Impacto social, económico y ambiental",
      "Sostenibilidad territorial de largo plazo",
    ],
  },
];

export const IMPACT_PROJECTS: ImpactProject[] = [
  {
    id: "impacto-truchas-sra",
    title:
      "Engorda de Truchas en Sistemas de Recirculación de Agua como alternativa de diversificación de la Matriz productiva indígena",
    summary:
      "El proyecto consiste en la instalación de varias plantas de engorda de truchas mediante sistemas de recirculación de agua (SRA) con la finalidad de generar puestos de trabajo e ingresos adicionales para las familias en territorios indígenas.\n\nLa estrategia es trabajar el concepto de “granja acuícola”, que permita entender que la trucha criada no proviene de las instalaciones de ciclo mixto (agua/mar), sino de actividades medioambientalmente sustentables y que, por lo tanto, se aleja de los problemas sanitarios y de contaminación que han caracterizado la producción industrializada de ciclo mixto.\n\nLas plantas se instalarán en terrenos de las comunidades y tendrán una capacidad de producción de 7,5 Ton de trucha fresca al año, y la venta será en una primera etapa como trucha fresca a casinos y supermercados de la región.",
    category: "Diversificación Productiva",
    status: "Formulado",
    year: "2026",
    projects: [
      "Producción de Truchas Ciclo Cerrado, Comunidad Nicolás Calbullanca, Cañete.\nRegión del Bio Bio",
      "Producción de Truchas Ciclo Cerrado, Comunidad José Painecura, Carahue.\nRegión de la Araucanía.",
    ],
  },
  {
    id: "impacto-camelidos",
    title: "Agregación de Valor a la carne de Camélidos",
    summary:
      "El proyecto consiste en instalar una sala de proceso en la comuna de Putre que permita procesar y agregar valor a la carne de los camélidos que son faenados en la Central de Faenamiento de Autoconsumo (CFA) que opera en el pueblo.\n\nExisten antecedentes de estudios del INIA con la viabilidad técnica y comercial de los productos procesados de este tipo de carnes (bajas en grasas y altas en proteínas), en particular, jamón bresaloa de pierna de llamo, embutidos, hamburguesas y varios tipos de charcutería.",
    category: "Agroindustria Indígena",
    status: "Formulado (COBIN)",
    year: "2026",
    projects: [
      "Procesamiento de carne de Camélidos, Comunidad Indígena de Caquena, Arica Parinacota. Putre. (Con Cobertura COBIN)",
    ],
  },
  {
    id: "impacto-turismo",
    title: "Hotelería y Turismo Indígena",
    summary:
      "Se trata de 3 proyectos de hotelería para comunidades indígenas con una propuesta de valor centrada en la identidad y cultural local.\n\nLos proyectos se complementan con la conformación de Tour Operadores indígenas y la venta de servicios a grandes empresas que operan en el territorio.",
    category: "Turismo de Identidad",
    status: "Formulado",
    year: "2026",
    projects: [
      "Turismo Sustentable y Protección de Humedales, Cooperativa Agroturismo Mapuche, Carahue",
      "Turismo Cultural y de Naturaleza, Lof Cuenca Cabedaña, Curarrehue",
      "Turismo Solar Diaguita, Asociación de Comunidades Diaguitas, Vallenar",
    ],
  },
  {
    id: "impacto-procesados",
    title: "Mínimamente Procesados (Papas y Hortalizas)",
    summary:
      "Producción y procesamiento de papas y hortalizas (limpieza, envasado y papas procesadas), con comercialización en retail y canal horeca. Incluye subproductos como pellet para alimentación animal.",
    category: "Encadenamiento Local",
    status: "Formulado",
    year: "2026",
    projects: ["Cooperativa Mapuche Nahuelbuta (Cañete, Biobío)"],
  },
  {
    id: "impacto-madera-lena",
    title: "Agregación de Valor a Madera y Leña",
    summary:
      "Centros de acopio y secado de leña, producción de madera elaborada y pellets. Proyectos con viabilidad ambiental, técnica y comercial.",
    category: "Economía Forestal Comunitaria",
    status: "Formulado (incluye COBIN)",
    year: "2026",
    projects: [
      "Cooperativa Huaiquil Cariqueo (Galvarino)",
      "Cooperativa Zomo Ngen (Curarrehue)",
    ],
  },
];

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    id: "relacionamiento-comunitario",
    title: "Relacionamiento Comunitario Sostenible",
    summary:
      "Facilitamos el diálogo y la articulación público-privada para construir relaciones territoriales de largo plazo.",
    offers: [
      "Desarrollo de instrumentos que faciliten el diálogo y la articulación público-privada en territorios bajo conflictos ambientales",
      "Análisis de riesgos sociales y económicos territorial (IFC Norma de desempeño 1)",
      "Reportes de relacionamiento comunitario sobre la base del Global Reporting Initiative GRI 413",
      "Cumplimiento 169 OIT, Declaración UN, análisis FPIC y reportes IFC en su norma de desempeño N°7",
      "Estrategias de relacionamiento comunitario en todas las fases de desarrollo de proyectos de inversión",
      "Relacionamiento comunitario temprano con foco en estrategias de inversión social de impacto",
      "Asesoría a empresas en el diseño de estrategias de inversión social en territorios rezagados",
    ],
    statement:
      "El relacionamiento comunitario generado solamente para la obtención de la licencia social para operar no genera relaciones de largo plazo. En Originaria creemos en una nueva forma de vinculación territorial sostenible, basada en la prosperidad de las personas que habitan estos territorios.",
  },
  {
    id: "inversion-social",
    title: "Inversión Social de Impacto",
    summary:
      "Ayudamos a evaluar y escalar la inversión social para ampliar su impacto territorial.",
    offers: [
      "Evaluación de impacto de la inversión social empresarial y desarrollo de sistemas de gestión para monitoreo territorial (GRI 413)",
      "Asesoría en negocios inclusivos, articulación de redes y valor compartido",
      "Planificación territorial participativa con identificación de proyectos de impacto",
      "Estudios de pre-inversión con análisis sociocultural y diagnóstico ambiental",
      "Configuración financiera de proyectos de impacto (COBIN y fondos de inversión indígena)",
    ],
    statement:
      "Hoy día las grandes empresas deben evaluar el impacto de su inversión social. Podemos ampliar el efecto multiplicador de la inversión privada mediante financiamiento compartido.",
  },
  {
    id: "servicios-indigenas",
    title: "Servicios a Organizaciones y Empresas Indígenas",
    summary:
      "Impulsamos procesos de desarrollo económico con pertinencia indígena, escalamiento y agregación de valor.",
    offers: [
      "Desarrollo y escalamiento de negocios indígenas",
      "Estrategias de agregación de valor a productos o servicios",
      "Servicios de segundo piso (sellos, denominaciones de origen y certificaciones)",
      "Proyectos de alto impacto territorial con pertinencia indígena",
      "Planes de desarrollo territorial de triple impacto",
      "Acompañamiento en procesos de cambio y encadenamiento productivo",
    ],
    statement:
      "Creemos en la capacidad de adaptación y creatividad de los pueblos indígenas. La empresarización indígena no es un sueño, es una necesidad urgente.",
  },
  {
    id: "gestion-ambiental",
    title: "Gestión Ambiental Territorial",
    summary:
      "Fortalecemos capacidades locales para una gestión ambiental participativa y confiable.",
    offers: [
      "Monitoreo ambiental participativo",
      "Seguimiento de compromisos RCA",
      "Transferencia de capacidades a organizaciones indígenas",
    ],
    statement:
      "Nuestra vinculación con CanNorth permite ampliar la propuesta hacia la gestión ambiental comunitaria.",
  },
];
