import { ICartApi } from '../../../src/client/api'
import { CartItem, CartState, Product } from '../../../src/common/types'

export const getCatItem = ({ name, price }: Product, count: number): CartItem => ({ name, price, count })

let state: CartState = {}

export class CartApiStub implements ICartApi {
  constructor(initialState?: CartState) {
    if (initialState) {
      state = initialState
    }
  }

  getState() {
    return state
  }

  setState(newState: CartState) {
    state = newState
  }
}
