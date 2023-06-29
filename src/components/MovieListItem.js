import {Link} from "react-router-dom";

export default function MovieListItem({props}) {
    return (
        <>
            <li className='movie__item draw-border'>
                <Link to={`/movie/${props.original_title}`} className='item__card'>
                    <img
                        src={'https://image.tmdb.org/t/p/original/' + props.poster_path}
                        alt={props.original_title + ' poster'}
                        className='card__logo'
                        width='140'
                        height='200'
                    />
                    <span className='card__title'>{props.original_title}</span>
                </Link>
            </li>
        </>
    )
}