import { test, expect } from '@playwright/test';
import { HomePageElements } from './pages/HomePageElements';

test.describe('Credito365 home page elements test', () => {
    let home: HomePageElements;

    test.beforeEach(async ({ page }) => {
        home = new HomePageElements(page);
        await home.openHomePage();
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

         // Проверяем, что блок преимуществ видим
        await expect(home.advantagesGrid).toBeVisible();

        // Проверяем, что есть 4 блока с преимуществами
        await expect(home.advantagesItems).toHaveCount(4);


        // Проверяем заголовки
        for (let i = 0; i < home.expectedTitles.length; i++) {
        await expect(home.advantagesTitiles.nth(i)).toHaveText(home.expectedTitles[i]);
        }

        // Проверяем описания
        for (let i = 0; i < home.expectedDescriptions.length; i++) {
        await expect(home.advantagesDescriptions.nth(i)).toHaveText(home.expectedDescriptions[i]);

        // Проверяем, что у каждого преимущества есть иконка
        await expect(home.advantagesIcons).toHaveCount(4);

        //Проверка видимости каждого блока преимуществ
        for (let i = 0; i < home.expectedIconSrcs.length; i++) {
        await expect(home.advantagesIcons.nth(i)).toHaveAttribute('src', home.expectedIconSrcs[i]);
        }
        // Проверяем, что каждый блок с преимуществом видим
        for (let i = 0; i < 4; i++) {
        await expect(home.advantagesItems.nth(i)).toBeVisible();
        }

        //Проверки блока с инструкциями
        await expect(home.instructionsTitle).toBeVisible();

        // Проверка, что вкладка "Aplica" активна по умолчанию
        await home.instructionApplyTab.click();
        await expect(home.applyTabContent).toBeVisible();
        await expect(home.payTabContent).not.toBeVisible();
        await expect(home.extendTabContent).not.toBeVisible();
        

        // Переключение на вкладку "Paga"
        await home.instructionPayTab.click();
        await expect(home.payTabContent).toBeVisible();
        await expect(home.applyTabContent).not.toBeVisible();
        await expect(home.extendTabContent).not.toBeVisible();

        // Переключение на вкладку "Extiende"
        await home.instructionExtendTab.click();
        await expect(home.extendTabContent).toBeVisible();
        await expect(home.applyTabContent).not.toBeVisible();
        await expect(home.payTabContent).not.toBeVisible();


    }
    });


});