import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { addStudent, getCourses } from '../api';
import { set } from 'date-fns';

function AddStudent() {
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [courseId, setCourseId] = useState('');
    const [dateOfRegistration, setDateOfRegistration] = useState('');
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await getCourses();
                setCourses(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCourses();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addStudent({
                name,
                date_of_birth: dateOfBirth,
                gender,
                course_id: courseId,
                date_of_registration: dateOfRegistration
            });
            alert('Student added successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to add student');
        }

        setName('');
        setDateOfBirth('');
        setGender('');
        setDateOfRegistration('');

    };

    return (
        <Container maxWidth="sm" sx={{ mt: 10 }}>
            <Typography variant="h4" gutterBottom>
                Enroll to a Course
            </Typography>

            <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                value={name}
                sx={{ mt: 2 }}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Date of Birth"
                variant="outlined"
                type="date"
                value={dateOfBirth}
                sx={{ mt: 2 }}
                onChange={(e) => setDateOfBirth(e.target.value)}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                required
            />
            <FormControl fullWidth margin="normal" required>
            <InputLabel id="course-label">Gender</InputLabel>
            <Select
             labelId="gender-label"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                label="Gender"
            >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
            </Select>
            </FormControl>

            <FormControl fullWidth margin="normal" required>
                <InputLabel id="course-label">Course</InputLabel>
                <Select
                    labelId="course-label"
                    value={courseId}
                    sx={{ mt: 2 }}
                    onChange={(e) => setCourseId(e.target.value)}
                    label="Course"
                >
                    {courses.map((course) => (
                        <MenuItem key={course.id} value={course.id}>
                            {course.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                fullWidth
                label="Date of Registration"
                variant="outlined"
                type="date"
                value={dateOfRegistration}
                sx={{ mt: 2 }}
                onChange={(e) => setDateOfRegistration(e.target.value)}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                required
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                sx={{ mt: 2 }}>
                Enroll
            </Button>

        </Container>
    );
}

export default AddStudent;
