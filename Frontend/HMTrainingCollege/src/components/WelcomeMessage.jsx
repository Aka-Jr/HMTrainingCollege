import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const WelcomeMessage = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 10, textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom >
                Welcome to Hotel Management Training College Name!
            </Typography>
            <Typography variant="h6" paragraph sx={{textAlign: 'justify'}}>
                Embark on a transformative journey in the world of hospitality with us. Our comprehensive courses are designed to equip you with the skills and knowledge needed to excel in the dynamic field of hotel management. From hands-on training to industry insights, we offer a range of programs that prepare you for a successful career in hospitality.
            </Typography>
            <Typography variant="body1" paragraph sx={{textAlign: 'justify'}}>
                Explore our offerings and take the first step towards a promising future in hotel management today!
            </Typography>
            <Box sx={{ mt: 4 }}>
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/courses"
                >
                    Explore Courses
                </Button>
            </Box>
        </Container>
    );
};

export default WelcomeMessage;
