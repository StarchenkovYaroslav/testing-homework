import request from 'supertest'

import { createApp } from '../helpers/create-app'
import { productsMock } from '../../mocks/products.mock'
import { ordersMock } from '../../mocks/orders.mock'

const initialProducts = productsMock
const order = ordersMock[0]

const app = createApp({ initialProducts })

it('server checks order properly', async () => {
  const res_1 = await request(app).post('/checkout').send(order)
  expect(res_1.body).toEqual({ id: 1 })

  const res_2 = await request(app).post('/checkout').send(order)
  expect(res_2.body).toEqual({ id: 2 })
})
