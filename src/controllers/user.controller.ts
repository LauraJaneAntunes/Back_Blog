import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../config/prisma';

const JWT_SECRET = process.env.JWT_SECRET as string;

export const register = async (req: Request, res: Response): Promise<void> => {
  const { nome, email, senha } = req.body;

  try {
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      res.status(400).json({ error: 'Email já cadastrado.' });
      return;
    }

    const hashedPassword = await bcrypt.hash(senha, 10);

    const user = await prisma.user.create({
      data: {
        nome,
        email,
        senha: hashedPassword,
      },
    });

    const { senha: _, ...userSafe } = user;

    res.status(201).json({ message: 'Usuário criado com sucesso', user: { id: user.id, nome: user.nome, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: 'Erro no servidor.' });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, senha } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(404).json({ error: 'Usuário não encontrado.' });
      return;
    }

    const isValid = await bcrypt.compare(senha, user.senha);
    if (!isValid) {
      res.status(401).json({ error: 'Senha inválida.' });
      return;
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    const { senha: _, ...userSafe } = user;
    
    res.status(200).json({ message: 'Login realizado com sucesso', token });
  } catch (err) {
    res.status(500).json({ error: 'Erro no servidor.' });
  }
};

export const forgotPassword = async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ error: 'Email é obrigatório.' });
    return;
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      // Mensagem genérica por segurança
      res.status(200).json({ message: 'Se o email estiver cadastrado, você receberá instruções para recuperar a senha.' });
      return;
    }

    // Aqui você faria o processo de envio de email de recuperação

    res.status(200).json({ message: 'Se o email estiver cadastrado, você receberá instruções para recuperar a senha.' });
  } catch (err) {
    res.status(500).json({ error: 'Erro no servidor.' });
  }
};