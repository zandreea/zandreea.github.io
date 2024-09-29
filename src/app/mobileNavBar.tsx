import React from 'react';
import { IconButton,Typography, Box, Link } from '@mui/material';
import SkillProgress from './skillProgress';
import { GitHub, LinkedIn } from '@mui/icons-material';

const MobileHeader = () => {
  return (
    <>
      <Box sx={{ padding: 6, textAlign: 'center' }}>
          <img
          
            src="/images/avatar.jpg"
            alt="Andreea Zlei"
            style={{ margin: "0 auto", borderRadius: '50%', width: '100px', height: '100px' }}
          />
          <Typography variant="h6" color="text.primary" sx={{ marginTop: 2, marginBottom: 2 }}>
           👋 Hi, I’m @andreeazlei
           </Typography>
           <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                👀 I’m interested in technology & coding, nature, books, art, and people!
            </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                🌱 I’m currently learning & using Flutter, React, Typescript. Non-coding projects include doing art and learning Dutch.
            </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                💞️ I’m looking to collaborate on personal coding projects or art projects 👀
          </Typography>
          <Box>
            <Link href="https://www.linkedin.com/in/andreeazlei/" target="_blank" color="inherit">
              <IconButton>
                <LinkedIn />
              </IconButton>
            </Link>
            <Link href="https://github.com/zandreea" target="_blank" color="inherit">
              <IconButton>
                <GitHub />
              </IconButton>
            </Link>
          </Box>
          <SkillProgress></SkillProgress>
        </Box>
    </>
  );
};

export default MobileHeader;
