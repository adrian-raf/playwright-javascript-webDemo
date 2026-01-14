export class HomePage {
  constructor(page) {
    this.page = page;
    this.logoutButton = page.locator(`#logoutButton`);
    this.logoPetclinic = page.locator('img.login-image');
  }

  async navigateToMenu(menuName) {
    await this.page.getByRole('link', { name: menuName }).click();
  }

  async logout() {
    await this.logoutButton.click();
  }
}
