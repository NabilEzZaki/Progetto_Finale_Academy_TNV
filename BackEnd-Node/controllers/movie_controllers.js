import movie from "../models/movie.js";


export const getMovies = async (req, res) => {
    try {
        const movie = await movie.findAll();
        res.send(movie);
    } catch (err) {
        console.log(err);
    }
}

export const getMovieById = async (req, res) => {
    try {
        const movie = await movie.findOne({
            where: {
                id: req.params.id
            }
        });
        
        if (movie) {
            res.send(movie);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const createMovie = async (req, res) => {
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

export const updateMovie = async (req, res) => {
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

export const deleteMovie = async (req, res) => {
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