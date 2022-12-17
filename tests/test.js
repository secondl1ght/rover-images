import { expect, test } from '@playwright/test';

test('home page renders image', async ({ page }) => {
	await page.goto('/');
	expect(await page.waitForSelector('#rover-image'));
});

test('latest page renders image', async ({ page }) => {
	await page.goto('/latest');
	expect(await page.waitForSelector('#rover-image'));
});

test('random page renders image', async ({ page }) => {
	await page.goto('/random');
	expect(await page.waitForSelector('#rover-image'));
});

test('index page renders image', async ({ page }) => {
	await page.goto('/0');
	expect(await page.waitForSelector('#rover-image'));
});
