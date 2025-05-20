import jwt, { SignOptions } from 'jsonwebtoken';

const SECRET_KEY: string = process.env.JWT_SECRET || 'sua_chave_secreta_aqui';

interface JwtPayload {
  userId: string;
  name?: string;
  email?: string;
}

export const generateToken = (payload: JwtPayload, expiresIn = 3600): string => {
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, SECRET_KEY, options);
};

export const verifyToken = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
    return decoded;
  } catch (error) {
    console.error('Token inválido:', error);
    return null;
  }
};