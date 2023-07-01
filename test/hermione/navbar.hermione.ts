describe('navbar on less than 576', function () {
  it('is hidden', async function () {
    await this.browser.url('http://localhost:3000/hw/store')
    this.browser.setWindowSize(570, (await this.browser.getWindowSize()).height)
    await this.browser.assertView('plain', '.navbar')
  })

  it('closes after link is clicked', async function () {
    await this.browser.url('http://localhost:3000/hw/store')
    this.browser.setWindowSize(570, (await this.browser.getWindowSize()).height)

    const toggler = await this.browser.$('.Application-Toggler')
    await toggler.click()

    const link = await this.browser.$('.nav-link')
    await link.click()

    await this.browser.assertView('plain', '.navbar')
  })
})
