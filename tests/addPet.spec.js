import { test, expect } from '@playwright/test';
import { USERS } from '../data/users.js';
import { LoginPage } from '../pages/loginPage.js';
import { HomePage } from '../pages/homePage.js';
import { PetsPage } from '../pages/petsPage.js';
import { CreatePetsPage } from '../pages/CreatePetsPage.js';

test('Create new pet', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const petsPage = new PetsPage(page);
  const createPetsPage = new CreatePetsPage(page);

  await loginPage.visit();
  await loginPage.login(USERS.NURSE.username, USERS.NURSE.password);
  await expect(page).toHaveURL('https://demo.jmix.io/petclinic/');
  await expect(homePage.logoPetclinic).toBeVisible();

  await homePage.navigateToMenu('Pets');

  await petsPage.clickCreatePet();
  await createPetsPage.createPet('Pico', '11/03/2000', 'Dragon', 'James', '17');
  const notification = page.locator('vaadin-notification-card').filter({
    hasText: 'saved successfully',
  });
  await expect(notification).toContainText('saved successfully');

  await homePage.logout();
  await expect(page).toHaveURL('https://demo.jmix.io/petclinic/login');
});
