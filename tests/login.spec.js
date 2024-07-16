import { test, expect } from '@playwright/test'
import LoginPage from '../pages/login.page'

test('Should login standart user', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.goToPage('https://www.saucedemo.com/')
  await loginPage.loginUser('standard_user', 'secret_sauce')
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})

test('Should login invalid user', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.goToPage('https://www.saucedemo.com/')
  await loginPage.loginUser('locked_out_user', 'secret_sauce')
  await expect(page).toHaveURL('https://www.saucedemo.com/')
  await expect(page.locator(loginPage.errorMessage)).toHaveText(
    'Epic sadface: Sorry, this user has been locked out.',
  )
})
