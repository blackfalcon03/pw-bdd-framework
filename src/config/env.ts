import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({
    path: path.resolve(__dirname, '../../.env')
});

export const config = {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    browser: process.env.BROWSER || 'chromium',
    defaultTimeout: parseInt(process.env.DEFAULT_TIMEOUT || '30000'),
    headless: process.env.HEADLESS === 'true',
    slowMo: parseInt(process.env.SLOW_MO || '0'),
    retries: parseInt(process.env.RETRIES || '0'),
    viewport: {
        width: parseInt(process.env.VIEWPORT_WIDTH || '1280'),
        height: parseInt(process.env.VIEWPORT_HEIGHT || '720')
    }
};
