#!/usr/bin/env node

import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import fs from 'fs';
import path from 'path';

async function takeScreenshots() {
  // Create screenshots directory if it doesn't exist
  if (!fs.existsSync('screenshots')) {
    fs.mkdirSync('screenshots', { recursive: true });
  }

  console.log('Setting up WebDriver...');
  
  // Configure Chrome options
  const options = new chrome.Options();
  options.addArguments('--headless');
  options.addArguments('--no-sandbox');
  options.addArguments('--disable-dev-shm-usage');
  options.addArguments('--disable-gpu');

  // Use environment variables for flexible configuration
  const seleniumHost = process.env.SELENIUM_HOST || 'localhost';
  const seleniumPort = process.env.SELENIUM_PORT || '4444';
  const baseUrl = process.env.BASE_URL || 'http://localhost:4323';

  console.log(`Using Selenium at: ${seleniumHost}:${seleniumPort}`);
  console.log(`Using base URL: ${baseUrl}`);

  // Connect to the Selenium Grid in Docker
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .usingServer(`http://${seleniumHost}:${seleniumPort}/wd/hub`)
    .build();

  console.log('Taking screenshots...');

  try {
    // Home page
    console.log(' - Home page');
    await driver.get(`${baseUrl}/`);
    await driver.wait(until.elementLocated(By.tagName('body')), 5000);
    const homeData = await driver.takeScreenshot();
    fs.writeFileSync('screenshots/home.png', homeData, 'base64');
    console.log('   ✓ Home screenshot saved');

    // Pricing page
    console.log(' - Pricing page');
    await driver.get(`${baseUrl}/pricing.html`);
    await driver.wait(until.elementLocated(By.tagName('body')), 5000);
    const pricingData = await driver.takeScreenshot();
    fs.writeFileSync('screenshots/pricing.png', pricingData, 'base64');
    console.log('   ✓ Pricing screenshot saved');

    // Playground page
    console.log(' - Playground page');
    await driver.get(`${baseUrl}/playground.html`);
    await driver.wait(until.elementLocated(By.tagName('body')), 5000);
    const playgroundData = await driver.takeScreenshot();
    fs.writeFileSync('screenshots/playground.png', playgroundData, 'base64');
    console.log('   ✓ Playground screenshot saved');

    console.log('✅ All screenshots saved to screenshots/ directory');
  } catch (error) {
    console.error('❌ Error taking screenshots:', error);
  } finally {
    try {
      await driver.quit();
      console.log('✅ WebDriver session closed');
    } catch (quitError) {
      console.error('❌ Error closing WebDriver:', quitError);
    }
  }
}

takeScreenshots().catch(console.error);