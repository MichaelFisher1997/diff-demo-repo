module.exports = {
  src_folders: ['tests'],
  test_settings: {
    default: {
      launch_url: 'http://localhost:4324',
      selenium: {
        host: 'localhost',
        port: 4444,
        start_process: false
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: ['--no-sandbox', '--disable-dev-shm-usage'],
          w3c: false
        }
      },
      screenshots: {
        enabled: true,
        path: './screenshots',
        on_failure: true,
        on_error: true
      }
    },
    chrome: {
      launch_url: 'http://localhost:4324',
      selenium: {
        host: 'localhost',
        port: 4444,
        start_process: false
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: ['--no-sandbox', '--disable-dev-shm-usage'],
          w3c: false
        }
      },
      screenshots: {
        enabled: true,
        path: './screenshots',
        on_failure: true,
        on_error: true
      }
    }
  }
};