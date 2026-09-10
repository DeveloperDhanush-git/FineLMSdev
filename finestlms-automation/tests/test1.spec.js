const { test, expect } = require('@playwright/test');

test('student can login', async ({ page }) => {

    await page.goto('http://localhost:5173/api/auth/login');

    await page.getByLabel('Email').fill(
        'student@gmail.com'
    );

    await page.getByLabel('Password').fill(
        'Student@123'
    );

    await page.getByRole('button', {
        name: 'Login'
    }).click();

    await expect(page).toHaveURL(
        /dashboard/
    );

});