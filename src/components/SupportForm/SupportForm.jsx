import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';

function SupportForm() {
    let [support, setSupport] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const addSupport = (event) => {
        dispatch({type: 'SET_SUPPORT', payload: support});
        history.push('/comments');
    }

    const handleChange = (event) => {
        setSupport(event.target.value);
      }

    return (
        <form onSubmit={(event) => addFeelings(event)}>
        <input 
            required
            className='input-field'
            type='text'
            placeholder='How well are you being supported?'
            onChange={handleChange}
            value={support}
        />
        <button type='submit' onClick={addSupport}>Next</button>
    </form>

    )
}

export default SupportForm;
    