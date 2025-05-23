import { Router } from 'express';
import { register, login, forgotPassword } from '../controllers/user.controller';
import { updateUser, getProfile } from '../controllers/user.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

//Rotas públicas
router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);

// Rota protegida para update do usuário autenticado
router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, updateUser);

export default router;