import movie from "../models/movie.js";


export const getMoviesFavorite = async (req, res) => {
    try {
        const movies = await movie.findAll();
        res.send(movies);
    } catch (err) {
        console.log(err);
    }
}

export const getMoviesFavoriteById = async (req, res) => {
    try {
        const movies = await movie.findOne({
            where: {
                id: req.params.id
            }
        });
        
        if (movies) {
            res.send(movies);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const createMoviesFavorite  = async (req, res) => {
    try {
        await movie.create(req.body);
        res.json({
            "message": "Movie Created"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const updateMoviesFavorite  = async (req, res) => {
    try {
        await movie.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Movie Updated"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const deleteMoviesFavorite  = async (req, res) => {
    try {
        await movie.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Movie Deleted"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}