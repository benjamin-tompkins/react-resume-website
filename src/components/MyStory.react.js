import { Grid } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import { myStoryData } from '../assets/data.js';
import InfoAndButtons from './InfoAndButtons.react';
import PictureAndTitle from './PictureAndTitle.react';

function MyStory() {
	const {appBarHeight} = useContext(AppContext);
	const [selected, setSelected] = useState(myStoryData[0])
	
	return (
		<Grid
			container
			direction='row'
			justifyContent='top'
			alignItems='right'
		>
			<Grid item marginTop={appBarHeight} xs={8} sx={{height: `calc(100vh - ${appBarHeight})`, overflow: 'hidden'}}>
				<PictureAndTitle selected={selected}/>
			</Grid>
			<Grid item xs={4}>
				<InfoAndButtons selected={selected} setSelected={setSelected}/>
			</Grid>
		</Grid>
	);
}

export default MyStory;