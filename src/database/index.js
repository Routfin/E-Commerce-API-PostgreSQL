import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../model/User';
import Product from '../model/Product';
import Order from '../model/Order';
import Cart from '../model/Cart';

const models = [User, Product, Order, Cart];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
