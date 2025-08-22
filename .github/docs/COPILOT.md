# GitHub Copilot Guidelines for pw-bdd-framework

This document provides guidelines for using GitHub Copilot effectively with this Playwright BDD test automation framework.

## Framework Structure

When working with this framework, Copilot understands and can assist with:

### Test Structure
```typescript
// Feature files (*.feature)
Feature: Component or functionality name
  Scenario: Specific test case
    Given precondition
    When action
    Then expected result

// Step definitions (*.steps.ts)
import { Given, When, Then } from '@cucumber/cucumber';
```

### Page Objects
```typescript
// Base structure for page objects (*.page.ts)
import { BasePage } from './base.page';

export class SamplePage extends BasePage {
    private selectors = {
        element: '#selector'
    };

    async performAction() {
        await this.click(this.selectors.element);
    }
}
```

## Copilot Best Practices

### 1. Writing Step Definitions
- Start with the feature file content
- Let Copilot suggest matching step definitions
- Use async/await consistently
- Include proper type annotations

Example:
```typescript
Given('I am on the {string} page', async function(pageName: string) {
    // Copilot will suggest relevant page object instantiation and navigation
});
```

### 2. Page Object Development
- Define private selectors at the top of the class
- Use meaningful method names describing the action
- Include proper error handling
- Add JSDoc comments for complex methods

### 3. Test Data Management
- Use environment variables for configurable data
- Create data helpers in the utils folder
- Avoid hardcoding test data

### 4. Custom Commands
- Extend the BasePage class for common operations
- Document complex custom commands
- Use TypeScript interfaces for method parameters

## Common Patterns

### 1. Waiting for Elements
```typescript
await this.waitForElement(selector, timeout);
```

### 2. Form Interactions
```typescript
await this.fill(selector, value);
await this.click(submitButton);
```

### 3. Assertions
```typescript
expect(await this.isVisible(element)).toBeTruthy();
```

## Tips for Better Copilot Suggestions

1. Start comments with clear intent:
```typescript
// Navigate to login page and enter credentials
```

2. Use consistent naming patterns:
```typescript
const buttonSelector = '#submit-button';
async clickSubmitButton() {
    // Copilot will suggest proper implementation
}
```

3. Follow type definitions:
```typescript
interface LoginData {
    username: string;
    password: string;
}
```

## Framework-Specific Conventions

### 1. Configuration Management
```typescript
import { config } from '../config/env';
```

### 2. Custom World Usage
```typescript
import { World } from '../support/world';
```

### 3. Hooks Implementation
```typescript
import { Before, After } from '@cucumber/cucumber';
```

## Common Snippets

### 1. New Feature File
```gherkin
Feature: Feature name
  As a [role]
  I want to [action]
  So that [benefit]
```

### 2. New Page Object
```typescript
export class NewPage extends BasePage {
    private selectors = {
        // Define selectors here
    };
}
```

### 3. New Step Definition
```typescript
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
```

## Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Cucumber.js Documentation](https://cucumber.io/docs/cucumber/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
