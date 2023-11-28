import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AdminItem from '../AdminItem/AdminItem';

function Admin() {
    const [feedback, setFeedback] = useState([]);

    const getFeedback = () => {
        axios.get('/feedback') 
            .then((response) => {
                setFeedback(response.data);
            }).catch((error) => {
                console.log('Error retrieving feedback:', error);
                alert('Something went wrong!');
            });
    }

    useEffect(() => {
        getFeedback()
    }, []);

    return (
        <div>
            <br />
            <h1>Admin View</h1>
            <table id='admin-table' className='admin-table'>
                <tbody>
                    <tr>
                        <th id='admin-table'>Flag</th>
                        <th id='admin-table'>Feelings</th>
                        <th id='admin-table'>Understanding</th>
                        <th id='admin-table'>Support</th>
                        <th id='admin-table'>Comments</th>
                        <th id='admin-table'>Date</th>
                        <th id='admin-table'>Delete</th>
                    </tr>
                    {feedback.map((feedback, i) => {
                        return <AdminItem key={i} feedback={feedback} getFeedback={getFeedback}/>
                    })}
                </tbody>
            </table>
            <br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default Admin;