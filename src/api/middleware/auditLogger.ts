import { logs } from '../mockData';

import { Request, Response, NextFunction } from 'express';

export const auditLogger = (req: Request, res: Response, next: NextFunction) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    method: req.method,
    route: req.originalUrl,
    ip: req.ip,
  };
  logs.push(logEntry); // Aggiunge il log ai dati temporanei
  console.log(logEntry);
  next();
};
