import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function JobApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    positionApplied: '',
    experience: '',
    qualification: '',
    skills: '',
  });

  const Navigate = useNavigate();

  const handleSubmit1 = () =>{
    Navigate('/Success1')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here
    console.log('Form data submitted:', formData);
    // You can send this data to an API, perform validation, etc.
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Job Application Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              name="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="phone"
              label="Phone"
              variant="outlined"
              fullWidth
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="address"
              label="Address"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="positionApplied"
              label="Position Applied For"
              variant="outlined"
              fullWidth
              value={formData.positionApplied}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="experience"
              label="Years of Experience"
              variant="outlined"
              fullWidth
              type="number"
              value={formData.experience}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="qualification"
              label="Qualification"
              variant="outlined"
              fullWidth
              value={formData.qualification}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="skills"
              label="Skills"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={formData.skills}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" onClick={handleSubmit1} >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default JobApplicationForm;
