export class PetsPage {
  constructor(page) {
    this.page = page;
    this.createButton = page.locator('vaadin-button:has-text("Create")');
  }

  async clickCreatePet() {
    await this.createButton.click();
  }
}
