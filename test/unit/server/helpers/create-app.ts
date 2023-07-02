import { ExampleStore, InitialStore } from '../../../../src/server/data'
import { generateControllers } from '../../../../src/server/helpers/generate-controllers'
import express from 'express'

export const createApp = (initialStore: InitialStore) => {
  const store = new ExampleStore(initialStore);

  const {
    getProductsController,
    getProductByIdController,
    checkoutController,
    ordersController,
  } = generateControllers(store)

  const app = express()

  app.get('/products', getProductsController)
  app.get('/products/:id', getProductByIdController)
  app.post('/checkout', checkoutController)
  app.get('/orders', ordersController)

  return app
}
