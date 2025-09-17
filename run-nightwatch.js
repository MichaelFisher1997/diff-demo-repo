#!/usr/bin/env node

// Set environment variables for Docker Chrome
process.env.SELENIUM_HOST = 'localhost';
process.env.SELENIUM_PORT = '4445';
process.env.BASE_URL = 'http://localhost:4321';

// Import and run Nightwatch
import { spawn } from 'child_process';

const nightwatch = spawn('bunx', ['nightwatch', '--env', 'chrome', 'tests/screenshots.js'], {
  stdio: 'inherit',
  shell: true
});

nightwatch.on('exit', (code) => {
  process.exit(code);
});