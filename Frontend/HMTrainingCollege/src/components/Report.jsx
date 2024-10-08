import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { getCourses, getStudents } from '../api';
import { Box, Typography, Button } from '@mui/material';

const styles = StyleSheet.create({
    page: { padding: 30,}, 
    section: {
        margin: 10,
        padding: 10,
        borderBottom: '1px solid #ddd', 
        backgroundColor: '#fff', 
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333' 
    },
    subHeader: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#555' 
    },
    text: {
        fontSize: 12,
        marginBottom: 4,
        color: '#666' 
    },
    noStudents: {
        fontSize: 12,
        color: '#999' 
    }
});

const MyDocument = ({ courses, students }) => (
    <Document>
        <Page style={styles.page}>
            <Text style={styles.header}>Summary of Courses and Students enrolled to each course</Text>
            {courses.map(course => {
                const enrolledStudents = students.filter(student => student.course_id === course.id);
                return (
                    <View key={course.id} style={styles.section}>
                        <Text style={styles.subHeader}>{course.title}</Text>
                        <Text style={styles.text}>Duration: {course.duration}</Text>
                        <Text style={styles.text}>Capacity: {course.capacity}</Text>
                        <Text style={styles.subHeader}>Students Enrolled:</Text>
                        {enrolledStudents.length > 0 ? (
                            enrolledStudents.map(student => (
                                <Text key={student.id} style={styles.text}>{student.name}</Text>
                            ))
                        ) : (
                            <Text style={styles.noStudents}>No students enrolled in this course</Text>
                        )}
                    </View>
                );
            })}
        </Page>
    </Document>
);

const Report = () => {
    const [courses, setCourses] = React.useState([]);
    const [students, setStudents] = React.useState([]);

    React.useEffect(() => {
        getCourses().then(response => setCourses(response.data));
        getStudents().then(response => setStudents(response.data));
    }, []);

    return (
        <Box sx={{ mt: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant='h4'>
                Summary of Courses and Students enrolled to each course
            </Typography>
            <Button>

                <PDFDownloadLink style={{
                    textDecoration: 'none',

                }} document={<MyDocument courses={courses} students={students} />} fileName="report.pdf">
                    {({ loading }) => (loading ? 'Loading document...' : 'Download Report')}
                </PDFDownloadLink>
            </Button>

        </Box>

    );
};

export default Report;
