import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
  Container,
  Grid,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TickAnimation() {
  const [showDialog, setShowDialog] = useState(true);

  useEffect(() => {
    // Close the dialog after 2 seconds
    const timer = setTimeout(() => {
      setShowDialog(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Dialog
          open={showDialog}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setShowDialog(false)}
          aria-describedby="added-successfully-dialog"
        >
          <DialogTitle id="added-successfully-dialog">
            Applied Successfully
          </DialogTitle>
          <DialogContent>
            <Grid container alignItems="center" justifyContent="center">
              <CheckCircleOutlineIcon sx={{ fontSize: 100, color: 'green' }} />
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    </Container>
  );
}

export default TickAnimation;
