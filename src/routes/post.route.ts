import { Router } from 'express';
import { GetAll } from '@/controllers/post.controller';
const router = Router();

router.get('/', GetAll);

export default router;