import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function Pagination({handler, currPage, totalPages}) {
    const handlePagination = (pageNum) => {
        if (pageNum < 1 || pageNum > totalPages) return;
        handler({'page': pageNum});
    };

    return (
        <div className='d-flex pagination'>
            <FontAwesomeIcon className='pagination__arrow'
                             onClick={() => handlePagination(currPage - 1)}
                             icon={faArrowLeft}/>
            <span className='pagination__page'>{currPage}</span>
            <FontAwesomeIcon className='pagination__arrow'
                             onClick={() => handlePagination(currPage + 1)}
                             icon={faArrowRight}/>
        </div>
    );
}