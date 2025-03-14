import { APIRequestContext, APIResponse } from "@playwright/test";

export class Step1 {
    private request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request; // Передаем внешний request
    }

    async createUser(mobile_phone: string, target_url: string): Promise<{ response: APIResponse; body: any }> {
        const response = await this.request.post('/api/v2/user/create', {
            data: { mobile_phone, target_url },
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok()) {
            const error = await response.json();
            console.error('Ошибка при создании пользователя:', error);
            throw new Error(`Ошибка API: ${response.status()} ${response.statusText()}`);
        }

        const body = await response.json();
        return { response, body };
    }

    async getToken(mobile_phone: string, codeOTP: string): Promise<{ response: APIResponse; body: any }> {
        const response = await this.request.post('/api/token/get', {
            data: { mobile_phone, code: codeOTP },
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok()) {
            const error = await response.json();
            console.error('Ошибка при получении токена:', error);
            throw new Error(`Ошибка API: ${response.status()} ${response.statusText()}`);
        }

        const body = await response.json();
        return { response, body };
    }
}