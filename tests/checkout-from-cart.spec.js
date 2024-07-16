import { test, expect } from '@playwright/test'
import LoginPage from '../pages/login.page'
import HomePage from '../pages/home.page'
import CheckoutPage from '../pages/checkout.page'
import CartPage from '../pages/cart.page'

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)
  await loginPage.goToPage('https://www.saucedemo.com/')
  await loginPage.loginUser('standard_user', 'secret_sauce')
  await homePage.addToCartItem('backpack')
  await homePage.addToCartItem('bike-light')
  await homePage.addToCartItem('t-shirt')
  await homePage.clickCart()
})

test('Check checkout from cart page', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page)
  const cartPage = new CartPage(page)
  await cartPage.clickCheckoutBtn()
  await expect(page).toHaveURL(
    'https://www.saucedemo.com/checkout-step-one.html',
  )
  await checkoutPage.checkoutUser('Nastya', 'Nastenka', '6004')
  await expect(page).toHaveURL(
    'https://www.saucedemo.com/checkout-step-two.html',
  )
})
