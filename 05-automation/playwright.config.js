const { defineConfig } = require('@playwright/test');

const baseURL = process.env.BASE_URL;

if (!baseURL) {
  throw new Error('Set BASE_URL to the authorized Keke Craft test website before running tests.');
}

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
