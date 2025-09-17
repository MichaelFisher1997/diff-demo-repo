describe('Screenshot Tests', function() {
  before((browser) => {
    browser.url('http://localhost:4324/');
  });

  after((browser) => {
    browser.end();
  });

  test('Home page screenshot', function(browser) {
    browser
      .url('http://localhost:4324/')
      .waitForElementVisible('body', 5000)
      .saveScreenshot('./screenshots/home.png');
  });

  test('Pricing page screenshot', function(browser) {
    browser
      .url('http://localhost:4324/pricing.html')
      .waitForElementVisible('body', 5000)
      .saveScreenshot('./screenshots/pricing.png');
  });

  test('Playground page screenshot', function(browser) {
    browser
      .url('http://localhost:4324/playground.html')
      .waitForElementVisible('body', 5000)
      .saveScreenshot('./screenshots/playground.png');
  });
});