/*import { test, expect } from '@playwright/test';
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
        const calculatorDefaultValue = await calculator.getCalculatorDefaultValue();
        expect(calculatorDefaultValue).toContain('200 000');
    })

    test('Calculator value after minus button click = 190 000', async () => {
        const calculatorMinusValue = await calculator.valueAfterMinusButtonClick();
        expect(calculatorMinusValue).toContain('190 000');
    })

    test('Calculator value after plus button click = 210 000', async () => {
        const calculatorPlusValue = await calculator.valueAfterPlusButtonClick();
        expect(calculatorPlusValue).toContain('210 000');
     })

    test('Arrange input visible', async () => {
        await expect(calculator.creditSlider).toBeVisible();
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

    test('Checking the value change via slider', async () => {
        await calculator.creditSlider.fill('100000');
        await expect(calculator.currentValue).toHaveText('100 000');

        await calculator.creditSlider.fill('1000000');
        await expect(calculator.currentValue).toHaveText('1 000 000');
    });

)};
*/