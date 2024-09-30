"use client"
import React, { useState } from 'react';
import { Container, Card, CardActionArea, CardContent, CardMedia, Typography, Button, Box, Chip, Dialog, useMediaQuery, Theme } from '@mui/material';
import Sidebar from './sidebar';
import MobileHeader from './mobileHeader';
import './globals.css';

const projects = [
  {
    title: "Research Paper on Teaching ML",
    description: "Conducted research on machine learning education, analyzing teaching methods through a literature review, a survey of ML lecturers in Dutch universities, and a comparative experiment to assess the effectiveness of traditional methods in equipping future engineers with essential ML skills.",
    image: "/images/ML-poster.png",
    link: "https://repository.tudelft.nl/record/uuid:f5320370-68dc-4da8-8c96-d08ee54b9446",
    tags: ["Machine Learning", "Teaching Methodologies", "Python"]
  },
  {
    title: "App that Uses Git to Treat Academic Outputs as Software Artifacts",
    description: "Co-developed an open-source platform called Alexandria, designed to rethink scientific publishing by drawing on best practices from software engineering. By using git versioning, the platform enables transparent collaboration, continuous improvement, and open peer review of academic outputs.",
    image: "/images/alexandria.png",
    link: "https://github.com/prjct-alexandria/Alexandria",
    tags: ["React", "Typescript", "Go", "Git"]
  },
  {
    title: "C++ Project on Hounds and Fox Game with AI Player",
    description: "Co-implemented the game Hounds and Foxes, with an AI player that uses several strategies in a smart way in order to be unbeatable.",
    image: "/images/dogs-and-fox.jpg",
    link: "https://github.com/paulsem/dogsandfox1",
    tags: ["C++", "Artificial Intelligence"]
  },
  {
    title: "C# NASA Hackathon Game on Space Exploration using Hubble Data",
    description: "Co-created a game using images from the Hubble Space Telescope as integral components. Hubbletale is a browser-based game that has an exploratory, action-packed approach to storytelling.",
    image: "/images/hubbleTale.png",
    link: "",
    tags: ["C#", "Hubble telescope data"]
  },
  {
    title: "Java App on Managing Reservations on Campus",
    description: "Co-developed a campus reservation application in Java, in which you could book rooms, view your calendar, order food, and more.",
    image: "/images/campus-manager.png",
    link: "",
    tags: ["Java", "JavaFX"]
  },
  {
    title: "Discord Bot with Tic Tac Toe and Mastermind",
    description: "Developed this bot for personal use in a discord server, with discord.js, a node.js module. Implemented a single player Mastermind game and a two-player Tic-TacToe game, along with some basic bot commands. Made games playable by users in the server by calling specific commands, and designed a simple, yet effective interface by printing ASCII art in the chat.",
    image: "/images/discord.webp",
    link: "https://github.com/zandreea/discord-js-bot",
    tags: ["NodeJs", "DiscordJs"]
  },
];

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
