import axios from "axios";
import {headers} from "./headers";

export const FETCH_MOVIE_IMAGES_BEGIN = "FETCH_MOVIE_IMAGES_BEGIN";
export const FETCH_MOVIE_IMAGES_SUCCESS = "FETCH_MOVIE_IMAGES_SUCCESS";
export const FETCH_MOVIE_IMAGES_FAILURE = "FETCH_MOVIE_IMAGES_FAILURE";

export const fetchImagesBegin = () => {
    return {type: FETCH_MOVIE_IMAGES_BEGIN};
}
export const fetchImagesSuccess = (data) => {
    return {type: FETCH_MOVIE_IMAGES_SUCCESS, payload: data};
}
export const fetchImagesFailure = (error) => {
    return {type: FETCH_MOVIE_IMAGES_FAILURE, payload: error};
}

export const fetchMovieImages = (id = '') => {
    return (dispatch) => {
        dispatch(fetchImagesBegin());
        axios.get(`https://api.themoviedb.org/3/movie/${id}/images`,
            headers
        )
            .then(({data}) => dispatch(fetchImagesSuccess(data)))
            .catch((err) => dispatch(fetchImagesFailure(err)));
    }
}