import { test, expect } from '@playwright/test';
import { CalculatorElements } from './pages/CalculatorElements';

test.describe('Check Calculator elements', () => {
    let calculator: CalculatorElements;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://credito365.co/');
        calculator = new CalculatorElements(page);
    });

    test('Default value 200 000', async () => {
        await calculator.getCalculatorCurrentValue();
    })
})