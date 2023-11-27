import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { Radio, RadioGroup, FormControlLabel, 
    FormControl, FormLabel, Button } from '@mui/material';

function SupportForm() {
    let [support, setSupport] = useState(useSelector(store => store.support));
    const dispatch = useDispatch();
    const history = useHistory();
    const addSupport = (event) => {
        if (support.length > 0) {
            dispatch({type: 'SET_SUPPORT', payload: support});
            history.push('/comments');
        }
    }

    const handleChange = (event) => {
        setSupport(event.target.value);
      }

    return (
        <FormControl>
            <FormLabel id='radio-group' sx={{ fontSize: '24px' }}>How well are you being supported?</FormLabel>
            <br />
            <RadioGroup
                row
                aria-labelledby='label'
                value={support}
                name='button-group'
                onChange={handleChange}
            >
                <FormControlLabel value={1} control={<Radio />} label='1' labelPlacement='top' />
                <FormControlLabel value={2} control={<Radio />} labelPlacement='top' />
                <FormControlLabel value={3} control={<Radio />} labelPlacement='top' />
                <FormControlLabel value={4} control={<Radio />} labelPlacement='top' />
                <FormControlLabel value={5} control={<Radio />} label='5' labelPlacement='top' />
            </RadioGroup>
            <br />
            <Button type='submit' variant='contained' onClick={addSupport}>Next</Button> 
        </FormControl>
    )
}

export default SupportForm;
    