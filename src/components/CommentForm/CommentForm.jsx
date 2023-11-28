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
                <br /><br />
                <TextField 
                    multiline
                    value={comment}
                    onChange={handleChange}
                    sx={{ width: '400px' }}
                    inputProps={{ style: {fontWeight: '300', color: 'rgb(72, 72, 72)'} }} 
                />
            </FormControl>
            <br /><br /><br /><br /><br /><br />
            <Button 
                type='button' 
                variant='contained' 
                sx={{ marginRight: '200px', width: '100px', backgroundColor: 'gray' }}
                onClick={goBack}>
                    Back
            </Button> 
            <Button 
                type='submit' 
                variant='contained' 
                sx={{ width: '100px' }}
                onClick={addComment}>
                    Review
            </Button> 
        </div>
    )
}

export default CommentForm;
    