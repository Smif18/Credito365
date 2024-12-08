import { test, expect } from '@playwright/test';
import { Applications } from './pages/AGIS/Applications';

test.describe('Check admin Tabs', () => {
    let agis: Applications;

    test.beforeEach(async ({ page }) => {
        agis = new Applications(page);
        await agis.openAGISPage();
    });

        test('Проверка открытия подменю и кликабельности ссылок', async ({ page }) => {
            await expect(agis.applicationsMenu).toBeVisible();
            // Кликаем по пункту "Заявки", чтобы раскрыть подменю
            await agis.applicationsMenu.click();
             // Проверяем, что подменю стало видимым
            await expect(agis.openingAppMenu).toBeVisible();

            // Проверка кликабельности ссылок
            await expect(agis.allAppAndLoans).toBeVisible();
            await agis.allAppAndLoans.click();
            // Здесь можно добавить проверку, что мы перешли по правильному URL, например:
            await expect(page).toHaveURL('https://agis.credito365.co/admin/app/core/loan-all/list');

            await expect(agis.newReq).toBeVisible();
            await agis.newReq.click();
            await expect(page).toHaveURL('https://agis.credito365.co/admin/app/core/loan-request-new/list');

            await expect(agis.repeatedReq).toBeVisible();
            await agis.repeatedReq.click();
            await expect(page).toHaveURL('https://agis.credito365.co/admin/app/core/loan-request-repeated/list');

            await expect(agis.denials).toBeVisible();
            await agis.denials.click();
            await expect(page).toHaveURL('https://agis.credito365.co/admin/app/core/loan-request-denied/list');

        });
        

    });