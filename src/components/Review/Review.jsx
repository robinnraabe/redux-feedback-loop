import React from 'react';
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

    // POST feedback, submits reviewed feedback to database
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
            <br />
            <h2>Feedback</h2>
            <table id='table'>
                <tbody>
                    <tr>
                        <th id='th'>Feelings</th>
                        <td id='id'>{feelings}</td>
                    </tr>
                    <tr>
                        <th id='th'>Understanding</th>
                        <td id='id'>{understanding}</td>
                    </tr>
                    <tr>
                        <th id='th'>Support</th>
                        <td id='id'>{support}</td>
                    </tr>
                </tbody>
            </table>
            <br /><br />
            <h3>Comments</h3>
            <Box className='comment' sx={{ 
                minWidth: '200px', 
                maxWidth: '600px',
                width: '400px',
                margin: 'auto', 
                border:'1px solid lightgrey', 
                borderRadius: '5px',
                padding: '20px 20px',
                textAlign: 'left' }}>
                {comments}
            </Box>
            <br />
            <br />
            <Button 
                type='button' 
                variant='contained' 
                sx={{ marginRight: '200px', width: '120px', backgroundColor: 'gray'}}
                onClick={goBack}>
                Go back
            </Button>
            <Button 
                type='submit' 
                variant='contained' 
                sx={{ width: '120px' }}
                onClick={submitReview}>
                Submit
            </Button>
        </div>
    )
}

export default Review;