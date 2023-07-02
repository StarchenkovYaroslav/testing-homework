describe('message', function () {
  it('shows when name input is empty', async function () {
    await this.browser.url('http://localhost:3000/hw/store/cart')

    const button = await this.browser.$('.Form-Submit')
    await button.click()

    const message = await this.browser.$("[data-testid='name-input-message']")
    const isMessageDisplayed = await message.isDisplayed()

    expect(isMessageDisplayed).toBeTruthy()
  })

  it('does not show when name input is filled', async function () {
    await this.browser.url('http://localhost:3000/hw/store/cart')

    const button = await this.browser.$('.Form-Submit')
    const input = await this.browser.$("[data-testid='name-input']")

    await input.setValue('Василий')
    await button.click()

    const message = await this.browser.$("[data-testid='name-input-message']")
    const isMessageDisplayed = await message.isDisplayed()

    expect(isMessageDisplayed).toBeFalsy()
  })

  it('shows when phone input value is invalid', async function () {
    await this.browser.url('http://localhost:3000/hw/store/cart')

    const button = await this.browser.$('.Form-Submit')
    const input = await this.browser.$("[data-testid='phone-input']")

    await input.setValue('123')
    await button.click()

    const message = await this.browser.$("[data-testid='phone-input-message']")
    const isMessageDisplayed = await message.isDisplayed()

    expect(isMessageDisplayed).toBeTruthy()
  })

  it('shows when phone input is empty', async function () {
    await this.browser.url('http://localhost:3000/hw/store/cart')

    const button = await this.browser.$('.Form-Submit')
    await button.click()

    const message = await this.browser.$("[data-testid='phone-input-message']")
    const isMessageDisplayed = await message.isDisplayed()

    expect(isMessageDisplayed).toBeTruthy()
  })

  it('does not show when phone input is valid', async function () {
    await this.browser.url('http://localhost:3000/hw/store/cart')

    const button = await this.browser.$('.Form-Submit')
    const input = await this.browser.$("[data-testid='phone-input']")

    await input.setValue('+79998887766')
    await button.click()

    const message = await this.browser.$("[data-testid='phone-input-message']")
    const isMessageDisplayed = await message.isDisplayed()

    expect(isMessageDisplayed).toBeFalsy()
  })

  it('shows when address input is empty', async function () {
    await this.browser.url('http://localhost:3000/hw/store/cart')

    const button = await this.browser.$('.Form-Submit')
    await button.click()

    const message = await this.browser.$("[data-testid='address-input-message']")
    const isMessageDisplayed = await message.isDisplayed()

    expect(isMessageDisplayed).toBeTruthy()
  })

  it('does not show when address input is filled', async function () {
    await this.browser.url('http://localhost:3000/hw/store/cart')

    const button = await this.browser.$('.Form-Submit')
    const input = await this.browser.$("[data-testid='address-input']")

    await input.setValue('Улица Пушкина, дом Колотушкина')
    await button.click()

    const message = await this.browser.$("[data-testid='address-input-message']")
    const isMessageDisplayed = await message.isDisplayed()

    expect(isMessageDisplayed).toBeFalsy()
  })
})
