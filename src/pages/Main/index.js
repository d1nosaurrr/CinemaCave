import Aside from '../Aside';
import MovieList from '../../components/MovieList';
import MovieInfo from '../MovieInfo';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import PageNotFound from '../PageNotFound';

export default function Main() {
    return (
        <main className='main'>
            <div className='container container--main'>
                <Routes>
                    <Route path='/' element={
                        <MovieList/>
                    }/>
                    <Route path='/movie/:name' element={
                        <MovieInfo />
                    }/>
                    <Route path='*' element={
                        <PageNotFound/>
                    }/>
                </Routes>
                <Aside/>
            </div>
        </main>
    );
}