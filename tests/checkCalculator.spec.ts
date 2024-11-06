import { test, expect } from '@playwright/test';
import { CalculatorElements } from './pages/CalculatorElements';

test.describe('Check Calculator elements', () => {
    let calculator: CalculatorElements;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://credito365.co/');
        calculator = new CalculatorElements(page);
    });

    test('Default value 200 000', async () => {
        await calculator.getCalculatorDefaultValue();
    })

    test('Calculator value after minus button click = 190 000', async () => {
       const calculatorMinusValue = await calculator.clickToMinusButton();
       expect(calculatorMinusValue).toContain('190 000');
    })

    test('Calculator value after plus button click = 210 000', async () => {
        const calculatorPlusValue = await calculator.clickToPlusButton();
        expect(calculatorPlusValue).toContain('210 000');
     })
})