import { Avatar, Card, Grid, ListItemText, Tooltip, Typography } from "@mui/material";
import moment from "moment";

const IMAGE_HEIGHT = 50
const IMAGE_WIDTH = 50

function ExperienceCard(props) {
	const {description, endDate, logo, name, startDate} = props;
	const hasDates = startDate && endDate;
	return (
		<Card raised={true} variant="secondary">
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				padding={1}
			>
				{logo ?
					<Grid item xs={1} padding={1}>
						<Avatar alt="Meta" src={logo} sx={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }}/>
					</Grid>
					: null
				}
				<Grid item xs={11}>
					<ListItemText
						primary={
							<Grid
								container
								direction="row"
								justifyContent="center"
								alignItems="center"
							>
								<Grid item xs={hasDates ? 10 : 12}>
									<Typography align="left" variant='body1'>
										{name}
									</Typography>
								</Grid> 
								{	hasDates ?
									<Grid item xs={2}>
										<Tooltip title={moment.duration(moment(endDate).diff(moment(startDate))).humanize()} >
											<Typography variant='body2' sx={{display: 'inline', justifyContent: 'flex-end'}}>
												{startDate + ' - ' + endDate}
											</Typography>
										</Tooltip>
									</Grid>
									: null
								}
							</Grid>
						}
						secondary={
							<Typography align="left" variant='body2'>
								{description}
							</Typography>
						}
					/>
				</Grid>
			</Grid>
		</Card>
	)
}

export default ExperienceCard;