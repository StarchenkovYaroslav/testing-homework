it('success message view', async function () {
  await this.browser.url('http://localhost:3000/hw/store/cart')

  const button = await this.browser.$('.Form-Submit')

  const nameInput = await this.browser.$("[data-testid='name-input']")
  const phoneInput = await this.browser.$("[data-testid='phone-input']")
  const addressInput = await this.browser.$("[data-testid='address-input']")

  await nameInput.setValue('Василий')
  await phoneInput.setValue('+79998887766')
  await addressInput.setValue('Улица Пушкина, дом Колотушкина')

  await button.click()

  await this.browser.assertView('plain', '.Cart-SuccessMessage')
})
