import Order from '../model/Order';

class OrderController {
  async store(req, res) {
    try {
      const newOrder = await Order.create(req.body);
      res.status(200).json(newOrder);
    } catch (err) {
      res.status(401).json(err);
    }
  }

  async index(req, res) {
    try {
      const orders = await Order.findAll({ attributes: ['id', 'user_id', 'address', 'payment_method', 'amount', 'products'] });
      res.status(200).json(orders);
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

      const upOrder = await Order.findByPk(id);

      if (!upOrder) {
        return res.status(401).json('Order Does not exist');
      }

      const updatedOrder = await upOrder.update(req.body);
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

      const deleteOrder = await Order.findByPk(id);

      if (!deleteOrder) {
        return res.status(401).json('Order Does not exist');
      }

      await deleteOrder.destroy();
      res.status(200).json('Order has been deleted!');
    } catch (err) {
      res.status(401).json(err);
    }
  }
}

export default new OrderController();
