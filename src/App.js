import { Container, createTheme, CssBaseline, ThemeProvider, useMediaQuery} from '@mui/material';
import './App.css';
import React, { useState } from 'react';
import { AppContext } from './AppContext';
import TabBar from './components/TabBar.react';
import Resume from './components/Resume.react';
import MyStory from './components/MyStory.react';

const theme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#029ee8'
    },
    secondary: {
      main: '#101c26'
    },
    background: {
      default: '#000015',
      paper: '#000015'
    }
  }
}


function App() {
  const themeRef = createTheme(theme);
	const [tabValue, setTabValue] = useState('resume')
  return (
    <ThemeProvider theme={themeRef}>
      <CssBaseline />
      <AppContext.Provider value={{appBarHeight: '60px', borderRadius: '20px', mobile: useMediaQuery(themeRef.breakpoints.down("md"))}}>
      <TabBar tabValue={tabValue} setTabValue={setTabValue}/>
      { tabValue === 'resume' ? 
        <Container fixed maxWidth='md' sx={{padding: '80px'}}>
          <Resume />
        </Container>
        : <MyStory />
      }
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
