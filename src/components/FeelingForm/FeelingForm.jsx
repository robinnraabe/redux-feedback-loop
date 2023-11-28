import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { Radio, RadioGroup, FormControlLabel, FormControl, 
    FormLabel, Button, Snackbar, Alert } from '@mui/material';

function FeelingForm() {
    let [feelings, setFeelings] = useState(useSelector(store => store.feelings));
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const addFeelings = () => {
        if (feelings !== null) {
            dispatch({type: 'SET_FEELINGS', payload: feelings});
            history.push('/understanding');
        }
        else {
            setOpen(true);
        }
    }
    const goBack = () => {
        if (feelings !== null) {
            dispatch({type: 'SET_FEELINGS', payload: feelings});
        }
        history.push('/');
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleChange = (event) => {
        setFeelings(event.target.value);
      }

    return (
        <div>
            <br /><br /><br />
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
            </FormControl>
            <br /><br /><br /><br /><br /><br />
            <Button
                type='button' 
                variant='contained' 
                sx={{ marginRight: '200px', backgroundColor: 'gray' }}
                onClick={goBack}>
                    Back
            </Button> 
            <Button type='submit' variant='contained' onClick={addFeelings}>Next</Button> 
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    You must choose a number to continue.
                </Alert>
            </Snackbar>
        </div>
    )
}

export default FeelingForm;
    