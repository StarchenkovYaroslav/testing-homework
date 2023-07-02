import userEvent from '@testing-library/user-event'

import { CartState } from '../../../../../src/common/types'

import { renderApp } from '../../helpers/render-app'
import { productsMock } from '../../../mocks/products.mock'
import { getCatItem } from '../../../helpers/get-cart-item'

const initialCartState: CartState = {
  [productsMock[0].id]: getCatItem(productsMock[0], 1),
  [productsMock[1].id]: getCatItem(productsMock[1], 1),
}

describe('clear cart button', () => {
  it('exists', () => {
    const { container } = renderApp('/cart', initialCartState)

    const button = container.querySelector('.Cart-Clear')

    expect(button).toBeTruthy()
  })

  it('removes all items from cart', async () => {
    const { container } = renderApp('/cart', initialCartState)

    const button = container.querySelector('.Cart-Clear')

    await userEvent.click(button)

    const table = container.querySelector('.Cart-Table')

    expect(table).toBeFalsy()
  })
})
