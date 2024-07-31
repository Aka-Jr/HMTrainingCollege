const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = 5000;

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'HMTrainingCollege'
}); 

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Connected to database');
});

//Routes to handle requests
//API to get all courses
app.get('/courses', (req, res) => {
    const sql = 'SELECT * FROM courses';
    db.query(sql, (err, result) => {
        if(err){
            throw err;
        }
        res.send(result);
    });
});

// API to add a new course
app.post('/courses', (req, res) => {
    const {title, duration, capacity} = req.body;
    const sql = 'INSERT INTO courses (title, duration, capacity) VALUES (?, ?, ?)';
    db.query(sql,[title, duration, capacity], (err, result) => {    
        if(err){
            throw err;
        }
        res.send(result);
    });
})
//API to get all students
app.get('/students',(req,res)=>{
    const sql = 'SELECT * FROM students';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
});
});

//API to add a new student
app.post('/students', (req, res) => {
    const { name, date_of_birth, gender, course_id, date_of_registration } = req.body;
    const sql = 'INSERT INTO students (name, date_of_birth, gender, course_id, date_of_registration) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, date_of_birth, gender, course_id, date_of_registration], (err, result) => {
        if (err) {
            throw err
        };
        res.send(result);
    });
});

// API to get course details along with students by course ID
app.get('/courses/:courseId/details', (req, res) => {
    const courseId = req.params.courseId;
    
    // Query to get course details
    const courseSql = 'SELECT * FROM courses WHERE id = ?';
    // Query to get students enrolled in the course
    const studentsSql = 'SELECT * FROM students WHERE course_id = ?';

    db.query(courseSql, [courseId], (err, courseResult) => {
        if (err) {
            console.error('Error fetching course details:', err);
            res.status(500).send('Server error');
            return;
        }

        db.query(studentsSql, [courseId], (err, studentsResult) => {
            if (err) {
                console.error('Error fetching students:', err);
                res.status(500).send('Server error');
                return;
            }

            res.send({
                course: courseResult[0],
                students: studentsResult
            });
        });
    });
});



// API to get course details by course ID
app.get('/courses/:courseId', (req, res) => {
    const courseId = req.params.courseId;
    const sql = 'SELECT * FROM courses WHERE id = ?';
    db.query(sql, [courseId], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
});






app.listen(port, () => {
    console.log('Server running on port 5000');
});







