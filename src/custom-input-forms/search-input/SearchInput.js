import './custom-search-input-style.css';

const InputStandart = ({
  onCLick,
  value,
  onChange,
  placeholder
}) => {
  
  return (
    <form className='custom-search-input-container'>
      <input 
        value={value}
        onChange={e => onChange(e)}
        placeholder={placeholder}
        style={{width: '82%'}}
      />
      <label style={{width: '80px'}} onClick={() => onCLick()}>Найти</label>
    </form>
  );
}

export default InputStandart