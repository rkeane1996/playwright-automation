import { Page } from '@playwright/test';
import { BasePage } from './base-page';
import webTableSelectors from '../selectors/web-table-selectors.json';

export class WebTablePage extends BasePage {
  constructor(page: Page) {
    super(page);
    this.addButton = webTableSelectors.addButton;
    this.searchTextBox = webTableSelectors.searchTextBox;
    this.editButton = webTableSelectors.editButton;
    this.deleteButton = webTableSelectors.deleteButton;
  }

  protected addButton;
  protected searchTextBox;
  protected editButton;
  private deleteButton;

  async isUserDisplayedInTable(userAttribute: string) {
    await this.enterText(this.searchTextBox, userAttribute);
    const userDisplayed = await this.getElementByRole('gridcell', userAttribute);
    return await userDisplayed.isVisible();
  }

  async deleteUser(userEmail: string) {
    await this.enterText(this.searchTextBox, userEmail);
    await this.clickButton(this.deleteButton, 500);
  }
}
