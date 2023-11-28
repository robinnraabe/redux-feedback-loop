import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Snackbar, Alert } from '@mui/material';

function EndPage() {
    const [open, setOpen] = useState(true);
    const history = useHistory();
    const reset = () => {
        history.push('/');
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <br />
            <h1>Thank you for your feedback!</h1>
            <br /><br /><br />
            <Button type='button' variant='contained' onClick={reset}>Want to leave more feedback?</Button>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Feedback submitted.
                </Alert>
            </Snackbar>
        </div>
    )
}

export default EndPage;
    