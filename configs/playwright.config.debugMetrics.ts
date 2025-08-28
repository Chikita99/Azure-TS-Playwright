import globalConfig, { reporter as sharedReporter } from './global-config'; 
import {defineConfig} from '@playwright/test'

export default defineConfig({
    testDir: '../tests',
    fullyParallel: true,
    testMatch: ['tests/main-pages/contactForm.spec.ts'],
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
})
