import axios from "axios";
import {headers} from './headers';

export const FETCH_GENRE_BEGIN = "FETCH_GENRE_BEGIN";
export const FETCH_GENRE_SUCCESS = "FETCH_GENRE_SUCCESS";
export const FETCH_GENRE_FAILURE = "FETCH_GENRE_FAILURE";

export const fetchGenreBegin = () => {
    return {type: FETCH_GENRE_BEGIN};
}
export const fetchGenreSuccess = (data) => {
    return {type: FETCH_GENRE_SUCCESS, payload: data};
}
export const fetchGenreFailure = (error) => {
    return {type: FETCH_GENRE_FAILURE, payload: error};
}


export const fetchGenre = () => {
    return (dispatch) => {
        dispatch(fetchGenreBegin());
        axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en', headers)
            .then(({data}) => dispatch(fetchGenreSuccess(data.genres)))
            .catch((err) => dispatch(fetchGenreFailure(err)));
    }
}