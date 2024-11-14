import { test, expect } from '@playwright/test';
import { HomePageElements } from './pages/HomePageElements';
import { Login } from './pages/Login';

// Заполнение кодом
const fillCodeFields = async (page, code: string) => {
    for (let i = 0; i < code.length; i++) {
        await page.fill(`input[name="sms_code_${i}"]`, code[i]);
    }
};

test.describe('Login', () => {
    let home: HomePageElements;
    let login: Login;

    test.beforeEach(async ({ page }) => {
        home = new HomePageElements(page)
;
        login = new Login(page)
;
        await home.openHomePage();
    });

    test('Login to personal account', async ({ page }) => {
        await login.openLoginPage();
        await login.fillPhoneInput();
        await login.clickToCheckBox();
        await login.clickToContinueButton();
        await login.waitForConfirmarButton();
        await login.clickToConfirmPhoneButtonModal();

        
        await page.route('**/*', async route => {
            if (route.request().url().includes('https://master.credito365-co.avgr.it/api/v2/user/create')) {
                const response = await route.fetch();
                const responseBody = await response.json();
                if (responseBody.code) {
                    const code = responseBody.code;
                    console.log(`Received code: ${code}`);

                    
                    for (let i = 0; i < code.length; i++) {
                        await page.waitForSelector(`input[name="sms_code_${i}"]`, { state: 'visible' });
                    }

                    await fillCodeFields(page, code);

                  
                    await page.waitForSelector(`input[name="sms_code_${code.length - 1}"]`, { state: 'visible' });

                    
                    await login.clickToSendCodeButton();
                }
            }
            await route.continue();
        });

        
        try {
            const response = await page.waitForResponse(response => 
                response.url().includes('https://master.credito365-co.avgr.it/api/v2/user/create') && response.status() === 200,
                { timeout: 60000 } 
            );
            console.log(`Response received: ${response.url()}`);
        } catch (error) {
            console.error(`Error waiting for response: ${error.message}`);
            throw error;
        }


        await page.waitForSelector('button:has-text("Confirmar"):not([disabled])', { state: 'visible' });
    });
});