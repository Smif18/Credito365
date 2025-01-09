import { Page, Locator } from "@playwright/test";
export class FooterElements{


    readonly page: Page;
    readonly footer: Locator;
    readonly logo: Locator;
    readonly footerMenuItems: Locator;
    readonly socialIcons: Locator;
    readonly supportSection: Locator;
    readonly supportIcons: Locator;
    readonly termsMenuItems: Locator;
    readonly companyAddress: Locator;
    readonly pseLogo:Locator;

    //"TERMINOS Y CONDICIONES PAGE" 
    readonly tycHeader:Locator;
    readonly tycLinkToHomepage: Locator;
    readonly linkToMail: Locator;
    readonly tycFirstConditionsList:Locator;
    readonly tycSecondConditionsList: Locator;
    readonly tycThirdConditionsList: Locator;
    readonly tycFourthConditionsList: Locator;
    readonly tycFifthConditionsList: Locator;
    readonly tycSixthConditionsList: Locator;
    readonly tycSeventhConditionsList: Locator;
    readonly tycEighthConditionsList: Locator;
    readonly tycNinthConditionsList: Locator;
    readonly tycTenthConditionsList: Locator;
    readonly tycEleventhConditionsList: Locator;
    readonly tycTwelfthConditionsList: Locator;
    readonly tycThirteenthConditionsList: Locator;
    readonly tycFourteenthConditionsList: Locator;
    readonly firstH4Header: Locator;
    readonly secondH4Header: Locator;
    readonly thirdH4Header: Locator;
    readonly fourthH4Header: Locator;
    readonly fifthH4Header: Locator;
    readonly sixthH4Header: Locator;
    readonly seventhH4Header: Locator;
    readonly eighthH4Header: Locator;
    readonly ninthH4Header: Locator;
    readonly tenthH4Header: Locator;
    readonly eleventhH4Header: Locator;
    readonly twelfthH4Header: Locator;
    readonly thirteenthH4Header: Locator;
    readonly lastH4Header: Locator;

