"use client"
import React, { useState } from 'react';
import { Container, Card, CardActionArea, CardContent, CardMedia, Typography, Button, Box, Chip, Dialog, useMediaQuery, Theme } from '@mui/material';
import Sidebar from './sidebar';
import MobileHeader from './mobileHeader';
import '/zandreea.github.io/globals.css';
import '/zandreea.github.io/projects.tsx'

export default function Home() {
  const [openDialogs, setOpenDialogs] = useState(Array(projects.length).fill(false));
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  
  const handleClickOpen = (index: number) => {
    const newOpenDialogs = [...openDialogs];
    newOpenDialogs[index] = true;
    setOpenDialogs(newOpenDialogs);
  };

  const handleClose = (index: number) => {
    const newOpenDialogs = [...openDialogs];
    newOpenDialogs[index] = false;
    setOpenDialogs(newOpenDialogs);
  };
  
  return (
    <Box>
      {isMobile ? <MobileHeader /> : <></>}
      <Box sx={{ display: 'flex' }}>
        {!isMobile ? <Sidebar />: <></>}

        <Container sx={{ flexGrow: 1, padding: 2 }}>
          <Box my={4}>
            <Typography variant="h4" align="center" gutterBottom>
              My Projects
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Check out some of the projects I’ve been working on!
            </Typography>
          </Box>
          
          <Container className='project-wrapper'>
            {projects.map((project, index) => (
                <Card key={index} className='project-tile'>
                  <CardActionArea onClick={() => handleClickOpen(index)}>
                    <CardMedia
                      component="img"
                      style={{ height: 200 }}
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                      <Box mt={1}>
                    {project.tags.map((tag) => (
                      <Chip key={tag} label={tag} sx={{ margin: '2px' }} />
                    ))}
                  </Box>
                    </CardContent>
                  </CardActionArea>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleClickOpen(index)}
                      sx={{
                        width: '100%',
                        backgroundColor: '#373e93', 
                        color: '#fff',
                        borderRadius: '0px 0px 4px 4px',
                        padding: '10px 20px',
                        transition: 'background-color 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#1a1370',
                        },
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        fontWeight: 'bold',
                      }}
                    >
                      View Project
                    </Button>
                    <Dialog open={openDialogs[index]} onClose={() => handleClose(index)}>
                      
                      <img src={project.image} alt={project.title} style={{ height: '300px', marginBottom: '20px' }} />
                      <Container>
                        <Typography variant="h5" style={{ marginBottom: '20px' }}>{project.title}</Typography>
                        <Typography style={{ marginBottom: '20px' }}>{project.description}</Typography>
                        {project.tags.map((tag) => (
                          <Chip key={tag} label={tag} sx={{ margin: '2px' }} />
                        ))}
                      </Container>
                      <Button
                      variant="contained"
                      color="primary"
                      href={project.link}
                      target='_blank'
                      sx={{
                        marginTop: '20px',
                        width: '100%',
                        backgroundColor: '#373e93', 
                        color: '#fff',
                        borderRadius: '0px 0px 4px 4px',
                        padding: '10px 20px',
                        transition: 'background-color 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#1a1370',
                        },
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        fontWeight: 'bold',
                      }}
                    >
                      Source
                    </Button>
                  </Dialog>
                </Card>
            ))}
          </Container>
        </Container>
      </Box>
    </Box>
  );
}
