import { Page, Locator, expect } from '@playwright/test';


export class CalculatorElements {
    readonly page: Page;
    readonly calculatorButton: Locator;
    readonly calculatorDefaultValue: Locator;
    readonly calculatorMinusValue: Locator;
    readonly minusButton: Locator;
    readonly plusButton: Locator;
    readonly arangeInput: Locator;
    readonly totalAmount: Locator;
    readonly minimumValue: Locator;
    readonly maximumValue: Locator;
   

    constructor(page: Page) {
        this.page = page;
        this.calculatorButton = page.locator('.calculator-elem__btn a');
        this.calculatorDefaultValue = page.locator('.calculator-elem__current .input_wrapper');
        this.calculatorMinusValue = page.locator('.calculator-elem__current .input_wrapper');
        this.minusButton = page.locator('.calculator-elem__button-minus');
        this.plusButton = page.locator('.calculator-elem__button-plus');
        this.arangeInput = page.locator('input[type="range"]');
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
        await expect(this.calculatorDefaultValue).toContainText('200 000');
    }

    async clickToMinusButton() {
        await expect(this.minusButton).toBeVisible();
        await this.minusButton.click();
        return await this.calculatorMinusValue.textContent();
    }

    async clickToPlusButton() {
        await expect(this.plusButton).toBeVisible();
        await this.plusButton.click();
        return await this.calculatorMinusValue.textContent();
    }

    async getCalculatorMinimumValue() {
        return await this.minimumValue.textContent();
    }

    async getCalculatorMaximumValue() {
        return await this.maximumValue.textContent();
    }



}