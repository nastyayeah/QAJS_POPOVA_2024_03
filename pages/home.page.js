import PlaywrightDevPage from './base.page'

export default class HomePage extends PlaywrightDevPage {
  constructor(page) {
    super(page)
    this.addToCartBackpackBtn = '#add-to-cart-sauce-labs-backpack'
    this.addToCartBikeLightBtn = '#add-to-cart-sauce-labs-bike-light'
    this.addToCartTShirtBtn = '#add-to-cart-sauce-labs-bolt-t-shirt'
    this.removeFromCartBackpackBtn = '#remove-sauce-labs-backpack'
    this.removeFromCartBikeLightBtn = '#remove-sauce-labs-bike-light'
    this.removeFromCartTShirtBtn = '#remove-sauce-labs-bolt-t-shirt'
    this.cartButton = '.shopping_cart_link'
    this.cartBadge = '.shopping_cart_badge'
  }

  createAddToCartDict() {
    return {
      backpack: this.addToCartBackpackBtn,
      'bike-light': this.addToCartBikeLightBtn,
      't-shirt': this.addToCartTShirtBtn,
    }
  }

  createRemoveFromCartDict() {
    return {
      backpack: this.removeFromCartBackpackBtn,
      'bike-light': this.removeFromCartBikeLightBtn,
      't-shirt': this.removeFromCartTShirtBtn,
    }
  }

  async addToCartItem(itemName) {
    const addToCartDict = this.createAddToCartDict()
    await this.page.click(addToCartDict[itemName])
  }

  async removeFromCartItem(itemName) {
    const removeFromCartDict = this.createRemoveFromCartDict()
    await this.page.click(removeFromCartDict[itemName])
  }

  async clickCart() {
    await this.page.click(this.cartButton)
  }
}
