import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import GitHubIcon from '@mui/icons-material/GitHub';
import JavascriptIcon from '@mui/icons-material/Javascript';
import Box from '@mui/material/Box';
import { orange } from '@mui/material/colors';




function AboutMe() {
  return (
<div style={{ backgroundColor: '#1B1A17', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center',fontFamily:'Mona Sans,sans-serif'}}>
  <Box sx={{ marginLeft: '10%',marginRight:'10%' }}>
    <Typography variant="h4" gutterBottom sx={{ color: 'white', fontSize: '2em', padding: '1em' }}>
About Me    </Typography>
    <Grid container spacing={2} marginLeft={2} paddingBottom={10}>
        <Grid item xs={8} sm={4} md={10} sx={{color:'white',fontFamily:'Mona Sans,sans-serif'}} >
        I'm a third-year Computer Engineering student living in Mumbai, a creative web developer passionate about crafting functional, user-friendly applications. With expertise in the MERN stack, I love bringing innovative projects to life.

</Grid>
    </Grid>
  </Box>
</div>


  );
}

export default AboutMe;
