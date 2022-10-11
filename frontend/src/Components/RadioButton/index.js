import * as React from 'react';
import Radio from '@mui/material/Radio';

import './styles.css'

export default function RadioButton({selectedValue, handleChange}) {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    
  };

  return (
    <div className='radioOptions'>
      <Radio
        checked={selectedValue === 'all'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
        />
        <span>Todos</span>
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
    </div>
  );
}
