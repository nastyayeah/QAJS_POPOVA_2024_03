import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')
  await page.fill('#user-name', 'standard_user')
  await page.fill('#password', 'secret_sauce')
  await page.click('#login-button')
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})

test('Should add to cart backpack', async ({ page }) => {
  await page.click('#add-to-cart-sauce-labs-backpack')
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1')
  await expect(page.locator('#remove-sauce-labs-backpack')).toBeVisible()
})

test('Check checkout from cart page', async ({ page }) => {
  await page.click('#add-to-cart-sauce-labs-backpack')
  await page.click('.shopping_cart_link')
  await page.click('#checkout')
  await expect(page).toHaveURL(
    'https://www.saucedemo.com/checkout-step-one.html',
  )
  await page.fill('#first-name', 'Nastya')
  await page.fill('#last-name', 'Nastyanka')
  await page.fill('#postal-code', '6004')
  await page.click('#continue')
  await expect(page).toHaveURL(
    'https://www.saucedemo.com/checkout-step-two.html',
  )
})
