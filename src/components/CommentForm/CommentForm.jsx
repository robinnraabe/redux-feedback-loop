import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';


function CommentForm() {
    let [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const addComment = () => {
        dispatch({type: 'SET_COMMENTS', payload: comment});
        history.push('/review');
    }
    const handleChange = (event) => {
        setComment(event.target.value);
        }

    return (
        <form onSubmit={(event) => addComment()}>
        <input 
            required
            className='input-field'
            type='text'
            placeholder='Any comments you want to leave?'
            onChange={handleChange}
            value={comment}
        />
        <button type='submit' onClick={addComment}>Review Feedback</button>
    </form>
    )
}

export default CommentForm;
    