import request from 'supertest'

import { getShortInfo } from '../../helpers/get-short-info'
import { createApp } from '../helpers/create-app'
import { productsMock } from '../../mocks/products.mock'

const initialProducts = productsMock

const app = createApp({ initialProducts })

it('server returns products properly', async () => {
  const res = await request(app).get('/products')
  expect(res.body).toEqual(getShortInfo(initialProducts))
})
