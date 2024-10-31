import { Page, Locator, expect } from '@playwright/test';
export class HeaderElements{


    readonly page: Page;
    readonly logo: Locator;
    readonly menuItemComo_aplicar: Locator;
    readonly menuItemComo_pagar: Locator;
    readonly menuItemComo_extender: Locator;
    readonly menuItemSobre_nosotros: Locator;
    readonly menuItem_FAQ: Locator;
    readonly logoButton: Locator;
    readonly regularPhone: Locator;
    readonly whatsappPhone: Locator;
    readonly supportPhone: Locator;
    readonly supportWAPhone: Locator;


    constructor (page: Page){
        this.page=page;
        this.logo=page.locator('.header__logo');
        this.menuItemComo_aplicar=page.locator('a[href="https://credito365.co/como-aplicar/"]').first();
        this.menuItemComo_pagar=page.locator('a[href="https://credito365.co/como-pagar/"]').first();
        this.menuItemComo_extender=page.locator('a[href="https://credito365.co/como-extender/"]').first();
        this.menuItemSobre_nosotros=page.locator('a[href="https://credito365.co/como-nosotros/"]').first();
        this.menuItem_FAQ=page.locator('a[href="https://credito365.co/faq/"]').first();
        this.logoButton=page.locator('a[href="/user/login/"]');
        this.regularPhone=page.locator('a.phone[href^="tel:"]');
        this.whatsappPhone=page.locator('a.phone-whatsapp[href^="https://wa.me"]');
        this.supportPhone=page.locator('a[href="tel:3330333060"]');
        this.supportWAPhone=page.locator('a[href="https://wa.me/+573044404600"]');

    }
}