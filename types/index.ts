// Tipos para el formulario de contacto
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  service?: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  data?: ContactFormData;
  error?: string;
}

// Tipos para servicios
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'network' | 'users' | 'handshake';
  color: string;
}

// Tipos para clientes
export interface Client {
  id: string;
  name: string;
  shortName: string;
}

// Tipos para metodología
export interface MethodologyPhase {
  phase: number;
  title: string;
  description: string;
  items: string[];
}

// Tipos para propuestas del landing
export interface ProposalScroll {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tag: string;
}

// Tipos para proyectos de impacto
export interface ImpactProject {
  id: string;
  title: string;
  summary: string;
  category: string;
  status: string;
  year: string;
}

export interface ValueProposition {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
}
