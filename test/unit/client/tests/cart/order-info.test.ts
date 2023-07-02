import { renderApp } from '../../helpers/render-app'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { CartState } from '../../../../../src/common/types'
import { productsMock } from '../../../mocks/products.mock'
import { getCatItem } from '../../../helpers/get-cart-item'

const initialCartState: CartState = {
  [productsMock[0].id]: getCatItem(productsMock[0], 1),
}

it('order info shows after submit', async () => {
  const { container, findByTestId } = renderApp('/cart', initialCartState)

  const button = container.querySelector('.Form-Submit')

  const nameInput = await findByTestId('name-input')
  const phoneInput = await findByTestId('phone-input')
  const addressInput = await findByTestId('address-input')

  await userEvent.type(nameInput, 'Василий')
  await userEvent.type(phoneInput, '+79998887766')
  await userEvent.type(addressInput, 'Улица Пушкина, дом Колотушкина')

  await userEvent.click(button)

  const orderInfo = await findByTestId('order-info')

  expect(orderInfo).toBeTruthy()
})
