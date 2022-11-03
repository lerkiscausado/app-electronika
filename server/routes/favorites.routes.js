import {Router} from 'express';
import { 
    createFavorite, 
    getFavorites,
    deleteFavorite
} from '../controllers/favorites.controller.js';
const router = Router();

router.get('/favorites', getFavorites);
router.post('/favorites', createFavorite);
router.put('/favorites/:id');
router.delete('/favorites/:id', deleteFavorite);
router.get('/favorites/:id');

export default router;
