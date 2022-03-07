import { Router } from 'express';
import cartController from '../controller/cartController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, cartController.store);
router.get('/', loginRequired, cartController.index);
router.put('/:id', loginRequired, cartController.update);
router.delete('/:id', loginRequired, cartController.delete);

export default router;
