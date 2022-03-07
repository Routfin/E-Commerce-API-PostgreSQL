import Product from '../model/Product';

class ProductController {
  async store(req, res) {
    try {
      const newProduct = await Product.create(req.body);
      res.status(200).json(newProduct);
    } catch (err) {
      res.status(401).json(err);
    }
  }

  async index(req, res) {
    try {
      const products = await Product.findAll({ attributes: ['id', 'product', 'desc', 'price', 'image'] });
      res.status(200).json(products);
    } catch (err) {
      res.status(401).json(err);
    }
  }

  async show(req, res) {
    try {
      const showProduct = await Product.findByPk(req.params.id);
      const {
        id, product, desc, price, image, category,
      } = showProduct;
      res.status(200).json({
        id, product, desc, price, image, category,
      });
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

      const upProduct = await Product.findByPk(id);

      if (!upProduct) {
        return res.status(401).json('Product Does not exist');
      }

      const updatedProduct = await upProduct.update(req.body);
      res.status(200).json(updatedProduct);
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

      const deleteProduct = await Product.findByPk(id);

      if (!deleteProduct) {
        return res.status(401).json('Product Does not exist');
      }

      await deleteProduct.destroy();
      res.status(200).json('Product has been deleted!');
    } catch (err) {
      res.status(401).json(err);
    }
  }
}

export default new ProductController();
