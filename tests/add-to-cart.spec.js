import { test, expect } from '@playwright/test'
import LoginPage from '../pages/login.page'
import HomePage from '../pages/home.page'
import CartPage from '../pages/cart.page'

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.goToPage('https://www.saucedemo.com/')
  await loginPage.loginUser('standard_user', 'secret_sauce')
})

test('Should add to cart backpack', async ({ page }) => {
  const homePage = new HomePage(page)
  const cartPage = new CartPage(page)
  await homePage.addToCartItem('backpack')
  await expect(page.locator(homePage.cartBadge)).toHaveText('1')
  await expect(page.locator(homePage.removeFromCartBackpackBtn)).toBeVisible()
  await homePage.clickCart()
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
  await expect(page.locator(cartPage.addedToCartBackpack)).toBeVisible()
})

test('Should add to cart backpack, bike-light, t-shirt', async ({ page }) => {
  const homePage = new HomePage(page)
  const cartPage = new CartPage(page)
  await homePage.addToCartItem('backpack')
  await homePage.addToCartItem('bike-light')
  await homePage.addToCartItem('t-shirt')
  await expect(page.locator(homePage.cartBadge)).toHaveText('3')
  await homePage.clickCart()
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
  await expect(page.locator(cartPage.addedToCartBackpack)).toBeVisible()
  await expect(page.locator(cartPage.addedToCartBikeLight)).toBeVisible()
  await expect(page.locator(cartPage.addedToCartTShirt)).toBeVisible()
})
