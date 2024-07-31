import React, { useState } from 'react';
import { addCourse } from '../api'; 
import { Box, TextField, Typography, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCourse = () => {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [capacity, setCapacity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addCourse({ title, duration, capacity });
            toast.success('Course added successfully');
        } catch (error) {
            console.error(error);
            toast.error('Failed to add course');
        }

        setTitle('');
        setDuration('');
        setCapacity('');
    };

    return (
        <React.Fragment>
            <Box sx={{ mt: 10, display: 'flex', justifyContent: 'center', }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '60%',
                        justifyContent: 'center',

                    }}>
                    <Typography variant='h4'>Add Course</Typography>
                    <TextField
                        label="Title"
                        value={title}
                        sx={{ mt: 2 }}
                        onChange={(e) => setTitle(e.target.value)}
                        required />

                    <TextField
                        label="Duration"
                        type="number"
                        sx={{ mt: 2 }}
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                    />

                    <TextField
                        label="Capacity"
                        value={capacity}
                        sx={{ mt: 2 }}
                        onChange={(e) => setCapacity(e.target.value)}
                        required />
                    <Button onClick={handleSubmit}>Add Course</Button>
                </Box>
            </Box>
                    <ToastContainer />
        </React.Fragment>
    );
}

export default AddCourse;
