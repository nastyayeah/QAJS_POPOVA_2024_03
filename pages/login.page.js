import PlaywrightDevPage from './base.page'

export default class LoginPage extends PlaywrightDevPage {
  constructor(page) {
    super(page)
    this.username = '#user-name'
    this.password = '#password'
    this.loginButton = '#login-button'
    this.errorMessage = '.error-message-container'
  }

  async loginUser(username, password) {
    await this.page.fill(this.username, username)
    await this.page.fill(this.password, password)
    await this.page.click(this.loginButton)
  }
}
