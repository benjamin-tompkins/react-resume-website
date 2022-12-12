import { Avatar, Button, Card, Grid, Link, ListItemText, Tooltip, Typography } from '@mui/material';
import moment from 'moment';

const IMAGE_HEIGHT = 50
const IMAGE_WIDTH = 50

function ExperienceCard(props) {
	const {description, endDate, link, logo, name, startDate} = props;
	const hasDates = startDate && endDate;
	return (
		<Card raised sx={{borderRadius: '20px', display: 'flex'}}>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
				padding={1}
			>
				{logo ?
					<Grid item xs={1} padding={1}>
						<Avatar alt={name} src={logo} sx={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }}/>
					</Grid>
					: null
				}
				<Grid item xs={logo ? 11 : 12}>
					<ListItemText
						primary={
							<Grid
								container
								direction='row'
								justifyContent='center'
								alignItems='center'
							>
								<Grid item xs={hasDates ? 10 : 12}>
									<Typography align='left' variant='body1' display='inline'>
											{name}
									</Typography>
								</Grid> 
								{	hasDates ?
									<Grid item xs={2}>
										<Tooltip title={moment.duration(moment(endDate).diff(moment(startDate))).humanize()} >
											<Typography align='left' variant='body1' sx={{display: 'inline'}}>
												{startDate + ' - ' + endDate}
											</Typography>
										</Tooltip>
									</Grid>
									: null
								}
							</Grid>
						}
						secondary={
							<Typography align='left' variant='body2'>
								{description}
							</Typography>
						}
					/>
				</Grid>
				{link ? 
					<Grid item padding={1}>
						<Link href={link} target='_blank' underline='none'>
							<Button  variant="outlined">Open in GitHub</Button>
						</Link>
					</Grid>
					: null
				}
			</Grid>
		</Card>
	)
}

export default ExperienceCard;