import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, FormLabel, TextField, Button } from '@mui/material';


function CommentForm() {
    let [comment, setComment] = useState(useSelector(store => store.comments));
    const dispatch = useDispatch();
    const history = useHistory();
    const addComment = () => {
        dispatch({type: 'SET_COMMENTS', payload: comment});
        history.push('/review');
    }
    const goBack = () => {
        dispatch({type: 'SET_COMMENTS', payload: comment});
        history.push('/support');
    }
    const handleChange = (event) => {
        setComment(event.target.value);
        }

    return (
        <div>
            <br /><br /><br />
            <FormControl>
                <FormLabel id='text-field' sx={{ fontSize: '24px' }}>Any comments you want to leave?</FormLabel>
                <br />
                <TextField
                    value={comment}
                    onChange={handleChange}
                />
            </FormControl>
            <br /><br />
            <Button 
                type='button' 
                variant='contained' 
                onClick={goBack}
                sx={{ marginRight: '200px'}}>
                    Back
            </Button> 
            <Button type='submit' variant='contained' onClick={addComment}>Review</Button> 
        </div>
    )
}

export default CommentForm;
    