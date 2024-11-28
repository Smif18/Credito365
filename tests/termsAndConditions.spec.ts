import { test, expect } from '@playwright/test';
import { FooterElements } from './pages/footerElements';

test.describe('Terms and conditions page test', () => {

    let footer: FooterElements;

    test.beforeEach(async ({ page }) => {
        footer = new FooterElements(page);
        await footer.openTYCPage();
    });

    test('Checking for a main elements on the TYC page', async () => {
        await expect(footer.tycHeader).toHaveText('TERMINOS Y CONDICIONES');
        //Проверка ссылки на сайт "credito365.co"
        await expect(footer.tycLinkToHomepage).toHaveAttribute('href', 'https://credito365.co');
        //Проверка первого списка условий
        await expect(footer.tycFirstConditionsList).toBeVisible();
        await expect(footer.tycFirstConditionsList).toHaveText('I. TÉRMINOS Y CONDICIONES');
        //Проверка заголовка раздела II
        await expect(footer.tycSecondConditionsList). toBeVisible();
        await expect(footer.tycSecondConditionsList).toHaveText('II. FINALIDADES DE RECOLECCIÓN DE LA INFORMACIÓN');
        //Проверка ссылки на контакт для вопросов о конфиденциальности
        await expect(footer.linkToMail).toHaveText('ayuda@credito365.co');
        //Проверки 3-х заголовков H4
        await expect(footer.firstH4Header).toHaveText('I. TÉRMINOS Y CONDICIONES');
        await expect(footer.secondH4Header).toHaveText('II. FINALIDADES DE RECOLECCIÓN DE LA INFORMACIÓN');
        await expect(footer.lastH4Header).toHaveText('XIV. AVISO DE PRIVACIDAD');
    });

})