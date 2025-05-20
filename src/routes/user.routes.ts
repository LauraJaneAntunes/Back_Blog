import { Router } from 'express';
import { register, login, forgotPassword } from '../controllers/user.controller';

const router = Router();

//Rotas públicas
router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);

export default router;