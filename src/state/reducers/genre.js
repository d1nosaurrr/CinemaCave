import {FETCH_GENRE_BEGIN, FETCH_GENRE_FAILURE, FETCH_GENRE_SUCCESS,} from "../actions/genre";

const initialState = {
    genreList: [],
    isLoading: false,
    isError: false,
    error: null,
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GENRE_BEGIN            :
            return {...state, isLoading: true};
        case FETCH_GENRE_SUCCESS:
            return {...state, isLoading: false, genreList: action.payload};
        case FETCH_GENRE_FAILURE:
            return {...state, isLoading: false, isError: true, error: action.payload};
        default:
            return state;
    }
}