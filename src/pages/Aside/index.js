import {fetchMovie} from '../../state/actions/movieList';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

export default function Aside() {
    const dispatch = useDispatch();
    const [activeGenre, setActiveGenre] = useState()
    let genre = useSelector(({genres}) => genres.genreList);
    const handleLoadMovies = (e, id) => {
        setActiveGenre(id);
        dispatch(fetchMovie(id));
    }
    return (
        <aside className='aside'>
            <ul className='movie__categories categories'>
                {genre.map(({id, name}) => <li onClick={(e) => handleLoadMovies(e, id)}
                                               className={`categories__item ${activeGenre === id ? 'active' : ''}`}
                                               key={id}>{name}</li>)}
            </ul>
        </aside>
    )
}