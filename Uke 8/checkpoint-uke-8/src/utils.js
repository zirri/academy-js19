const Joi = require('@hapi/joi');

const schemaMovie = Joi.object({
    id: Joi.number()
        .integer(),
    title: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    year: Joi.number()
        .min(1900)
        .max(2100)
        .required(),
    rating: Joi.number()
        .min(1)
        .max(5)
        .required(),
    runningTime: Joi.number()
        .min(1)
        .max(500)
        .required(),
    coverImg: Joi.string()
        .uri(),
    summary: Joi.string()
        .alphanum()
        .min(3)
        .max(1000),
    genre: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
});


async function checkBodyInput(movie){
    schemaMovie.validate(movie);
};

module.exports = {
    checkBodyInput
}