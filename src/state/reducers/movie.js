import {FETCH_MOVIE_BEGIN, FETCH_MOVIE_FAILURE, FETCH_MOVIE_SUCCESS,FETCH_MOVIE_INFO_SUCCESS} from "../actions/movieList";

const initialState = {
    movieList: [],
    movieInfo: {},
    isLoading: false,
    isError: false,
    error: null,
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_BEGIN            :
            return {...state, isLoading: true};
        case FETCH_MOVIE_SUCCESS:
            return {...state, isLoading: false, movieList: action.payload};
        case FETCH_MOVIE_INFO_SUCCESS:
            return {...state, isLoading: false, movieInfo: action.payload};
        case FETCH_MOVIE_FAILURE:
            return {...state, isLoading: false, isError: true, error: action.payload};
        default:
            return state;
    }
}