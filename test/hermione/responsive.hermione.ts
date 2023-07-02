// @ts-ignore
async function takeScreenshots(browser) {
  browser.setWindowSize(1400, (await browser.getWindowSize()).height)
  await browser.assertView('1400', 'body')

  browser.setWindowSize(1200, (await browser.getWindowSize()).height)
  await browser.assertView('1200', 'body')

  browser.setWindowSize(992, (await browser.getWindowSize()).height)
  await browser.assertView('992', 'body')

  browser.setWindowSize(768, (await browser.getWindowSize()).height)
  await browser.assertView('768', 'body')

  browser.setWindowSize(576, (await browser.getWindowSize()).height)
  await browser.assertView('576', 'body')

  browser.setWindowSize(320, (await browser.getWindowSize()).height)
  await browser.assertView('320', 'body')
}


describe('pages are responsive', () => {
  it('main', async function () {
    const browser = this.browser
    await browser.url('http://localhost:3000/hw/store')

    await takeScreenshots(browser)
  })

  it('catalog', async function () {
    const browser = this.browser
    await browser.url('http://localhost:3000/hw/store/catalog')

    await takeScreenshots(browser)
  })

  it('product', async function () {
    const browser = this.browser
    await browser.url('http://localhost:3000/hw/store/catalog/1')

    await takeScreenshots(browser)
  })

  it('delivery', async function () {
    const browser = this.browser
    await browser.url('http://localhost:3000/hw/store/delivery')

    await takeScreenshots(browser)
  })

  it('contacts', async function () {
    const browser = this.browser
    await browser.url('http://localhost:3000/hw/store/contacts')

    await takeScreenshots(browser)
  })

  it('cart', async function () {
    const browser = this.browser
    await browser.url('http://localhost:3000/hw/store/cart')

    await takeScreenshots(browser)
  })
})

