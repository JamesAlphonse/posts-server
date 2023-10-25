import { Router } from 'express';
import postRoutes from '@/routes/post.route';

const router = Router();

router.use('/posts', postRoutes);

export default router;