import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

interface DecodedToken {
  id: string;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;
    req.body.userId = decoded.id;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
};
