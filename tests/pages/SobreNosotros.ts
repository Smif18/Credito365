import { Locator, Page, expect, test} from '@playwright/test'
export class SobreNosotros{


    readonly page: Page;
    readonly pageTitle: Locator;
    readonly welcomeSubtitle: Locator;
    readonly firstParagraph: Locator;
    readonly secondParagraph: Locator;
    readonly creditsTitle: Locator;
    readonly creditsDescription: Locator;
    readonly benefitsParagraph: Locator;
    readonly cards: Locator;
    readonly cardTitles: Locator;
    readonly cardIcons: Locator;
    readonly cardDescriptions: Locator;

    constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('div.custom-content__wrapper > h1');
    this.welcomeSubtitle = page.locator('div.custom-content__wrapper > h5', { hasText: '¡Bienvenido a Crédito365!' });
    this.firstParagraph = page.locator('div.custom-content__wrapper > p', { hasText: 'Somos una Fintech innovadora en Colombia' });
    this.secondParagraph = page.locator('div.custom-content__wrapper > p', { hasText: 'Acompáñanos en esta emocionante travesía financiera' });
    this.creditsTitle = page.locator('div.custom-content__wrapper > h5', { hasText: '¿Qué son los créditos online?' });
    this.creditsDescription = page.locator('div.custom-content__wrapper > p', { hasText: 'Es un servicio de créditos en línea que permite' });
    this.benefitsParagraph = page.locator('div.custom-content__wrapper > p', { hasText: 'Crédito365 es la solución ideal para situaciones' });
    this.cards = page.locator('.card');
    this.cardTitles = this.cards.locator('.card__title');
    this.cardDescriptions = this.cards.locator('.card__description');
    this.cardIcons = this.cards.locator('.card__icon img');


    }

    expectedCardTitles = [
        'Rentable',
        'Rápido y Fácil',
        'Seguridad de datos',
        'Créditos online en toda Colombia',
      ];

      expectedCardDescriptions = [
        'Nuestros microcréditos te ahorran tiempo, tienen tasas reguladas y son más bajas que en los bancos, así que estamos seguros de que no pagarás de más',
        'Todo el proceso se realiza en línea, sin salir de tu casa u oficina. Completa la solicitud de manera electrónica, recibe un SMS de confirmación, firma el contrato de crédito y recibe tu dinero',
        'En nuestra plataforma, tu información está segura. Utilizamos tecnología avanzada y medidas de protección para resguardar tus datos personales. No compartimos tu información sin tu permiso, y antes de cualquier tratamiento, requerimos tu consentimiento según nuestra política de datos. Tu privacidad es nuestra prioridad',
        'Recibe dinero en tu cuenta bancaria, sin importar en que parte del país te encuentres',
      ];

    async validatePageElements() {
        await expect(this.pageTitle).toHaveText('Sobre nosotros');
        await expect(this.welcomeSubtitle).toHaveText('¡Bienvenido a Crédito365!');
        await expect(this.firstParagraph).toBeVisible();
        await expect(this.secondParagraph).toBeVisible();
        await expect(this.creditsTitle).toHaveText('¿Qué son los créditos online?');
        await expect(this.creditsDescription).toBeVisible();
        await expect(this.benefitsParagraph).toBeVisible();
    }

    async validateCardsCount(expectedCount: number) {
        await expect(this.cards).toHaveCount(expectedCount);
    }
   
}