import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; 


function CommentForm() {
    const history = useHistory();
    const handleClick = (event) => {
        history.push('/review');
    }

    return (
        <div>
            <input 
                className="input-field"
                type="text" 
                placeholder="Any comments you want to leave?"
            />
            <button onClick={handleClick}>Next</button>
        </div>
    )
}

export default CommentForm;
    