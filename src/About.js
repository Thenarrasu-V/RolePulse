// AboutPage.jsx

import React from 'react';
import './About.css';
import { Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
const AboutPage = () => {
    return (
      <Container maxWidth="md" className="about-page-container">
        <Paper elevation={3} className="about-page-paper">
          <Typography variant="h4" gutterBottom>
            About RolePulse App
          </Typography>
          <Typography paragraph>
            Welcome to RolePulse App, your go-to platform for finding exciting job opportunities
            and advancing your career. Whether you're a recent graduate, a seasoned
            professional, or someone looking for a career change, we've got you covered.
          </Typography>
        <Typography variant="h5" gutterBottom>
          Our Mission
        </Typography>
        <Typography paragraph>
          At RolePulse, we strive to connect talented individuals with their dream jobs.
          We understand the importance of finding a fulfilling and rewarding career, and
          we're dedicated to making that process as smooth as possible.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Key Features
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Search and filter job listings based on your preferences." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Save and track your favorite job opportunities." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Receive personalized job recommendations." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Connect with employers and submit applications seamlessly." />
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>
        <Typography paragraph>
          Have questions or suggestions? Feel free to reach out to our support team at{' '}
          <a href="mailto:support@jobfinderapp.com">support@RolePulseapp.com</a>. We value your
          feedback and are here to assist you.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Thank You for Choosing RolePulse App!
        </Typography>
        <Typography paragraph>
          We appreciate your trust in our platform. Whether you're a job seeker or an employer,
          we're committed to helping you achieve your goals. Happy job hunting!
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutPage;