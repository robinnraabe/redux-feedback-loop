import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { Radio, RadioGroup, FormControlLabel, FormControl, 
    FormLabel, Button, Snackbar, Alert } from '@mui/material';

function SupportForm() {
    let [support, setSupport] = useState(useSelector(store => store.support));
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const addSupport = (event) => {
        if (support !== null) {
            dispatch({type: 'SET_SUPPORT', payload: support});
            history.push('/comments');
        }
        else {
            setOpen(true);
        }
    }
    const goBack = () => {
        if (support !== null) {
            dispatch({type: 'SET_SUPPORT', payload: support});
        }
        history.push('/understanding');
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleChange = (event) => {
        setSupport(event.target.value);
      }

    return (
        <div>
            <br /><br /><br />
            <FormControl>
                <FormLabel id='radio-group' sx={{ fontSize: '24px' }}>How well are you being supported?</FormLabel>
                <br />
                <RadioGroup
                    row
                    sx={{ textAlign: 'center' }}
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
            </FormControl>
            <br /><br /><br /><br /><br /><br />
            <Button 
                type='button' 
                variant='contained' 
                sx={{ marginRight: '200px'}}
                onClick={goBack}>
                    Back
            </Button> 
            <Button type='submit' variant='contained' onClick={addSupport}>Next</Button> 
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    You must choose a number to continue.
                </Alert>
            </Snackbar>
        </div>
    )
}

export default SupportForm;
    