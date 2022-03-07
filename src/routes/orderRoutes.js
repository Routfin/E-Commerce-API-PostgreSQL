import { Router } from 'express';
import orderController from '../controller/orderController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//         ADM
router.post('/', loginRequired, orderController.store);

//         USERS
router.get('/', orderController.index);
router.put('/:id', loginRequired, orderController.update);
router.delete('/:id', loginRequired, orderController.delete);

export default router;
