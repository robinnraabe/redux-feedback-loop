import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { Radio, RadioGroup, FormControlLabel, 
    FormControl, FormLabel, Button } from '@mui/material';


function UnderstandingForm() {
    let [understanding, setUnderstanding] = useState(useSelector(store => store.understanding));
    const dispatch = useDispatch();
    const history = useHistory();
    const addUnderstanding = () => {
        if (understanding.length > 0) {
            dispatch({type: 'SET_UNDERSTANDING', payload: understanding});
            history.push('/support');
        }
    }
    const goBack = () => {
        dispatch({type: 'SET_UNDERSTANDING', payload: understanding});
            history.push('/feeling');
    }

    const handleChange = (event) => {
        setUnderstanding(event.target.value);
        }

    return (
        <FormControl>
            <FormLabel id='radio-group' sx={{ fontSize: '24px' }}>How well are you understanding the content?</FormLabel>
            <br />
            <RadioGroup
                row
                aria-labelledby='label'
                value={understanding}
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
            <Button type='submit' variant='contained' onClick={addUnderstanding}>Next</Button> 
            <Button type='button' variant='contained' onClick={goBack}>Back</Button> 
        </FormControl>
    )
}

export default UnderstandingForm;
    