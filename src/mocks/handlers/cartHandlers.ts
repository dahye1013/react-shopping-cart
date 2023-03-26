import { rest } from 'msw';

const postAddCart: Parameters<typeof rest.post>[1] = async (req, res, ctx) => {
  const { product } = await req.json();

  if (!product.id) {
    return res(
      ctx.status(403),
      ctx.json({
        errorMessage: `상품 id가 존재하지 않습니다.`,
      })
    );
  }

  return res(
    ctx.status(200),
    ctx.json({
      product,
    })
  );
};

const removeCart: Parameters<typeof rest.delete>[1] = async (req,res,ctx) =>{
  const { cardId } = req.params

  return res(
    ctx.status(200),
    ctx.json({
      cardId
    })
  );

}

const handlers = [rest.post('/carts', postAddCart), rest.delete('/cart/:cardId',removeCart)];
export default handlers;
