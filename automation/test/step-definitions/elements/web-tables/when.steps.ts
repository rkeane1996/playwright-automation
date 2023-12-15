import { When } from '@cucumber/cucumber';
import CustomWorld from '../../../../src/util/custom-world';
import { RegistrationFormPage } from '../../../../src/page-objects/registration-form-page';
import { WebTablePage } from '../../../../src/page-objects/web-table-page';
import { generateEmail } from '../../../../src/util/faker';

When('User is added to Web Table', async function (this: CustomWorld) {
  await this.page.goto(`${process.env.WEBSITE_URL!}/webtables`);
  const registrationFormPage = new RegistrationFormPage(this.page);
  await registrationFormPage.addUser(this.user);
});

When('User Email Is Edited', async function (this: CustomWorld) {
  const newEmail = generateEmail();
  const registrationFormPage = new RegistrationFormPage(this.page);
  await registrationFormPage.editUserEmail(this.user.email, newEmail);
  this.user.email = newEmail;
});

When('User Is Deleted', async function (this: CustomWorld) {
  const webTablePage = new WebTablePage(this.page);
  await webTablePage.deleteUser(this.user.email);
});
