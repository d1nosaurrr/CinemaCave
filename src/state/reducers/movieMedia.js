import {
    FETCH_MOVIE_IMAGES_SUCCESS,
    FETCH_MOVIE_MEDIA_BEGIN,
    FETCH_MOVIE_MEDIA_FAILURE,
    FETCH_MOVIE_VIDEO_SUCCESS
} from "../actions/movieMedia";

const initialState = {
    movieImages: [],
    movieVideo: {},
    isLoading: false,
    isError: false,
    error: null,
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_MEDIA_BEGIN            :
            return {...state, isLoading: true};
        case FETCH_MOVIE_IMAGES_SUCCESS:
            return {...state, isLoading: false, movieImages: action.payload};
        case FETCH_MOVIE_VIDEO_SUCCESS:
            return {...state, isLoading: false, movieVideo: action.payload};
        case FETCH_MOVIE_MEDIA_FAILURE:
            return {...state, isLoading: false, isError: true, error: action.payload};
        default:
            return state;
    }
}