import type { BitrixResponse } from './types.js';

const BITRIX_URL = import.meta.env.VITE_BITRIX_URL;

export class BitrixClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = BITRIX_URL;
  }

  async callMethod(method: string, params: Record<string, any> = {}): Promise<BitrixResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/${method}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new Error(`Bitrix API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error calling Bitrix API:', error);
      throw error;
    }
  }
}

// Создаем экземпляр клиента для использования в приложении
export const bitrix = new BitrixClient(); 