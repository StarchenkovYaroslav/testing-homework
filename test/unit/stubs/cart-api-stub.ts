import { ICartApi } from '../../../src/client/api'
import { productsMock } from './example-api-stub'
import { CartItem, CartState, Product } from '../../../src/common/types'

const getCatItem = ({ name, price }: Product): CartItem => ({ name, price, count: 1 })

let state: CartState = {
  [productsMock[0].id]: getCatItem(productsMock[0]),
}


export class CartApiStub implements ICartApi {
  getState() {
    return state
  }

  setState(newState: CartState) {
    state = newState
  }
}
