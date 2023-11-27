import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';


function FeelingForm() {
    let [feelings, setFeelings] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const addFeelings = (event) => {
        dispatch({type: 'SET_FEELINGS', payload: feelings});
        history.push('/understanding');
    }

    const handleChange = (event) => {
        setFeelings(event.target.value);
      }

    return (
        <form onSubmit={(event) => addFeelings(event)}>
            <input 
                required
                className='input-field'
                type='text'
                placeholder='How are you feeling today?'
                onChange={handleChange}
                value={feelings}
            />
            <button type='submit' onClick={addFeelings}>Next</button>
        </form>
    )
}

export default FeelingForm;
    