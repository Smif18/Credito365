import { test, expect } from '@playwright/test';
import { ComoAplicar } from './pages/ComoAplicar';

test.describe('Проверка страницы "¿Cómo obtener tu crédito online?"', () => {
    let como: ComoAplicar;

    test.beforeEach(async ({ page }) => {
        como = new ComoAplicar(page);
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

})