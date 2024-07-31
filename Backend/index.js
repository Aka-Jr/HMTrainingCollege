const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = 5000;

//Middleware
app.use(cors());
app.use(bodyParser.json()); // to parse application/json
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





app.listen(port, () => {
    console.log('Server running on port 5000');
});







