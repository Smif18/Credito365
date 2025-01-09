import { test, expect } from '@playwright/test';
import { HomePageElements } from './pages/HomePageElements';
import { CalculatorElements } from './pages/CalculatorElements';
import { FooterElements } from './pages/footerElements';
import { HeaderElements } from './pages/HeaderElements';

test.describe('Credito365 home page elements test', () => {
    let home: HomePageElements;
    let calculator: CalculatorElements;
    let footer: FooterElements
    let header: HeaderElements;


    test.beforeEach(async ({ page }) => {
        home = new HomePageElements(page);
        calculator = new CalculatorElements(page);
        footer = new FooterElements(page);
        header = new HeaderElements(page);
        await page.goto('/');
    });

    test('Home page elements are present', async ({ page }) => {
        // Наличие заголовка баннера
        const heroBannerTitle = await home.getHeroBannerTitle();
        expect(heroBannerTitle).toContain('Crédito Online en solo unos minutos');

        // Наличие кнопки "Continuar" в калькуляторе и отображение суммы по умолчанию 200 000
        await expect(home.calculatorButton).toBeVisible();
        const calculatorCurrentValue = await home.getCalculatorCurrentValue();
        expect(calculatorCurrentValue).toContain('200 000'); 


        // Наличие заголовка "Nuestras ventajas"
        const advantagesTitle = await home.getAdvantagesTitle();
        expect(advantagesTitle).toContain('Nuestras ventajas');

         // Блок преимуществ  "Nuestras ventajas" видим
        await expect(home.advantagesGrid).toBeVisible();

        // В "Nuestras ventajas" есть 4 блока с преимуществами
        await expect(home.advantagesItems).toHaveCount(4);


        // Проверка заголовков блока "Nuestras ventajas"
        for (let i = 0; i < home.expectedTitles.length; i++) {
        await expect(home.advantagesTitiles.nth(i)).toHaveText(home.expectedTitles[i]);
        }

        // Проверяка описания блока "Nuestras ventajas"
        for (let i = 0; i < home.expectedDescriptions.length; i++) {
        await expect(home.advantagesDescriptions.nth(i)).toHaveText(home.expectedDescriptions[i]);

        // Проверяем, что у каждого преимущества есть иконка
        await expect(home.advantagesIcons).toHaveCount(4);

        //Проверка видимости каждого блока преимуществ
        // Пример: Получение всех элементов с изображениями
    const icons = await page.locator('div.advantage__icon img').elementHandles();

    // Проверка каждой ссылки
    for (let i = 0; i < home.expectedIconSrcs.length; i++) {
      const actualSrc = await icons[i].getAttribute('src'); // Получить фактический src
      
      if (actualSrc) { // Проверка, что actualSrc не null
          const actualPath = new URL(actualSrc).pathname; // Извлечь путь
          const expectedPath = new URL(home.expectedIconSrcs[i]).pathname; // Извлечь путь из ожидаемого src
  
          expect(actualPath).toBe(expectedPath); // Сравнить пути
      } else {
          throw new Error(`Icon at index ${i} has no 'src' attribute.`); // Обработка null
      }
  }
        // Проверка, что каждый блок с преимуществом видим
        for (let i = 0; i < 4; i++) {
        await expect(home.advantagesItems.nth(i)).toBeVisible();
        }

        // Проверка, что промо-текст видим
        await expect(home.promoText).toBeVisible();

        // Проверка, что промо-текст содержит ожидаемые слова
        await expect(home.promoText).toContainText('Con Credito365');
        await expect(home.promoText).toContainText('puedes obtener un préstamo online');
        
        // Проверка, что кнопка Continuar под промо-текстом видима
        await expect(home.continueButton).toBeVisible();

        // Проверка текста кнопки
        await expect(home.continueButton).toHaveText('Continuar');

        // Проверяка ссылки кнопки
        await expect(home.continueButton).toHaveAttribute('href', '/user/registration/');
    };

         //Проверяка кликабельности кнопки
        await home.continueButton.click();
        await expect(page).toHaveURL(/.*\/user\/registration\/.*/);
    });
   

        test('Switching to the Continuar button', async ({ page }) => {

         // Клик по кнопке
        await home.continueButton.click();

        // Проверка URL
        await expect(page).toHaveURL('/user/registration/');
        });


        test('Checking the instruction box', async ( ) => {

        //Баннер и заголовок блока отображаются
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
        test('Checking the “scrolled-simple-content” section', async () => {
        await expect(home.scrolledContentSection).toBeVisible();
        await expect(home.firstHeading).toBeVisible();
        
        // Проверка текст заголовка
        await expect(home.firstHeading).toHaveText('Microcrédito en línea en la tarjeta en Credito365');


        // Проверка, что в секции есть 3 заголовка
        await expect(home.headings).toHaveCount(3);
    
        // Проверка текста заголовков
        await expect(home.headings.nth(0)).toHaveText('Microcrédito en línea en la tarjeta en Credito365');
        await expect(home.headings.nth(1)).toHaveText('¿Qué es un microcrédito y cómo obtengo el dinero?');
        await expect(home.headings.nth(2)).toHaveText('En que situaciones puedo tomar un crédito online con Credito365?');

         // Проверяка, что параграф про Microcredito видим
        await expect(home.microcreditoParagraph).toBeVisible();

        // Проверяка, что текст соответствует ожидаемому
        await expect(home.microcreditoParagraph).toContainText('Es un servicios de créditos online que puedes obtener sin papeleo y de manera rápida');

         // Проверки секции Condiciones
        await expect(home.condicionesSection).toBeVisible();

        // Проверка, что заголовок секции Condiciones видим
        await expect(home.condicionesHeading).toBeVisible();

        // Проверка текста заголовка
        await expect(home.condicionesHeading).toHaveText('Condiciones para la obtención del credito de bajo monto');

         // Проверка, что текст условий видим
        await expect(home.condicionesText).toBeVisible();

        // Проверка, что текст содержит ключевые условия
        await expect(home.condicionesText).toContainText('ser mayor de edad');
        await expect(home.condicionesText).toContainText('ser de nacionalidad colombiana');
        await expect(home.condicionesText).toContainText('Desde 100 000 COP hasta 1 000 000 COP');
        await expect(home.condicionesText).toContainText('de 7 a 30 días');
        

    });

    test('Calculator tests', async ({ page }) => {
        //По умолчанию на калькуляторе значение 200 000
        const calculatorDefaultValue = await calculator.getCalculatorDefaultValue();
        expect(calculatorDefaultValue).toContain('200 000');
    
        //Значение калькулятора после клика на минус = 190 000
        const calculatorMinusValue = await calculator.valueAfterMinusButtonClick();
        expect(calculatorMinusValue).toContain('190 000');
    
        //Значение калькулятора после клика на плюс = 190 000
        const calculatorPlusValue = await calculator.valueAfterPlusButtonClick();
        expect(calculatorPlusValue).toContain('200 000');
    
        //Слайдер калькулятора видим
        await expect(calculator.creditSlider).toBeVisible();
    
        //Минимальная сумма 100 000 отображается
        await expect(calculator.minimumValue).toBeVisible();
        const minimumCalculatorValue = await calculator.getCalculatorMinimumValue();
        expect(minimumCalculatorValue).toContain('100 000');
    
        //Максимальная сумма 1 000 000 отображается
        await expect(calculator.maximumValue).toBeVisible();
        const maximumCalculatorValue = await calculator.getCalculatorMaximumValue();
        expect(maximumCalculatorValue).toContain('1 000 000');
    
        //Проверка изменения суммы через слайдер
        await calculator.creditSlider.fill('100000');
        await expect(calculator.currentValue).toHaveText('100 000');
    
        await calculator.creditSlider.fill('1000000');
        await expect(calculator.currentValue).toHaveText('1 000 000');
    
        // Кнопка "Continuar" отображается
        await expect(home.calculatorButton).toBeVisible();
    
        // Проверка текста кнопки
        await expect(home.calculatorButton).toHaveText('Continuar');
    
        // Проверка ссылки кнопки
        await expect(home.calculatorButton).toHaveAttribute('href', '/user/registration/');
    
        //Проверка кликабельности кнопки
        await home.calculatorButton.click();
        await expect(page).toHaveURL(/.*\/user\/registration\/.*/);
      
       });
    
    
        test('Footer tests', async ({ baseURL }) => {
        
          await expect(footer.footer).toBeVisible();
     
          await expect(footer.logo).toBeVisible();
          //await expect(footer.logo).toHaveAttribute('src', 'https://credito365.co/wp-content/uploads/2023/09/footer-logo.svg');
    
          //все ссылки меню футера видимы и кликабельны.
          await expect(footer.footer).toBeVisible();
          const menuItems = await footer.getmenuItems();
          expect(menuItems).toEqual(['Como aplicar', 'Como pagar', 'Como extender', 'Sobre nosotros', 'FAQ']); 
    
          // Получаем текущий домен с учетом окружения
          const domainPattern = new RegExp(`^${baseURL}`);

          for (let i = 0; i < menuItems.length; i++) {
          await expect(footer.footerMenuItems.nth(i)).toBeVisible();
          await expect(footer.footerMenuItems.nth(i)).toHaveAttribute('href', domainPattern);
          }
     
            //Ссылки на социальные сети компании
          for (let i=0; i < footer.expectedSocialLinks.length; i++) {
              await expect(footer.socialIcons.nth(i)).toHaveAttribute('href', footer.expectedSocialLinks[i]);
          }
     
            //Прверки секции "Ayda"
          for (let i=0; i < footer.expectedSupportLinks.length; i++) {
              await expect(footer.supportIcons.nth(i)).toHaveAttribute('href', footer.expectedSupportLinks[i]);
          }

            // PSE logo - динамическая проверка домена
            const expectedPseLogoSrc = `${baseURL}wp-content/uploads/2024/05/footer-pse-logo.svg`;

            await expect(footer.pseLogo).toBeVisible();
            await expect(footer.pseLogo).toHaveAttribute('src', expectedPseLogoSrc);
        
            // Ссылки на "Términos y condiciones" и "Política de Privacidad" - динамическая проверка домена
            for (let i = 0; i < footer.expectedTermsLinks.length; i++) {
              const expectedTermsUrl = `${baseURL}${footer.expectedTermsLinks[i]}`; // формируем полный URL как строку
              await expect(footer.termsMenuItems.nth(i)).toHaveAttribute('href', expectedTermsUrl);
            }
            });
    
          test('Header tests', async () => {
            // Проверка наличия логотипа
            await expect(header.logo).toBeVisible();
        
            // Проверка наличия пунктов меню
            const menuItems = await header.menuItems.all();
            expect(menuItems.length).toBeGreaterThan(0);
    
            // Проверка наличия кнопки "Iniciar sesión"
            await expect(header.loginButton).toBeVisible();
    
            // Проверка ссылки кнопки  "Iniciar sesión"
            await expect(header.loginButton).toHaveAttribute('href', '/user/login/');
    
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
             expect(regularPhoneHref).toEqual('tel:3330333060');
          })
  
        });