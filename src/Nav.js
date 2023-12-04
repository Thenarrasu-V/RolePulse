import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Contact from './Contact'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home">
        
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

unction Album() {
    const Navigate = useNavigate();
    const handleNext1 = () =>{
    Navigate("/Dash")
}
    const handleNext2 = () =>{
    Navigate("/Addjob")
}
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Nav />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              RolePulse
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Empowering Your Career Journey: Our Job Finder App streamlines job searches, offering a comprehensive platform to explore diverse opportunities. Discover roles matching your expertise, qualifications, and aspirations effortlessly. Tailor your search with precise filters for location, salary, and skills. Seamlessly connect with potential employers, elevating your professional path. From entry-level to executive positions, embark on a journey towards your dream career with ease and confidence through our intuitive job-seeking tool.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button onClick={handleNext1} variant="contained">Find Jobs</Button>
            <Button onClick={handleNext2} variant="outlined">Add Jobs</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        
        
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
        </Tab>
        <Tab label="Contact"><Contact/></Tab>
        <Tab label="About Us" />
      </Tabs>
    </Box>
  );
}