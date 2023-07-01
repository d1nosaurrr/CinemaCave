import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import Loader from '../../components/Loader';
import {fetchMovieInfo, fetchSimilarMovie} from '../../state/actions/movieList';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {fetchMovieImages} from '../../state/actions/movieImages';
import MovieList from '../../components/MovieList';

export default function MovieInfo() {
    const dispatch = useDispatch();
    const {id} = useParams()
    const navigate = useNavigate();

    const {movieInfo, movieSimilar, isLoading} = useSelector(({movies}) => movies);
    const images = useSelector(({images}) => images.movieImages);
    const padTo2Digits = (num) => num.toString().padStart(2, '0');

    const toHourConverter = (minutes) => !isNaN(minutes) ? `${padTo2Digits(Math.floor(minutes / 60))} : ${padTo2Digits(Math.round(minutes % 60))}` : 'N/A';

    useEffect(() => {
        dispatch(fetchMovieInfo(id))
        dispatch(fetchMovieImages(id))
        dispatch(fetchSimilarMovie(id))
    }, [dispatch, id]);
    const {
        title,
        original_title,
        poster_path,
        release_date,
        production_countries,
        production_companies,
        runtime,
        overview,
        vote_average,
        vote_count
    } = movieInfo;

    return <>
        {isLoading ?
            <Loader/>
            :
            Object.keys(movieInfo).length > 0 && Object.keys(images).length > 0 &&
            <section className='movie__info'>
                <FontAwesomeIcon className='back__arrow' onClick={() => navigate(-1)} icon={faArrowLeft}/>
                <div className='d-flex info__header'>

                    <div className='title__block'>
                        <h2 className='movie__title'>{title}</h2>
                        <h3 className='movie__title-original'>{original_title}</h3>
                    </div>
                    <div className='d-flex p-relative rating'>
                        <div className='p-relative stars-outer'>
                            <div className='stars-inner' style={{
                                width: `${
                                    Math.round(((vote_average / 10) * 100))}%`
                            }}></div>
                        </div>

                        <p className='rating__vote'>Rate{vote_average}({vote_count})</p>

                    </div>
                </div>

                <div className='d-flex info__body'>
                    <img
                        src={'https://image.tmdb.org/t/p/original/' + poster_path}
                        alt={original_title + ' poster'}
                        className='info__logo skeleton'
                        width='240'
                        height='350'
                    />
                    <ul className='production__info'>
                        <li className='f-width p-relative info__item'>
                            <span className='item__title'>Release date (US): </span>{release_date}

                        </li>
                        <li className='f-width p-relative info__item'>
                            <span className='item__title'>Country: </span>
                            {production_countries.map(({name}) => name).join(', ')}
                        </li>
                        <li className='f-width p-relative info__item'>
                            <span className='item__title'>Companies: </span>
                            {production_companies.map(({name}) => name).join(', ')}
                        </li>
                        <li className='f-width p-relative info__item'>
                            <span className='item__title'>Runtime: </span>
                            {`${runtime || 'N/A'} minutes (${toHourConverter(runtime || 'N/A')})`}
                        </li>

                        <li className='f-width p-relative info__item'>
                            <span className='item__title'>Overview: </span>
                            {overview || 'N/A'}
                        </li>
                        <li className='f-width p-relative info__item'>
                            <ul
                                className='d-flex br-15 movie__preview'
                                onWheel={(e) => {
                                    e.preventDefault();
                                    document.querySelector('.movie__preview').scrollLeft += e.deltaY + e.deltaX;
                                }}>
                                {images.backdrops.slice(0, 7).map(({file_path}) =>
                                    <li key={file_path} className='preview__item'>
                                        <img
                                            src={'https://image.tmdb.org/t/p/original/' + file_path}
                                            alt={original_title + ' img'}
                                            className='preview__img skeleton'
                                            width='220'
                                            height='250'
                                            loading='lazy'
                                            onClick={() => {
                                                document.querySelector('#fullpage').style.backgroundImage =
                                                    `url(https://image.tmdb.org/t/p/original/${file_path})`;
                                                document.querySelector('#fullpage').style.display = 'block';
                                            }}
                                        />
                                    </li>)}

                            </ul>
                        </li>
                    </ul>
                </div>
                <svg style={{display: 'none'}}>
                    <defs>
                        <symbol id='fivestars'>
                            <path
                                d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24'
                                fillRule='evenodd'/>
                            <path
                                d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24'
                                fillRule='evenodd' transform='translate(24)'/>
                            <path
                                d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24'
                                fillRule='evenodd' transform='translate(48)'/>
                            <path
                                d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24'
                                fillRule='evenodd' transform='translate(72)'/>
                            <path
                                d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24'
                                fillRule='evenodd' transform='translate(96)'/>
                        </symbol>
                    </defs>
                </svg>
                <div className='movie__similar'>
                    <span className='movie-similar__title'>Recommends</span>
                    <MovieList list={movieSimilar}/>
                </div>
            </section>
        }
    </>
}