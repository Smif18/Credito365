import { test, expect } from '@playwright/test';
import { HomePageElements } from './pages/HomePageElements';
import { FooterElements } from './pages/footerElements';

test.describe('Credito365 footer elements test', () => {
    let home: HomePageElements;
    let footer: FooterElements;

    test.beforeEach(async ({ page }) => {
        home = new HomePageElements(page);
        footer = new FooterElements(page);
        await home.openHomePage();
    });

    test('The footer is shown', async () => {
    
        await expect(footer.footer).toBeVisible();
    });

    test('Logo is displayed in the footer', async () => {
    
        await expect(footer.logo).toBeVisible();
        //await expect(footer.logo).toHaveAttribute('src', 'https://credito365.co/wp-content/uploads/2023/09/footer-logo.svg');

        //все ссылки меню видимы и кликабельны.
        await expect(footer.footer).toBeVisible();
        const menuItems = await footer.getmenuItems();
        expect(menuItems).toEqual(['Como aplicar', 'Como pagar', 'Como extender', 'Sobre nosotros', 'FAQ']); 

        for (let i = 0; i < menuItems.length; i++) {
            await expect(footer.footerMenuItems.nth(i)).toBeVisible();
            await expect(footer.footerMenuItems.nth(i)).toHaveAttribute('href', /https:\/\/credito365\.co/);
        }
    });

    test ('Links to social networks', async () => {
        for (let i=0; i < footer.expectedSocialLinks.length; i++) {
            await expect(footer.socialIcons.nth(i)).toHaveAttribute('href', footer.expectedSocialLinks[i]);
        }
    })

    test ('Section "Ayda"', async () => {
        for (let i=0; i < footer.expectedSupportLinks.length; i++) {
            await expect(footer.supportIcons.nth(i)).toHaveAttribute('href', footer.expectedSupportLinks[i]);
        }
    });

    test('PSE logo is displayed', async () => {
        await expect(footer.pseLogo).toBeVisible();
        await expect(footer.pseLogo).toHaveAttribute('src', 'https://credito365.co/wp-content/uploads/2024/05/footer-pse-logo.svg');
        });

    test ('Links to "Terminos y condiciones" и "Politica de Privacidad"', async () => {
        for (let i = 0; i < footer.expectedTermsLinks.length; i++) {
        await expect(footer.termsMenuItems.nth(i)).toHaveAttribute('href', footer.expectedTermsLinks[i]);
        }
        });

    });