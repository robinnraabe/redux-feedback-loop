import React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom'; 


function Home() {
    const history = useHistory();
    const handleClick = () => {
        history.push('/feeling');
    }

    return (
        <div>
            <br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br />
            <Button type='button' variant='contained' onClick={handleClick}>Start feedback</Button>
        </div>
    )
}

export default Home;
