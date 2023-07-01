import {useEffect, useState} from 'react'
import logo from '../../images/logo/logo.svg';
import {faX} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fetchMovie, fetchMovieByQuery} from '../../state/actions/movieList';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useSearchParams} from 'react-router-dom';
import SearchDropdown from '../../components/SearchDropdown';
import Loader from '../../components/Loader';

export default function Header() {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const [searchValue, setSearchValue] = useState('');
    const {movieQuery, isLoading} = useSelector(({movies}) => movies)

    useEffect(() => {
        dispatch(fetchMovieByQuery(searchValue !== '' ? searchValue : searchParams.get('query')));
    }, [searchValue]);

    const handleClearSearch = () => {
        setSearchValue('');
    }
    const handleOnSearch = (e) => {
        e.preventDefault();
        if (searchValue !== '') {
            handleClearSearch();
            setSearchParams(`query=${searchValue}`);
            dispatch(fetchMovieByQuery(searchValue, true));
        }
    }
    const handleOnChangeSearch = (e) => {
        e.preventDefault();
        if (e !== '') setSearchValue(e.target.value);
        setSearchValue(e.target.value);
    }

    return (
        <header className='p-relative header'>
            <div className='container'>
                <section className='d-flex header__section'>
                    <Link className='d-flex header__logo' onClick={() => dispatch(fetchMovie())} to='./'>
                        <img className='logo__img' src={logo} alt='logo' width='50' height='50'/>
                        <span className='logo__title'>Movie Cave</span>
                    </Link>

                    <form onSubmit={(e) => handleOnSearch(e)}
                          className='d-flex br-15 header__search' action=''>
                        <label className='sr-only' htmlFor='search'>Search</label>
                        <input
                            className='header__search-input'
                            type='search'
                            name=''
                            id='search'
                            placeholder='Movie title'
                            value={searchValue}
                            onChange={(e) => handleOnChangeSearch(e)}
                        />
                        <FontAwesomeIcon
                            className={`header__search-btn ${searchValue !== '' ? '' : 'hidden'}`}
                            icon={faX}
                            onClick={handleClearSearch}
                        />
                    </form>
                    {searchValue !== '' &&
                        <div className='dropdown__search'>
                            {isLoading ? <Loader/> :
                                movieQuery.length > 0 ?
                                    <SearchDropdown movie={movieQuery} clearSearch={handleClearSearch}/> :
                                    <p className='dropdown__no-result'>No result</p>}
                        </div>
                    }
                </section>
            </div>
        </header>
    )
}