    //"Politica de Privacidad"
    readonly pdpHeader: Locator;
    readonly pdpLinkToHomePage: Locator;
    readonly pdpFirstConditionsList: Locator;
    readonly pdpSecondConditionsList: Locator;
    readonly pdpThirdConditionsList: Locator;
    readonly pdpFourthConditionsList: Locator;
    readonly pdpFifthConditionsList: Locator;
    readonly pdpSixthConditionsList: Locator;
    readonly pdpSeventhConditionsList: Locator;
    readonly pdpEighthConditionsList: Locator;
    readonly pdpNinthConditionsList: Locator;
    readonly pdplastConditionsList: Locator;
    readonly pdpLinkToMail: Locator;
    readonly pdpFirstH4Header: Locator;
    readonly pdpSecondH4Header: Locator;
    readonly pdpThirdH4Header: Locator;
    readonly pdpFourthH4Header: Locator;
    readonly pdpFifthH4Header: Locator;
    readonly pdpSixthH4Header: Locator;
    readonly pdpSeventhH4Header: Locator;
    readonly pdpEighthH4Header: Locator;
    readonly pdpNinthH4Header: Locator;
    readonly pdpLastH4Header: Locator;

    
    constructor (page: Page) {
        this.page=page;
        this.logo=page.locator('.footer__logo');
        this.footer = page.locator('footer.footer');
        this.footerMenuItems = page.locator('div.footer__menu ul.footer-menu__list li a');
        this.socialIcons = page.locator('div.footer__soc div.soc-icon a');
        this.supportSection = page.locator('div.footer__support');
        this.supportIcons = page.locator('div.support-icon a');
        this.termsMenuItems = page.locator('div.footer__terms-menu ul.footer-terms-menu__list li a');
        this.companyAddress = page.locator('div.footer__company-address');
        this.pseLogo=page.locator('img[src*="footer-pse-logo.svg"]');

         //"TERMINOS Y CONDICIONES PAGE"
        this.tycHeader=page.locator('//h1[text()="TERMINOS Y CONDICIONES"]');
        this.tycLinkToHomepage=page.locator('a[href="https://credito365.co"]').nth(0);
        this.linkToMail=page.locator('a[href="mailto:ayuda@credito365.co"]').nth(0);
        this.tycFirstConditionsList=page.locator('a[href="#I. TÉRMINOS Y CONDICIONES"]');
        this.tycSecondConditionsList=page.locator('a[href="#II. FINALIDADES DE RECOLECCIÓN DE LA INFORMACIÓN"]');
        this.tycThirdConditionsList=page.locator('a[href="#III. AUTORIZACIONES Y DECLARACIONES DE LOS USUARIOS"]');
        this.tycFourthConditionsList=page.locator('a[href="#IV. ¿QUÉ SON Y QUE NO SON LAS COOKIES / DATOS DE NAVEGACIÓN?"]');
        this.tycFifthConditionsList=page.locator('a[href="#V. CÓMO OBTIENE TECH365 SAS LAS COOKIES EN SU PAGINA WEB CREDITO365.CO"]');
        this.tycSixthConditionsList=page.locator('a[href="#VI. ¿QUÉ CLASE DE COOKIES UTILIZA TECH365 SAS Y PARA QUÉ LAS UTILIZA?"]');
        this.tycSeventhConditionsList=page.locator('a[href="#VII. ¿PUEDO DESHABILITAR LA INSTALACIÓN Y USO DE COOKIES POR PARTE DE TECH365 SAS Y CREDITO365.CO?"]');
        this.tycEighthConditionsList=page.locator('a[href="#VIII. ¿QUÉ OCURRE SI SE DESHABILITAN LAS COOKIES?"]');
        this.tycNinthConditionsList=page.locator('a[href="#IX. ¿TECH365 SAS COMPARTE LA INFORMACIÓN OBTENIDA A TRAVÉS DE LAS COOKIES CON TERCERAS PERSONAS?"]');
        this.tycTenthConditionsList=page.locator('a[href="#X. ¿DÓNDE ESTÁ ALMACENADA LA INFORMACIÓN OBTENIDA A TRAVÉS DE LAS COOKIES?"]');
        this.tycEleventhConditionsList=page.locator('a[href="#XI. ¿QUÉ DEBO TENER EN CUENTA SOBRE LA POLÍTICA DE USO DE COOKIES Y DÓNDE ME PUEDO CONTACTAR EN CASO DE DUDAS?"]');
        this.tycTwelfthConditionsList=page.locator('a[href="#XII. FUNCIONAMIENTO DEL PORTAL"]');
        this.tycThirteenthConditionsList=page.locator('a[href="#XIII. DEBITO AUTOMATICO"]');
        this.tycFourteenthConditionsList=page.locator('a[href="#XIV. AVISO DE PRIVACIDAD"]');
        this.firstH4Header=page.locator('//h4[@id="I. TÉRMINOS Y CONDICIONES"]');
        this.secondH4Header=page.locator('//h4[@id="II. FINALIDADES DE RECOLECCIÓN DE LA INFORMACIÓN"]');
        this.thirdH4Header=page.locator('//h4[@id="III. AUTORIZACIONES Y DECLARACIONES DE LOS USUARIOS"]');
        this.fourthH4Header=page.locator('//h4[@id="IV. ¿QUÉ SON Y QUE NO SON LAS COOKIES / DATOS DE NAVEGACIÓN?"]');
        this.fifthH4Header=page.locator('//h4[@id="V. CÓMO OBTIENE TECH365 SAS LAS COOKIES EN SU PAGINA WEB CREDITO365.CO"]');
        this.sixthH4Header=page.locator('//h4[@id="VI. ¿QUÉ CLASE DE COOKIES UTILIZA TECH365 SAS Y PARA QUÉ LAS UTILIZA?"]');
        this.seventhH4Header=page.locator('//h4[@id="VII. ¿PUEDO DESHABILITAR LA INSTALACIÓN Y USO DE COOKIES POR PARTE DE TECH365 SAS Y CREDITO365.CO?"]');
        this.eighthH4Header=page.locator('//h4[@id="VIII. ¿QUÉ OCURRE SI SE DESHABILITAN LAS COOKIES?"]');
        this.ninthH4Header=page.locator('//h4[@id="IX. ¿TECH365 SAS COMPARTE LA INFORMACIÓN OBTENIDA A TRAVÉS DE LAS COOKIES CON TERCERAS PERSONAS?"]');
        this.tenthH4Header=page.locator('//h4[@id="X. ¿DÓNDE ESTÁ ALMACENADA LA INFORMACIÓN OBTENIDA A TRAVÉS DE LAS COOKIES?"]');
        this.eleventhH4Header=page.locator('//h4[@id="XI. ¿QUÉ DEBO TENER EN CUENTA SOBRE LA POLÍTICA DE USO DE COOKIES Y DÓNDE ME PUEDO CONTACTAR EN CASO DE DUDAS?"]');
        this.twelfthH4Header=page.locator('//h4[@id="XII. FUNCIONAMIENTO DEL PORTAL"]');
        this.thirteenthH4Header=page.locator('//h4[@id="XIII. DEBITO AUTOMATICO"]');
        this.lastH4Header=page.locator('//h4[@id="XIV. AVISO DE PRIVACIDAD"]');

        //Politica de Privacidad
        this.pdpHeader=page.locator('//h1[text()="Política de Tratamiento de Datos Personales"]');
        this.pdpLinkToHomePage=page.locator('a[href="https://credito365.co"]').nth(0);
        this.pdpLinkToMail=page.locator('a[href="mailto:ayuda@credito365.co"]').nth(0);
        this.pdpFirstH4Header=page.locator('//h4[@id="1. Identificación de la Empresa"]');
        this.pdpSecondH4Header=page.locator('//h4[@id="2. Objetivo"]');
        this.pdpThirdH4Header=page.locator('//h4[@id="3. Recopilación de datos personales"]');
        this.pdpFourthH4Header=page.locator('//h4[@id="4. Finalidad del Tratamiento de Datos"]');
        this.pdpFifthH4Header=page.locator('//h4[@id="5. Consentimiento del Titular de los Datos"]');
        this.pdpSixthH4Header=page.locator('//h4[@id="6. Seguridad de los Datos Personales"]');
        this.pdpSeventhH4Header=page.locator('//h4[@id="7. Derechos de los Titulares de los Datos"]');
        this.pdpEighthH4Header=page.locator('//h4[@id="8. Responsable del Tratamiento"]');
        this.pdpNinthH4Header=page.locator('//h4[@id="9. Vigencia"]');
        this.pdpLastH4Header=page.locator('//h4[@id="10. Aceptación de la Política"]');
        this.pdpFirstConditionsList=page.locator('a[href="#1. Identificación de la Empresa"]');
        this.pdpSecondConditionsList=page.locator('a[href="#2. Objetivo"]');
        this.pdpThirdConditionsList=page.locator('a[href="#3. Recopilación de datos personales"]');
        this.pdpFourthConditionsList=page.locator('a[href="#4. Finalidad del Tratamiento de Datos"]');
        this.pdpFifthConditionsList=page.locator('a[href="#5. Consentimiento del Titular de los Datos"]');
        this.pdpSixthConditionsList=page.locator('a[href="#6. Seguridad de los Datos Personales"]');
        this.pdpSeventhConditionsList=page.locator('a[href="#7. Derechos de los Titulares de los Datos"]');
        this.pdpEighthConditionsList=page.locator('a[href="#8. Responsable del Tratamiento"]');
        this.pdpNinthConditionsList=page.locator('a[href="#9. Vigencia"]');
        this.pdplastConditionsList=page.locator('a[href="#10. Aceptación de la Política"]');
    

    }

        expectedSocialLinks = [
        'https://www.facebook.com/profile.php?id=61550813174733',
        'https://www.linkedin.com/company/credito365-co/about/',
        'https://www.instagram.com/credito365.co/'
                                ];

        expectedSupportLinks = [
        'mailto:ayuda@credito365.co',
        'https://wa.me/+573044404600',
        'tel:3330333060'
                                ];

        expectedTermsLinks = [
        'terms/',
        'privacy-policy/'
                                ];                        

    async getmenuItems() {
        return await this.footerMenuItems.allTextContents();
    }

    async openTYCPage(){
        await this.page.goto('https://credito365.co/terms/');
}

    async openPDPPage(){
        await this.page.goto('https://credito365.co/privacy-policy/');
}
}