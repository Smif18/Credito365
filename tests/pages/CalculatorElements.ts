import { Page, Locator, expect } from '@playwright/test';


export class CalculatorElements {
    readonly page: Page;
    readonly calculatorButton: Locator;
    readonly calculatorDefaultValue: Locator;
    readonly minusButton: Locator;
    readonly plusBatton: Locator;
    readonly arangeInput: Locator;
    readonly totalAmount: Locator;
   

    constructor(page: Page) {
        this.page = page;
        this.calculatorButton = page.locator('.calculator-elem__btn a');
        this.calculatorDefaultValue = page.locator('.calculator-elem__current .input_wrapper');
        this.minusButton = page.locator('.calculator-elem__button-minus');
        this.plusBatton = page.locator('.calculator-elem__button-plus');
        this.arangeInput = page.locator('input[type="range"]');
        this.totalAmount = page.locator('')

    }

    async visibilityContinueButton() {
        await expect(this.calculatorButton).toBeVisible();
        await expect(this.calculatorButton).toBeEnabled();
    }

    async clickToCalculatorButton() {
        await this.calculatorButton.click();
    }

    async getCalculatorCurrentValue() {
        await expect(this.calculatorDefaultValue).toContainText('200 000');
    }


}