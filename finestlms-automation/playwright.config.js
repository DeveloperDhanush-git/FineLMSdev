require('dotenv').config();

const {
    defineConfig
} = require('@playwright/test');

module.exports = defineConfig({

    testDir: './tests',

    timeout: 30 * 1000,

    expect: {
        timeout: 5 * 1000
    },

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    reporter: 'html',

    use: {

        baseURL:
            process.env.BASE_URL ||
            'http://localhost:5173',

        screenshot:
            'only-on-failure',

        video:
            'on-first-retry',

        trace:
            'on-first-retry',

        headless: true
    },

    webServer: {

        command: 'npm run dev',

        url: 'http://localhost:5173',

        reuseExistingServer:
            !process.env.CI

    }

});