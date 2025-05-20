import { Request, Response, NextFunction } from 'express';
import prisma from '../config/prisma';
import { AuthenticatedRequest } from './auth.middleware';

export const artigoMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const artigoId = Number(req.params.id);

  if (isNaN(artigoId)) {
    res.status(400).json({ message: 'ID do artigo inválido.' });
    return;
  }

  try {
    const artigo = await prisma.artigo.findUnique({
      where: { id: artigoId },
    });

    if (!artigo) {
      res.status(404).json({ message: 'Artigo não encontrado.' });
      return;
    }

    if (artigo.autorId !== req.user!.id) {
      res.status(403).json({ message: 'Você não tem permissão para acessar este artigo.' });
      return;
    }

    next();
  } catch (error) {
    console.error('Erro no artigoMiddleware:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};