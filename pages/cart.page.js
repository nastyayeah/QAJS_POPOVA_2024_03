import PlaywrightDevPage from './base.page'

export default class CartPage extends PlaywrightDevPage {
  constructor(page) {
    super(page)
    this.addedToCartBackpack = '#item_4_title_link'
    this.addedToCartBikeLight = '#item_0_title_link'
    this.addedToCartTShirt = '#item_1_title_link'
    this.removeFromCartBackpackBtn = '#remove-sauce-labs-backpack'
    this.removeFromCartBikeLightBtn = '#remove-sauce-labs-bike-light'
    this.removeFromCartTShirtBtn = '#remove-sauce-labs-bolt-t-shirt'
    this.continueShoppingBtn = '#continue-shopping'
    this.checkoutBtn = '#checkout'
  }

  createAddedToCartItemsDict() {
    return {
      backpack: this.addedToCartBackpack,
      'bike-light': this.addedToCartBikeLight,
      't-shirt': this.addedToCartTShirt,
    }
  }

  createRemoveFromCartItemsDict() {
    return {
      backpack: this.removeFromCartBackpackBtn,
      'bike-light': this.removeFromCartBikeLightBtn,
      't-shirt': this.removeFromCartTShirtBtn,
    }
  }

  async clickCheckoutBtn() {
    await this.page.click(this.checkoutBtn)
  }
}
