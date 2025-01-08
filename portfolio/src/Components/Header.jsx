import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

function Header({handleScroll}){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
return(

    
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{backgroundColor:'#1B1A17'}}>
      <Toolbar variant="dense">
        <IconButton onClick={handleClick} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem sx={{'&:hover':
          {
            backgroundColor:'black',
            color:'white',
          }
        }} onClick={()=>{handleScroll("projects");handleClose()}}>Projects</MenuItem>
        <MenuItem sx={{'&:hover':
          {
            backgroundColor:'black',
            color:'white',
          }
        }}  onClick={()=>{handleScroll("skills");handleClose()}}>Skills</MenuItem>
        <MenuItem sx={{'&:hover':
          {
            backgroundColor:'black',
            color:'white',
          }
        }}  onClick={()=>{handleScroll("about");handleClose()}}>About Me</MenuItem>
      </Menu>
      </Toolbar>
    </AppBar>
  </Box>)
}

export default Header;