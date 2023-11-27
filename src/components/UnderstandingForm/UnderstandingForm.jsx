import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';


function UnderstandingForm() {
    let [understanding, setUnderstanding] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const addUnderstanding = () => {
        dispatch({type: 'SET_UNDERSTANDING', payload: understanding});
        history.push('/support');
    }

    const handleChange = (event) => {
        setUnderstanding(event.target.value);
        }

    return (
        <form onSubmit={(event) => addUnderstanding()}>
        <input 
            required
            className='input-field'
            type='text'
            placeholder='How well are you being supported?'
            onChange={handleChange}
            value={understanding}
        />
        <button type='submit' onClick={addUnderstanding}>Next</button>
    </form>

    )
}

export default UnderstandingForm;
    