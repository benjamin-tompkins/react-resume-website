import { Grid, Typography } from "@mui/material";
import ExperienceCard from "./ExperienceCard.react";
import {
  projectsData,
} from '../assets/data'

function ProjectsSection() {
	return (
		<Grid
			container
			direction="column"
			justifyContent="left"
			alignItems="left"
		>
			<Grid item padding={1} xs={12}>
				<Typography align="left" variant='h5'>
					Projects
				</Typography>
			</Grid>
			{projectsData.map(experience => {
				return (
					<Grid item key={experience.name} padding={1} xs={12}>
						<ExperienceCard {...experience} />
					</Grid>
				)
			})}
		</Grid>
	)
}

export default ProjectsSection;