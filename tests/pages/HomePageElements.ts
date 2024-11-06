import { Page, Locator, expect } from '@playwright/test';
export class HomePageElements{


    readonly page: Page;

    constructor(page: Page){
        this.page=page;
    }

    async openHomePage(){
        await this.page.goto('https://credito365.co/');
    }
    async checkTitle(){
        await expect(this.page).toHaveTitle("Prestamos en linea online: favorables créditos en línea en 20 minutos. Préstamos Rápidos y Seguros en Colombia - Credito365");
    }
    async checkURL(){
        await expect(this.page).toHaveURL('https://credito365.co');
    }
    
}