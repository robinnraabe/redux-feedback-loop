import React from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import ReportIcon from '@mui/icons-material/Report';
import ReportOffIcon from '@mui/icons-material/ReportOff';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, Tooltip } from '@mui/material';
import Swal from 'sweetalert2';

function AdminItem(props) {
    const formattedDate = format(new Date(props.feedback.date), "MM/d/yyyy");

    const deleteFeedback = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete line"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/feedback/${props.feedback.id}`) 
                .then((response) => {
                    props.getFeedback();
                }).catch((error) => {
                    console.log('Error deleting feedback:', error);
                    alert('Something went wrong!');
                });
                Swal.fire({
                    title: "Success!",
                    text: "The selected line has been deleted.",
                    icon: "success",
                    confirmButtonColor: "#3085d6"
                });
            }
          });
    }
    const toggleFlagged = () => {
        axios.put(`/feedback/${props.feedback.id}`)
            .then((response) => {
                props.getFeedback();
            }).catch((error) => {
                console.log('Error updating feedback:', error);
                alert('Something went wrong!');
            });
    }

    return (
        <tr>
            <td id='admin-table'>
                {props.feedback.flagged ? (
                    // if true
                    <Tooltip title="Click to remove flag">
                        <IconButton onClick={toggleFlagged}>
                            <ReportIcon sx={{fontSize: '30px', color:'red'}} /> 
                        </IconButton>
                    </Tooltip>
                ) : (
                    // if false
                    <Tooltip title="Click to flag feedback">
                        <IconButton onClick={toggleFlagged}>
                            <ReportOffIcon sx={{fontSize: '30px', color:'lightgray'}} /> 
                        </IconButton>
                    </Tooltip>
                )
                }
            </td>
            <td id='admin-table'>{props.feedback.feeling}</td>
            <td id='admin-table'>{props.feedback.understanding}</td>
            <td id='admin-table'>{props.feedback.support}</td>
            <td id='admin-table'>{props.feedback.comments}</td>
            <td id='admin-table'>{formattedDate}</td>
            <td id='admin-table'>
                <Tooltip title="Delete line">
                    <IconButton onClick={deleteFeedback}>
                        <ClearIcon sx={{fontSize: '30px', color:'black'}} /> 
                    </IconButton>
                </Tooltip>
            </td>
        </tr>
    )
}

export default AdminItem;