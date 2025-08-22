import { Page } from '@playwright/test';

export class BasePage {
    constructor(protected page: Page) {}

    async navigate(path: string) {
        await this.page.goto(path);
    }

    async waitForElement(selector: string, timeout?: number) {
        return await this.page.waitForSelector(selector, { timeout });
    }

    async click(selector: string) {
        await this.waitForElement(selector);
        await this.page.click(selector);
    }

    async fill(selector: string, text: string) {
        await this.waitForElement(selector);
        await this.page.fill(selector, text);
    }

    async getText(selector: string) {
        await this.waitForElement(selector);
        const element = await this.page.$(selector);
        return await element?.textContent() || '';
    }

    async isVisible(selector: string) {
        const element = await this.page.$(selector);
        return element !== null && await element.isVisible();
    }
}
