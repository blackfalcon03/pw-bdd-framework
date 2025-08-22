import { BasePage } from './base.page';
import { config } from '../config/env';

export class LoginPage extends BasePage {
    // Selectors
    private readonly usernameInput = '#username';
    private readonly passwordInput = '#password';
    private readonly loginButton = '#login-button';
    private readonly loggedInIndicator = '.user-profile';

    async navigate() {
        await super.navigate(`${config.baseUrl}/login`);
    }

    async login(username: string, password: string) {
        await this.fill(this.usernameInput, username);
        await this.fill(this.passwordInput, password);
    }

    async clickLoginButton() {
        await this.click(this.loginButton);
    }

    async isLoggedIn() {
        return await this.isVisible(this.loggedInIndicator);
    }
}
