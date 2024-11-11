import { test, expect } from '@playwright/test';
import { CalculatorElements } from './pages/CalculatorElements';
import { HomePageElements } from './pages/HomePageElements';


test.describe('Check Calculator elements', () => {
    let calculator: CalculatorElements;
    let home: HomePageElements;

    test.beforeEach(async ({ page }) => {
        home = new HomePageElements(page);
        calculator = new CalculatorElements(page);
        await home.openHomePage();
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

    test('Arrange input visible', async () => {
        await expect(calculator.arangeInput).toBeVisible();
    })
    
    test('Minimum value 100 000 is presented', async () => {
        await expect(calculator.minimumValue).toBeVisible();
        const minimumCalculatorValue = await calculator.getCalculatorMinimumValue();
        expect(minimumCalculatorValue).toContain('100 000');
    })

    test('Maximum value 1 000 000 is presented', async () => {
        await expect(calculator.maximumValue).toBeVisible();
        const maximumCalculatorValue = await calculator.getCalculatorMaximumValue();
        expect(maximumCalculatorValue).toContain('1 000 000');
    })
})