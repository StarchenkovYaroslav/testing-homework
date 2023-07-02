import express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import { ExampleStore } from './data';
import { generateControllers } from './helpers/generate-controllers'
import { getBugId } from './helpers/getBugId'

const getTest = (req: express.Request) => req.query.test

const indexHtmlContent = readFileSync(join(__dirname, '..', '..', "dist", "index.html")).toString();

const indexHtml = (req: express.Request, res: express.Response) => {
  res.send(indexHtmlContent.replace('</head>', `<script>var process={env:{BUG_ID:'${getBugId(req)}',TEST:'${getTest(req)}'}}</script></head>`) );
};

const store = new ExampleStore();

const {
  getProductsController,
  getProductByIdController,
  checkoutController,
  ordersController,
} = generateControllers(store)

export const router = express.Router();

router.get('/', indexHtml);
router.get('/catalog', indexHtml);
router.get('/catalog/:id', indexHtml);
router.get('/delivery', indexHtml);
router.get('/contacts', indexHtml);
router.get('/cart', indexHtml);

router.get('/api/products', getProductsController);
router.get('/api/products/:id(\\d+)', getProductByIdController);
router.post('/api/checkout', checkoutController);
router.get('/api/orders', ordersController);
