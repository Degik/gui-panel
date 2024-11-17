import express from 'express';
import securityRoutes from './routes/securityRoutes';
import authRoutes from './routes/authRoutes';
import { limiter } from './middleware/rateLimiter';
import { auditLogger } from './middleware/auditLogger';

const app = express();
app.use(express.json());
app.use(auditLogger);
app.use(limiter);

app.use('/api/security', securityRoutes);
app.use('/api/auth', authRoutes);

export default app;