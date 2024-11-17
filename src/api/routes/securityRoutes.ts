import express from 'express';
import { hashPassword, encryptData, decryptData } from '../controllers/securityController';

const router = express.Router();

router.post('/hash-password', hashPassword);
router.post('/encrypt', encryptData);
router.post('/decrypt', decryptData);

export default router;