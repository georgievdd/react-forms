import React, { useEffect, useState } from 'react';
import './containers.css';
import Radio from './custom-input-forms/radio/Radio';
import Checkbox from './custom-input-forms/checkbox/Checkbox';
import CheckboxDouble from './custom-input-forms/checkbox/CheckboxDouble';
import Pagination from './pagination/Pagination';


let arrayData = [];
const onPageCount = 30;
for (let i = 1; i < 10001; ++i) {
  arrayData.push(i);
}

const PaginationTest = () => {

  const [currentCount, setCurrentCount] = useState(0);
  const totalCount = Math.floor(arrayData.length / onPageCount);
  const renderCount = 9;
  const [onPageArray, setArray] = useState([]);

  useEffect(() => {

    let arr = [];
    for (let i = currentCount * onPageCount; i < currentCount * onPageCount + onPageCount; ++i) {
      if (i >= arrayData.length) break;
      arr.push(arrayData[i]);
    }
    setArray(arr);
  }, [currentCount]);


  const nextPage = () => {
    if (currentCount < totalCount) setCurrentCount(currentCount + 1);
  }

  const toBegin = () => {
    setCurrentCount(0);
  }

  const toEnd = () => {
    setCurrentCount(totalCount);
  }

  const toPage = index => {
    setCurrentCount(index);
  }

  return (
    <div className='main-container'>
      

      {onPageArray.map((el, id) => (
        <div
          style={{marginBottom: "5px", color: "black", fontSize: "20px", width: "100%", textAlign: "center", border: "1px solid black"}}
          key={id}
        >{el}</div>
      ))}
      <div style={{height: "20px"}}></div>
      <Pagination
        currentCount={currentCount}
        totalCount={totalCount}
        renderCount={renderCount}
        nextPage={nextPage}
        toBegin={toBegin}
        toEnd={toEnd}
        toPage={toPage}
      />


    </div>
  )
}

export default PaginationTest;