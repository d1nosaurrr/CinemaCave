import './styles/style.scss';
import React, {lazy, Suspense, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Route, Routes, useSearchParams} from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import {fetchGenre} from './state/actions/genre';
import {fetchMovie} from './state/actions/movieList';
import PageNotFound from './pages/PageNotFound';
import Loader from './components/Loader';

import Main from './pages/Main';

const LazyMovieInfo = lazy(() => import('./pages/MovieInfo'));
const LazyWrapper = lazy(() => import('./components/Wrapper'));

function App() {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const currPage = parseInt(searchParams.get('page') || 1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchGenre());
        dispatch(fetchMovie(currPage));
        setLoading(false);
    }, [dispatch, loading]);
    return (
        <>
            {loading && <Loader/>}
            <Header/>
            <Main>
                <Routes>
                    <Route path='/search/' element={
                        <Suspense fallback={<Loader/>}>
                            <LazyWrapper/>
                        </Suspense>
                    }/>
                    <Route path='/' element={
                        <Suspense fallback={<Loader/>}>
                            <LazyWrapper/>
                        </Suspense>
                    }/>
                    <Route path='/movie/:id' element={
                        <Suspense fallback={<Loader/>}>
                            <LazyMovieInfo/>
                        </Suspense>

                    }/>
                    <Route path='*' element={
                        <PageNotFound/>
                    }/>
                </Routes>
            </Main>
            <Footer/>
        </>
    );
}

export default App
;

