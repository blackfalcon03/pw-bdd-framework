# Playwright BDD Test Automation Framework

This is a comprehensive test automation framework built with Playwright and Cucumber, following BDD principles.

## Features

- TypeScript support with strict type checking
- Cucumber BDD integration with Pretty formatter
- Page Object Model pattern with base page implementation
- Environment configuration management with dotenv
- Allure reporting with detailed test execution results
- Docker support for containerized test execution
- GitHub Actions CI/CD pipeline
- Parallel test execution capability
- Cross-browser testing support (Chromium, Firefox, WebKit)
- Custom utilities and helpers
- ESLint and Prettier integration for code quality
- VS Code workspace configuration for enhanced development experience

## Prerequisites

- Node.js 18+
- Docker (optional, for containerized execution)
- Git
- VS Code (recommended)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pw-bdd-framework
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

## Running Tests

### Locally

Run all tests:
```bash
npm test
```

Run tests in parallel:
```bash
npm run test:parallel
```

Generate and view Allure report:
```bash
npm run test:report
```

### Using Docker

Build the Docker image:
```bash
docker build -t pw-bdd-framework .
```

Run tests in Docker:
```bash
docker run pw-bdd-framework
```

## Project Structure

```
├── src/
│   ├── config/       # Configuration files
│   ├── features/     # Cucumber feature files
│   ├── pages/        # Page Object Model classes
│   ├── steps/        # Step definitions
│   ├── support/      # Support files (hooks, world)
│   └── utils/        # Utility functions
├── .env.example      # Example environment variables
├── .github/          # GitHub Actions workflows
├── cucumber.js       # Cucumber configuration
├── Dockerfile        # Docker configuration
├── package.json      # Project dependencies and scripts
└── tsconfig.json    # TypeScript configuration
```

## Best Practices

- Follow the Page Object Model pattern
- Write reusable step definitions
- Use meaningful feature descriptions
- Maintain test data separately
- Write clean, maintainable code
- Include proper error handling
- Add meaningful comments
- Follow TypeScript best practices

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

For GitHub Copilot users, please refer to our [Copilot Guidelines](.github/docs/COPILOT.md) for framework-specific conventions and best practices.

## License

This project is licensed under the ISC License.
