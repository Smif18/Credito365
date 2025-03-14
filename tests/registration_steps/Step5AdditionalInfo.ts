import { APIRequestContext, expect } from '@playwright/test';

export class Step5AdditionalInfo { 
    constructor(private request: APIRequestContext) {}
    // 📌 Метод отправки дополнительной информации
    async sendAdditionalInfo(authToken: string) {
        return await this.request.post('/api/v2/user/additional-information', {
            headers: {
                "Authorization": authToken,
                "Content-Type": "application/json",
            },
            data: {
            region_registered: 1,
            city_registered: 2,
            neighborhood_registered: "Autotest neighborhood",
            street_type_registered: 23,
            house_registered: "1-a-3",
            gender: "m"
        }
    });
}
}



