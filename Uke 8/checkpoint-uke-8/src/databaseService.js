const utils = require('./utils');
const snakeCaseKeys = require('snakecase-keys');
const camelcaseKeys = require('camelcase-keys');
const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'movies',
  password: 'password',
  port: 5432,
});

async function getMoviesQuery(){
    const movies = await pool.query('SELECT * FROM movies');
    return camelcaseKeys(movies.rows);
};

async function getMovieByIdQuery(id){  
    const movie = await pool.query('SELECT * FROM movies WHERE id = $1', [id]);
    return camelcaseKeys(movie.rows[0]);
}

async function createMovieQuery(movie){
    movie = snakeCaseKeys(movie);
    const insertedmovie = await pool.query('INSERT INTO movies (id,title,cover_img,year,summary,genre,rating,running_time) VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7) RETURNING *', [movie.title,movie.cover_img, movie.year,movie.summary, movie.genre, movie.rating, movie.running_time]);
    return movie = camelcaseKeys(insertedmovie.rows[0]);
};

async function updateMovieQuery(id, movie){
    movie = snakeCaseKeys(movie);
    const editedmovie = await pool.query('UPDATE movies SET title = $1, cover_img = $2, year = $3, summary = $4, genre=$5, rating=$6, running_time=$7 WHERE id = $8  RETURNING *', [movie.title,movie.cover_img, movie.year,movie.summary, movie.genre, movie.rating, movie.running_time, id]);
    return camelcaseKeys(editedmovie.rows[0]);
};

async function deleteMovieQuery(id){
    await pool.query('DELETE FROM movies WHERE id = $1', [id]);
    return;
};

module.exports = {
    getMoviesQuery,
    getMovieByIdQuery,
    createMovieQuery,
    updateMovieQuery,
    deleteMovieQuery
};