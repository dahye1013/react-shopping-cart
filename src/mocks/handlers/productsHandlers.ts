import { rest } from 'msw';

import { products } from '@/mocks/data/product';

const getAllProducts: Parameters<typeof rest.get>[1] = (_req, res, ctx) => {
  return res(ctx.delay(3000), ctx.status(200), ctx.json([...products]));
};

const getProduct: Parameters<typeof rest.get>[1] = (_req, res, ctx) => {
  return res(ctx.delay(3000), ctx.status(200), ctx.json([...products]));
};
const handlers = [
  rest.get('/products', getAllProducts),
  rest.get('/product', getProduct),
];
export default handlers;
