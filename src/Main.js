import React from 'react';
import './containers.css';
import Radio from './custom-input-forms/radio/Radio';
import Checkbox from './custom-input-forms/checkbox/Checkbox';
import CheckboxDouble from './custom-input-forms/checkbox/CheckboxDouble';

const Main = () => {
  return (
    <div className='main-container'>
      <Radio 
        label="text" 
        onChange={function(){}}
        name="test"
        id={1}
      />
      <Radio 
        label="text" 
        onChange={function(){}}
        name="test"
        id={2}
      />

      <Checkbox 
        label="text"
        onChange={()=>{}}
      />

      <CheckboxDouble 
        label="text"
        onChange={()=>{}}
      />


    </div>
  )
}

export default Main;