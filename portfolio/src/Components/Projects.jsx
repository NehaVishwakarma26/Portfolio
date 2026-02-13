import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";

function Projects() {
  const projects = [
    {
      name: "PingUp (Social Media Platform)",
      description:
        "A full-stack social media platform built using the MERN stack, enabling users to create posts, follow/unfollow users, like and comment in real time, with secure authentication and responsive UI.",
      gitlink: "https://github.com/NehaVishwakarma26/Social-Media",
      link:"https://social-media-x13n.vercel.app/"
    },
    {
      name: "AI-Powered Finance Tracker",
      description:
        "An intelligent finance management system that tracks expenses, categorizes transactions automatically, generates spending insights using AI, and provides smart budgeting recommendations through an interactive dashboard.",
    },
    {
      name: "DevMetrics",
      description:
        "DevMetrics is a GitHub-powered productivity tracker that helps developers monitor daily coding progress, set commit goals, visualize contribution stats, and stay consistent with smart insights — all in a clean dashboard.",
      gitlink: "https://github.com/NehaVishwakarma26/DevMetrics",
      link: "https://dev-metrics-five.vercel.app/",
    },
    {
      name: "Trackr",
      description:
        "A MERN stack-based project scheduler and tracker enabling admin-controlled task assignment, real-time status updates, and candidate scoring to improve productivity and accountability.",
      gitlink: "https://github.com/NehaVishwakarma26/trackr",
    },
    {
      name: "Formee: Form Builder",
      description:
        "A dynamic form builder allowing users to create and manage customizable forms with CSV export functionality. Built using React, Node.js, Express, and MongoDB.",
      gitlink: "https://github.com/NehaVishwakarma26/Formee",
      link: "https://formeeformbuilder.netlify.app",
    },
    {
      name: "ChattrHive",
      description:
        "A real-time chat application built with React, Node.js, Express, and MongoDB, integrating Socket.io for instant messaging and live user presence tracking.",
      gitlink: "https://github.com/NehaVishwakarma26/ChatApplication",
      link: "https://chattrhive.netlify.app",
    },
    {
      name: "BucksBuddy",
      description:
        "A financial assistant application for setting goals, tracking expenses, and managing budgets using PHP and SQL, with SMTP integration for real-time notifications.",
      gitlink: "https://github.com/NehaVishwakarma26/bucksbuddy",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#1B1A17",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        justifyContent: "center",
        paddingBottom: "2em",
        paddingTop: "2em",
      }}
    >
      <Box sx={{ marginLeft: "10%" }}>
        <Typography
          sx={{
            color: "white",
            fontSize: "2em",
            padding: "1em",
            fontFamily: "Mona Sans, sans-serif",
          }}
        >
          My Projects
        </Typography>

        <Grid container spacing={4} sx={{ paddingLeft: 3 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: { xs: "260px", sm: "320px" },
                  padding: "1.5em",
                  width: "100%",
                  border: "1px solid orangered",
                  backgroundColor: "#272121",
                  color: "white",
                  margin: "auto",
                  minHeight: "280px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: "Mona Sans, sans-serif" }}
                  >
                    {project.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "white",
                      fontFamily: "Mona Sans, sans-serif",
                    }}
                  >
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
                      sx={{
                        textTransform: "none",
                        backgroundColor: "orangered",
                        color: "white",
                        marginLeft: "1em",
                      }}
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
                      sx={{ textTransform: "none", color: "orangered" }}
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
