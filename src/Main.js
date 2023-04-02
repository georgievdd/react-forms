import React from 'react';
import './containers.css';
import Test from './test';
import CheckboxDouble from './custom-checkbox/CheckboxDouble';
import Checkbox from './custom-checkbox/Checkbox';

const Main = () => {
  return (
    <div className='main-container'>
      
      <CheckboxDouble 
        label="double"
        stateForced={2}
      />
      <div style={{height: "10px"}}></div>
      <Checkbox 
        label="mono"
      />


    </div>
  )
}

export default Main;