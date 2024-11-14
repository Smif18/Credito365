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
    readonly instructionsTitle: Locator;
    readonly instructionsTabsContainer: Locator;
    readonly instructionApplyTab: Locator;
    readonly instructionPayTab: Locator;
    readonly instructionExtendTab: Locator;
    readonly applyTabContent: Locator;
    readonly payTabContent: Locator;
    readonly extendTabContent: Locator;
    readonly instructionSteps: Locator;
    readonly instructionImage: Locator;



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
        this.instructionsTitle = page.locator('h2.section-title.instruction__title');
        this.instructionsTabsContainer = page.locator('div.tabs__labels');
        this.instructionApplyTab = page.locator('div.tabs__labels-label:has-text("Aplica")');
        this.instructionPayTab = page.locator('div.tabs__labels-label:has-text("Paga")');
        this.instructionExtendTab = page.locator('div.tabs__labels-label:has-text("Extiende")');
        this.applyTabContent = page.locator('div.tab-content.tabs__content-item').nth(0);
        this.payTabContent = page.locator('div.tab-content.tabs__content-item').nth(1);
        this.extendTabContent = page.locator('div.tab-content.tabs__content-item').nth(2);
        this.instructionSteps = page.locator('ul.instruction-steps');
        this.instructionImage = page.locator('div.instruction__image img');





    }

        //  Текста заголовков и описаний блока "Nuestras ventajas"
        expectedTitles = ['Rápido', 'Simple', 'Transparente', 'Flexible'];
        expectedDescriptions = [
            'Sin intermediarios ni papeleo',
            'Enviamos el dinero a tu cuenta bancaria directamente',
            'Términos de uso simples y claros',
            'Posibilidad de ampliar el plazo del préstamo'
                    ];


        //  Иконки блока "Nuestras ventajas"
        expectedIconSrcs = [
            'https://credito365.co/wp-content/uploads/2023/09/Rapido.svg',
            'https://credito365.co/wp-content/uploads/2023/09/Simple.svg',
            'https://credito365.co/wp-content/uploads/2023/09/Transparente.svg',
            'https://credito365.co/wp-content/uploads/2023/09/Flexible.svg'
                ];



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
    