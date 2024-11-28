import { Locator, Page} from '@playwright/test'
export class ComoPagar{


    readonly page: Page;
    readonly mainHeading: Locator;
    readonly subHeading: Locator;
    readonly descriptionParagraph: Locator;
    readonly accordionItems: Locator;
    readonly accordionLabels: Locator;
    readonly accordionContents: Locator;

    constructor(page: Page) {
    this.page = page;
    this.mainHeading = page.locator('h1', { hasText: '¿Cómo pagar un crédito online?' });
    this.subHeading = page.locator('h5', { hasText: '¿De que forma devuelvo el dinero que Credito365 me prestó?' });
    this.descriptionParagraph = page.locator('p:has-text("El proceso de pago de tu crédito online es muy sencillo")');
    this.accordionItems = page.locator('.accordion-item');
    this.accordionLabels = page.locator('.accordion-item .tab-label span');
    this.accordionContents = page.locator('.accordion-item .tab-content__inner');


    }


    //Accordion headings and contents
    expectedLabels = ['PSE', 'Transferencia bancaria'];

    expectedContents = [
      'En nuestro sitio web encontrarás el botón PSE, ingresa a él a través de tu perfil, dale clic en pagar, sigue las instrucciones y listo',
      'Desde tu banco, realiza una transferencia bancaria por el valor total de tu crédito (el cuál podrás ver en tu perfil) con la siguiente información: Bancolombia, cuenta de ahorros 23000008967 y listo. No olvides guardar el comprobante de pago, en caso de que exista alguna reclamación',
    ];




}