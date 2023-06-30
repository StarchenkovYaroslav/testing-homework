import { CartState } from '../../src/common/types'

import { renderApp } from './helpers/render-app'
import { productsMock } from './stubs/example-api-stub'
import { getCatItem } from './stubs/cart-api-stub'

const productMock = productsMock[0]

const initialCartState: CartState = {
  [productMock.id]: getCatItem(productMock, 1),
}

describe('cart badge is', () => {
  it('on the catalog page', async () => {
    const { findByTestId } = renderApp('/catalog', initialCartState)

    const catalog = await findByTestId('catalog')

    const productItem = Array.from(catalog.querySelectorAll<HTMLElement>('.ProductItem'))
      .find(item => Number(item.dataset.testid) === productMock.id)

    const cartBadge = productItem.querySelector('.CartBadge')

    expect(cartBadge).toBeTruthy()
  })

  it('on the product page', async () => {
    const { findByTestId } = renderApp(`/catalog/${productMock.id}`, initialCartState)

    const product = await findByTestId('product')

    const cartBadge = product.querySelector('.CartBadge')

    expect(cartBadge).toBeTruthy()
  })
})
