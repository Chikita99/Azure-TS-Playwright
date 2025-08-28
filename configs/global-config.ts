import { defineConfig, PlaywrightTestConfig } from '@playwright/test';

export const timeout = {
  action: 20000,
  navigation: 20000,
  expect: 10000,
};

export const use: PlaywrightTestConfig['use'] = {
  headless: true,
  baseURL: process.env.BASE_URL || 'https://automationexercise.com',
  browserName: 'chromium',
  launchOptions: {
    args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
  },
  contextOptions: {
    ignoreHTTPSErrors: true,
    acceptDownloads: true,
    timezoneId: 'UTC',
  },
  actionTimeout: timeout.action,
  screenshot: 'only-on-failure',
  navigationTimeout: timeout.navigation,
};

export const reporter: PlaywrightTestConfig['reporter'] = [
  ['junit', { outputFile: '../test-results/e2e-junit-results.xml' }],
  ['html', { outputFolder: '../playwright-report', open: 'never' }],
];

export default defineConfig({
  use,
  reporter,
});