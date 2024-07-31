import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import CourseList from './components/CourseList';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Link, Routes }
  from "react-router-dom";
import StudentList from './components/StudentsList';
import AddCourse from './components/AddCourse';
import AddStudent from './components/AddStudent';
import Report from './components/Report';
import WelcomeMessage from './components/WelcomeMessage';
import CourseSearch from './CourseSearch';

const App = () => {




  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path='/courses' element={<CourseSearch />} />
          <Route exact path='/students' element={<StudentList />} />
          <Route exact path='/addcourse' element={<AddCourse />} />
          <Route exact path='/enroll' element={<AddStudent />} />
          <Route exact path='/report' element={<Report />} />
          <Route exact path='/' element={<WelcomeMessage />} />
        </Routes>
        <NavigationBar />
        
        

      </Router>

    </React.Fragment>
  )
}

export default App
