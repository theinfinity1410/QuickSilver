import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

// Protect this route
router.post('/', authMiddleware, (req, res) => {
  const { userId } = req.body; // userId is added by the auth middleware
  res.json({ message: `Website generated for user ${userId}` });
});

export default router;
