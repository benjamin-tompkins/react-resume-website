import moment from 'moment';
import { Avatar, Button, Card, Grid, Link, ListItemText, Tooltip, Typography } from '@mui/material';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../AppContext';

const IMAGE_HEIGHT = 50
const IMAGE_WIDTH = 50


ExperienceCard.propTypes = {
  description: PropTypes.string.isRequired,
	endDate: PropTypes.string.isRequired,
	link: PropTypes.string,
	logo: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	startDate: PropTypes.string.isRequired,
}

function ExperienceCard(props) {
	const {description, endDate, link, logo, name, startDate} = props;
	const {borderRadius, mobile} = useContext(AppContext);
	const hasDates = startDate && endDate;
	return (
		<Card raised sx={{borderRadius: borderRadius, display: 'flex'}}>
			<Grid
				container
				alignItems='center'
				direction='row'
				justifyContent='center'
				padding={1}
			>
				{!mobile && logo ?
					<Grid item padding={1} xs={1}>
						<Avatar alt={name} src={logo} sx={{ height: IMAGE_HEIGHT, position: 'inherit', width: IMAGE_WIDTH }} />
					</Grid>
					: null
				}
				<Grid item xs={logo ? 11 : 12}>
					<ListItemText
						primary={
							<Grid
								container
								alignItems='center'
								direction='row'
								justifyContent='center'
							>
								<Grid item xs={!mobile && hasDates ? 10 : 12}>
									<Typography align='left' display='inline' variant='body1'>
										{name}
									</Typography>
								</Grid> 
								{	!mobile && hasDates ?
									<Grid item xs={2}>
										<Tooltip title={moment.duration(moment(endDate).diff(moment(startDate))).humanize()} >
											<Typography align='left' sx={{display: 'inline'}} variant='body2'>
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