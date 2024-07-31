import React, { useEffect, useState } from 'react';
import { getStudents } from '../api';
import { format } from 'date-fns';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Box, Paper, Typography } from '@mui/material';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    const formatDate = (dateString) => {
        return format(new Date(dateString), 'MMMM do, yyyy');
    }

    useEffect(() => {
        getStudents().then(response => {
            setStudents(response.data);
        });
    }, []);

    return (
        <Box sx={{ mt: 10 }}>
            <Typography variant='h3'>Students</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Date of Birth</TableCell>
                            <TableCell>Course ID</TableCell>
                            <TableCell>Date Registered</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map(student => (
                            <TableRow key={student.id}>
                                <TableCell>{student.id}</TableCell>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.gender}</TableCell>
                                <TableCell>{formatDate(student.date_of_birth)}</TableCell>
                                <TableCell>{student.course_id}</TableCell>
                                <TableCell>{formatDate(student.date_of_registration)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>

        </Box>
    );
}

export default StudentList;
