import './styles/style.scss';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './pages/Footer';
import {fetchGenre} from './state/actions/genre';
import {fetchMovie} from './state/actions/movieList';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGenre());
        dispatch(fetchMovie());

    }, [dispatch]);

    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
}

export default App;

