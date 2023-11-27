import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; 


function UnderstandingForm() {
    const history = useHistory();
    const handleClick = (event) => {
        history.push('/support');
    }

    return (
        <div>
            <input 
                required
                className="input-field"
                type="text" 
                placeholder="How well are you understanding the content?"
            />
            <button onClick={handleClick}>Next</button>
        </div>
    )
}

export default UnderstandingForm;
    