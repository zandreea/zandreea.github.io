import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

const skills = [
  { name: "Front-end", level: 4, max: 5 },
  { name: "Back-end", level: 2, max: 5 },
];

const SkillProgress = () => {
  return (
    <Box marginTop={4}>
      {skills.map((skill) => (
        <Box key={skill.name} mb={2}>
          <Typography variant="body1">{skill.name}</Typography>
          <Box display="flex" alignItems="center">
            <span role="img" aria-label="baby" style={{ marginRight: '8px' }}>👶</span>
            <LinearProgress 
              variant="determinate" 
              value={(skill.level / skill.max) * 100} 
              sx={{ borderRadius: '8px', height: '10px', flexGrow: 1 }} 
            />
            <span role="img" aria-label="smiley" style={{ marginLeft: '8px' }}>😎</span>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SkillProgress;
