import {
  chromium,
  ChromiumBrowser,
  firefox,
  FirefoxBrowser,
  LaunchOptions,
  webkit,
  WebKitBrowser
} from '@playwright/test';

let browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;

export async function createBrowser(browserName: string) {
  switch (browserName) {
    case 'firefox':
      browser = await firefox.launch(browserConfig);
      break;
    case 'webkit':
      browser = await webkit.launch(browserConfig);
      break;
    default:
      browser = await chromium.launch(browserConfig);
  }
  return browser;
}

const browserConfig: LaunchOptions = {
  headless: true
};
