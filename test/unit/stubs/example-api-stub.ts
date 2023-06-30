import axios from 'axios'
import { CartState, CheckoutFormData, CheckoutResponse, Product, ProductShortInfo } from '../../../src/common/types'
import { IExampleApi } from '../../../src/client/api'

export const productsMock: Product[] = [
  {
    id: 1,
    name: 'Товар 1',
    price: 11,
    color: 'Цвет 1',
    description: 'description 1',
    material: 'material 1',
  },
  {
    id: 2,
    name: 'Товар 2',
    price: 12,
    color: 'Цвет 2',
    description: 'description 2',
    material: 'material 2',
  },
]

const getShortInfo = (products: Product[]): ProductShortInfo[] => {
  return products.map(({ id, name, price }) => ({ id, name, price}))
}

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
