import { Request, Response } from 'express';
import { AuthenticatedRequest } from '../middlewares/auth.middleware';
import prisma from '../config/prisma';

export const getAllArtigos = async (_req: Request, res: Response): Promise<void> => {
  try {
    const artigos = await prisma.artigo.findMany({
      include: {
        autor: {
          select: {
            id: true,
            nome: true,
            email: true,
          },
        },
      },
      orderBy: {
        publicadoEm: 'desc',
      },
    });

    res.json(artigos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar artigos.' });
  }
};

export const getArtigoById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const artigo = await prisma.artigo.findUnique({
      where: { id: Number(id) },
      include: {
        autor: {
          select: {
            id: true,
            nome: true,
            email: true,
          },
        },
      },
    });

    if (!artigo) {
      res.status(404).json({ message: 'Artigo não encontrado.' });
      return;
    }

    res.json(artigo);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar artigo.' });
  }
};

export const createArtigo = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  const { titulo, conteudo, imagemDestacada } = req.body;

  if (!titulo || !conteudo) {
    res.status(400).json({ message: 'Título e conteúdo são obrigatórios.' });
    return;
  }

  try {
    const novoArtigo = await prisma.artigo.create({
      data: {
        titulo,
        conteudo,
        imagemDestacada,
        autorId: req.user!.id,
      },
    });

    res.status(201).json(novoArtigo);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar artigo.' });
  }
};

export const updateArtigo = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  const { id } = req.params;
  const { titulo, conteudo, imagemDestacada } = req.body;

  try {
    const artigo = await prisma.artigo.findUnique({
      where: { id: Number(id) },
    });

    if (!artigo) {
      res.status(404).json({ message: 'Artigo não encontrado.' });
      return;
    }

    if (artigo.autorId !== req.user!.id) {
      res.status(403).json({ message: 'Você não tem permissão para editar este artigo.' });
      return;
    }

    const artigoAtualizado = await prisma.artigo.update({
      where: { id: Number(id) },
      data: {
        titulo,
        conteudo,
        imagemDestacada,
      },
    });

    res.json(artigoAtualizado);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar artigo.' });
  }
};

export const deleteArtigo = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const artigo = await prisma.artigo.findUnique({
      where: { id: Number(id) },
    });

    if (!artigo) {
      res.status(404).json({ message: 'Artigo não encontrado.' });
      return;
    }

    if (artigo.autorId !== req.user!.id) {
      res.status(403).json({ message: 'Você não tem permissão para deletar este artigo.' });
      return;
    }

    await prisma.artigo.delete({
      where: { id: Number(id) },
    });

    res.json({ message: 'Artigo deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar artigo.' });
  }
};