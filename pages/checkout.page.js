import PlaywrightDevPage from './base.page'

export default class CheckoutPage extends PlaywrightDevPage {
  constructor(page) {
    super(page)
    this.firstname = '#first-name'
    this.lastname = '#last-name'
    this.postalCode = '#postal-code'
    this.continueButton = '#continue'
    this.errorMessage = '.error-button'
  }

  async checkoutUser(firstname, lastname, postalCode) {
    await this.page.fill(this.firstname, firstname)
    await this.page.fill(this.lastname, lastname)
    await this.page.fill(this.postalCode, postalCode)
    await this.page.click(this.continueButton)
  }
}
