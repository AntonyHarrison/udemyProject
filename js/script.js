"use stict";

let numberOfFilms;
numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log (numberOfFilms);

let personalMovieDB = {
    conunt: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt ('Один из последних фильмов?', ''),
    b = prompt ('Насколько вы его оцените?', ''),
    c = prompt ('Один из последних фильмов?', ''),
    d = prompt ('Насколько вы его оцените?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log (personalMovieDB);