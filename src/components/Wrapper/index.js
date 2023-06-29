import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Aside from '../../pages/AsideFilter';
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

    const handleFilter = (data) => {
        setFilterValue(() => ({
            genre: data.genre,
            year: data.year,
            sort: data.sort,
            page: page.currPage,
        }));
    };
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        setSearchParams({...searchParams, ...filterValue},
            dispatch(fetchFilterMovie({
                genre: filterValue.genre,
                year: filterValue.year,
                sort: filterValue.sort,
                page: filterValue.page
            })));
    }, [filterValue])

    const handlePagination = (pageNum) => {
        if (pageNum < 1 || pageNum > page.totalPages) return;
        setFilterValue(prevValue => ({
            ...prevValue,
            page: pageNum
        }));
    };

    return (
        <main className='main'>
            <div className='container container--main'>
                <MovieList />
                <Aside handleFilter={handleFilter}/>
                <>
                    <div className='d-flex pagination'>
                        <FontAwesomeIcon className='pagination__arrow'
                                         onClick={() => handlePagination(page.currPage - 1)}
                                         icon={faArrowLeft}/>
                        <span className='pagination__page'>{page.currPage}</span>
                        <FontAwesomeIcon className='pagination__arrow'
                                         onClick={() => handlePagination(page.currPage + 1)}
                                         icon={faArrowRight}/>
                    </div>
                </>
            </div>
        </main>
    );
}