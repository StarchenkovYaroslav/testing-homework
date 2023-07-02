import { CartItem, Product } from '../../../src/common/types'

export const getCatItem = ({ name, price }: Product, count: number): CartItem => ({ name, price, count })
