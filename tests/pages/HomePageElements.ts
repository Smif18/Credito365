import { Page, Locator, expect } from '@playwright/test';
export class HomePageElements{


    readonly page: Page;
    readonly heroBannerTitle: Locator;
    readonly heroBannerImage: Locator;
    readonly calculatorButton: Locator;
    readonly calculatorCurrentValue: Locator;
    readonly advantagesTitle: Locator;
    readonly advantagesGrid: Locator;
    readonly advantagesItems: Locator;
    readonly advantagesIcons: Locator;
    readonly advantagesTitiles: Locator;
    readonly advantagesDescriptions: Locator;


    constructor(page: Page) {
        this.page = page;
        this.heroBannerTitle = page.locator('.hero-banner__title');
        this.heroBannerImage = page.locator('img.hero-banner__image');
        this.calculatorButton = page.locator('.calculator-elem__btn a');
        this.calculatorCurrentValue = page.locator('.calculator-elem__current .input_wrapper');
        this.advantagesTitle = page.locator('.advantages .section-title'); 
        this.advantagesGrid = page.locator('div.advantages__grid');
        this.advantagesItems = page.locator('div.advantage');
        this.advantagesIcons = page.locator('div.advantage__icon img');
        this.advantagesTitiles = page.locator('h3.advantage__title');
        this.advantagesDescriptions = page.locator('p.advantage__description');



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
    async getHeroBannerTitle() {
        return await this.heroBannerTitle.textContent();
    }

    async clickCalculatorButton() {
        await this.calculatorButton.click();
    }

    async getCalculatorCurrentValue() {
        return await this.calculatorCurrentValue.textContent();
    }

    async getAdvantagesTitle() {
        return await this.advantagesTitle.textContent();
    }
}
    