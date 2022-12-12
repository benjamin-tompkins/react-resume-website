import { Grid } from '@mui/material';
import PersonalInfo from './PersonalInfo.react';
import profilePicure from '../assets/profilePicture.jpg'

function Header() {
	return (
	<Grid
		container
		direction='row'
		justifyContent='center'
		alignItems='center'
	>
		<Grid item xs={5}>
			<img src={profilePicure} style={{ borderRadius: '20px', height: 300, width: 275}} alt='Ben Tompkins' />
		</Grid>
		<Grid item xs={7}>
			<PersonalInfo />
		</Grid>
	</Grid>)
}

export default Header;