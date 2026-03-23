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
