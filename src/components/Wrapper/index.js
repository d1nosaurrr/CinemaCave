import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsideFilter from '../AsideFilter';
import MovieList from '../MovieList';
import {useSearchParams} from 'react-router-dom';
import {fetchFilterMovie, fetchMovieByQuery} from "../../state/actions/movieList";
import Pagination from "../Pagination";

export default function Wrapper() {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const {movieList, page} = useSelector(({movies}) => movies);
    const {currPage, totalPages} = page;
    const [flag, setFlag] = useState(true);
    const [filterValue, setFilterValue] = useState({
        genre: searchParams.getAll('genre') || [],
        year: searchParams.get('year') || 'all',
        sort: searchParams.get('sort') || 'popularity.desc',
        page: parseInt(searchParams.get('page') || '1'),
    });
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});

        if (!flag) {
            searchParams.set('query', filterValue.query)
            searchParams.set('page', filterValue.page)

            setSearchParams(searchParams);
            dispatch(fetchMovieByQuery(filterValue.query, true, filterValue.page));
        } else {
            setSearchParams({...filterValue});
            dispatch(fetchFilterMovie({...filterValue}));
            setFlag(() => true);
        }
    }, [filterValue])

    const handleFilter = (data) => {
        setFilterValue(prevValue => ({...prevValue, ...data}));
    };
    return (
        <div className='wrapper'>
            <MovieList list={movieList}/>
            <AsideFilter handleFilter={handleFilter} flag={setFlag}/>
            <Pagination handler={handleFilter} currPage={currPage} totalPages={totalPages}/>
        </div>
    );
}