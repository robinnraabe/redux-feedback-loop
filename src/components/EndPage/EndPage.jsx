import React from 'react';
import { useHistory } from 'react-router-dom';

function EndPage() {
    const history = useHistory();
    const reset = () => {
        history.push('/');
    }

    return (
        <div>
            <h1>Thank you for your feedback!</h1>
            <br />
            <br />
            <button onClick={reset}>Leave new feedback</button>
        </div>
    )
}

export default EndPage;
    