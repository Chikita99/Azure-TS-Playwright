import {config, timeout} from './global-config'
import {defineConfig} from '@playwright/test'


export default defineConfig({
    testDir: '../tests',
    testMatch: ['tests/main-pages/contactForm.spec.ts'],
    timeout: 240 * 1000,
    expect: {
        timeout: timeout.expect,
        toHaveScreenshot: {
            maxDiffPixels: 100
        }
    },
    fullyParallel: true,
    workers: 1,
    reporter: [
        ['allure-playwright', { outputFolder: 'allure-results' }],
        ['line'],
        ['html', {            // adding html report
            outputFolder: '../playwright-report',  // report folder
            open: 'never'     // do not open automaticaly
        }],
        ['dot'],
    ],
    use: {...config.pwConfig.use, headless: false}
})


