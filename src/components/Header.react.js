import { Card, Grid } from '@mui/material';
import PersonalInfo from './PersonalInfo.react';
import profilePicure from '../assets/profilePicture.jpg'
import { useContext } from 'react';
import { AppContext } from '../AppContext';

const IMAGE_HEIGHT = 300;
const IMAGE_WIDTH = 275;

function Header() {
	const {borderRadius, mobile} = useContext(AppContext);

	return (
	<Grid
		container
		direction={mobile ? 'column': 'row'}
		justifyContent='center'
		alignItems='center'
	>
		<Grid item xs={5}>
			<Card raised sx={{borderRadius: borderRadius, height: IMAGE_HEIGHT, width: IMAGE_WIDTH}}>
				<img src={profilePicure} style={{ borderRadius: borderRadius, height: IMAGE_HEIGHT, width: IMAGE_WIDTH}} alt='Ben Tompkins' />
			</Card>
		</Grid>
		<Grid item xs={7}>
			<PersonalInfo />
		</Grid>
	</Grid>)
}

export default Header;