import React, { useState, useEffect } from 'react';
import { Container, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { getCourses, getCourseDetailsWithStudents } from './api';
import { format } from 'date-fns';

const CourseSearch = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourseId, setSelectedCourseId] = useState('');
    const [courseDetails, setCourseDetails] = useState(null);

    const formatDate = (dateString) => {
        return format(new Date(dateString), 'MMMM do, yyyy');
    }

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await getCourses();
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        fetchCourses();
    }, []);

    const handleCourseChange = async (e) => {
        const courseId = e.target.value;
        setSelectedCourseId(courseId);
        try {
            const response = await getCourseDetailsWithStudents(courseId);
            setCourseDetails(response.data);
        } catch (error) {
            console.error('Error fetching course details:', error);
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 10 }}>
            <Typography variant="h4" gutterBottom>
                Search and Capture Course Details
            </Typography>
            <FormControl fullWidth margin="normal">
                <InputLabel id="course-label">Course</InputLabel>
                <Select
                    labelId="course-label"
                    value={selectedCourseId}
                    onChange={handleCourseChange}
                    label="Course"
                >
                    {courses.map((course) => (
                        <MenuItem key={course.id} value={course.id}>
                            {course.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {courseDetails && courseDetails.course && (
                <>
                    <Typography variant="h5" sx={{ mt: 4 }}>
                        Course Details
                    </Typography>
                    <Typography>
                        Title: {courseDetails.course.title}
                    </Typography>
                    <Typography>
                        Duration: {courseDetails.course.duration}
                    </Typography>
                    <Typography>
                        Capacity: {courseDetails.course.capacity}
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 4 }}>
                        Students Enrolled in the Selected Course
                    </Typography>
                    {courseDetails.students && courseDetails.students.length > 0 ? (
                        <ul>
                            {courseDetails.students.map(student => (
                                <li key={student.id}>
                                    {student.name} - {formatDate(student.date_of_birth)} - {student.gender}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <Typography>No students enrolled in this course</Typography>
                    )}
                </>
            )}
        </Container>
    );
};

export default CourseSearch;
