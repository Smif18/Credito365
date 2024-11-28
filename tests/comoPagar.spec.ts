import { test, expect } from '@playwright/test';
import { ComoPagar } from './pages/ComoPagar';

test.describe('Проверка страницы "Como pagar"', () => {
    let pagar: ComoPagar;

    test.beforeEach(async ({ page }) => {
        pagar = new ComoPagar(page);
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


      });