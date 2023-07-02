import { Product, ProductShortInfo } from '../../../src/common/types'

export const getShortInfo = (products: Product[]): ProductShortInfo[] => {
  return products.map(({ id, name, price }) => ({ id, name, price}))
}
