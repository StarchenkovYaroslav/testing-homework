import { Order } from '../../../src/common/types'
import { getCatItem } from '../helpers/get-cart-item'
import { productsMock } from './products.mock'

export const ordersMock: Order[] = [
  {
    form: {
      name: 'Василий',
      address: 'Улица Пушкина, дом Колотушкина',
      phone: '+79998887766'
    },
    cart: {
      [productsMock[0].id]: getCatItem(productsMock[0], 1),
    }
  }
]
