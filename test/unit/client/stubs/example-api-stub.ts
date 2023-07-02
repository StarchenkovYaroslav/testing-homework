import { CartState, CheckoutFormData } from '../../../../src/common/types'
import { IExampleApi } from '../../../../src/client/api'
import { productsMock } from '../../mocks/products.mock'
import { getShortInfo } from '../../helpers/get-short-info'

export class ExampleApiStub implements IExampleApi {
  constructor(private readonly basename: string) {}

  async getProducts() {
    return Promise.resolve({ data: getShortInfo(productsMock) })
  }

  async getProductById(id: number) {
    return Promise.resolve({ data: productsMock.find(product => product.id === id) })
  }

  async checkout(form: CheckoutFormData, cart: CartState) {
    return Promise.resolve({ data: { id: 1 } })
  }
}
