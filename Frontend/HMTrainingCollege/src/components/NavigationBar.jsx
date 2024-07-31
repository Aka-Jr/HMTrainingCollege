import React, { useState, useEffect } from 'react';
import { AppBar, Button, Icon, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const [value, setValue] = useState(0);



    return (
        <AppBar position="fixed" sx={{ bgcolor: '#0E424C' }}>
            <Toolbar sx={{ display: 'flex', textAlign: 'center' }}>
                <IconButton>
                    <SchoolIcon sx={{ color: 'white', }} />
                </IconButton>
                <Typography variant='h4' sx={{ marginLeft: 'auto' }}>Hotel Management Training College</Typography>
                <Button sx={{ marginLeft: 'auto' }} >
                    <Link
                        to='/courses'
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}
                    >Courses

                    </Link>

                </Button>

                <Button sx={{ marginLeft: 'auto' }} >
                    <Link
                        to='/addcourse'
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}
                    >Add Course

                    </Link>

                </Button>

                <Button sx={{ marginLeft: 'auto' }} >
                    <Link
                        to='/enroll'
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}
                    >Enroll to course

                    </Link>

                    

                </Button>

                <Button sx={{ marginLeft: 'auto' }} >
                    <Link
                        to='/report'
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}
                    >Report

                    </Link>

                </Button>
                

            </Toolbar>
        </AppBar>
    )
}
export default NavigationBar;