import { test, expect } from '@playwright/test';
import { HomePageElements } from './pages/HomePageElements';

test.describe('Credito365 home page elements test', () => {
    let home: HomePageElements;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://credito365.co/');
        home = new HomePageElements(page);
    });

    test('Home page elements are present', async ({ page }) => {
        // Проверка наличия заголовка баннера
        const heroBannerTitle = await home.getHeroBannerTitle();
        expect(heroBannerTitle).toContain('Crédito Online en solo unos minutos');

        // Проверка наличия кнопки "Continuar" в калькуляторе
        await expect(home.calculatorButton).toBeVisible();
        const calculatorCurrentValue = await home.getCalculatorCurrentValue();
        expect(calculatorCurrentValue).toContain('200 000'); 


        // Проверка наличия заголовка "Nuestras ventajas"
        const advantagesTitle = await home.getAdvantagesTitle();
        expect(advantagesTitle).toContain('Nuestras ventajas');
    });
});