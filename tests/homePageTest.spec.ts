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

        // Проверяем, что текст видим
        await expect(home.promoText).toBeVisible();

        // Проверяем, что текст содержит ожидаемые слова
        await expect(home.promoText).toContainText('Con Credito365');
        await expect(home.promoText).toContainText('puedes obtener un préstamo online');
        
        // Проверяем, что кнопка видима
        await expect(home.continueButton).toBeVisible();

        // Проверяем текст кнопки
        await expect(home.continueButton).toHaveText('Continuar');

        // Проверяем ссылку
        await expect(home.continueButton).toHaveAttribute('href', '/user/registration/');
    };

         //Проверяем кликабельность кнопки
        await home.continueButton.click();
        await expect(page).toHaveURL(/.*\/user\/registration\/.*/);
    });
   

        test('Переход по кнопке "Continuar"', async ({ page }) => {

         // Клик по кнопке
        await home.continueButton.click();

        // Проверка URL
        await expect(page).toHaveURL('https://credito365.co/user/registration/');
        });


        test('Проверка блока с инструкциями', async ( ) => {

        //Проверки блока с инструкциями
        await expect(home.instructionsTitle).toBeVisible();
        await expect(home.instructionImage).toBeVisible();

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
    });
       

        // Проверка отображения и контента блока со скроллом
        test('Проверка секции "scrolled-simple-content"', async () => {
        await expect(home.scrolledContentSection).toBeVisible();
        await expect(home.firstHeading).toBeVisible();
        
        // Проверяем текст заголовка
        await expect(home.firstHeading).toHaveText('Microcrédito en línea en la tarjeta en Credito365');


        // Проверяем, что в секции есть 3 заголовка
        await expect(home.headings).toHaveCount(3);
    
        // Проверяем текст заголовков
        await expect(home.headings.nth(0)).toHaveText('Microcrédito en línea en la tarjeta en Credito365');
        await expect(home.headings.nth(1)).toHaveText('¿Qué es un microcrédito y cómo obtengo el dinero?');
        await expect(home.headings.nth(2)).toHaveText('En que situaciones puedo tomar un crédito online con Credito365?');

         // Проверяем, что параграф про Microcredito видим
        await expect(home.microcreditoParagraph).toBeVisible();

        // Проверяем, что текст соответствует ожидаемому
        await expect(home.microcreditoParagraph).toContainText('Es un servicios de créditos online que puedes obtener sin papeleo y de manera rápida');

         // Проверки секции Condiciones
        await expect(home.condicionesSection).toBeVisible();

        // Проверяем, что заголовок видим
        await expect(home.condicionesHeading).toBeVisible();

        // Проверяем текст заголовка
        await expect(home.condicionesHeading).toHaveText('Condiciones para la obtención del credito de bajo monto');

         // Проверяем, что текст видим
        await expect(home.condicionesText).toBeVisible();

        // Проверяем, что текст содержит ключевые условия
        await expect(home.condicionesText).toContainText('ser mayor de edad');
        await expect(home.condicionesText).toContainText('ser de nacionalidad colombiana');
        await expect(home.condicionesText).toContainText('Desde 100 000 COP hasta 1 000 000 COP');
        await expect(home.condicionesText).toContainText('de 7 a 30 días');
        

    });
    });