import { CartState } from '../../../src/common/types'

import { renderApp } from '../helpers/render-app'
import { productsMock } from '../stubs/example-api-stub'
import { getCatItem } from '../stubs/cart-api-stub'

const initialCartState: CartState = {
  [productsMock[0].id]: getCatItem(productsMock[0], 2),
  [productsMock[1].id]: getCatItem(productsMock[1], 2),
}

it('cart total count equals item cards count', async () => {
  const { getByTestId } = renderApp('/cart', initialCartState)

  const totalCountInHeader = Number(getByTestId('cart-link').textContent.match(/\(([1-9]*)\)/)[1])

  expect(totalCountInHeader).toEqual(2)
})