import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import GitHubIcon from '@mui/icons-material/GitHub';
import JavascriptIcon from '@mui/icons-material/Javascript';
import Box from '@mui/material/Box';
import { orange } from '@mui/material/colors';

const skills = [
  { name: 'HTML5' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'React.js' },
  { name: 'Node.js' },
  { name: 'Express.js' },
  { name: 'MongoDB' },
  { name: 'Socket.io' },
  { name: 'Material-UI' },
  { name: 'RESTful APIs' },
  { name: 'Git' },
  { name: 'Postman' },
  { name: 'C' },
  { name: 'Java' },
  { name: 'Python' },

];


function Skills() {
  return (
<div style={{ backgroundColor: '#1B1A17', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', paddingBottom: '5em', paddingTop: '5em' }}>
  <Box sx={{ marginLeft: '10%',marginRight:'10%' }}>
    <Typography variant="h4" gutterBottom sx={{ color: 'white', fontSize: '2em', padding: '1em',fontFamily:'Mona Sans,sans-serif' }}>
      My Skills
    </Typography>
    <Grid container spacing={2} marginLeft={2}>
      {skills.map((skill, index) => (
        <Grid item xs={6} sm={4} md={1.7} key={index}>
          <Box sx={{
            borderRadius: '0.6em',
            backgroundColor: 'orangered',
            color: 'white',
            padding: '16px',
            width: '100%',
            maxHeight:'50px',
            maxWidth: '120px', /* Reduced maxWidth to make boxes smaller */
            margin: 'auto', /* Centers the boxes */
            marginTop: '1em'
          }}>
            {skill.icon}
            <Typography variant="body1" style={{ textAlign: 'center', marginTop: '10px',fontFamily:'Mona Sans,sans-serif' }}>
              {skill.name}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
</div>


  );
}

export default Skills;
