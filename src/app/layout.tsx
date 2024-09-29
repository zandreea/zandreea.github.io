"use client";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./globals.css";

const theme = createTheme({
  palette: {
    primary: { main: '#373e93', dark: '#1a1370' },
    secondary: { main: '#adb0e3' },
    background: { default: '#1a1370' },
    text: { primary: '#333', secondary: '#555' },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className="antialiased">{children}</body>
      </html>
    </ThemeProvider>
  );
}
