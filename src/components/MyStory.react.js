import { Grid } from '@mui/material';
import React, { useContext, useState } from 'react';
import InfoAndButtons from './InfoAndButtons.react';
import PictureAndTitle from './PictureAndTitle.react';
import { AppContext } from '../AppContext';
import { myStoryData } from '../assets/data.js';

function MyStory() {
	const {appBarHeight} = useContext(AppContext);
	const [selected, setSelected] = useState(myStoryData[0])
	
	return (
		<Grid
			container
			alignItems='right'
			direction='row'
			justifyContent='top'
		>
			<Grid item marginTop={appBarHeight} sx={{height: `calc(100vh - ${appBarHeight})`, overflow: 'hidden'}} xs={8} >
				<PictureAndTitle selected={selected} />
			</Grid>
			<Grid item xs={4}>
				<InfoAndButtons selected={selected} setSelected={setSelected} />
			</Grid>
		</Grid>
	);
}

export default MyStory;