import { Page, Locator, expect } from '@playwright/test';


export class CalculatorElements {
    readonly page: Page;
    readonly calculatorButton: Locator;
    readonly defaultValue: Locator;
    readonly currentValue: Locator;
    readonly minusValue: Locator;
    readonly minusButton: Locator;
    readonly plusButton: Locator;
    readonly creditSlider: Locator;
    readonly totalAmount: Locator;
    readonly minimumValue: Locator;
    readonly maximumValue: Locator;
   

    constructor(page: Page) {
        this.page = page;
        this.calculatorButton = page.locator('.calculator-elem__btn a');
        this.defaultValue = page.locator('.calculator-elem__current .input_wrapper');
        this.currentValue = page.locator('.calculator-elem__current .input_wrapper');
        this.minusValue = page.locator('.calculator-elem__current .input_wrapper');
        this.minusButton = page.locator('.calculator-elem__button-minus');
        this.plusButton = page.locator('.calculator-elem__button-plus');
        this.creditSlider = page.locator('input[type="range"]');
        this.totalAmount = page.locator('')
        this.minimumValue = page.locator('.calculator-elem__min');
        this.maximumValue = page.locator('.calculator-elem__max');

    }

    async visibilityContinueButton() {
        await expect(this.calculatorButton).toBeVisible();
        await expect(this.calculatorButton).toBeEnabled();
    }

    async clickToCalculatorButton() {
        await this.calculatorButton.click();
    }

    async getCalculatorDefaultValue() {
       return await this.defaultValue.textContent();
    }

    async valueAfterMinusButtonClick() {
        await expect(this.minusButton).toBeVisible();
        await this.minusButton.click();
        return await this.minusValue.textContent();
    }

    async valueAfterPlusButtonClick() {
        await expect(this.plusButton).toBeVisible();
        await this.plusButton.click();
        return await this.minusValue.textContent();
    }

    async getCalculatorMinimumValue() {
        return await this.minimumValue.textContent();
    }

    async getCalculatorMaximumValue() {
        return await this.maximumValue.textContent();
    }



}