describe('message shows when', function () {
  it('name input is empty', async function () {
    await this.browser.url('http://localhost:3000/hw/store/cart')

    const button = await this.browser.$('.Form-Submit')
    await button.click()

    const message = await this.browser.$("[data-testid='name-input-message']")
    const isMessageDisplayed = await message.isDisplayed()

    expect(isMessageDisplayed).toBeTruthy()
  })

  it('phone input value is invalid', async function () {
    await this.browser.url('http://localhost:3000/hw/store/cart')

    const button = await this.browser.$('.Form-Submit')
    const input = await this.browser.$("[data-testid='phone-input']")

    await input.setValue('123')
    await button.click()

    const message = await this.browser.$("[data-testid='phone-input-message']")
    const isMessageDisplayed = await message.isDisplayed()

    expect(isMessageDisplayed).toBeTruthy()
  })

  it('phone input is empty', async function () {
    await this.browser.url('http://localhost:3000/hw/store/cart')

    const button = await this.browser.$('.Form-Submit')
    await button.click()

    const message = await this.browser.$("[data-testid='phone-input-message']")
    const isMessageDisplayed = await message.isDisplayed()

    expect(isMessageDisplayed).toBeTruthy()
  })

  it('address input is empty', async function () {
    await this.browser.url('http://localhost:3000/hw/store/cart')

    const button = await this.browser.$('.Form-Submit')
    await button.click()

    const message = await this.browser.$("[data-testid='address-input-message']")
    const isMessageDisplayed = await message.isDisplayed()

    expect(isMessageDisplayed).toBeTruthy()
  })
})
