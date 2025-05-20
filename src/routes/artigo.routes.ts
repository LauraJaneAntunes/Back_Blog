import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';
import { artigoMiddleware } from '../middlewares/artigo.middleware';
import {
  getAllArtigos,
  getArtigoById,
  createArtigo,
  updateArtigo,
  deleteArtigo,
} from '../controllers/artigo.controller';

const router = Router();

// Rotas públicas
router.get('/', getAllArtigos);
router.get('/:id', getArtigoById);

// Rotas protegidas
router.post('/', authMiddleware, createArtigo);
router.put('/:id', authMiddleware, artigoMiddleware, updateArtigo);
router.delete('/:id', authMiddleware, artigoMiddleware, deleteArtigo);

export default router;