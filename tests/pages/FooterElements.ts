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
}