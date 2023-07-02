import { ExampleStore } from '../data'
import { RequestHandler } from 'express'
import { getBugId } from './getBugId'
import { CheckoutResponse } from '../../common/types'

export const generateControllers = (store: ExampleStore) => {
  const getProductsController: RequestHandler = (req, res) => {
    const products = store.getAllProducts(getBugId(req));
    res.json(products);
  }

  const getProductByIdController: RequestHandler = (req, res) => {
    const bugId = getBugId(req);

    let id = Number(req.params.id);

    if(bugId === 3) {
      id = 0;
    }

    const product = store.getProductById(id);
    res.json(product);
  }

  const checkoutController: RequestHandler = (req, res) => {
    const bugId = getBugId(req);

    if (bugId === 2) {
      res.json({ id: Date.now() });
    } else {
      const id = store.createOrder(req.body);
      const data: CheckoutResponse = { id };
      res.json(data);
    }
  }

  const ordersController: RequestHandler = (req, res) => {
    const orders = store.getLatestOrders();
    res.json(orders);
  }

  return {
    getProductsController,
    getProductByIdController,
    checkoutController,
    ordersController,
  }
}
