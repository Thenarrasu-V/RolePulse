import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['', '', ''];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        RolePulse
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ROLEPULSE
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

function App() {
  const Navigate = useNavigate();
  const handleApply = () =>{
    Navigate("/Application")
  }
  const [jobs, setJobs] = useState([
    { id: 0, title: 'Software Developer', location: 'Chennai', salary: '90,000', qualification: 'Bachelor’s degree' },
    { id: 1, title: 'Data Analyst', location: 'Coimbatore', salary: '75,000', qualification: 'Master’s degree' },
    { id: 2, title: 'Front', location: 'Chennai', salary: '1,00,000', qualification: 'Engineering in CS related department' },
    { id: 3, title: 'Frontend Developer', location: 'Bangalore', salary: '1,00,000', qualification: 'Engineering in CS related department' },
  { id: 4, title: 'Backend Developer', location: 'Chennai', salary: '95,000', qualification: 'Bachelor’s degree' },
  { id: 5, title: 'UI/UX Designer', location: 'Chennai', salary: '85,000', qualification: 'Design or related field' },

  { id: 6, title: 'Data Scientist', location: 'Coimbatore', salary: '80,000', qualification: 'Master’s degree in Data Science' },
  { id: 7, title: 'Business Analyst', location: 'Coimbatore', salary: '70,000', qualification: 'Business or related field' },

  { id: 8, title: 'Full Stack Developer', location: 'Bangalore', salary: '1,10,000', qualification: 'Bachelor’s degree in CS' },
  { id: 9, title: 'Product Manager', location: 'Bangalore', salary: '1,20,000', qualification: 'Management or related field' },

  { id: 10, title: 'Network Engineer', location: 'Delhi', salary: '95,000', qualification: 'Networking or related field' },
  { id: 11, title: 'Marketing Manager', location: 'Delhi', salary: '1,05,000', qualification: 'Marketing or related field' },

  { id: 12, title: 'HR Manager', location: 'Kolkata', salary: '90,000', qualification: 'Human Resources or related field' },
  { id: 13, title: 'System Administrator', location: 'Kolkata', salary: '85,000', qualification: 'IT or related field' },

  { id: 14, title: 'Sales Executive', location: 'Mumbai', salary: '1,00,000', qualification: 'Sales or related field' },
  { id: 15, title: 'Financial Analyst', location: 'Mumbai', salary: '1,10,000', qualification: 'Finance or related field' },

    
  ]);
  const jobLocations = ['Chennai', 'Coimbatore', 'Bangalore', 'Delhi', 'Kolkata', 'Mumbai'];

  
  const [searchParams, setSearchParams] = useState({
    location: '',
    jobTitle: '',
    salaryRange: '',
    qualification: '',
  });

  const handleSearch = () => {
  
    const filteredJobs = jobs.filter(job =>
      job.location.toLowerCase().includes(searchParams.location.toLowerCase()) &&
      job.title.toLowerCase().includes(searchParams.jobTitle.toLowerCase()) &&
      job.salary.toLowerCase().includes(searchParams.salaryRange.toLowerCase()) &&
      job.qualification.toLowerCase().includes(searchParams.qualification.toLowerCase())
    );

    setJobs(filteredJobs);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <DrawerAppBar />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField
            name="location"
            label="Location"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchParams.location}
            onChange={handleInputChange}
          />
          {/* Add other search input fields (Job Title, Salary Range, Qualification) */}
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search Jobs
          </Button>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h5">Available Jobs:</Typography>
          {jobs.map((job) => (
            <div key={job.id}>
              <Typography variant="subtitle1">{job.title}</Typography>
              <Typography variant="body2">{job.location}</Typography>
              <Typography variant="body2">Salary: {job.salary}</Typography>
              <Typography variant="body2">Qualification: {job.qualification}</Typography>
              <Button variant="outlined" color="primary" onClick={() => handleApply(job.id)}>
                Apply Now
              </Button>
              <hr />
            </div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;