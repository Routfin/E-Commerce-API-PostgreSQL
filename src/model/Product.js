import Sequelize, { Model } from 'sequelize';

export default class Product extends Model {
  static init(sequelize) {
    super.init({
      product: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Product must be 3 and 255 chracteres',
          },
        },
      },
      desc: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Description must be 3 and 255 chracteres',
          },
        },
      },
      price: {
        type: Sequelize.FLOAT,
        defaultValue: '',
      },
      image: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Description must be 3 and 255 chracteres',
          },
        },
      },
      category: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
}
