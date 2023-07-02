import request from 'supertest'

import { createApp } from '../helpers/create-app'
import { productsMock } from '../../mocks/products.mock'

const initialProducts = productsMock

const app = createApp({ initialProducts })

it('server returns product by id properly', async () => {
  const res_1 = await request(app).get(`/products/${initialProducts[0].id}`)
  expect(res_1.body).toEqual(initialProducts[0])

  const res_2 = await request(app).get(`/products/${initialProducts[1].id}`)
  expect(res_2.body).toEqual(initialProducts[1])
})
