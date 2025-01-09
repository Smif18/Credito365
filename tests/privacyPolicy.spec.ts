import { test, expect } from '@playwright/test';
import { FooterElements } from './pages/footerElements';

test.describe('Privacy policy page test', () => {

    let footer: FooterElements;

    test.beforeEach(async ({ page }) => {
        footer = new FooterElements(page);
        await footer.openPDPPage();
    });

    test('Checking for a main elements on the PDP page', async () => {
        await expect(footer.pdpHeader).toHaveText('Política de Tratamiento de Datos Personales');
        //Проверка ссылки на сайт "credito365.co"
        await expect(footer.pdpLinkToHomePage).toHaveAttribute('href', 'https://credito365.co');
        //Проверка ссылки на контакт для вопросов о конфиденциальности
        await expect(footer.pdpLinkToMail).toBeHidden();
        await expect(footer.pdpLinkToMail).toHaveText('ayuda@credito365.co');

        //Проверка навигационного списка
        await expect(footer.pdpFirstConditionsList).toBeVisible();
        await expect(footer.pdpFirstConditionsList).toHaveText('1. Identificación de la Empresa');
        await expect(footer.pdpSecondConditionsList).toBeVisible();
        await expect(footer.pdpSecondConditionsList).toHaveText('2. Objetivo');
        await expect(footer.pdpThirdConditionsList).toBeVisible();
        await expect(footer.pdpThirdConditionsList).toHaveText('3. Recopilación de datos personales');
        await expect(footer.pdpFourthConditionsList).toBeVisible();
        await expect(footer.pdpFourthConditionsList).toHaveText('4. Finalidad del Tratamiento de Datos');
        await expect(footer.pdpFifthConditionsList).toBeVisible();
        await expect(footer.pdpFifthConditionsList).toHaveText('5. Consentimiento del Titular de los Datos');
        await expect(footer.pdpSixthConditionsList).toBeVisible();
        await expect(footer.pdpSixthConditionsList).toHaveText('6. Seguridad de los Datos Personales');
        await expect(footer.pdpSeventhConditionsList).toBeVisible();
        await expect(footer.pdpSeventhConditionsList).toHaveText('7. Derechos de los Titulares de los Datos');
        await expect(footer.pdpEighthConditionsList).toBeVisible();
        await expect(footer.pdpEighthConditionsList).toHaveText('8. Responsable del Tratamiento');
        await expect(footer.pdpNinthConditionsList).toBeVisible();
        await expect(footer.pdpNinthConditionsList).toHaveText('9. Vigencia');
        await expect(footer.pdplastConditionsList).toBeVisible();
        await expect(footer.pdplastConditionsList).toHaveText('10. Aceptación de la Política');

        //Проверки 3-х заголовков H4
        await expect(footer.pdpFirstH4Header).toHaveText('1. Identificación de la Empresa');
        await expect(footer.pdpFirstH4Header).toBeVisible();
        await expect(footer.pdpSecondH4Header).toHaveText('2. Objetivo');
        await expect(footer.pdpSecondH4Header).toBeVisible();
        await expect(footer.pdpThirdH4Header).toHaveText('3. Recopilación de datos personales');
        await expect(footer.pdpThirdH4Header).toBeVisible();
        await expect(footer.pdpFourthH4Header).toHaveText('4. Finalidad del Tratamiento de Datos');
        await expect(footer.pdpFourthH4Header).toBeVisible();
        await expect(footer.pdpFifthH4Header).toHaveText('5. Consentimiento del Titular de los Datos');
        await expect(footer.pdpFifthH4Header).toBeVisible();
        await expect(footer.pdpSixthH4Header).toHaveText('6. Seguridad de los Datos Personales');
        await expect(footer.pdpSixthH4Header).toBeVisible();
        await expect(footer.pdpSeventhH4Header).toHaveText('7. Derechos de los Titulares de los Datos');
        await expect(footer.pdpSeventhH4Header).toBeVisible();
        await expect(footer.pdpEighthH4Header).toHaveText('8. Responsable del Tratamiento');
        await expect(footer.pdpEighthH4Header).toBeVisible();
        await expect(footer.pdpNinthH4Header).toHaveText('9. Vigencia');
        await expect(footer.pdpNinthH4Header).toBeVisible();
        await expect(footer.pdpLastH4Header).toHaveText('10. Aceptación de la Política');
        await expect(footer.pdpLastH4Header).toBeVisible();
    });

})