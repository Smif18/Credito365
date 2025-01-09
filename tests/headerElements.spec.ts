/*
import { test, expect } from '@playwright/test';
import { HeaderElements } from './pages/HeaderElements';
import { HomePageElements } from './pages/HomePageElements';

test.describe('Credito365 header Tests', () => {
    let header: HeaderElements;
    let home: HomePageElements;

    test.beforeEach(async ({ page }) => {
        home = new HomePageElements(page);
        header = new HeaderElements(page);
        await home.openHomePage();
    });

        test('Header elements are present', async ({ page}) => {
            // Проверка наличия логотипа
            await expect(header.logo).toBeVisible();
    
            // Проверка наличия пунктов меню
            const menuItems = await header.menuItems.all();
            expect(menuItems.length).toBeGreaterThan(0);
    
            // Проверка наличия кнопки "Iniciar sesión"
            await expect(header.loginButton).toBeVisible();

            // Проверяем ссылку
            await expect(header.loginButton).toHaveAttribute('href', '/user/login/');

             //Проверяем кликабельность кнопки
            await header.loginButton.click();
            //await expect(page).toHaveURL(/.*\/user\/login\/.*/;
            //});
            

            /*test('Click on the button “Iniciar sesión”', async ({ page }) => {

            // Клик по кнопке
            await header.loginButton.click();

            // Проверка URL
            await expect(page).toHaveURL('https://credito365.co/user/login/');
            });


            test('WhatsApp and regular phone numbers', async () => {
            // Проверка наличия телефона WhatsApp
            await expect(header.whatsappPhone).toBeVisible();
            const whatsappPhoneNumber = await header.getWhatsappPhoneNumber();
            expect(whatsappPhoneNumber).toContain('3044404600');
            const whatsappPhoneHref = await header.getWhatsappPhoneHref();
            expect(whatsappPhoneHref).toContain('https://wa.me/+573044404600');
    
            // Проверка наличия обычного телефона
            await expect(header.regularPhone).toBeVisible();
            const regularPhoneNumber = await header.getRegularPhoneNumber();
            expect(regularPhoneNumber).toContain('3330333060');
            const regularPhoneHref = await header.getRegularPhoneHref();
            expect(regularPhoneHref).toContain('tel:3330333060');
        });
    
        test('Navigate to "Como aplicar" page', async ({ page }) => {
            await header.navigateToMenuItem('Como aplicar');
            await page.waitForURL('https://credito365.co/como-aplicar/');
            expect(page.url()).toContain('como-aplicar');
        });

        test('Navigate to "Como pagar" page', async ({ page }) => {
            await header.navigateToMenuItem('Como pagar');
            await page.waitForURL('https://credito365.co/como-pagar/');
            expect(page.url()).toContain('como-pagar');
        });

        test('Navigate to "Como extender" page', async ({ page }) => {
            await header.navigateToMenuItem('Como extender');
            await page.waitForURL('https://credito365.co/como-extender/');
            expect(page.url()).toContain('como-extender');
        });

        test('Navigate to "Sobre nosotros" page', async ({ page }) => {
            await header.navigateToMenuItem('Sobre nosotros');
            await page.waitForURL('https://credito365.co/sobre-nosotros/');
            expect(page.url()).toContain('sobre-nosotros');
        });

        test('Navigate to "FAQ" page', async ({ page }) => {
            await header.navigateToMenuItem('FAQ');
            await page.waitForURL('https://credito365.co/faq/');
            expect(page.url()).toContain('faq');
        });
    
});
*/
