import { products } from '@/mocks/data/product';

import { rest } from 'msw';

export default function handlers() {
  return [rest.get('/cart/list', getProducts)];
}

const getProducts: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  return res(ctx.delay(3000), ctx.status(200), ctx.json([...products]));
};
