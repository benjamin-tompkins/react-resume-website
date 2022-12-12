import { Grid } from '@mui/material';
import PersonalInfo from './PersonalInfo.react';
import profilePicure from '../assets/profilePicture.jpg'
import { useContext } from 'react';
import { AppContext } from '../AppContext';

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
			<img src={profilePicure} style={{ borderRadius: borderRadius, height: 300, width: 275}} alt='Ben Tompkins' />
		</Grid>
		<Grid item xs={7}>
			<PersonalInfo />
		</Grid>
	</Grid>)
}

export default Header;