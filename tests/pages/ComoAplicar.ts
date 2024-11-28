import { Locator, Page} from '@playwright/test'
export class ComoAplicar{


    readonly page: Page;
    readonly mainHeading: Locator;
    readonly subHeading: Locator;
    readonly paragraph: Locator;
    readonly requirementsList: Locator;
    readonly requirementsItems: Locator;
    readonly cards: Locator;
    readonly cardTitles: Locator;
    readonly cardDescriptions: Locator;
    readonly cardIcons: Locator;


    constructor(page: Page){
        this.page = page;
        // Локаторы для основного контента
        this.mainHeading = page.locator('h1', { hasText: '¿Cómo obtener tu crédito online?' });
        this.subHeading = page.locator('h5', { hasText: 'Te explicaremos brevemente sobre la solicitud del crédito online' });
        this.paragraph = page.locator('p:has-text("Un crédito online de bajo monto es la forma rápida y eficiente")');
        // Локаторы для списка условий
        this.requirementsList = page.locator('ul');
        this.requirementsItems = page.locator('ul > li.comment_message--commentOrderedListItem--QnCpG');
        // Локаторы для карточек
        this.cards = page.locator('.card');
        this.cardTitles = this.cards.locator('.card__title');
        this.cardDescriptions = this.cards.locator('.card__description');
        this.cardIcons = this.cards.locator('.card__icon img');

        
    }

    expectedItems = [
        'Tener más de 18 años',
        'Tener una cédula de identidad Colombiana',
        'Tener una cuenta bancaria a tu nombre',
        'Aceptar las políticas de tratamiento de datos de Credito365',
      ];

      expectedCardTitles = [
        'Elige el monto y el plazo',
        'Solicita tu crédito',
        'Validación y firma del contrato',
        'Recibe tu dinero',
      ];

      expectedCardDescriptions = [
        'Selecciona la cantidad que necesitas entre 100 000 COP y 1 000 000 COP y luego la cantidad de días que necesitas para hacer el pago',
        'Completa la solicitud, agregando la información necesaria para obtener el crédito (datos personales, correo electrónico, número de cuenta y demás información que solo tu conoces…) Si tienes algún problema en este paso, no te preocupes, nosotros estaremos listos de ayudarte',
        'Una vez la información esté completa, verificaremos tu identidad para estar seguros de que el dinero si llegará a ti. Luego de esto, te enviaremos un contrato para que los firmes y podamos hacer el envío de tu dinero',
        'Una vez hayas firmado el contrato, Credito365 a través de su cuenta corporativa Tech365 enviará el dinero directamente a tu cuenta',
      ];


}