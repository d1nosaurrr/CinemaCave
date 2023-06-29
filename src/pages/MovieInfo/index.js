import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Loader from "../../components/Loader";
import {fetchMovieInfo} from "../../state/actions/movieList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {fetchMovieImages} from "../../state/actions/movieImages";

export default function MovieInfo() {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const {movieList, movieInfo, isLoading} = useSelector(({movies}) => movies);
    const images = useSelector(({images}) => images);
    console.log(images)
    const movie = movieList.find(({original_title}) => original_title === params.name);
    const padTo2Digits = (num) => num.toString().padStart(2, '0');

    const toHourConverter = (minutes) => `${padTo2Digits(Math.floor(minutes / 60))} : ${padTo2Digits(Math.round(minutes % 60))}`;

    useEffect(() => {
        dispatch(fetchMovieInfo(movie.id))
        dispatch(fetchMovieImages(movie.id))
    }, [dispatch]);

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
            Object.keys(movieInfo).length > 0 &&
                <section className='movie__info'>
                    <FontAwesomeIcon className='back__arrow' onClick={() => navigate(-1)} icon={faArrowLeft} />
                    <div className="info__header">

                        <div className='title__block'>
                            <h2 className='movie__title'>{title}</h2>
                            <h3 className='movie__title-original'>{original_title}</h3>
                        </div>
                        <div className="rating">
                            <svg>
                                <use href="#fivestars"/>
                            </svg>
                            <progress className="rating-bg" value={vote_average} max='10'></progress>
                            <p className='rating__vote'>Rate:{vote_average} Voutes:{vote_count}</p>

                        </div>
                    </div>


                    <div className="info__body">
                        <img
                            src={'https://image.tmdb.org/t/p/original/' + poster_path}
                            alt={original_title + ' poster'}
                            className='info__logo'
                            width='240'
                            height='350'
                        />
                        <ul className="production__info">
                            <li className="info__item">
                                <span className='item__title'>Release date (US): </span>{release_date}

                            </li>
                            <li className="info__item">
                                <span className='item__title'>Country: </span>
                                {production_countries.map(({name}) => name).join(', ')}
                            </li>
                            <li className="info__item">
                                <span className='item__title'>Companies: </span>
                                {production_companies.map(({name}) => name).join(', ')}
                            </li>
                            <li className="info__item">
                                <span className='item__title'>Runtime: </span>
                                {`${runtime} minutes (${toHourConverter(runtime)})`}
                            </li>
                        </ul>
                    </div>
                    <p className='item__title'>Overview:</p>
                    <p className='info__overview'>{overview}</p>
                    <svg style={{display: 'none'}}>
                        <defs>
                            <symbol id="fivestars">
                                <path
                                    d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24"
                                    fillRule="evenodd"/>
                                <path
                                    d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24"
                                    fillRule="evenodd" transform="translate(24)"/>
                                <path
                                    d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24"
                                    fillRule="evenodd" transform="translate(48)"/>
                                <path
                                    d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24"
                                    fillRule="evenodd" transform="translate(72)"/>
                                <path
                                    d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24"
                                    fillRule="evenodd" transform="translate(96)"/>
                            </symbol>
                        </defs>
                    </svg>
                </section>
        }
    </>
}