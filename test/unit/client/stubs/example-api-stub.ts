import axios from 'axios'
import { CartState, CheckoutFormData, CheckoutResponse, Product, ProductShortInfo } from '../../../../src/common/types'
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
    return await axios.post<CheckoutResponse>(`${this.basename}/api/checkout`, { form, cart });
  }
}
