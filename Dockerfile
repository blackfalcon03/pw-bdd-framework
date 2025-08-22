FROM mcr.microsoft.com/playwright:v1.39.0-focal

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy project files
COPY . .

# Set environment variables
ENV HEADLESS=true
ENV BROWSER=chromium

# Command to run tests
CMD ["npm", "run", "test:report"]
