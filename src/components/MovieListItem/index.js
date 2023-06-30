import {Link} from 'react-router-dom';

export default function Index({props}) {
    return (
        <>
            <li className='movie__item br-15 p-relative draw-border'>
                <Link to={`/movie/${props.id}`} className='d-flex br-15 item__card'>
                    <img
                        src={'https://image.tmdb.org/t/p/original/' + props.poster_path}
                        alt={props.original_title + ' poster'}
                        className='f-width br-15 card__logo'
                        width='140'
                        height='200'
                        loading='lazy'
                    />
                    <div className='f-width d-flex br-15 card__description'>
                        <p className='card__title'>{props.title}</p>
                        <p className='d-flex card__score'>
                            {props.release_date ? (new Date(props.release_date)).getFullYear() : 'N/A'}
                            <span className='rate'>{props.vote_average}</span>
                        </p>
                    </div>
                </Link>
            </li>
        </>
    )
}