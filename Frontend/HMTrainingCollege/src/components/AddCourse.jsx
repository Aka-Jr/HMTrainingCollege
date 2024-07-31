import React, { useState } from 'react';
import { addCourse } from '../api'; // Import the function from your api module
import { Box, TextField, Typography, Button } from '@mui/material';

function AddCourse() {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [capacity, setCapacity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addCourse({ title, duration, capacity });
            alert('Course added successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to add course');
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
                        onChange={(e) => setTitle(e.target.value)}
                        required />

                    <TextField
                        label="Duration"
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                    />

                    <TextField
                        label="Capacity"
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        required />
                    <Button onClick={handleSubmit}>Add Course</Button>
                </Box>
            </Box>

        </React.Fragment>
    );
}

export default AddCourse;
