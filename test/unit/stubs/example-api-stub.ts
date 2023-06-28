import axios from 'axios'
import { CartState, CheckoutFormData, CheckoutResponse, Product, ProductShortInfo } from '../../../src/common/types'
import { IExampleApi } from '../../../src/client/api'

export const productsMock: ProductShortInfo[] = [
  {
    id: 1,
    name: 'Товар 1',
    price: 25,
  },
  {
    id: 2,
    name: 'Товар 2',
    price: 250,
  },
]

export class ExampleApiStub implements IExampleApi {
  constructor(private readonly basename: string) {

  }

  async getProducts() {
    return Promise.resolve({ data: productsMock })
  }

  async getProductById(id: number) {
    return await axios.get<Product>(`${this.basename}/api/products/${id}`);
  }

  async checkout(form: CheckoutFormData, cart: CartState) {
    return await axios.post<CheckoutResponse>(`${this.basename}/api/checkout`, { form, cart });
  }
}
