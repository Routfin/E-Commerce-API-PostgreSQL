import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import productRoutes from './src/routes/productRoutes';
import orderRoutes from './src/routes/orderRoutes';
import cartRoutes from './src/routes/cartRoutes';

import './src/database';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(bodyParser());
  }

  routes() {
    this.app.use('/user', userRoutes);
    this.app.use('/token', tokenRoutes);
    this.app.use('/product', productRoutes);
    this.app.use('/order', orderRoutes);
    this.app.use('/cart', cartRoutes);
  }
}

export default new App().app;
