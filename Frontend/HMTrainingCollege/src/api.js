import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export const getCourses = () => api.get('/courses');
export const addCourse = (course) => api.post('/courses', course);
export const getStudents = () => api.get('/students');
export const addStudent = (student) => api.post('/students', student);
export const getCourseDetailsWithStudents = (courseId) => api.get(`/courses/${courseId}/details`);

