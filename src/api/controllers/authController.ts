import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { users } from '../mockData';

const SECRET = 'your_jwt_secret';

import { Request, Response } from 'express';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Cerca l'utente nei dati temporanei
  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // Verifica la password
  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // Genera un token JWT
  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
  res.status(200).json({ message: 'Login successful', token });
};
