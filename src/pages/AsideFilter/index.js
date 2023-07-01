import {useSelector} from 'react-redux';
import React, {useRef, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFilter} from '@fortawesome/free-solid-svg-icons';

export default function AsideFilter({handleFilter}) {
    const [searchParams] = useSearchParams();
    const years = useRef([]);
    const [isAsideActive, setIsAsideActive] = useState(false);

    const [activeFilter, setActiveFilter] = useState(
        {
            genre: searchParams.getAll('genre') || '',
            year: searchParams.get('year') || '',
            sort: searchParams.get('sort') || '',
        }
    );
    let genre = useSelector(({genres}) => genres.genreList);

    const handleToggleGenre = (id) => {
        setActiveFilter((prevState) => ({
            ...prevState,
            genre: !activeFilter.genre.includes(id) ?
                [...prevState.genre, id] : prevState.genre.filter(item => item !== id),

        }));
    };

    (() => {
        const currentYears = new Date().getFullYear();
        const elList = [<option name='all' value='' id='check-all' key='all'>All</option>]
        for (let index = currentYears; index >= currentYears - 15; index--) {
            elList.push(<option name={index} value={index} id={index} key={index}>{index}</option>)
        }
        years.current = elList
    })();

    const toggleMenu = () => {
        setIsAsideActive(prevValue => !prevValue);
    }
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
                        handleFilter(activeFilter)
                    }}
                    className='movie__filter' icon={faFilter}/>
                <select
                    defaultValue='popularity.desc'

                    onChange={({target}) => activeFilter.sort = target.value}
                    name='sort'>
                    <option value='popularity.desc'>More popular first</option>
                    <option value='popularity.asc'>Less popular first</option>
                    <option value='primary_release_date.desc'>Newer</option>
                    <option value='primary_release_date.asc'>Older</option>
                </select>
                <select
                    onChange={({target}) => activeFilter.year = target.value}
                    className='movie__years'
                    defaultValue={activeFilter.year}
                >
                    {years.current}
                </select>
                <ul className='d-flex movie__categories categories'>
                    {genre.map(({id, name}) => <li
                        onClick={() => handleToggleGenre(id.toString())}
                        className={`categories__item ${activeFilter.genre.includes(id.toString()) ? 'active' : ''}`}
                        key={id}>{name}</li>)}
                </ul>
            </aside>
        </>
    )
}