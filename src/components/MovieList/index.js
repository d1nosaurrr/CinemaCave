import Index from '../MovieListItem';
import PageNotFound from '../../pages/PageNotFound';
import Loader from '../Loader';
import {useSelector} from 'react-redux';

export default function MovieList({list}) {
    const {isLoading, isError, error} = useSelector(({movies}) => movies);
    if (isError && error) return <PageNotFound/>

    const renderMovies = (arr) => <ul className='movies__list'>
        {arr.map(e => <Index key={e.id} props={e}/>)}
    </ul>;

    return (
        <>
            {isLoading ? <Loader/> :
                list && list.length > 0 ? renderMovies(list) :
                    <p className='f-width f-height list__empty'>No movie found</p>
            }
        </>
    )
}