describe('base dynamic pages view', () => {
  it('catalog', async function () {
    await this.browser.url('http://localhost:3000/hw/store/catalog')
    await this.browser.assertView('plain', 'body')
  })

  it('product', async function () {
    await this.browser.url('http://localhost:3000/hw/store/catalog/1')
    await this.browser.assertView('plain', 'body')
  })

  it('cart', async function () {
    await this.browser.url('http://localhost:3000/hw/store/cart')
    await this.browser.assertView('plain', 'body')
  })
})

