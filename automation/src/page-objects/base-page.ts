import { Locator, Page } from '@playwright/test';

export class BasePage {
  protected page: Page;
  [key: string]: any;

  constructor(page: Page) {
    this.page = page;
  }

  async enterText(type: string | Locator, text: string): Promise<void> {
    if (typeof type === 'string') {
      await this.page.fill(type, text);
    } else {
      await type.fill(text);
    }
  }

  async clickButton(type: string | Locator, delay?: number): Promise<void> {
    if (typeof type === 'string') {
      await this.page.click(type, { delay });
    } else {
      await type.click({ delay });
    }
  }

  async waitForSelector(selector: string): Promise<void> {
    await this.page.waitForSelector(selector);
  }

  async waitForLoadState(state?: 'load' | 'domcontentloaded' | 'networkidle'): Promise<void> {
    await this.page.waitForLoadState(state);
  }

  async getElementByRole(
    role:
      | 'alert'
      | 'alertdialog'
      | 'application'
      | 'article'
      | 'banner'
      | 'blockquote'
      | 'button'
      | 'caption'
      | 'cell'
      | 'checkbox'
      | 'code'
      | 'columnheader'
      | 'combobox'
      | 'complementary'
      | 'contentinfo'
      | 'definition'
      | 'deletion'
      | 'dialog'
      | 'directory'
      | 'document'
      | 'emphasis'
      | 'feed'
      | 'figure'
      | 'form'
      | 'generic'
      | 'grid'
      | 'gridcell'
      | 'group'
      | 'heading'
      | 'img'
      | 'insertion'
      | 'link'
      | 'list'
      | 'listbox'
      | 'listitem'
      | 'log'
      | 'main'
      | 'marquee'
      | 'math'
      | 'meter'
      | 'menu'
      | 'menubar'
      | 'menuitem'
      | 'menuitemcheckbox'
      | 'menuitemradio'
      | 'navigation'
      | 'none'
      | 'note'
      | 'option'
      | 'paragraph'
      | 'presentation'
      | 'progressbar'
      | 'radio'
      | 'radiogroup'
      | 'region'
      | 'row'
      | 'rowgroup'
      | 'rowheader'
      | 'scrollbar'
      | 'search'
      | 'searchbox'
      | 'separator'
      | 'slider'
      | 'spinbutton'
      | 'status'
      | 'strong'
      | 'subscript'
      | 'superscript'
      | 'switch'
      | 'tab'
      | 'table'
      | 'tablist'
      | 'tabpanel'
      | 'term'
      | 'textbox'
      | 'time'
      | 'timer'
      | 'toolbar'
      | 'tooltip'
      | 'tree'
      | 'treegrid'
      | 'treeitem',
    nameValue: string
  ) {
    return await this.page.getByRole(role, { name: nameValue });
  }
}
