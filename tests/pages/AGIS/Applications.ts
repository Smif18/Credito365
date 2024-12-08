import { Page, Locator, expect } from '@playwright/test';


export class Applications {
    readonly page: Page;
    readonly applicationsMenu: Locator;
    readonly openingAppMenu: Locator;
    readonly allAppAndLoans: Locator;
    readonly newReq: Locator;
    readonly repeatedReq: Locator;
    readonly denials: Locator;

    constructor(page: Page) {
        this.page = page;
        this.applicationsMenu = page.locator('li.first.treeview > a');
        this.openingAppMenu = page.locator('ul.active.treeview-menu').nth(0);
        this.allAppAndLoans = page.locator('li.first > a[href="/admin/app/core/loan-all/list"]');
        this.newReq = page.locator('li > a[href="/admin/app/core/loan-request-new/list"]');
        this.repeatedReq = page.locator('li > a[href="/admin/app/core/loan-request-repeated/list"]');
        this.denials = page.locator('li.last > a[href="/admin/app/core/loan-request-denied/list"]');
    }

    async openAGISPage(){
        await this.page.goto('https://agis.credito365.co/admin/dashboard/');
        await this.page.locator('#username').click();
        await this.page.locator('#username').fill('mikhail.saikouski');
        await this.page.locator('#password').click();
        await this.page.locator('#password').fill('p0X&Q~\\s>e');
        await this.page.getByRole('button', { name: 'Вход' }).click();
        await this.page.getByLabel('ES').locator('b').click();
        await this.page.getByRole('option', { name: 'EN' }).click();

}
}