import { Router } from 'express';
import userRoutes from './user.routes';
import artigoRoutes from './artigo.routes.ts';

const router = Router();

router.use('/users', userRoutes);
router.use('/artigos', artigoRoutes);

export default router;
