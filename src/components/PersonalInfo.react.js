import { Card, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

function PersonalInfo() {
	const {borderRadius} = useContext(AppContext);

	return (
		<Card raised sx={{borderRadius: borderRadius}}>
			<Grid
				container
				direction='column'
				justifyContent='center'
				alignItems='center'
			>
				<Grid item xs={12}>
					<Grid
						container
						direction='row'
						justifyContent='center'
						alignItems='center'
						padding={1}
					>
						<Grid item xs={12}>
							<Typography variant='h3'>
								Ben Tompkins
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid item paddingBottom={1} xs={12}>
						<Typography align='center' variant='h5'>
							Benctompkins@gmail.com
						</Typography>
					</Grid>
					<Grid item paddingBottom={1} xs={12}>
						<Typography align='center' variant='h5'>
							(301) 452-8442
						</Typography>
					</Grid>
					<Grid item paddingBottom={1} xs={12}>
						<Typography align='center' variant='h5'>
							601 Almarida Dr, Apt # M9,
						</Typography>
						<Typography align='center' variant='h5'>
							Campbell, CA 95008
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Card>
	)
}

export default PersonalInfo;