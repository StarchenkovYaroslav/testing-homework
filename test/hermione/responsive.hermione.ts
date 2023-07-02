describe('pages are responsive', () => {
  describe('main', () => {
    it('1400', async function () {
      await this.browser.url('http://localhost:3000/hw/store')
      this.browser.setWindowSize(1400, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('1200', async function () {
      await this.browser.url('http://localhost:3000/hw/store')
      this.browser.setWindowSize(1200, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('992', async function () {
      await this.browser.url('http://localhost:3000/hw/store')
      this.browser.setWindowSize(992, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('768', async function () {
      await this.browser.url('http://localhost:3000/hw/store')
      this.browser.setWindowSize(768, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('576', async function () {
      await this.browser.url('http://localhost:3000/hw/store')
      this.browser.setWindowSize(576, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('320', async function () {
      await this.browser.url('http://localhost:3000/hw/store')
      this.browser.setWindowSize(320, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })
  })

  describe('catalog', () => {
    it('1400', async function () {
      await this.browser.url('http://localhost:3000/hw/store/catalog')
      this.browser.setWindowSize(1400, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('1200', async function () {
      await this.browser.url('http://localhost:3000/hw/store/catalog')
      this.browser.setWindowSize(1200, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('992', async function () {
      await this.browser.url('http://localhost:3000/hw/store/catalog')
      this.browser.setWindowSize(992, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('768', async function () {
      await this.browser.url('http://localhost:3000/hw/store/catalog')
      this.browser.setWindowSize(768, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('576', async function () {
      await this.browser.url('http://localhost:3000/hw/store/catalog')
      this.browser.setWindowSize(576, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('320', async function () {
      await this.browser.url('http://localhost:3000/hw/store/catalog')
      this.browser.setWindowSize(320, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })
  })

  describe('product', () => {
    it('1400', async function () {
      await this.browser.url('http://localhost:3000/hw/store/catalog/1')
      this.browser.setWindowSize(1400, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('1200', async function () {
      await this.browser.url('http://localhost:3000/hw/store/catalog/1')
      this.browser.setWindowSize(1200, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('992', async function () {
      await this.browser.url('http://localhost:3000/hw/store/catalog/1')
      this.browser.setWindowSize(992, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('768', async function () {
      await this.browser.url('http://localhost:3000/hw/store/catalog/1')
      this.browser.setWindowSize(768, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('576', async function () {
      await this.browser.url('http://localhost:3000/hw/store/catalog/1')
      this.browser.setWindowSize(576, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('320', async function () {
      await this.browser.url('http://localhost:3000/hw/store/catalog/1')
      this.browser.setWindowSize(320, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })
  })

  describe('delivery', () => {
    it('1400', async function () {
      await this.browser.url('http://localhost:3000/hw/store/delivery')
      this.browser.setWindowSize(1400, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('1200', async function () {
      await this.browser.url('http://localhost:3000/hw/store/delivery')
      this.browser.setWindowSize(1200, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('992', async function () {
      await this.browser.url('http://localhost:3000/hw/store/delivery')
      this.browser.setWindowSize(992, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('768', async function () {
      await this.browser.url('http://localhost:3000/hw/store/delivery')
      this.browser.setWindowSize(768, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('576', async function () {
      await this.browser.url('http://localhost:3000/hw/store/delivery')
      this.browser.setWindowSize(576, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('320', async function () {
      await this.browser.url('http://localhost:3000/hw/store/delivery')
      this.browser.setWindowSize(320, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })
  })

  describe('contacts', () => {
    it('1400', async function () {
      await this.browser.url('http://localhost:3000/hw/store/contacts')
      this.browser.setWindowSize(1400, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('1200', async function () {
      await this.browser.url('http://localhost:3000/hw/store/contacts')
      this.browser.setWindowSize(1200, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('992', async function () {
      await this.browser.url('http://localhost:3000/hw/store/contacts')
      this.browser.setWindowSize(992, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('768', async function () {
      await this.browser.url('http://localhost:3000/hw/store/contacts')
      this.browser.setWindowSize(768, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('576', async function () {
      await this.browser.url('http://localhost:3000/hw/store/contacts')
      this.browser.setWindowSize(576, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('320', async function () {
      await this.browser.url('http://localhost:3000/hw/store/contacts')
      this.browser.setWindowSize(320, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })
  })

  describe('cart', () => {
    it('1400', async function () {
      await this.browser.url('http://localhost:3000/hw/store/cart')
      this.browser.setWindowSize(1400, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('1200', async function () {
      await this.browser.url('http://localhost:3000/hw/store/cart')
      this.browser.setWindowSize(1200, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('992', async function () {
      await this.browser.url('http://localhost:3000/hw/store/cart')
      this.browser.setWindowSize(992, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('768', async function () {
      await this.browser.url('http://localhost:3000/hw/store/cart')
      this.browser.setWindowSize(768, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('576', async function () {
      await this.browser.url('http://localhost:3000/hw/store/cart')
      this.browser.setWindowSize(576, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })

    it('320', async function () {
      await this.browser.url('http://localhost:3000/hw/store/cart')
      this.browser.setWindowSize(320, (await this.browser.getWindowSize()).height)
      await this.browser.assertView('plain', 'body')
    })
  })
})

