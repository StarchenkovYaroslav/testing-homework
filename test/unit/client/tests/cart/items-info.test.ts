import { CartItem, CartState } from '../../../../../src/common/types'

import { renderApp } from '../../helpers/render-app'
import { productsMock } from '../../../mocks/products.mock'
import { getCatItem } from '../../../helpers/get-cart-item'

interface CartItemData extends CartItem {
  total: number,
}

const initialCartState: CartState = {
  [productsMock[0].id]: getCatItem(productsMock[0], 2),
  [productsMock[1].id]: getCatItem(productsMock[1], 2),
}

const cartStateData: CartItemData[] = Object.values(initialCartState)
  .map(item => ({ ...item, total: item.price * item.count }))

const cartStateIds = Object.keys(initialCartState)

const cartStateOrderPrice = Object.values(initialCartState)
  .reduce((orderPrice, cartItem) => orderPrice + cartItem.price * cartItem.count, 0)

const getCartItemsData = (items: HTMLElement[]): CartItemData[] => {
  return items
    .map(item => ({
      name: item.querySelector('.Cart-Name').textContent,
      price: Number(item.querySelector('.Cart-Price').textContent.slice(1)),
      count: Number(item.querySelector('.Cart-Count').textContent),
      total: Number(item.querySelector('.Cart-Total').textContent.slice(1)),
    }))
}

describe('cart page contains', () => {
  describe('table', () => {
    let items: HTMLElement[]

    beforeAll(() => {
      const { container } = renderApp('/cart', initialCartState)

      items = Array.from(container.querySelectorAll<HTMLElement>('.Cart-Item'))
    })

    it('with all items', () => {
      const itemsTestIds = items.map(item => item.dataset.testid)

      expect(itemsTestIds).toEqual(cartStateIds)
    })

    it('with all items info', () => {
      const itemsData = getCartItemsData(items)

      expect(itemsData).toEqual(cartStateData)
    })
  })

  it('order price', () => {
    const { container } = renderApp('/cart', initialCartState)

    const orderPrice = Number(container.querySelector('.Cart-OrderPrice').textContent.slice(1))

    expect(orderPrice).toEqual(cartStateOrderPrice)
  })
})
