import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { Radio, RadioGroup, FormControlLabel, 
    FormControl, FormLabel, Button } from '@mui/material';

function FeelingForm() {
    let [feelings, setFeelings] = useState(useSelector(store => store.feelings));
    const dispatch = useDispatch();
    const history = useHistory();

    const addFeelings = (event) => {
        if (feelings.length !== null) {
            dispatch({type: 'SET_FEELINGS', payload: feelings});
            history.push('/understanding');
        }
    }

    const handleChange = (event) => {
        setFeelings(event.target.value);
      }

    return (
        <FormControl>
            <FormLabel id='radio-group' sx={{ fontSize: '24px' }}>How are you feeling today?</FormLabel>
            <br />
            <RadioGroup
                row
                aria-labelledby='label'
                value={feelings}
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
            <Button type='submit' variant='contained' onClick={addFeelings}>Next</Button> 
        </FormControl>
    )
}

export default FeelingForm;
    