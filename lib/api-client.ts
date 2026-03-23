import { ContactFormData, ContactFormResponse } from '@/types';

// Cliente API para comunicarse con el backend (Python/FastAPI)
// Configurar la URL base cuando se tenga el backend listo

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

/**
 * Envía el formulario de contacto al backend
 * @param data - Datos del formulario
 * @returns Respuesta del servidor
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ContactFormResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: ContactFormResponse = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'Error al enviar el formulario',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Obtiene la lista de servicios del backend
 */
export async function getServices() {
  try {
    const response = await fetch(`${API_BASE_URL}/services`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

/**
 * Obtiene el estado del backend (health check)
 */
export async function healthCheck(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
    });

    return response.ok;
  } catch {
    return false;
  }
}
