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
        //Проверка ссылки на контакт для вопросов о конфиденциальности
        await expect(footer.linkToMail).toHaveText('ayuda@credito365.co');

        //Проверка навигационного списка
        await expect(footer.tycFirstConditionsList).toBeVisible();
        await expect(footer.tycFirstConditionsList).toHaveText('I. TÉRMINOS Y CONDICIONES');
        await expect(footer.tycSecondConditionsList). toBeVisible();
        await expect(footer.tycSecondConditionsList).toHaveText('II. FINALIDADES DE RECOLECCIÓN DE LA INFORMACIÓN');
        await expect(footer.tycThirdConditionsList).toBeVisible();
        await expect(footer.tycThirdConditionsList).toHaveText('III. AUTORIZACIONES Y DECLARACIONES DE LOS USUARIOS');
        await expect(footer.tycFourthConditionsList).toBeVisible();
        await expect(footer.tycFourthConditionsList).toHaveText('IV. ¿QUÉ SON Y QUE NO SON LAS COOKIES / DATOS DE NAVEGACIÓN?');
        await expect(footer.tycFifthConditionsList).toBeVisible();
        await expect(footer.tycFifthConditionsList).toHaveText('V. CÓMO OBTIENE TECH365 SAS LAS COOKIES EN SU PAGINA WEB CREDITO365.CO');
        await expect(footer.tycSixthConditionsList).toBeVisible();
        await expect(footer.tycSixthConditionsList).toHaveText('VI. ¿QUÉ CLASE DE COOKIES UTILIZA TECH365 SAS Y PARA QUÉ LAS UTILIZA?');
        await expect(footer.tycSeventhConditionsList).toBeVisible();
        await expect(footer.tycSeventhConditionsList).toHaveText('VII. ¿PUEDO DESHABILITAR LA INSTALACIÓN Y USO DE COOKIES POR PARTE DE TECH365 SAS Y CREDITO365.CO?');
        await expect(footer.tycEighthConditionsList).toBeVisible();
        await expect(footer.tycEighthConditionsList).toHaveText('VIII. ¿QUÉ OCURRE SI SE DESHABILITAN LAS COOKIES?');
        await expect(footer.tycNinthConditionsList).toBeVisible();
        await expect(footer.tycNinthConditionsList).toHaveText('IX. ¿TECH365 SAS COMPARTE LA INFORMACIÓN OBTENIDA A TRAVÉS DE LAS COOKIES CON TERCERAS PERSONAS?');
        await expect(footer.tycTenthConditionsList).toBeVisible();
        await expect(footer.tycTenthConditionsList).toHaveText('X. ¿DÓNDE ESTÁ ALMACENADA LA INFORMACIÓN OBTENIDA A TRAVÉS DE LAS COOKIES?');
        await expect(footer.tycEleventhConditionsList).toBeVisible();
        await expect(footer.tycEleventhConditionsList).toHaveText('XI. ¿QUÉ DEBO TENER EN CUENTA SOBRE LA POLÍTICA DE USO DE COOKIES Y DÓNDE ME PUEDO CONTACTAR EN CASO DE DUDAS?');
        await expect(footer.tycTwelfthConditionsList).toBeVisible();
        await expect(footer.tycTwelfthConditionsList).toHaveText('XII. FUNCIONAMIENTO DEL PORTAL');
        await expect(footer.tycThirteenthConditionsList).toBeVisible();
        await expect(footer.tycThirteenthConditionsList).toHaveText('XIII. DEBITO AUTOMATICO');
        await expect(footer.tycFourteenthConditionsList).toBeVisible();
        await expect(footer.tycFourteenthConditionsList).toHaveText('XIV. AVISO DE PRIVACIDAD');
           
        
        //Проверки заголовков H4
        await expect(footer.firstH4Header).toHaveText('I. TÉRMINOS Y CONDICIONES');
        await expect(footer.firstH4Header).toBeVisible();
        await expect(footer.secondH4Header).toHaveText('II. FINALIDADES DE RECOLECCIÓN DE LA INFORMACIÓN');
        await expect(footer.secondH4Header).toBeVisible();
        await expect(footer.thirdH4Header).toHaveText('III. AUTORIZACIONES Y DECLARACIONES DE LOS USUARIOS')
        await expect(footer.thirdH4Header).toBeVisible();
        await expect(footer.fourthH4Header).toHaveText('IV. ¿QUÉ SON Y QUE NO SON LAS COOKIES / DATOS DE NAVEGACIÓN?');
        await expect(footer.fourthH4Header).toBeVisible();
        await expect(footer.fifthH4Header).toHaveText('V. CÓMO OBTIENE TECH365 SAS LAS COOKIES EN SU PAGINA WEB CREDITO365.CO');
        await expect(footer.fifthH4Header).toBeVisible();
        await expect(footer.sixthH4Header).toHaveText('VI. ¿QUÉ CLASE DE COOKIES UTILIZA TECH365 SAS Y PARA QUÉ LAS UTILIZA?');
        await expect(footer.sixthH4Header).toBeVisible();
        await expect(footer.seventhH4Header).toHaveText('VII. ¿PUEDO DESHABILITAR LA INSTALACIÓN Y USO DE COOKIES POR PARTE DE TECH365 SAS Y CREDITO365.CO?');
        await expect(footer.seventhH4Header).toBeVisible();
        await expect(footer.eighthH4Header).toHaveText('VIII. ¿QUÉ OCURRE SI SE DESHABILITAN LAS COOKIES?');
        await expect(footer.eighthH4Header).toBeVisible();
        await expect(footer.ninthH4Header).toHaveText('IX. ¿TECH365 SAS COMPARTE LA INFORMACIÓN OBTENIDA A TRAVÉS DE LAS COOKIES CON TERCERAS PERSONAS?');
        await expect(footer.ninthH4Header).toBeVisible();
        await expect(footer.tenthH4Header).toHaveText('X. ¿DÓNDE ESTÁ ALMACENADA LA INFORMACIÓN OBTENIDA A TRAVÉS DE LAS COOKIES?');
        await expect(footer.tenthH4Header).toBeVisible();
        await expect(footer.eleventhH4Header).toHaveText('XI. ¿QUÉ DEBO TENER EN CUENTA SOBRE LA POLÍTICA DE USO DE COOKIES Y DÓNDE ME PUEDO CONTACTAR EN CASO DE DUDAS?');
        await expect(footer.eleventhH4Header).toBeVisible();
        await expect(footer.twelfthH4Header).toHaveText('XII. FUNCIONAMIENTO DEL PORTAL');
        await expect(footer.twelfthH4Header).toBeVisible();
        await expect(footer.thirteenthH4Header).toHaveText('XIII. DEBITO AUTOMATICO');
        await expect(footer.thirteenthH4Header).toBeVisible();
        await expect(footer.lastH4Header).toHaveText('XIV. AVISO DE PRIVACIDAD');
        await expect(footer.lastH4Header).toBeVisible();
    });

})