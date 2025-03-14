import { APIRequestContext } from '@playwright/test';

export class Step4PersonalInfo {
    constructor(private request: APIRequestContext) {}

    // Метод для генерации случайного personal_id
    generatePersonalId(): string {
        return (Math.floor(Math.random() * 89999999) + 10000000).toString() + '00';
    }

    // Метод для отправки запроса
    async submitPersonalInfo(authToken: string, personalId: string) {
        return await this.request.post('/api/v2/user/personal-information', {
            headers: {
                "Authorization": authToken,
                "Content-Type": "application/json",
            },
            data: {
                personal_id: personalId,
                first_name: "Test",
                last_name: "Verifone",
                date_of_birth: "1993-01-01",
                personal_id_issue_date: "2011-01-01"
            },
        });
    }
}