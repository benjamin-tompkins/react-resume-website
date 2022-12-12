import { Container, createTheme, CssBaseline, Paper, ThemeProvider, useMediaQuery} from '@mui/material';
import './App.css';
import React from 'react';
import Header from './components/Header.react';
import ExperienceSection from './components/ExperienceSection.react';
import EducationSection from './components/EducationSection.react';
import ProjectsSection from './components/ProjectsSection.react';
import { AppContext } from './AppContext';

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
      <AppContext.Provider value={{borderRadius: '20px', mobile: useMediaQuery(themeRef.breakpoints.down("md"))}}>
        <Paper >
          <Container fixed maxWidth='md' sx={{padding: '20px'}}>
              <Header />
              <EducationSection />
              <ExperienceSection />
              <ProjectsSection />
          </Container>
        </Paper>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
