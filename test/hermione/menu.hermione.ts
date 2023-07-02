describe('menu on less than 576', function () {
  it('is hidden', async function () {
    await this.browser.url('http://localhost:3000/hw/store')

    this.browser.setWindowSize(570, (await this.browser.getWindowSize()).height)

    const navbar = await this.browser.$('.Application-Menu')
    const isNavbarDisplayed = await navbar.isDisplayed()

    expect(isNavbarDisplayed).toBeFalsy()
  })

  it('closes after link is clicked', async function () {
    await this.browser.url('http://localhost:3000/hw/store')
    this.browser.setWindowSize(570, (await this.browser.getWindowSize()).height)

    const toggler = await this.browser.$('.Application-Toggler')
    await toggler.click()

    const link = await this.browser.$('.nav-link')
    await link.click()

    const navbar = await this.browser.$('.Application-Menu')
    const isNavbarDisplayed = await navbar.isDisplayed()

    expect(isNavbarDisplayed).toBeFalsy()
  })
})
