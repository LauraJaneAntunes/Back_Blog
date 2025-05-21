import { Router } from 'express';
import userRoutes from './user.routes';
import artigoRoutes from './artigo.routes';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'API está funcionando!' });
});

router.use('/users', userRoutes);
router.use('/artigos', artigoRoutes);

export default router;