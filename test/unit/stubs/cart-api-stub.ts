import { ICartApi } from '../../../src/client/api'
import { productsMock } from './example-api-stub'
import { CartItem, Product } from '../../../src/common/types'

const getCatItem = ({ name, price }: Product): CartItem => ({ name, price, count: 1 })

export class CartApiStub implements ICartApi {
  getState() {
    return { [productsMock[0].id]: getCatItem(productsMock[0]) }
  }

  setState() {

  }
}
