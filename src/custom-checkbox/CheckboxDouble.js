import React, { useEffect, useState } from 'react'
import './custom-checkbox-style.css';

const CheckboxDouble = props => {

  const {
    label,
    onChange,
  } = props;

  const [state, setState] = useState(0);
  const [firstClass, setFirstClass] = useState('');
  const [secondClass, setSecondClass] = useState('');

  const onClick = e => {
    if (e.nativeEvent.pointerId === 1) {
      setState(state + 1);
    }
  }

  useEffect(() => {
    if (state === 0) return;

    switch (state % 3) {
      case 0: 
        setFirstClass('custom-checkbox--second-state-left-out');
        setSecondClass('custom-checkbox--second-state-right-out');
        break;
      case 1: 
        setFirstClass('custom-checkbox--first-state-in');
        setSecondClass('');
        break;
      case 2: 
        setFirstClass('custom-checkbox--second-state-left-in');
        setSecondClass('custom-checkbox--second-state-right-in');
        break;
    };
  }, [state]);

  useEffect(() => {
    if (onChange) {
      onChange(state % 3);
    }
  }, [state]);

  return (
    <div onClick={e => onClick(e)}>
      <label>
        <input type="checkbox" className='custom-checkbox--real-checkbox'/>
        <span className='custom-checkbox--main-container'>
          <span className={firstClass} />
          <span className={secondClass} />
        </span>
        {label}
      </label>
    </div>
  )
}

export default CheckboxDouble;