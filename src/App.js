import { Container, CssBaseline, ThemeProvider, useMediaQuery} from '@mui/material';
import React, { useState } from 'react';
import { AppContext } from './AppContext';
import TabBar from './components/TabBar.react';
import Resume from './components/Resume.react';
import MyStory from './components/MyStory.react';
import { theme } from './theme';

function App() {
	const [tabValue, setTabValue] = useState('resume')
  const mobile = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContext.Provider value={{appBarHeight: '60px', borderRadius: '20px', mobile: mobile}}>
        {!mobile ? <TabBar setTabValue={setTabValue} tabValue={tabValue} /> : null}
          {tabValue === 'resume' ? 
            <Container fixed maxWidth='md' sx={{padding: mobile ? '20px' : '80px'}}>
              <Resume />
            </Container>
          : <MyStory />
          }   
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
