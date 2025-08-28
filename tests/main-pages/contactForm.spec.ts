
import { test } from "../../fixtures/baseFixture";
import { expect } from "@playwright/test";
import { FileManagement } from "../../helpers/fileManagement";

test.beforeEach(async ({ page, basePage }) => {
    const fileManager = new FileManagement(page);

    await page.goto("/");
    await basePage.cookieScreenCTA();
    fileManager.clearDownloadFolder();

});

test("Check Contact Us Form @T0004", async ({ basePage, contactPage, page }) => {
    await page.locator(basePage.contactUsBtn).click();
    await expect(page).toHaveURL("https://automationexercise.com/contact_us");
    await expect(page.locator(contactPage.mainTitle)).toHaveText("Contact Us");
    await expect(page.locator(contactPage.subTitle)).toHaveText("Get In Touch");
    await page.locator(contactPage.nameForm).fill("Test");
    await page.locator(contactPage.emailForm).fill("test@gmail.com");
    await page.locator(contactPage.subjectForm).fill("Test");
    await page.locator(contactPage.messageForm).fill("My new message.");
    const fileInput = page.locator(contactPage.uploadFileBtn);
    await fileInput.setInputFiles("download/invoice.txt");
    page.on("dialog", async (dialog) => {
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.locator(contactPage.submitBtn).click();
    await expect(page.locator(contactPage.successMessage)).toHaveText("Success! Your details have been submitted successfully.");
});

test.afterEach(async () => {

});
