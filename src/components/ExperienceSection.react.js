import { Grid, Typography } from '@mui/material';
import React from 'react';
import ExperienceCard from './ExperienceCard.react';
import { experienceData } from '../assets/data';

function ExperienceSection() {
	return (
		<Grid
			container
			alignItems='left'
			direction='column'
			justifyContent='left'
		>
			<Grid item padding={1} xs={12}>
				<Typography align='left' variant='h5'>
					Experience
				</Typography>
			</Grid>
			{experienceData.map(experience => {
				return (
					<Grid item key={experience.name} padding={1} xs={12}>
						<ExperienceCard {...experience} />
					</Grid>
				)
			})}
		</Grid>
	);
}

export default ExperienceSection;