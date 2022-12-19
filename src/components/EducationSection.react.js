import { Grid, Typography } from '@mui/material';
import React from 'react';
import ExperienceCard from './ExperienceCard.react';
import { educationData } from '../assets/data'

function EducationSection() {
	return (
		<Grid
			container
			alignItems='left'
			direction='column'
			justifyContent='left'
		>
			<Grid item padding={1}>
				<Typography align='left' variant='h5'>
					Education
				</Typography>
			</Grid>
			<Grid item padding={1}>
				<ExperienceCard {...educationData} />
			</Grid>
		</Grid>
	)
}

export default EducationSection;