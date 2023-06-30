import {useState} from 'react'
import logo from '../../images/logo/logo.svg';
import {faX} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fetchMovie, fetchMovieByQuery} from '../../state/actions/movieList';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

export default function Index() {
    // const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('');

    const handleClearSearch = () => {
        setSearchValue('');
    }
    const handleSearch = (e) => {
        e.preventDefault();
        e !== '' ? setSearchValue(e.target.value) : console.log('Search')
        setSearchValue(e.target.value);
        // searchValue !== '' ? dispatch(fetchMovieByQuery(searchValue)) : dispatch(fetchMovie());
    }

    return (
        <header className='p-relative header'>
            <div className='container'>
                <section className='d-flex header__section'>
                    <Link className='d-flex header__logo' to='./'>
                        <img className='logo__img' src={logo} alt='logo' width='50' height='50'/>
                        <span className='logo__title'>Movie Cave</span>
                    </Link>

                    <form onSubmit={(e) => e.preventDefault()}
                          className='d-flex br-15 header__search' action=''>
                        <label className='sr-only' htmlFor='search'>Search</label>
                        <input
                            className='header__search-input'
                            type='search'
                            name=''
                            id='search'
                            placeholder='Movie title'
                            value={searchValue}
                            onChange={(e) => handleSearch(e)}
                        />
                        <FontAwesomeIcon
                            className='header__search-btn'
                            icon={faX}
                            onClick={handleClearSearch}
                        />
                    </form>
                </section>
            </div>
        </header>
    )
}