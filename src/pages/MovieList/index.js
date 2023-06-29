import {useSelector} from 'react-redux';
import MovieListItem from '../../components/MovieListItem';
import Loader from "../../components/Loader";
import PageNotFound from "../PageNotFound";

export default function Index() {
    const {movieList, error, isError, isLoading} = useSelector(({movies}) => movies)
    if (isError && error) return <PageNotFound/>

    const renderMovies = (arr) => <ul className='movies__list'>
        {arr.map(e => <MovieListItem key={e.id} props={e}/>)}
    </ul>;

    return (
        <>
            {isLoading ? <Loader/> :
                movieList && movieList.length > 0 ? renderMovies(movieList) :
                    <p className='f-width f-height list__empty'>No movie found</p>
            }
        </>
    )
}