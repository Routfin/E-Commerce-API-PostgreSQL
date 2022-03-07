import Sequelize, { Model } from 'sequelize';

export default class Order extends Model {
  static init(sequelize) {
    super.init({
      user_id: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
      address: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Address must be 3 and 255 chracteres',
          },
        },
      },
      payment_method: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
      amount: {
        type: Sequelize.FLOAT,
        defaultValue: '',
      },
      products: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
}
