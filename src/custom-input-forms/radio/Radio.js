import React from 'react';
import './custom-radio-style.css';

const Radio = ({
  onChange,
  label,
  name,
  id,
  style,
}) => {



  return (
    <label style={{...style}}>
      <input 
        className='custom-radio--real-radio'
        type="radio" 
        name={name} 
        onChange={() => onChange(id)}
      />
      <span className='custom-radio--main-container'/>
      {label}
    </label>
  )
}

export default Radio;