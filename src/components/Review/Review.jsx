import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { Button, Box } from '@mui/material';

function Review() {
    const feelings = useSelector(store => store.feelings);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store. support);
    const comments = useSelector(store => store.comments);
    const history = useHistory();
    const dispatch = useDispatch();
    const submitReview = (event) => {
        event.preventDefault();
        axios.post('/feedback', {
            feelings: feelings,
            understanding: understanding,
            support: support,
            comments: comments
            }).then((response) => {
                dispatch({ type: 'SET_FEELINGS', payload: null});
                dispatch({ type: 'SET_SUPPORT', payload: null});
                dispatch({ type: 'SET_UNDERSTANDING', payload: null});
                dispatch({ type: 'SET_COMMENTS', payload: ''});
                history.push('/endpage');
            }).catch((error) => {
                console.log('Error submitting feedback:', error);
                alert('Something went wrong!');
            });
    }
    const goBack = () => {
        history.push('/comments');
    }

    return (
        <div>
            <br /><br /><br /><br />
            <table>
                <tbody>
                    <tr>
                        <th>Feelings</th>
                        <td>{feelings}</td>
                    </tr>
                    <tr>
                        <th>Understanding</th>
                        <td>{understanding}</td>
                    </tr>
                    <tr>
                        <th>Support</th>
                        <td>{support}</td>
                    </tr>
                </tbody>
            </table>
            <h3>Comments:</h3>
            <Box sx={{ 
                minWidth: '200px', 
                maxWidth: '600px',
                width: 'auto',
                margin: 'auto', 
                border:'1px solid grey', 
                borderRadius: '5px',
                padding: '20px 20px' }}>
                "{comments}"
            </Box>
            <br />
            <br />
            <Button 
                type='button' 
                variant='contained' 
                sx={{ marginRight: '100px'}}
                onClick={goBack}>
                Go back
            </Button>
            <Button 
                type='submit' 
                variant='contained' 
                onClick={submitReview}>
                Submit Feedback
            </Button>
        </div>
    )
}

export default Review;