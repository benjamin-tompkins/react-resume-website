import linkedInLogo from '../assets/linkedIn.jpeg'
import { Avatar, Card, Grid, Link, Tooltip, Typography } from '@mui/material';

const IMAGE_HEIGHT = 50
const IMAGE_WIDTH = 50

function PersonalInfo() {
	return (
		<Card raised sx={{borderRadius: '20px'}}>
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
						<Grid item xs={11}>
							<Typography variant='h3'>
								Ben Tompkins
							</Typography>
						</Grid>
						<Grid item xs={1}>
							{
								<Link display='inline' href='https://www.linkedin.com/in/benjamin-tompkins-423862180/' color='inherit' target='_blank'>
									<Tooltip title='Check out my LinkedIn!'>
										<Avatar alt='LinkedIn Profile' src={linkedInLogo} sx={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }}/>
									</Tooltip>
								</Link>
							}
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
							(301) 452-844
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