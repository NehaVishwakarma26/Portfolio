import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2'
import Box from '@mui/material/Box';
function Projects() {
  const projects = [
    {
      name: "Trackr",
      description:
        "A MERN stack-based project scheduler and tracker to streamline project management by enabling admin-controlled task assignment, real-time status updates, and candidate scoring, improving team productivity and accountability.",
      gitlink: "https://github.com/NehaVishwakarma26/trackr", // Replace with actual link if available
      image: "path/to/trackr-image.jpg", // Replace with an appropriate image URL or path
    },
    {
      name: "Formee: Form Builder",
      description:
        "A dynamic form builder enabling users to create, customize, and manage forms with various field types, implemented CSV export functionality for submissions, using React.js for the frontend, Node.js/Express for the backend, and MongoDB for data storage.",
      gitlink: "https://github.com/NehaVishwakarma26/Formee", // Replace with actual GitHub link
      link: "https://formeeformbuilder.netlify.app", // Live demo link
      image: "path/to/formee-image.jpg", // Replace with an appropriate image URL or path
    },
    {
      name: "ChattrHive",
      description:
        "A real-time chat application using React, Node.js, Express, and MongoDB, integrating Socket.io for instant messaging and user presence tracking to enhance real-time user experience.",
      gitlink: "https://github.com/NehaVishwakarma26/ChatApplication", // Replace with actual GitHub link
      link: "https://chattrhive.netlify.app", // Live demo link
      image: "path/to/chattrhive-image.jpg", // Replace with an appropriate image URL or path
    },
    
    {
      name: "BucksBuddy",
      description:
        "A financial assistant for setting goals, tracking expenses, and managing budgets using PHP and SQL, with real-time notifications and SMTP integration for status updates.",
      gitlink: "https://github.com/NehaVishwakarma26/bucksbuddy", // Replace with actual link if available
      image: "path/to/bucksbuddy-image.jpg", // Replace with an appropriate image URL or path
    },
   
  ];
  

  return (
    <div style={{ backgroundColor: '#1B1A17', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', paddingBottom: '2em', paddingTop: '2em' }}>
  <Box sx={{ marginLeft: '10%' }}>
    <Typography sx={{ color: 'white', fontSize: '2em', padding: '1em' }}>
      My Projects
    </Typography>
    <Grid container spacing={4} sx={{ color: 'white', paddingLeft: 3 }}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{
            maxWidth: {xs:'230px',sm:'320px'},
            padding: '1em',
            width: '100%', // Ensure it's responsive
            border: '1px solid orangered',
            backgroundColor: '#272121',
            color: 'white',
            margin: 'auto', // Center the cards
          }}>
            <CardMedia
              sx={{ height: 140 }}
              image={project.image} // Use project image
              title={project.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'Mona Sans,sans-serif'}}>
                {project.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'white',fontFamily:'Mona Sans,sans-serif' }}>
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              {project.gitlink && (
                <Button
                  size="small"
                  component="a"
                  href={project.gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{textTransform:'none', backgroundColor: 'orangered', color: 'white', marginLeft: '1em' }}
                >
                  GitHub
                </Button>
              )}
              {project.link && (
                <Button
                  size="small"
                  component="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{textTransform:'none'}}
                >
                  Live Demo
                </Button>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
</div>

  
  );
}

export default Projects;
