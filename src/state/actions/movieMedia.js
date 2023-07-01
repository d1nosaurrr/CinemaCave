import axios from "axios";
import {headers} from "./headers";

export const FETCH_MOVIE_MEDIA_BEGIN = "FETCH_MOVIE_MEDIA_BEGIN";
export const FETCH_MOVIE_IMAGES_SUCCESS = "FETCH_MOVIE_IMAGES_SUCCESS";
export const FETCH_MOVIE_VIDEO_SUCCESS = "FETCH_MOVIE_VIDEO_SUCCESS";
export const FETCH_MOVIE_MEDIA_FAILURE = "FETCH_MOVIE_MEDIA_FAILURE";

export const fetchMediaBegin = () => {
    return {type: FETCH_MOVIE_MEDIA_BEGIN};
}
export const fetchImagesSuccess = (data) => {
    return {type: FETCH_MOVIE_IMAGES_SUCCESS, payload: data};
}
export const fetchVideoSuccess = (data) => {
    return {type: FETCH_MOVIE_VIDEO_SUCCESS, payload: data};
}
export const fetchMediaFailure = (error) => {
    return {type: FETCH_MOVIE_MEDIA_FAILURE, payload: error};
}

export const fetchMovieImages = (id = '') => {
    return (dispatch) => {
        dispatch(fetchMediaBegin());
        axios.get(`https://api.themoviedb.org/3/movie/${id}/images`,
            headers
        )
            .then(({data}) => dispatch(fetchImagesSuccess(data)))
            .catch((err) => dispatch(fetchMediaFailure(err)));
    }
}
export const fetchMovieVideo = (id = '') => {
    return (dispatch) => {
        dispatch(fetchMediaBegin());
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            headers
        )
            .then(({data}) => dispatch(fetchVideoSuccess(data.results[0])))
            .catch((err) => dispatch(fetchMediaFailure(err)));
    }
}