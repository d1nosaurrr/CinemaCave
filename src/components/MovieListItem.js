import {Link} from "react-router-dom";

export default function MovieListItem({props}) {
    // console.log(props)
    return (
        <>
            <li className='movie__item p-relative draw-border'>
                <Link to={`/movie/${props.id}`} className='p-relative d-flex item__card'>
                    <img
                        src={'https://image.tmdb.org/t/p/original/' + props.poster_path}
                        alt={props.original_title + ' poster'}
                        className='f-width card__logo'
                        width='140'
                        height='200'
                    />
                    <div className="f-width d-flex card__description">
                        <p className='d-flex card__title'>{props.title}</p>
                        <p className='d-flex card__score'>
                        {props.release_date ? (new Date(props.release_date)).getFullYear() : "N/A"}
                            <span className='rate'>{props.vote_average}</span>
                    </p>
                    </div>
                </Link>
            </li>
        </>
    )
}