import {useState} from 'react'
import logo from '../../images/logo/logo.svg';
import {faX} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fetchMovie, fetchMovieByQuery} from '../../state/actions/movieList';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

export default function Index() {
    const dispatch = useDispatch();

    const [isCategoriesHidden, setIsCategoriesHidden] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const toggleMenu = () => {
        setIsCategoriesHidden(prevValue => !prevValue);
    }

    // const aside = document.querySelector('.aside');
    // if (aside) !isCategoriesHidden ? aside.classList.add('active') : aside.classList.remove('active');

    const handleClearSearch = () => {
        setSearchValue('');
        dispatch(fetchMovie())
    }
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
        searchValue !== '' ? dispatch(fetchMovieByQuery(searchValue)) : dispatch(fetchMovie());
    }

    return (
        <header className='header'>
            <div className='container'>
                <section className='d-flex header__section'>
                    <Link className='d-flex header__logo' to='./'>
                        <img className='logo__img' src={logo} alt='logo' width='50' height='50'/>
                        <span className="logo__title">Movie Cave</span>
                    </Link>
                    <div onClick={toggleMenu} className={`d-flex menu__toggle ${!isCategoriesHidden ? 'active' : ''}`}>
                        <span className='line line1'></span>
                        <span className='line line2'></span>
                        <span className='line line3'></span>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}
                          className='d-flex header__search' action=''>
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