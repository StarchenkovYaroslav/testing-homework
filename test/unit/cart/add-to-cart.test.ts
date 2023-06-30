import userEvent from '@testing-library/user-event'

import { CartState } from '../../../src/common/types'

import { renderApp } from '../helpers/render-app'
import { productsMock } from '../stubs/example-api-stub'
import { getCatItem } from '../stubs/cart-api-stub'

const productMock = productsMock[0]

const initialCartState: CartState = {
  [productMock.id]: getCatItem(productMock, 1),
}

const getCurrentCount = (productItem: HTMLElement) => {
  const countElement = productItem.querySelector('.Cart-Count')
  return Number(countElement.textContent)
}

it('add to cart button increases count in cart', async () => {
  const { findByTestId, getByTestId, history } = renderApp('/cart', initialCartState)

  const initialProductItem = getByTestId(productMock.id)
  const initialCount = getCurrentCount(initialProductItem)

  history.push(`catalog/${productMock.id}`)

  const product = await findByTestId('product')
  const addToCartButton =  product.querySelector('.ProductDetails-AddToCart')

  await userEvent.click(addToCartButton)

  history.push('/cart')

  const finalProductItem = await findByTestId(productMock.id)
  const finalCount = getCurrentCount(finalProductItem)

  expect(finalCount).toEqual(initialCount + 1)
})
