import React from 'react';
import { Typography, Button, Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', backgroundImage: 'url(https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundSize: 'cover' }}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px', background: 'rgba(255, 255, 255, 0.8)', backgroundColor: 'white' }}>
          <Typography variant="h4" gutterBottom>
            Welcome to RolePulse
          </Typography>
          <Typography variant="body1" paragraph>
            Find your dream job with our easy-to-use job search platform.
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/Welcome">
            Explore Jobs
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePage;
