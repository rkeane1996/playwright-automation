import { Page } from '@playwright/test';
import webTableSelectors from '../selectors/web-table-selectors.json';
import { WebTablePage } from './web-table-page';
import { User } from '../types/user';

export class RegistrationFormPage extends WebTablePage {
  constructor(page: Page) {
    super(page);
    this.firstNameSelector = webTableSelectors.registrationFormSelectors.firstNameTextBox;
    this.lastNameSelector = webTableSelectors.registrationFormSelectors.lastNameTextBox;
    this.emailSelector = webTableSelectors.registrationFormSelectors.emailTextBox;
    this.ageSelector = webTableSelectors.registrationFormSelectors.ageTextBox;
    this.salarySelector = webTableSelectors.registrationFormSelectors.salaryTextBox;
    this.departmentSelector = webTableSelectors.registrationFormSelectors.departmentTextBox;
    this.submitButtonSelector = webTableSelectors.registrationFormSelectors.submitButton;
  }

  private firstNameSelector;
  private lastNameSelector;
  private emailSelector;
  private ageSelector;
  private salarySelector;
  private departmentSelector;
  private submitButtonSelector;

  async addUser(userInfo: User) {
    await this.clickButton(this.addButton);
    await this.enterText(this.firstNameSelector, userInfo.firstName);
    await this.enterText(this.lastNameSelector, userInfo.lastName);
    await this.enterText(this.emailSelector, userInfo.email);
    await this.enterText(this.ageSelector, userInfo.age.toString());
    await this.enterText(this.salarySelector, userInfo.salary.toString());
    await this.enterText(this.departmentSelector, userInfo.department);
    await this.clickButton(this.submitButtonSelector);
    await this.page.waitForLoadState();
  }

  async editUserEmail(currentEmail: string, newEmail: string) {
    await this.enterText(this.searchTextBox, currentEmail);
    await this.clickButton(this.editButton, 500);
    await this.enterText(this.emailSelector, newEmail);
    await this.clickButton(this.submitButtonSelector);
    await this.page.waitForLoadState();
  }
}
