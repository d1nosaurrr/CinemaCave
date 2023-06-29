import logo from '../../images/logo/logo.svg';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='container d-flex container--footer'>
                <img className='footer__logo' src={logo} width='50' height='50' alt=''/>
                <span className='footer__description'>CinemaCave <br/> Find info about movies using <a
                    className='footer__link'
                    href='https://www.themoviedb.org/'>themoviedb.org</a> API</span>
            </div>
        </footer>
    )
}