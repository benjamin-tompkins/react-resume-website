import { Box, Grid, Typography } from "@mui/material"
import React from 'react'
import PropTypes from 'prop-types';

MyStoryInfo.propTypes = {
	paragraphs: PropTypes.array.isRequired,
  subtitle: PropTypes.string.isRequired
}

function MyStoryInfo(props) {
	const { paragraphs, subtitle } = props;
	return (
		<Grid
			container
			alignItems='left'
			direction='column'
			justifyContent='top'
		>
			<Box sx={{overflow: 'auto', scrollbar: 'white'}}>
			<Grid item paddingBottom={'20px'}>
				<Typography align='left' variant='h3'>
					{subtitle}
				</Typography>
			</Grid>
			{paragraphs.map(paragraph => (
				<Grid item key={paragraph.substring(10)}>
					<Typography paddingBottom={'20px'} variant='body1'>
						{paragraph}
					</Typography>
				</Grid>
			))}
			</Box>
		</Grid>
	);
}

export default MyStoryInfo;