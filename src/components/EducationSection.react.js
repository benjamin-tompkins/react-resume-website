import { Grid, Typography } from "@mui/material";
import ExperienceCard from "./ExperienceCard.react";
import { educationData } from '../assets/data'

function EducationSection() {
	return (
		<Grid
			container
			direction="column"
			justifyContent="left"
			alignItems="left"
		>
			<Grid item xs={12} padding={1}>
				<Typography align="left" variant='h5'>
					Education
				</Typography>
			</Grid>
			<Grid item xs={12} padding={1}>
				<ExperienceCard {...educationData} />
			</Grid>
		</Grid>
	)
}

export default EducationSection;