export class CreatePetsPage {
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator('#nameField').getByLabel('Name');
    this.birthDateInput = page.locator('#birthdateField').getByLabel('Birthdate');
    this.ownerInput = page
      .locator('#ownerField')
      .getByRole('button', { name: 'Open a lookup view to select a related entity' });
    this.typeInput = page
      .locator('#typeField')
      .getByRole('button', { name: 'Open a lookup view to select a related entity' });
    this.identificationNumberinput = page
      .locator('#identificationNumberField')
      .getByLabel('Identification Number');
  }

  async createPet(name, date, type, owner, idNumber) {
    await this.nameInput.fill(name);
    await this.selectBirthdate(date);
    await this.selectType(type);
    await this.selectOwner(owner);
    await this.identificationNumberinput.fill(idNumber);
    await this.clickButton('OK');
  }

  async clickButton(buttonName) {
    await this.page.locator(`vaadin-button:has-text("${buttonName}")`).click();
  }

  async selectType(type) {
    await this.typeInput.click();
    await this.page.locator(`vaadin-grid-cell-content:has-text("${type}")`).click();
    await this.clickButton('Select');
  }

  async selectOwner(owner) {
    await this.ownerInput.click();
    await this.page.locator('vaadin-grid-cell-content').getByText(owner, { exact: true }).click();
    await this.clickButton('Select');
  }

  async selectBirthdate(date) {
    await this.birthDateInput.fill(date);
    await this.page.keyboard.press('Enter');
  }
}
