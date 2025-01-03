import { test, expect } from '@playwright/test';
import { ComoPagar } from './pages/ComoPagar';
import { CalculatorElements } from './pages/CalculatorElements';
import { HomePageElements} from './pages/HomePageElements'
import { FooterElements } from './pages/footerElements';
import { HeaderElements } from './pages/HeaderElements';

test.describe('Проверка страницы "Como pagar"', () => {
    let pagar: ComoPagar;
    let calculator: CalculatorElements;
    let home: HomePageElements
    let footer: FooterElements
    let header: HeaderElements;

    test.beforeEach(async ({ page }) => {
        pagar = new ComoPagar(page);
        calculator = new CalculatorElements(page);
        home = new HomePageElements(page);
        footer = new FooterElements(page);
        header = new HeaderElements(page);
        await page.goto('https://credito365.co/como-pagar/'); 

    });

         // Проверка заголовков
  test('Должны отображаться основной заголовок и подзаголовок', async () => {
    await expect(pagar.mainHeading).toBeVisible();
    await expect(pagar.mainHeading).toHaveText('¿Cómo pagar un crédito online?');
    await expect(pagar.subHeading).toBeVisible();
    await expect(pagar.subHeading).toHaveText('¿De que forma devuelvo el dinero que Credito365 me prestó?');

    });

// Проверка описания
    test('Должен отображаться абзац с описанием', async () => {
    await expect(pagar.descriptionParagraph).toBeVisible();
    await expect(pagar.descriptionParagraph).toHaveText(/El proceso de pago de tu crédito online es muy sencillo/);
    });

     // Проверка аккордеона
    test('Аккордеон должен содержать правильные заголовки и контент', async () => {

    const accordionCount = await pagar.accordionItems.count();
    expect(accordionCount).toBe(pagar.expectedLabels.length);

    for (let i = 0; i < accordionCount; i++) {
      await expect(pagar.accordionLabels.nth(i)).toHaveText(pagar.expectedLabels[i]);
      await pagar.accordionItems.nth(i).click();
      await expect(pagar.accordionContents.nth(i)).toHaveText(pagar.expectedContents[i]);
    }
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
  
  
      test('Footer tests', async () => {
      
        await expect(footer.footer).toBeVisible();
   
        await expect(footer.logo).toBeVisible();
        //await expect(footer.logo).toHaveAttribute('src', 'https://credito365.co/wp-content/uploads/2023/09/footer-logo.svg');
  
        //все ссылки меню футера видимы и кликабельны.
        await expect(footer.footer).toBeVisible();
        const menuItems = await footer.getmenuItems();
        expect(menuItems).toEqual(['Como aplicar', 'Como pagar', 'Como extender', 'Sobre nosotros', 'FAQ']); 
  
        for (let i = 0; i < menuItems.length; i++) {
            await expect(footer.footerMenuItems.nth(i)).toBeVisible();
            await expect(footer.footerMenuItems.nth(i)).toHaveAttribute('href', /https:\/\/credito365\.co/);
        }
   
          //Ссылки на социальные сети компании
        for (let i=0; i < footer.expectedSocialLinks.length; i++) {
            await expect(footer.socialIcons.nth(i)).toHaveAttribute('href', footer.expectedSocialLinks[i]);
        }
   
          //Прверки секции "Ayda"
        for (let i=0; i < footer.expectedSupportLinks.length; i++) {
            await expect(footer.supportIcons.nth(i)).toHaveAttribute('href', footer.expectedSupportLinks[i]);
        }
          // PSE logo
          await expect(footer.pseLogo).toBeVisible();
          await expect(footer.pseLogo).toHaveAttribute('src', 'https://credito365.co/wp-content/uploads/2024/05/footer-pse-logo.svg');
      
          //LСсылки на "Terminos y condiciones" и "Politica de Privacidad"
        for (let i = 0; i < footer.expectedTermsLinks.length; i++) {
        await expect(footer.termsMenuItems.nth(i)).toHaveAttribute('href', footer.expectedTermsLinks[i]);
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