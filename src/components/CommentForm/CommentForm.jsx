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
    const handleChange = (event) => {
        setComment(event.target.value);
        }

    return (
        <FormControl>
            <FormLabel id='text-field' sx={{ fontSize: '24px' }}>Any comments you want to leave?</FormLabel>
            <br />
            <TextField
                value={comment}
                onChange={handleChange}
            />
            <br />
            <Button type='submit' variant='contained' onClick={addComment}>Review</Button> 
        </FormControl>
    )
}

export default CommentForm;
    