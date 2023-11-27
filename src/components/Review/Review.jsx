import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; 
import { useSelector } from 'react-redux';


function Review() {
    const feelings = useSelector(store => store.feelings);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store. support);
    const comments = useSelector(store => store.comments);
    const history = useHistory();
    const submitReview = (event) => {
        event.preventDefault();
        axios.post('/feedback', {
            feelings: feelings,
            understanding: understanding,
            support: support,
            comments: comments
            }).then((response) => {
                history.push('/endpage');
            }).catch((error) => {
                console.log('Error submitting feedback:', error);
                alert('Something went wrong!');
            });
    }

    return (
        <div>
            <h1>Review before submitting</h1>
            <h4>Feelings</h4>
            {feelings}
            <h4>Understanding</h4>
            {understanding}
            <h4>Support</h4>
            {support}
            <h4>Comments</h4>
            {comments}
            <br />
            <br />
            <button onClick={submitReview}>Submit Feedback</button>
        </div>
    )
}

export default Review;
    