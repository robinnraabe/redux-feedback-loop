import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; 


function SupportForm() {
    const history = useHistory();
    const handleClick = (event) => {
        history.push('/comments');
    }

    return (
        <div>
            <input 
                required
                className="input-field"
                type="text" 
                placeholder="How well are you being supported?"
            />
            <button onClick={handleClick}>Next</button>
        </div>
    )
}

export default SupportForm;
    