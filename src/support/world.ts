import { World as CucumberWorld } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { config } from '../config/env';

export class World extends CucumberWorld {
    private browser!: Browser;
    private context!: BrowserContext;
    public page!: Page;

    constructor(options: any) {
        super(options);
    }

    async init() {
        const { chromium } = require('@playwright/test');
        this.browser = await chromium.launch({
            headless: config.headless,
            slowMo: config.slowMo
        });
        this.context = await this.browser.newContext({
            viewport: config.viewport
        });
        this.page = await this.context.newPage();
    }

    async cleanup() {
        await this.page?.close();
        await this.context?.close();
        await this.browser?.close();
    }
}
