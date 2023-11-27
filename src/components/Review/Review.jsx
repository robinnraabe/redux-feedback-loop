import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; 


function Review() {
    
    const submitReview = (event) => {
        axios.post('/feedback', {
            DATA
            }).then((response) => {
                handleClick();
            }).catch((err) => {
                console.log(error);
                alert('Something went wrong!');
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        submitReview(review);
    }

    return (
        <div>
            Feelings
            Understanding
            Support
            Comments
            <button onClick={handleSubmit}>Submit Feedback</button>
        </div>
    )
}

export default Review;
    