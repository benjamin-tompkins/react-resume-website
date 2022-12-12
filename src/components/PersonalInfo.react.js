import linkedInLogo from '../assets/linkedIn.jpeg'
import { Avatar, Card, Grid, Link, List, ListItem, Typography } from "@mui/material";

const IMAGE_HEIGHT = 50
const IMAGE_WIDTH = 50

function PersonalInfo() {
	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
			padding={1}
		>
			<Grid item xs={12} padding={1}>
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="center"
					padding={1}
				>
					<Grid item xs={11} padding={1}>
						<Typography variant='h3'>
							Benjamin Tompkins
						</Typography>
					</Grid>
					<Grid item xs={1} padding={1}>
						{
							<Link display='inline' href="https://www.linkedin.com/in/benjamin-tompkins-423862180/" color="inherit" target="_blank">
								<Avatar alt="LinkedIn Profile" src={linkedInLogo} sx={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }}/>
							</Link>
						}
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12} padding={1}>
				<Card raised={true} variant="secondary">
					<List>
						<ListItem alignItems="flex-start">
							Email: Benctompkins@gmail.com
						</ListItem>
						<ListItem alignItems="flex-start">
							Phone: (301) 452-8442
						</ListItem>
						<ListItem alignItems="flex-start">
							Address: 601 Almarida Dr, Apt # M9, Campbell, CA 95008
						</ListItem>
					</List>
				</Card>
			</Grid>
		</Grid>
	)
}

export default PersonalInfo;