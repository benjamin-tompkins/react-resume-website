import { Card, Grid } from '@mui/material';
import React, { useContext } from 'react';
import PersonalInfo from './PersonalInfo.react';
import profilePicure from '../assets/profilePicture.jpg'
import { AppContext } from '../AppContext';

const IMAGE_HEIGHT = 300;
const IMAGE_WIDTH = 275;

function Header() {
	const {borderRadius, mobile} = useContext(AppContext);

	return (
		<Grid
			container
			alignItems='center'
			direction={mobile ? 'column': 'row'}
			justifyContent='center'
		>
			<Grid item xs={5}>
				<Card raised sx={{borderRadius: borderRadius, height: IMAGE_HEIGHT, width: IMAGE_WIDTH}}>
					<img alt='Ben Tompkins' src={profilePicure} style={{ borderRadius: borderRadius, height: IMAGE_HEIGHT, width: IMAGE_WIDTH}} />
				</Card>
			</Grid>
			<Grid item xs={7}>
				<PersonalInfo />
			</Grid>
		</Grid>
	);
}

export default Header;