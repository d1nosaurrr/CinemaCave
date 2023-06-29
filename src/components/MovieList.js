import {useSelector} from 'react-redux';
import MovieListItem from './MovieListItem';
import Loader from "./Loader";

export default function MovieList() {

    const {movieList, isLoading} = useSelector(({movies}) => movies);

    const renderMovies = (arr) => <ul className='movies__list'>
        {arr.map(e => <MovieListItem key={e.id} props={e}/>)}
    </ul>;

    return (
        <>
            {isLoading ?
                <Loader/>
                :
                movieList && movieList.length > 0 ? renderMovies(movieList) :
                    <p className='list__empty'>No movie by such tittle</p>
            }
        </>
    )
}