import React from "react";
import Header from "./Header";
import Link from "@mui/material/Link";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Grid from "@mui/material/Grid2";
import { Box, Button, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Projects from "./Projects";
import { useRef } from "react";
import Skills from "./Skills";
import Background from "./Background";
import AboutMe from "./AboutMe";
import resume from "../Styles/Neha_Vishwakarma_Resume.pdf"
function Home()
{
function openResume(){
    window.open(resume)
}

    const projectsref=useRef(null)
    const skillsref=useRef(null)
    const aboutref=useRef(null)
    const handleScroll=(section)=>{
        if(section==="projects"){
            projectsref.current.scrollIntoView({behavior:"smooth"})
        }
        else if(section==="skills")
        {
            skillsref.current.scrollIntoView({behavior:'smooth'})
        }
        else if(section==="about")
        {
            aboutref.current.scrollIntoView({behavior:"smooth"})
        }
    }

return(
   <Grid>
    <Header handleScroll={handleScroll}/>
    <Box sx={{ flexGrow: 1,display:'flex',backgroundColor:'#1B1A17',color:'white',minHeight:'100vh',position:'relative' }}>
        {/* <Background/> */}
      <Grid sx={{width:'10%',padding:'2em',marginTop:'10em'}} direction="column" columns={2} container spacing={4}>
        <Grid>
            <Link href="mailto:nehasvish186@gmail.com">
            <EmailIcon sx={{color:'white'}}/>
            </Link>
        </Grid>
        <Grid >
            <Link href="https://www.linkedin.com/in/neha-vishwakarma-9a79a1262/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BXN3HUBfMQYOXEeFQv%2FZzuw%3D%3D">
            <LinkedInIcon sx={{color:'white'}}/>
            </Link>
        </Grid>
        <Grid >
            <Link href="https://github.com/NehaVishwakarma26">
            <GitHubIcon  sx={{color:'white'}}/>
            </Link>
        </Grid>
       
      </Grid>

<Grid sx={{width:'60%',padding:'2em',marginTop:'10em'}}>
    <Typography sx={{fontSize:'1.5rem',fontFamily:'Mona Sans,sans-serif'}}>
        Hello
    </Typography>
    <Typography sx={{ fontSize: '3rem' ,fontFamily:'Mona Sans,sans-serif'}}>
    I'm <span style={{ fontWeight: 'bold' }}>Neha Vishwakarma</span>
</Typography>

    <Typography sx={{fontFamily:'Mona Sans,sans-serif'}}>

    I'm a web developer who loves turning ideas into functional websites. Let’s build something cool!
    </Typography>

<Button onClick={openResume} sx={{textTransform:'none',fontFamily:'Mona Sans,sans-serif',backgroundColor:'orangered',color:'white',marginTop:'2em'}}>
    Resume
</Button>

</Grid>

{/* <Box sx={{
           width:'30%', position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)', zIndex: 2
          }}>
            <div className="typing-effect">
              <span>const name = "Neha";</span><br />
              <span>let skill = "Web Developer";</span><br />
              <span>const experience = "Passionate about coding!";</span>
            </div>
          </Box> */}

    </Box>

<Box>
    <Grid ref={aboutref}>
        <AboutMe/>
    </Grid>
    <Grid ref={projectsref}>
        <Projects/>
    </Grid>
    <Grid ref={skillsref}>
        <Skills/>
    </Grid>
</Box>

   </Grid>


)
}

export default Home;