import bcrypt from 'bcrypt';
import crypto from 'crypto';

// Hash password
import { Request, Response } from 'express';

export const hashPassword = async (req: Request, res: Response) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ error: 'Password is required' });
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    res.status(200).json({ hashedPassword });
  } catch (err) {
    res.status(500).json({ error: 'Error hashing password' });
  }
};
// Encrypt data
export const encryptData = (req: Request, res: Response) => {
  const { data, key } = req.body;
  if (!data || !key) return res.status(400).json({ error: 'Data and key are required' });
  try {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(data);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    res.status(200).json({ encryptedData: `${iv.toString('hex')}:${encrypted.toString('hex')}` });
  } catch (err) {
    res.status(500).json({ error: 'Error encrypting data' });
  }
};
// Decrypt data
export const decryptData = (req: Request, res: Response) => {
  const { encryptedData, key } = req.body;
  if (!encryptedData || !key) return res.status(400).json({ error: 'Encrypted data and key are required' });
  try {
    const [ivHex, encryptedHex] = encryptedData.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const encryptedText = Buffer.from(encryptedHex, 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    res.status(200).json({ decryptedData: decrypted.toString() });
  } catch (err) {
    res.status(500).json({ error: 'Error decrypting data' });
  }
};
