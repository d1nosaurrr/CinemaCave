import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGhost} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

export default function PageNotFound() {
    return (
        <section className='d-flex not__found'>
            <h1 className='not-found__tittle'>4<span className='not-found__ghost'><FontAwesomeIcon
                icon={faGhost}/></span>4</h1>
            <h2 className='not-found__description'>Error: 404 page not found</h2>
            <p>Click <Link className='not-found__link' to='./'>here</Link> if you want go to homepage</p>
        </section>
    )
}