#!/usr/bin/env node

import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import fs from 'fs';

async function simpleTest() {
  console.log('Starting simple test...');
  
  const options = new chrome.Options();
  options.addArguments('--headless');
  options.addArguments('--no-sandbox');
  options.addArguments('--disable-dev-shm-usage');
  options.addArguments('--disable-gpu');

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .usingServer('http://localhost:4445/wd/hub')
    .build();

  try {
    console.log('Connecting to local server...');
    await driver.get('http://localhost:4324/');
    console.log('Connected successfully!');
    
    const title = await driver.getTitle();
    console.log('Page title:', title);
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await driver.quit();
    console.log('Test completed');
  }
}

simpleTest().catch(console.error);