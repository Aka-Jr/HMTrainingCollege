import React, { useEffect, useState } from 'react';
import { getCourses } from '../api';
import { format } from 'date-fns';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Box, Paper, Typography } from '@mui/material';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    const formatDate = (dateString) => {
        return format(new Date(dateString), 'MMMM do, yyyy');
    }

        useEffect(() => {
            getCourses().then(response => {
                setCourses(response.data);
            });
        }, []);

        return (
            <Box sx={{ mt: 10 }}>
                <Typography variant='h3'>Courses</Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Course Name</TableCell>
                                <TableCell>Duration</TableCell>
                                <TableCell>Capacity</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {courses.map(course => (
                                <TableRow key={course.id}>
                                    <TableCell>{course.id}</TableCell>
                                    <TableCell>{course.title}</TableCell>
                                    <TableCell>{course.duration} Months</TableCell>
                                    <TableCell>{course.capacity} Students</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>

            </Box>
        );
    }

    export default CourseList;
