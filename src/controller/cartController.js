import Cart from '../model/Cart';

class CartController {
  async store(req, res) {
    try {
      const newCart = await Cart.create(req.body);
      res.status(200).json(newCart);
    } catch (err) {
      res.status(401).json(err);
    }
  }

  async index(req, res) {
    try {
      const cart = await Cart.findAll({ attributes: ['id', 'user_id', 'product_id', 'quantity'] });
      res.status(200).json(cart);
    } catch (err) {
      res.status(401).json(err);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json('Missing ID');
      }

      const upCart = await Cart.findByPk(id);

      if (!upCart) {
        return res.status(401).json('Cart Does not exist');
      }

      const updatedOrder = await upCart.update(req.body);
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(401).json(err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json('Missing ID');
      }

      const deleteCart = await Cart.findByPk(id);

      if (!deleteCart) {
        return res.status(401).json('Cart Does not exist');
      }

      await deleteCart.destroy();
      res.status(200).json('Cart has been deleted!');
    } catch (err) {
      res.status(401).json(err);
    }
  }
}

export default new CartController();
