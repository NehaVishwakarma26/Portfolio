import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'C', 'JavaScript']
  },
  {
    title: 'AI & LLM Engineering',
    skills: [
      'LLaMA 3.1',
      'Prompt Engineering',
      'RAG Systems',
      'LangChain',
      'ChromaDB',
      'FAISS',
      'QLoRA / LoRA',
      'Hugging Face',
      'PyTorch'
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      'Spring Boot',
      'Spring Cloud',
      'Node.js',
      'Express.js',
      'REST APIs',
      'WebSockets',
      'RabbitMQ',
      'Microservices'
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      'React.js',
      'Redux',
      'React Hooks',
      'Tailwind CSS',
      'Material-UI',
      'Bootstrap'
    ]
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'DevOps & Tools',
    skills: [
      'Docker',
      'Docker Compose',
      'AWS',
      'Render',
      'Vercel',
      'GitHub Actions',
      'Git'
    ]
  }
];

function Skills() {
  return (
    <div
      style={{
        backgroundColor: '#1B1A17',
        paddingBottom: '5em',
        paddingTop: '5em'
      }}
    >
      <Box sx={{ marginLeft: '10%', marginRight: '10%' }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: 'white',
            fontSize: '2em',
            paddingBottom: '1.5em',
            fontFamily: 'Mona Sans, sans-serif'
          }}
        >
          My Skills
        </Typography>

        {skillCategories.map((category, index) => (
          <Box key={index} sx={{ marginBottom: '3em' }}>
            <Typography
              variant="h6"
              sx={{
                color: 'orangered',
                marginBottom: '1em',
                fontFamily: 'Mona Sans, sans-serif'
              }}
            >
              {category.title}
            </Typography>

            <Grid container spacing={2}>
              {category.skills.map((skill, idx) => (
                <Grid item xs={6} sm={4} md={3} key={idx}>
                  <Box
                    sx={{
                      borderRadius: '0.6em',
                      backgroundColor: 'orangered',
                      color: 'white',
                      padding: '12px',
                      textAlign: 'center',
                      fontFamily: 'Mona Sans, sans-serif'
                    }}
                  >
                    {skill}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default Skills;
