describe('pages are static', async function () {
  it('main', async function () {
    await this.browser.url('http://localhost:3000/hw/store')
    await this.browser.assertView('plain', 'body')
  })

  it('delivery', async function () {
    await this.browser.url('http://localhost:3000/hw/store/delivery')
    await this.browser.assertView('plain', 'body')
  })

  it('contacts', async function () {
    await this.browser.url('http://localhost:3000/hw/store/contacts')
    await this.browser.assertView('plain', 'body')
  })
})
