import { Container, Grid} from '@mui/material';
import './App.css';
import React from 'react';
import Header from './components/Header.react';
import ExperienceSection from './components/ExperienceSection.react';
import EducationSection from './components/EducationSection.react';
import ProjectsSection from './components/ProjectsSection.react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fixed>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            padding={1}
          >
            <Grid item xs={1} padding={1}>
              <Header />
              <EducationSection />
              <ExperienceSection />
              <ProjectsSection />
            </Grid>
          </Grid>
        </Container>
      </header>
    </div>
  );
}

export default App;
