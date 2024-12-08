import { Locator, Page} from '@playwright/test'
export class ComoExtender{

    readonly page: Page;
    readonly mainHeading: Locator;
    readonly subHeading: Locator;
    readonly mainParagraph: Locator;
    readonly stepsParagraph: Locator;
    readonly stepsListItems: Locator;
    readonly siteLink: Locator;
    readonly mailLink: Locator;

    constructor(page: Page){
    this.page = page;
    this.mainHeading = page.locator('h1', { hasText: 'Cómo extender un microcrédito' });
    this.subHeading = page.locator('h5', { hasText: '¿Cómo aumentar (ampliar) el plazo del Contrato de Microcrédito?' });
    this.mainParagraph = page.locator('p', { hasText: 'Con Credito365, puedes extender el plazo de tu crédito online' });
    this.stepsParagraph = page.locator('p', { hasText: 'Para solicitar una extensión de tu crédito online, sigue estos pasos:' });
    this.stepsListItems = page.locator('section.custom-content ul:first-of-type > li');
    this.siteLink = page.locator('a[href="https://credito365.co"]').nth(0);
    this.mailLink = page.locator('a[href^="mailto:"]').nth(1);
    }

    expectedSteps = [
        'Asegúrate de hacerlo dentro de los 4 días previos a la fecha de vencimiento de tu crédito.',
        'Abona el importe correspondiente a la remuneración adicional, según los términos vigentes del contrato de concesión del crédito.',
        'Firma un acuerdo adicional con Tech365 SAS en nuestro sitio web credito365.co donde ambas partes confirmen el proceso.',
      ];

}