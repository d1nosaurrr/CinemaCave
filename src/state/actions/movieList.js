import axios from "axios";
import {headers} from './headers';

export const FETCH_MOVIE_BEGIN = "FETCH_MOVIE_BEGIN";
export const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";
export const FETCH_MOVIE_INFO_SUCCESS = "FETCH_MOVIE_INFO_SUCCESS";
export const FETCH_MOVIE_FAILURE = "FETCH_MOVIE_FAILURE";

export const fetchMovieBegin = () => {
    return {type: FETCH_MOVIE_BEGIN};
}
export const fetchMovieSuccess = (data) => {
    return {type: FETCH_MOVIE_SUCCESS, payload: data};
}
export const fetchMovieInfoSuccess = (data) => {
    return {type: FETCH_MOVIE_INFO_SUCCESS, payload: data};
}
export const fetchMovieFailure = (error) => {
    return {type: FETCH_MOVIE_FAILURE, payload: error};
}

export const fetchMovie = (page) => {
    return (dispatch) => {
        dispatch(fetchMovieBegin());
        axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${page}&sort_by=popularity.desc`,
            headers
        )
            .then(({data}) => dispatch(fetchMovieSuccess(data)))
            .catch((err) => dispatch(fetchMovieFailure(err)));
    }
}
export const fetchFilterMovie = (query) => {
    return (dispatch) => {
        dispatch(fetchMovieBegin());
        axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${query.page || 1}&sort_by=${query.sort || 'popularity.desc'}&primary_release_year=${query.year || ''}&with_genres=${query.genre.join('&with_genres=') || ''}`,
            headers
        )
            .then(({data}) => dispatch(fetchMovieSuccess(data)))
            .catch((err) => dispatch(fetchMovieFailure(err)));
    }
}

export const fetchMovieByQuery = (query) => {
    return (dispatch) => {
        dispatch(fetchMovieBegin());
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
            headers
        )
            .then(({data}) => dispatch(fetchMovieSuccess(data)))
            .catch((err) => dispatch(fetchMovieFailure(err)));
    }
}
export const fetchMovieInfo = (id) => {
    return (dispatch) => {
        dispatch(fetchMovieBegin());
        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, headers)
            .then(({data}) => dispatch(fetchMovieInfoSuccess(data)))
            .catch((err) => dispatch(fetchMovieFailure(err)));
    }
}