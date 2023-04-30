import React, { useState } from 'react'
import PaginationTest from './PoginationTest';
import SearchInput from './custom-input-forms/search-input/SearchInput';

const Main = () => {

  const [input, setInput] = useState('');

  return (
    <div>
      <div style={{marginLeft: "100px", width: "650px", paddingTop: "30px"}}>
        <SearchInput value={input} onChange={e => setInput(e.target.value)} onCLick={() => {}} placeholder={'Пример: Домашка по логорифмам'}/>
      </div>
      <PaginationTest />
    </div>
  )
}

export default Main;