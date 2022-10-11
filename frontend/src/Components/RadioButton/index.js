import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ControlledRadioButtonsGroup() {
  const [value, setValue] = React.useState('sim');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Prioridade</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Todos" control={<Radio />} label="Todos" checked={selectedValue === 'all'}/>
        <FormControlLabel value="Sim" control={<Radio />} label="Sim" checked={selectedValue === 'true'}/>
        <FormControlLabel value="Não" control={<Radio />} label="Não" checked={selectedValue === 'false'}/>
      </RadioGroup>
    </FormControl>
  );
}
