import { Drawer, Box, Typography, IconButton, Link } from '@mui/material';
import { LinkedIn, GitHub, BookOnline, Home } from '@mui/icons-material';
import SkillProgress from './skillProgress';

const Sidebar = () => {
    return (
      <Drawer
        variant="permanent"
        sx={{
          width: 400,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 400,
            backgroundColor: '#adb0e3',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <Box sx={{ padding: 6, textAlign: 'center' }}>
          <img
            src="/images/avatar.jpg"
            alt="Andreea Zlei"
            style={{ borderRadius: '50%', width: '300px', height: '300px' }}
          />
          <Typography variant="h6" sx={{ marginTop: 6 }}>
            Andreea Zlei
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
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
      </Drawer>
    );
  };

  export default Sidebar;