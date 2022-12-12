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
        <Container fixed>
            <Grid
              container
              direction='column'
              justifyContent='center'
              alignItems='center'
              padding={1}
              marginLeft={4}
            >
              <Grid item xs={1} padding={1}>
                <Header />
                <EducationSection />
                <ExperienceSection />
                <ProjectsSection />
              </Grid>
            </Grid>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
