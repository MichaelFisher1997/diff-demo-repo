import { test, expect } from '@playwright/test';

test.describe('Screenshot Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
  });

  test('Home page screenshot', async ({ page }) => {
    await page.goto('http://localhost:4321/');
    await page.screenshot({ path: 'screenshots/home.png', fullPage: true });
  });

  test('Pricing page screenshot', async ({ page }) => {
    await page.goto('http://localhost:4321/pricing.html');
    await page.screenshot({ path: 'screenshots/pricing.png', fullPage: true });
  });

  test('Playground page screenshot', async ({ page }) => {
    await page.goto('http://localhost:4321/playground.html');
    await page.screenshot({ path: 'screenshots/playground.png', fullPage: true });
  });
});