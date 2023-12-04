import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const AddJobForm = ({ addJob }) => {
  const [newJob, setNewJob] = useState({
    title: '',
    location: '',
    salary: '',
    qualification: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(newJob);
    setNewJob({
      title: '',
      location: '',
      salary: '',
      qualification: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>
        Add New Job
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            value={newJob.title}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="location"
            label="Location"
            variant="outlined"
            fullWidth
            value={newJob.location}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="salary"
            label="Salary"
            variant="outlined"
            fullWidth
            value={newJob.salary}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="qualification"
            label="Qualification"
            variant="outlined"
            fullWidth
            value={newJob.qualification}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add Job
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddJobForm;
