import React, { useEffect, useState } from 'react'
import './custom-checkbox-style.css';

const Checkbox = ({
  label,
  onChange,
}) => {

  const [state, setState] = useState(0);
  const [className, setClassName] = useState('');

  const onClick = e => {
    if (e.nativeEvent.pointerId === 1) {
      setState(state + 1);
    }
  }

  useEffect(() => {
    if (state === 0) return;

    switch (state % 2) {
      case 0: 
      setClassName('custom-checkbox--first-state-out');
        break;
      case 1: 
      setClassName('custom-checkbox--first-state-in');
        break;
    };
  }, [state]);

  useEffect(() => {
    onChange(state % 2);
  }, [state]);

  return (
    <label onClick={e => onClick(e)}>
      <input type="checkbox" className='custom-checkbox--real-checkbox'/>
      <span className='custom-checkbox--main-container'>
        <span className={className} />
      </span>
      {label}
    </label>
  )
}

export default Checkbox;