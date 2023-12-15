import { Then } from '@cucumber/cucumber';
import CustomWorld from '../../../../src/util/custom-world';
import { WebTablePage } from '../../../../src/page-objects/web-table-page';
import { isFalse, isTrue } from '../../../../src/util/assertions';
import { Page } from '@playwright/test';

Then('User Is Displayed In Web Table', async function (this: CustomWorld) {
  const isUserCreated = await isUserDisplayedInWebTable(this.page, this.user.email);
  await isTrue(isUserCreated);
});

Then('User {string} Is Updated', async function (this: CustomWorld, updatedUserInfo: string) {
  const isUserUpdated = await isUserDisplayedInWebTable(this.page, this.user[updatedUserInfo]);
  await isTrue(isUserUpdated);
});

Then('User Has Been Deleted Sucessfully', async function (this: CustomWorld) {
  const isUserDisplayed = await isUserDisplayedInWebTable(this.page, this.user.email);
  await isFalse(isUserDisplayed);
});

async function isUserDisplayedInWebTable(page: Page, userInfo: string) {
  const webTablePage = new WebTablePage(page);
  return await webTablePage.isUserDisplayedInTable(userInfo);
}
