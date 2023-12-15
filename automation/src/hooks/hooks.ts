import {
  After,
  Before,
  ITestCaseHookParameter,
  Status,
  setDefaultTimeout,
  setWorldConstructor
} from '@cucumber/cucumber';
import CustomWorld from '../util/custom-world';
import { createBrowser } from '../web-browser/browser-config';
import 'dotenv/config';

const TIMEOUT = 60_000;
setWorldConstructor(CustomWorld);
setDefaultTimeout(TIMEOUT);

Before(async function (this: CustomWorld, { pickle }: ITestCaseHookParameter) {
  const browser = await createBrowser(process.env.BROWSER!);
  const context = await browser.newContext({
    recordVideo: {
      dir: `reporting/video/${pickle.name}/`
    }
  });
  const page = await context.newPage();
  page.setDefaultTimeout(TIMEOUT);
  this.browser = browser;
  this.page = page;
  this.context = context;
  this.feature = pickle;
  this.startTime = new Date();
});

After(async function (this: CustomWorld, { pickle: { name }, result }: ITestCaseHookParameter) {
  if (result?.status === Status.FAILED) {
    await this.page.screenshot({
      path: `reporting/screenshots/${name}.png`,
      fullPage: true
    });
  }
  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();
});
