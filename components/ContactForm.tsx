'use client';

import { useState } from 'react';
import Button from '@/components/Button';

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  accepted: boolean;
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    accepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormState((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
      return;
    }

    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      setSubmitMessage({
        type: 'error',
        message: 'Por favor completa los campos requeridos: nombre, correo y mensaje.',
      });
      return;
    }

    if (!formState.accepted) {
      setSubmitMessage({
        type: 'error',
        message: 'Debes aceptar los términos para continuar.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitMessage({
        type: 'success',
        message: 'Gracias. Tu mensaje fue recibido y te contactaremos pronto.',
      });

      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        accepted: false,
      });
    } catch {
      setSubmitMessage({
        type: 'error',
        message: 'Hubo un problema al enviar el formulario. Intenta nuevamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitMessage ? (
        <div
          className={`rounded-xl border p-4 text-sm ${
            submitMessage.type === 'success'
              ? 'border-green-200 bg-green-50 text-green-800'
              : 'border-red-200 bg-red-50 text-red-800'
          }`}
        >
          {submitMessage.message}
        </div>
      ) : null}

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-neutral-900">
          Nombre completo *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Juan Pérez"
          className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-neutral-900">
          Correo electrónico *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="juan@empresa.com"
          className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-neutral-900">
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
          placeholder="+56 9 8765 4321"
          className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-semibold text-neutral-900">
          Empresa o institución
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formState.company}
          onChange={handleChange}
          placeholder="Nombre de la organización"
          className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-semibold text-neutral-900">
          Servicio de interés
        </label>
        <select
          id="service"
          name="service"
          value={formState.service}
          onChange={handleChange}
          className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
        >
          <option value="">Selecciona un servicio</option>
          <option value="relacionamiento">Relacionamiento Comunitario</option>
          <option value="participacion">Participación Ciudadana</option>
          <option value="colaboracion">Colaboración Multiactor</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-neutral-900">
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
          rows={5}
          className="w-full resize-none rounded-xl border border-neutral-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          required
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="accepted"
          name="accepted"
          checked={formState.accepted}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
          required
        />
        <label htmlFor="accepted" className="text-sm text-neutral-600">
          Acepto los términos de privacidad y política de datos *
        </label>
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </Button>

      <p className="text-center text-xs text-neutral-500">Te responderemos en un plazo máximo de 48 horas.</p>
    </form>
  );
}
