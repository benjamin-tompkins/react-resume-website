import { Box, Grid, Typography } from "@mui/material"

function MyStoryInfo(props) {
	const { subtitle, paragraphs} = props
	return (
		<Grid
			container
			direction='column'
			justifyContent='top'
			alignItems='left'
		>
			<Box sx={{overflow:'auto'}}>
			<Grid item paddingBottom={'20px'}>
				<Typography align='left' variant='h3'>
					{subtitle}
				</Typography>
			</Grid>
			{paragraphs.map(paragraph => (
				<Grid item key={paragraph.substring(10)}>
					<Typography variant='body1' paddingBottom={'20px'}>
						{paragraph}
					</Typography>
				</Grid>
			))}
			</Box>
		</Grid>
	)
}

export default MyStoryInfo;