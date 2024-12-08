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
        //Проверка первого списка условий
        await expect(footer.pdpFirstConditionsList).toBeVisible();
        await expect(footer.pdpFirstConditionsList).toHaveText('1. Identificación de la Empresa');
        //Проверка заголовка раздела II
        await expect(footer.pdpSecondConditionsList).toBeVisible();
        await expect(footer.pdpSecondConditionsList).toHaveText('2. Objetivo');
        //Проверка ссылки на контакт для вопросов о конфиденциальности
        await expect(footer.pdpLinkToMail).toBeHidden();
        await expect(footer.pdpLinkToMail).toHaveText('ayuda@credito365.co');
        //Проверки 3-х заголовков H4
        await expect(footer.pdpFirstH4Header).toHaveText('1. Identificación de la Empresa');
        await expect(footer.pdpSecondH4Header).toHaveText('2. Objetivo');
        await expect(footer.pdpLastH4Header).toHaveText('10. Aceptación de la Política');
    });

})