import request from 'supertest'

import { createApp } from '../helpers/create-app'
import { productsMock } from '../../mocks/products.mock'
import { ordersMock } from '../../mocks/orders.mock'

const initialProducts = productsMock
const initialOrders = ordersMock

const app = createApp({ initialProducts, initialOrders })

it('server returns orders properly', async () => {
  const res = await request(app).get('/orders')
  expect(res.body).toEqual(initialOrders)
})
