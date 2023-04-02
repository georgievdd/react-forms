import React, { useState } from 'react';
import { useEffect } from 'react';
import './checkbox.css';



const Test = () => {

  const [state, setState] = useState(0);
  const [className, setClassname] = useState('');
  const [fixClassName, setFixClassName] = useState('');

  const onClick = e => {
    if (e.nativeEvent.pointerId === 1) {
      setState(state + 1);
    }
  }

  useEffect(() => {
    if (state === 0) return;
    switch (state % 3) {
      case 0: 
        setClassname('out-1');
        setFixClassName('out-2');
        break;
      case 1: 
        setClassname('click-1');
        setFixClassName('');
        break;
      case 2: 
        setClassname('click-2');
        setFixClassName('click-2-2');
        break;
      default:
        break;
    };
  }, [state]);

  return (
    <div onClick={e => onClick(e)}>
      <label>
        <input type="checkbox" className='real-checkbox-2'/>
        <span className='init'>
          <span className={className} />
          <span className={fixClassName} />
        </span>
        checkbox text
      </label>
    </div>
  )
}

export default Test;