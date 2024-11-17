import { Page, Locator, expect } from '@playwright/test';

export class Login {
    readonly page: Page;
    readonly placeHolder: Locator;
    readonly phoneInput: Locator;
    readonly continueButton: Locator;
    readonly confirmPhoneButtonModal: Locator;
    readonly sendCodeButton: Locator;
    readonly checkBox: Locator;
    readonly firstCodeInput: Locator;
    readonly secondCodeInput: Locator;
    readonly thirdCodeInput: Locator;
    readonly fourthCodeInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.phoneInput = page.locator('input[name="phone_number"]');
        this.continueButton = page.locator('button:has-text("Continuar")');
        this.confirmPhoneButtonModal = page.locator('button:has-text("Confirmar")');
        this.checkBox = page.locator('input[name="is_data_processing_consent_given"]');
        this.firstCodeInput = page.locator('input[name="sms_code_0"]');
        this.secondCodeInput = page.locator('input[name="sms_code_1"]');
        this.thirdCodeInput = page.locator('input[name="sms_code_2"]');
        this.fourthCodeInput = page.locator('input[name="sms_code_3"]');
        this.sendCodeButton = page.locator('button:has-text("Confirmar")');
    }

    generateRandomPhoneNumber() {
        const prefixes = ['300', '301', '302', '303', '304', '305', '310','311', '312', '313', '314', '315', 
                        '316', '317', '318', '319', '320', '321', '322', '323', '324', '333', '350', '351', ];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const randomNumbers = Array.from({ length: 7 }, () => Math.floor(Math.random() * 10)).join('');
        return `${prefix} ${randomNumbers.slice(0, 3)} ${randomNumbers.slice(3)}`;
      }

    async fillRandomNumber() {
        const phoneNumber = this.generateRandomPhoneNumber();
        await this.phoneInput.fill(phoneNumber);
        return phoneNumber;
    }


    async openLoginPage(){
        await this.page.goto('https://master.credito365-co.avgr.it/user/registration/reg1');
    }

    async fillPhoneInput(){
        await this.phoneInput.fill('3009114399');
    }

    async clickToCheckBox(){
        await this.checkBox.click();
    }

    async clickToContinueButton(){
        await this.continueButton.click();
    }

    async waitForConfirmarButton(){
        await expect(this.confirmPhoneButtonModal).toBeVisible();
    }

    async clickToConfirmPhoneButtonModal(){
        await this.confirmPhoneButtonModal.click(); 
    }

    async clickToSendCodeButton(){
        await this.sendCodeButton.click();
    }

}
