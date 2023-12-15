import { Locator } from '@playwright/test';

export interface PageActions {
  clickButton(selector: string | Locator): void;
  enterText(selector: string | Locator, text: string): void;
  waitForSelector(selector: string): void;
  waitForLoadState(state?: 'load' | 'domcontentloaded' | 'networkidle'): void;
}
