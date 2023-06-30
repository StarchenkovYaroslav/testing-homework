import { renderApp } from './helpers/render-app'
import { productsMock } from './stubs/example-api-stub'

const productMock = productsMock[0]

describe('cart badge is', () => {
  it('on the catalog page', async () => {
    const { findByTestId } = renderApp('/catalog')

    const catalog = await findByTestId('catalog')

    const productItem = Array.from(catalog.querySelectorAll<HTMLElement>('.ProductItem'))
      .find(item => Number(item.dataset.testid) === productMock.id)

    const cartBadge = productItem.querySelector('.CartBadge')

    expect(cartBadge).toBeTruthy()
  })

  it('on the product page', async () => {
    const { findByTestId } = renderApp(`/catalog/${productMock.id}`)

    const product = await findByTestId('product')

    const cartBadge = product.querySelector('.CartBadge')

    expect(cartBadge).toBeTruthy()
  })
})
