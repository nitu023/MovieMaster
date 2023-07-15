import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ height: '70px', backgroundColor: 'white'}}>
      <Toolbar variant="dense">
      <Box sx={{ flexGrow: 1 }} />
        <Typography variant="h4" color="black" component="div" sx={{ textAlign: 'center', marginTop: '13px' }}>
          Master Movie
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  </Box>
    );
}

export default Header