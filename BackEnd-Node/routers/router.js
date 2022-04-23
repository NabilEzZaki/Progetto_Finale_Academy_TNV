import express from "express";

import { 
    getMoviesFavorite,
    getMoviesFavoriteById,
    createMoviesFavorite,
    updateMoviesFavorite,
    deleteMoviesFavorite
 } from "../controllers/movie_controllers.js";
 
const router = express.Router();
 
router.get('/favoritemovie', getMoviesFavorite);
router.get('/favoritemovie/:id', getMoviesFavoriteById);
router.post('/favoritemovie', createMoviesFavorite);
router.put('/favoritemovie/:id', updateMoviesFavorite);
router.delete('/favoritemovie/:id', deleteMoviesFavorite);
 
export default router;