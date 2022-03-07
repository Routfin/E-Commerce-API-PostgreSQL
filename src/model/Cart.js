import Sequelize, { Model } from 'sequelize';

export default class Cart extends Model {
  static init(sequelize) {
    super.init({
      user_id: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
      product_id: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
}
