import userEvent from '@testing-library/user-event'

import { productsMock } from './stubs/example-api-stub'
import { renderApp } from './helpers/render-app'
import { CartItem } from '../../src/common/types'

const getCurrentCount = (productItem: HTMLElement) => {
  const countElement = productItem.querySelector('.Cart-Count')
  return Number(countElement.textContent)
}

it('add to cart button increases count in cart', async () => {
  const { findByTestId, getByTestId, history } = renderApp('/cart')

  const initialProductItem = getByTestId(productsMock[0].id)
  const initialCount = getCurrentCount(initialProductItem)

  history.push(`catalog/${productsMock[0].id}`)

  const product = await findByTestId('product')
  const addToCartButton =  product.querySelector('.ProductDetails-AddToCart')

  await userEvent.click(addToCartButton)

  history.push('/cart')

  const finalProductItem = await findByTestId(productsMock[0].id)
  const finalCount = getCurrentCount(finalProductItem)

  expect(finalCount).toEqual(initialCount + 1)
})

const getCartItemsData = (container: HTMLElement): CartItem[] => {
  return Array.from(container.querySelectorAll<HTMLElement>('.Cart-Item'))
    .map(item => ({
      name: item.querySelector('.Cart-Name').textContent,
      price: Number(item.querySelector('.Cart-Price').textContent.slice(1)),
      count: Number(item.querySelector('.Cart-Count').textContent),
    }))
}

it('cart saves state after page reload', async () => {
  const { findByTestId, history, container } = renderApp(`/catalog/${productsMock[1].id}`)

  const product = await findByTestId('product')
  const addToCartButton =  product.querySelector('.ProductDetails-AddToCart')

  await userEvent.click(addToCartButton)

  history.push('/cart')

  const initialCartItemsData = getCartItemsData(container)

  const finalCartItemsData = getCartItemsData(renderApp('/cart').container)

  expect(finalCartItemsData).toEqual(initialCartItemsData)
})
