import { defineConfig } from '@playwright/test';
import globalConfig, { reporter as sharedReporter } from './global-config'; 

export default defineConfig({
  testDir: '../tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  testMatch: ['tests/**/*.spec.ts'],
  timeout: 480 * 1000,
  expect: {
    timeout: globalConfig.expect?.timeout || 10000,
  },
  workers: 2,
  reporter: sharedReporter,
  use: {
    ...globalConfig.use,
    headless: true,
  },
});
