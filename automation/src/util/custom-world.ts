import { World, IWorldOptions } from '@cucumber/cucumber';
import * as messages from '@cucumber/messages';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { User } from '../types/user';

export default class CustomWorld extends World {
  constructor(options: IWorldOptions) {
    super(options);
  }
  feature?: messages.Pickle;
  context?: BrowserContext;
  page!: Page;
  browser!: Browser;
  testName?: string;
  startTime?: Date;
  user!: User;
}
