import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsideFilter from '../../pages/AsideFilter';
import MovieList from '../../pages/MovieList';
import {fetchFilterMovie} from '../../state/actions/movieList';
import {useSearchParams} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

export default function Wrapper() {
    const {page} = useSelector(({movies}) => movies)
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [filterValue, setFilterValue] = useState({
        genre: [],
        year: '',
        sort: '',
        page: parseInt(searchParams.get('page') || 1),
    });
    const {movieList} = useSelector(({movies}) => movies);

    const handleFilter = (data) => {
        setFilterValue({...data});
    };
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        setSearchParams({...filterValue});
        dispatch(fetchFilterMovie({...filterValue}));
    }, [filterValue])

    const handlePagination = (pageNum) => {
        if (pageNum < 1 || pageNum > page.totalPages) return;
        setFilterValue(prevValue => ({
            ...prevValue,
            page: pageNum
        }));
    };
    return (
        <div className='wrapper'>
            <MovieList list={movieList}/>
            <AsideFilter handleFilter={handleFilter}/>
            <div className='wrapper_fixed'>
                <div className='d-flex pagination'>
                    <FontAwesomeIcon className='pagination__arrow'
                                     onClick={() => handlePagination(page.currPage - 1)}
                                     icon={faArrowLeft}/>
                    <span className='pagination__page'>{page.currPage}</span>
                    <FontAwesomeIcon className='pagination__arrow'
                                     onClick={() => handlePagination(page.currPage + 1)}
                                     icon={faArrowRight}/>
                </div>
            </div>
        </div>
    );
}