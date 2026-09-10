const {
    test,
    expect
} = require('@playwright/test');

test('FinestLMS homepage should load', async ({
    page
}) => {

    await page.goto('/');

    await expect(page).toHaveTitle(
        /vite-project/i
    );

});