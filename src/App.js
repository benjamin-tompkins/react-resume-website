import { Container, createTheme, CssBaseline, Grid, Paper, ThemeProvider} from '@mui/material';
import './App.css';
import React from 'react';
import Header from './components/Header.react';
import ExperienceSection from './components/ExperienceSection.react';
import EducationSection from './components/EducationSection.react';
import ProjectsSection from './components/ProjectsSection.react';

const theme = {
	palette: {
    mode: 'dark',
  },
}

function App() {
  const themeRef = createTheme(theme);
  return (
    <ThemeProvider theme={themeRef}>
      <CssBaseline />
      <Paper >
        <Container fixed maxWidth='md' sx={{padding: '20px'}}>
            <Header />
            <EducationSection />
            <ExperienceSection />
            <ProjectsSection />
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
