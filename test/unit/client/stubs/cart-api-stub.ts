import { ICartApi } from '../../../../src/client/api'
import { CartState } from '../../../../src/common/types'

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
