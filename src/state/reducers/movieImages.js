import {FETCH_MOVIE_IMAGES_BEGIN, FETCH_MOVIE_IMAGES_FAILURE, FETCH_MOVIE_IMAGES_SUCCESS} from "../actions/movieImages";

const initialState = {
    movieImages: [],
    isLoading: false,
    isError: false,
    error: null,
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_IMAGES_BEGIN            :
            return {...state, isLoading: true};
        case FETCH_MOVIE_IMAGES_SUCCESS:
            return {...state, isLoading: false, movieImages: action.payload};
        case FETCH_MOVIE_IMAGES_FAILURE:
            return {...state, isLoading: false, isError: true, error: action.payload};
        default:
            return state;
    }
}