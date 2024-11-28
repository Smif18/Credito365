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

    //"TERMINOS Y CONDICIONES PAGE" and "Politica de Privacidad"
    readonly tycHeader:Locator;
    readonly tycLinkToHomepage: Locator;
    readonly tycFirstConditionsList:Locator;
    readonly tycSecondConditionsList: Locator;
    readonly linkToMail: Locator;
    readonly firstH4Header: Locator;
    readonly secondH4Header: Locator;
    readonly lastH4Header: Locator;
    readonly pdpHeader: Locator;
    readonly pdpLinkToHomePage: Locator;
    readonly pdpFirstConditionsList: Locator;
    readonly pdpSecondConditionsList: Locator;
    readonly pdplastConditionsList: Locator;
    readonly pdpLinkToMail: Locator;
    readonly pdpFirstH4Header: Locator;
    readonly pdpSecondH4Header: Locator;
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
        this.firstH4Header=page.locator('//h4[@id="I. TÉRMINOS Y CONDICIONES"]');
        this.secondH4Header=page.locator('//h4[@id="II. FINALIDADES DE RECOLECCIÓN DE LA INFORMACIÓN"]');
        this.lastH4Header=page.locator('//h4[@id="XIV. AVISO DE PRIVACIDAD"]');
        this.pdpHeader=page.locator('//h1[text()="Política de Tratamiento de Datos Personales"]');
        this.pdpLinkToHomePage=page.locator('a[href="https://credito365.co"]').nth(0);
        this.pdpLinkToMail=page.locator('a[href="mailto:ayuda@credito365.co"]').nth(0);
        this.pdpFirstH4Header=page.locator('//h4[@id="1. Identificación de la Empresa"]');
        this.pdpSecondH4Header=page.locator('//h4[@id="2. Objetivo"]');
        this.pdpLastH4Header=page.locator('//h4[@id="10. Aceptación de la Política"]');
        this.pdpFirstConditionsList=page.locator('a[href="#1. Identificación de la Empresa"]');
        this.pdpSecondConditionsList=page.locator('a[href="#2. Objetivo"]');
        this.pdplastConditionsList=page.locator('a[href="#10. Aceptación de la Política"]');
        //Politica de Privacidad


        //END OF TERMINOS Y CONDICIONES PAGE

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
        'https://credito365.co/terms/',
        'https://credito365.co/privacy-policy/'
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