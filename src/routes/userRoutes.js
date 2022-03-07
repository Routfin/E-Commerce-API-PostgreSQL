import { Router } from 'express';
import userController from '../controller/userController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//             ADM
router.get('/', userController.index);
router.get('/:id', userController.show);

//             USER
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
