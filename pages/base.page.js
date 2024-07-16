export default class PlaywrightDevPage {
  constructor(page) {
    this.page = page
  }

  async goToPage(pageURL) {
    await this.page.goto(pageURL)
  }
}
