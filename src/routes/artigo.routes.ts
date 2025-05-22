import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';
import { artigoMiddleware } from '../middlewares/artigo.middleware';
import {
  getAllArtigos,
  getArtigoById,
  getMeusArtigos,
  createArtigo,
  updateArtigo,
  deleteArtigo,
} from '../controllers/artigo.controller';

const router = Router();

router.get('/', getAllArtigos);

router.get('/meus', authMiddleware, getMeusArtigos);

router.get('/:id', getArtigoById);

router.post('/', authMiddleware, createArtigo);
router.put('/:id', authMiddleware, artigoMiddleware, updateArtigo);
router.delete('/:id', authMiddleware, artigoMiddleware, deleteArtigo);

export default router;