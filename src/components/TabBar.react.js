import { Avatar, Button, ButtonGroup, Card, Divider, Grid, IconButton, Link, Typography } from "@mui/material";
import { LinkedIn, GitHub } from '@mui/icons-material';
import React, { useContext } from "react";
import PropTypes from 'prop-types';
import profilePicture from '../assets/profilePicture.jpg'
import { AppContext } from "../AppContext";

const IMAGE_HEIGHT = 50
const IMAGE_WIDTH = 50

TabBar.propTypes = {
	setTabValue: PropTypes.func.isRequired,
  tabValue: PropTypes.string.isRequired
}

function TabBar(props) {
	const { setTabValue, tabValue } = props
	const { appBarHeight } = useContext(AppContext);
	return (
		<Card raised sx={{height: appBarHeight, position: 'fixed', width: '100%'}}>
			<Grid
				container
				alignItems='center'
				direction='row'
				justifyContent='center'
			>
				<Grid item sx={{height: appBarHeight}} xs={3}>
					<Avatar
						alt='Ben Tompkins'
						display='inline'
						onClick={() => setTabValue('resume')}
						src={profilePicture}
						sx={{height: IMAGE_HEIGHT, marginLeft: '20px', width: IMAGE_WIDTH }}
					/>
				</Grid>
				<Grid item xs={6} >
					<ButtonGroup fullWidth sx={{height: appBarHeight}} variant="text">
						<Divider flexItem orientation="vertical" variant="fullWidth"  />
						<Button
							color={tabValue === 'resume' ? 'primary' : 'inherit'}
							onClick={() => setTabValue('resume')}
						>
							<Typography color='inherit'>
								Résumé
							</Typography>
						</Button>
						<Divider flexItem orientation="vertical" variant="fullWidth" />
						<Button
							color={tabValue === 'my-story' ? 'primary' : 'inherit'}
							onClick={() => setTabValue('my-story')}
						>
							<Typography color='inherit'>
								My Story
							</Typography>
						</Button>
						<Divider flexItem orientation="vertical" variant="fullWidth" />
					</ButtonGroup>
				</Grid>
				<Grid item xs={3}>
					<ButtonGroup fullWidth sx={{display: 'flex', height: appBarHeight, justifyContent: 'center'}}>
						<Link color='inherit' href='https://www.linkedin.com/in/benjamin-tompkins-423862180/' target='_blank'>
							<IconButton aria-label="delete" size="large">
								<LinkedIn fontSize="inherit" />
							</IconButton>
						</Link>
						<Link color='inherit' href='https://github.com/benjamin-tompkins?tab=repositories' target='_blank'>
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