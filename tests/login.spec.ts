import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import { HomePageElements } from './pages/HomePageElements';
import { Login } from './pages/Login';


test.describe('Login', () => {
    let home: HomePageElements;
    let login: Login;

    test.beforeEach(async ({ page }) => {
        home = new HomePageElements(page);
        await home.openHomePage();
    });


 test('Login to personal account', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page: Page = await context.newPage();  
    await login.openLoginPage();
    await login.fillPhoneInput();
    await login.clickToCheckBox();
    await login.clickToContinueButton();
    await login.waitForConfirmarButton();
    await login.clickToConfirmPhoneButtonModal(); 
  

  // Перехват
  const interceptRequest = async (route: any, request: any) => {
    if (request.url().includes('https://master.credito365-co.avgr.it/api/v2/user/create')) {
      const response = await route.continue();
      response.finished().then(async () => {
        const responseBody = await response.json();
        if (responseBody.code) {
          const code = responseBody.code;
          console.log(`Received code: ${code}`);
          await fillCodeFields(code);
        }
      });
    } else {
      await route.continue();
    }
  };

  // Заполнение кодом
  const fillCodeFields = async (code: string) => {
    for (let i = 0; i < code.length; i++) {
      await page.fill(`input[name="sms_code_${i}"]`, code[i]);
    }
  };

  // Перехватка
  await page.route('**/*', interceptRequest);

  
  // Ждем
  await page.waitForTimeout(5000); 

  // Клос браузера
  await browser.close();
})
});