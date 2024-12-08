import { test, expect } from '@playwright/test';
import { ComoAplicar } from './pages/ComoAplicar';
import { CalculatorElements } from './pages/CalculatorElements';
import { HomePageElements} from './pages/HomePageElements'
import { FooterElements } from './pages/footerElements';
import { HeaderElements } from './pages/HeaderElements';

test.describe('Проверка страницы "¿Cómo obtener tu crédito online?"', () => {
    let como: ComoAplicar;
    let calculator: CalculatorElements;
    let home: HomePageElements
    let footer: FooterElements
    let header: HeaderElements;

    test.beforeEach(async ({ page }) => {
        como = new ComoAplicar(page);
        calculator = new CalculatorElements(page);
        home = new HomePageElements(page);
        footer = new FooterElements(page);
        header = new HeaderElements(page);
        await page.goto('https://credito365.co/como-aplicar/'); 
      });

       // Проверка наличия основного заголовка
  test('Должен отображаться основной заголовок', async () => {
    await expect(como.mainHeading).toBeVisible();
    await expect(como.mainHeading).toHaveText('¿Cómo obtener tu crédito online?');
  });

   // Проверка текста абзаца
   test('Должен отображаться текст описания', async () => {
    await expect(como.paragraph).toBeVisible();
    await expect(como.paragraph).toHaveText(
      /Un crédito online de bajo monto es la forma rápida y eficiente de solucionar un problema económico inesperado/
    );
  });

  // Проверка списка требований
  test('Список требований должен содержать правильные элементы', async () => {
   
    const itemsCount = await como.requirementsItems.count();
    expect(itemsCount).toBe(como.expectedItems.length);

    for (let i = 0; i < itemsCount; i++) {
      await expect(como.requirementsItems.nth(i)).toHaveText(como.expectedItems[i]);
    }
  });

  test('Карточки должны содержать правильные заголовки и описания', async () => {
   
    const cardsCount = await como.cards.count();
    expect(cardsCount).toBe(como.expectedCardTitles.length);

    for (let i = 0; i < cardsCount; i++) {
      await expect(como.cardTitles.nth(i)).toHaveText(como.expectedCardTitles[i]);
      await expect(como.cardDescriptions.nth(i)).toHaveText(como.expectedCardDescriptions[i]);
    }
  });


  test('Calculator tests', async ({ page }) => {
    const calculatorDefaultValue = await calculator.getCalculatorDefaultValue();
    expect(calculatorDefaultValue).toContain('200 000');

    //Calculator value after minus button click = 190 000
    const calculatorMinusValue = await calculator.valueAfterMinusButtonClick();
    expect(calculatorMinusValue).toContain('190 000');

    //Calculator value after plus button click
    const calculatorPlusValue = await calculator.valueAfterPlusButtonClick();
    expect(calculatorPlusValue).toContain('200 000');

    //Arrange input visible
    await expect(calculator.creditSlider).toBeVisible();

    //Minimum value 100 000 is presented
    await expect(calculator.minimumValue).toBeVisible();
    const minimumCalculatorValue = await calculator.getCalculatorMinimumValue();
    expect(minimumCalculatorValue).toContain('100 000');

    //Maximum value 1 000 000 is presented
    await expect(calculator.maximumValue).toBeVisible();
    const maximumCalculatorValue = await calculator.getCalculatorMaximumValue();
    expect(maximumCalculatorValue).toContain('1 000 000');

    //Checking the value change via slider
    await calculator.creditSlider.fill('100000');
    await expect(calculator.currentValue).toHaveText('100 000');

    await calculator.creditSlider.fill('1000000');
    await expect(calculator.currentValue).toHaveText('1 000 000');

    // Проверяем, что кнопка видима
    await expect(home.calculatorButton).toBeVisible();

    // Проверяем текст кнопки
    await expect(home.calculatorButton).toHaveText('Continuar');

    // Проверяем ссылку
    await expect(home.calculatorButton).toHaveAttribute('href', '/user/registration/');

    //Проверяем кликабельность кнопки
    await home.calculatorButton.click();
    await expect(page).toHaveURL(/.*\/user\/registration\/.*/);
  
   });


    test('Footer tests', async () => {
    
      await expect(footer.footer).toBeVisible();
 
  
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
 
        //Links to social networks
      for (let i=0; i < footer.expectedSocialLinks.length; i++) {
          await expect(footer.socialIcons.nth(i)).toHaveAttribute('href', footer.expectedSocialLinks[i]);
      }
 
        //Section "Ayda"
      for (let i=0; i < footer.expectedSupportLinks.length; i++) {
          await expect(footer.supportIcons.nth(i)).toHaveAttribute('href', footer.expectedSupportLinks[i]);
      }
        // PSE logo
        await expect(footer.pseLogo).toBeVisible();
        await expect(footer.pseLogo).toHaveAttribute('src', 'https://credito365.co/wp-content/uploads/2024/05/footer-pse-logo.svg');
    
        //Links to "Terminos y condiciones" и "Politica de Privacidad"
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

        // Проверяем ссылку
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


