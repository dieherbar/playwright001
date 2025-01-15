//@ts-check
const { test, expect } = require('@playwright/test');

test('verify home page', async ({ page }) => {
    // Navigate to the home page
    await page.goto('https://dieherbar.github.io/tt_practica/');

    // Verify the title of the home page
    await expect(page).toHaveTitle('Kamba Indumentaria');

    // Verify the presence of a specific element on the home page
    const element = await page.locator('h1');
    await expect(element).toBeVisible();
});