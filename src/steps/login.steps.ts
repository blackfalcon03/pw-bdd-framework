import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { World } from '../support/world';

Given('I am on the login page', async function(this: World) {
    const loginPage = new LoginPage(this.page);
    await loginPage.navigate();
});

When('I enter valid username and password', async function(this: World) {
    const loginPage = new LoginPage(this.page);
    await loginPage.login(process.env.TEST_USERNAME || 'test@example.com', 
                         process.env.TEST_PASSWORD || 'password123');
});

When('I click the login button', async function(this: World) {
    const loginPage = new LoginPage(this.page);
    await loginPage.clickLoginButton();
});

Then('I should be logged in successfully', async function(this: World) {
    const loginPage = new LoginPage(this.page);
    expect(await loginPage.isLoggedIn()).toBeTruthy();
});
