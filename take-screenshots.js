import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

(async () => {
  // Ensure screenshots directory exists
  if (!fs.existsSync('screenshots')) {
    fs.mkdirSync('screenshots', { recursive: true });
  }

  console.log('Launching browser...');
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('Taking screenshots...');

  // Home page
  console.log(' - Home page');
  await page.goto('http://localhost:4321/');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'screenshots/home.png', fullPage: true });

  // Pricing page
  console.log(' - Pricing page');
  await page.goto('http://localhost:4321/pricing.html');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'screenshots/pricing.png', fullPage: true });

  // Playground page
  console.log(' - Playground page');
  await page.goto('http://localhost:4321/playground.html');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'screenshots/playground.png', fullPage: true });

  console.log('Screenshots saved to screenshots/ directory');

  await browser.close();
  process.exit(0);
})();