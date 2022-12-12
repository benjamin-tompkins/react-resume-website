import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import PersonalInfo from "./PersonalInfo.react";
import profilePicure from '../assets/profilePicture.jpg'

function Header() {
	return (
	<Grid
		container
		direction="row"
		justifyContent="center"
		alignItems="center"
		padding={1}
	>
		<Grid item xs={4} padding={1}>
			<Box sx={{borderRadius: 30}}>
				<img src={profilePicure} style={{ borderRadius: '20px', height: 275, width: 250}} alt="Ben Tompkins" />
			</Box>
		</Grid>
		<Grid item xs={8} padding={1}>
			<PersonalInfo />
		</Grid>
	</Grid>)
}

export default Header;