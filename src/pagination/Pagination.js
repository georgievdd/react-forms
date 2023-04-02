import React, { useState } from 'react';
import './pagination-style.css';
import { createPages } from './pages';

const Pagination = ({
  totalCount,
  currentCount,
  renderCount,
  nextPage,
  toEnd,
  toBegin,
  toPage,
}) => {

  const pages = createPages(currentCount, totalCount, renderCount);
  
  return (
    <div className='pagination-container'>
      
      <div className='pagination-label-container' onClick={toBegin}>В начало</div>
      
      <label>
        {pages.map(page =>
          <div className={page.style} key={page.index} onClick={() => toPage(page.index)}>{page.index + 1}</div>
        )}
      </label>
      
      <div className='pagination-label-container' onClick={nextPage}>Дальше</div>
      <div className='pagination-label-container' onClick={toEnd}>В конец</div>
    </div>
  )
}

export default Pagination;