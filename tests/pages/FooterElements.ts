import { Page, Locator } from "@playwright/test";
export class FooterElements{


    readonly page: Page;
    readonly logo: Locator;
    readonly findUS: Locator;
    readonly facebookIcon: Locator;
    readonly facebookLink: Locator;
    readonly linkedinIcon: Locator;
    readonly linkedinLink: Locator;
    readonly instagramIcon: Locator;
    readonly instagramLink: Locator;
    readonly pseLogo:Locator;
    
    constructor (page: Page) {
        this.page=page;
        this.logo=page.locator('.footer__logo');
        this.findUS=page.locator('.footer-title').first();
        this.facebookIcon=page.locator('img[src*="facebook.svg"]');
        this.facebookLink = page.locator('a[href="https://www.facebook.com/profile.php?id=61550813174733"]');
        this.linkedinIcon=page.locator('img[src*="linkedin.svg"]');
        this.linkedinLink=page.locator('a[href="https://www.linkedin.com/company/credito365-co/about/"]');
        this.instagramIcon=page.locator('img[src*="instagram.svg"]');
        this.instagramLink=page.locator('a[href="https://www.instagram.com/credito365.co/"]');
        this.pseLogo=page.locator('img[src*="footer-pse-logo.svg"]');

    }
}