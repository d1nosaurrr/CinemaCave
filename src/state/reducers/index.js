import {reducer as genreReducer} from "./genre";
import {reducer as movieReducer} from "./movie";
import {reducer as imagesReducer} from "./movieImages";
import {combineReducers} from "redux";

export const reducer = combineReducers({
    genres: genreReducer,
    movies: movieReducer,
    images: imagesReducer,
});