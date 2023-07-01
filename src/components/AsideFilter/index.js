import {useSelector} from 'react-redux';
import React, {useRef, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFilter} from '@fortawesome/free-solid-svg-icons';

export default function AsideFilter({handleFilter, flag}) {
    const [searchParams] = useSearchParams();
    const years = useRef([]);
    const [isAsideActive, setIsAsideActive] = useState(false);
    const [activeFilter, setActiveFilter] = useState(
        {
            genre: searchParams.getAll('genre') || [],
            year: searchParams.get('year') || 'all',
            sort: searchParams.get('sort') || 'popularity.desc',
        }
    );

    let genreList = useSelector(({genres}) => genres.genreList);

    const toggleMenu = () => {
        setIsAsideActive(prevValue => !prevValue);
    }

    const handleToggleGenre = (id) => {
        setActiveFilter((prevState) => ({
            ...prevState,
            genre: !activeFilter.genre.includes(id) ?
                [...prevState.genre, id] : prevState.genre.filter(item => item !== id),

        }));
    };

    (() => {
        const currentYears = new Date().getFullYear();
        const elList = [<option name='all' value='all' id='check-all' key='all'>All</option>]
        for (let index = currentYears; index >= currentYears - 15; index--) {
            elList.push(<option name={index} value={index} id={index} key={index}>{index}</option>)
        }
        years.current = elList
    })();

    return (
        <>
            <div onClick={toggleMenu} className={`d-flex menu__toggle ${isAsideActive ? 'active' : ''}`}>
                <span className='line line1'></span>
                <span className='line line2'></span>
                <span className='line line3'></span>
            </div>
            <aside className={`aside ${isAsideActive ? 'active' : ''}`}>

                <FontAwesomeIcon
                    onClick={() => {
                        setIsAsideActive(false);
                        handleFilter(activeFilter);
                        flag(() => false)
                    }}
                    className='br-15 movie__filter' icon={faFilter}/>

                <select
                    defaultValue={activeFilter.sort}
                    className='br-15 select movie_popularity'
                    onChange={({target}) => activeFilter.sort = target.value}
                    name='sort'>
                    <option value='popularity.desc'>More popular</option>
                    <option value='popularity.asc'>Less popular</option>
                    <option value='primary_release_date.desc'>Newer</option>
                    <option value='primary_release_date.asc'>Older</option>
                </select>
                <select
                    onChange={({target}) => activeFilter.year = target.value}
                    className='br-15 select movie__years'
                    defaultValue={activeFilter.year}
                >
                    {years.current}
                </select>
                <ul className='d-flex movie__categories categories'>
                    {genreList.map(({id, name}) => <li
                        onClick={() => handleToggleGenre(id.toString())}
                        className={`br-15 categories__item ${activeFilter.genre.includes(id.toString()) ? 'active' : ''}`}
                        key={id}>{name}</li>)}
                </ul>
            </aside>
        </>
    )
}