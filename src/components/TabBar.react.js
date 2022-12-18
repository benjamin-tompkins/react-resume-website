import { Avatar, Button, ButtonGroup, Card, Divider, Grid, IconButton, Link, Typography } from "@mui/material";
import { LinkedIn, GitHub } from '@mui/icons-material';
import profilePicture from '../assets/profilePicture.jpg'
import { useContext } from "react";
import { AppContext } from "../AppContext";

const IMAGE_HEIGHT = 50
const IMAGE_WIDTH = 50

function TabBar(props) {
	const {tabValue, setTabValue} = props
	const { appBarHeight } = useContext(AppContext);
	return (
		<Card raised sx={{height: appBarHeight, position: 'fixed', width: '100%'}}>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
			>
				<Grid item xs={3} sx={{height: appBarHeight}}>
					<Avatar
						alt='Ben Tompkins'
						display='inline'
						onClick={() => setTabValue('resume')}
						src={profilePicture}
						sx={{marginLeft: '20px', width: IMAGE_WIDTH, height: IMAGE_HEIGHT }}
					/>
				</Grid>
				<Grid item xs={6} >
					<ButtonGroup fullWidth variant="text" sx={{height: appBarHeight}}>
						<Divider orientation="vertical" variant="fullWidth" flexItem />
						<Button
							color={tabValue === 'resume' ? 'primary' : 'inherit'}
							onClick={() => setTabValue('resume')}
						>
							<Typography color='inherit'>
								Résumé
							</Typography>
						</Button>
						<Divider orientation="vertical" variant="fullWidth" flexItem />
						<Button
							color={tabValue === 'my-story' ? 'primary' : 'inherit'}
							onClick={() => setTabValue('my-story')}
						>
							<Typography color='inherit'>
								My Story
							</Typography>
						</Button>
						<Divider orientation="vertical" variant="fullWidth" flexItem />
					</ButtonGroup>
				</Grid>
				<Grid item xs={3}>
					<ButtonGroup fullWidth sx={{height: appBarHeight,  display: 'flex', justifyContent: 'center'}}>
						<Link href='https://www.linkedin.com/in/benjamin-tompkins-423862180/' color='inherit' target='_blank'>
							<IconButton aria-label="delete" size="large">
								<LinkedIn fontSize="inherit" />
							</IconButton>
						</Link>
						<Link href='https://github.com/benjamin-tompkins?tab=repositories' color='inherit' target='_blank'>
							<IconButton aria-label="delete" size="large">
								<GitHub fontSize="inherit" />
							</IconButton>
						</Link>
					</ButtonGroup>
				</Grid>
			</Grid>
		</Card>
	);
}

export default TabBar;