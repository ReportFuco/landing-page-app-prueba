'use client';

import { useState, useCallback } from 'react';
import { ContactFormData, ContactFormResponse } from '@/types';
import { submitContactForm } from '@/lib/api-client';

interface UseContactFormState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string | null;
}

export function useContactForm() {
  const [state, setState] = useState<UseContactFormState>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
  });

  const submit = useCallback(async (data: ContactFormData) => {
    setState({
      isLoading: true,
      isSuccess: false,
      isError: false,
      error: null,
    });

    try {
      const result: ContactFormResponse = await submitContactForm(data);

      if (result.success) {
        setState({
          isLoading: false,
          isSuccess: true,
          isError: false,
          error: null,
        });
      } else {
        setState({
          isLoading: false,
          isSuccess: false,
          isError: true,
          error: result.error || result.message,
        });
      }

      return result;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Error desconocido';

      setState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: errorMessage,
      });

      return {
        success: false,
        message: 'Error al enviar el formulario',
        error: errorMessage,
      };
    }
  }, []);

  const reset = useCallback(() => {
    setState({
      isLoading: false,
      isSuccess: false,
      isError: false,
      error: null,
    });
  }, []);

  return {
    ...state,
    submit,
    reset,
  };
}
