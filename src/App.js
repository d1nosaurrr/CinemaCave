import './styles/style.scss';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route, Routes, useSearchParams} from 'react-router-dom';
import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './pages/Footer';
import {fetchGenre} from './state/actions/genre';
import {fetchMovie} from './state/actions/movieList';
import PageNotFound from "./pages/PageNotFound";
import MovieInfo from "./pages/MovieInfo";
import Wrapper from "./components/Wrapper";

function App() {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const currPage = parseInt(searchParams.get('page') || 1)
    useEffect(() => {
        dispatch(fetchGenre());
        dispatch(fetchMovie(currPage));

    }, [dispatch]);

    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={
                    <Main>
                        <Wrapper />
                    </Main>
                }/>
                <Route path='/movie/:id' element={
                    <Main>
                        <MovieInfo/>
                    </Main>
                }/>
                <Route path='*' element={
                    <PageNotFound/>
                }/>
                Main>

            </Routes>
            <Footer/>
        </>
    );
}

export default App;

