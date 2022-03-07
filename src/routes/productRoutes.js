import { Router } from 'express';
import productController from '../controller/productController';

const router = new Router();

//             ADM

router.post('/', productController.store);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

//              USERS
router.get('/', productController.index);
router.get('/:id', productController.show);

export default router;
