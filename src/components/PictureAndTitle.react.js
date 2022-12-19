import { South } from "@mui/icons-material";
import { Avatar, Box, ButtonGroup, Card, Fade, Grid, Slide, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import PropTypes from 'prop-types';

PictureAndTitle.propTypes = {
  selected: PropTypes.object.isRequired,
}

function PictureAndTitle(props) {
	const {selected} = props;
	const [clicked, setClicked] = useState(false);
	const [hovering, setHovering] = useState(false);

	return (
		<Grid
			container
			alignItems='right'
			direction='column'
			justifyContent='center'
		>
			<Grid item sx={{height: `calc(75vh - 30px)`,}}>
				<Box>
					<img alt={selected.name} src={selected.photo} style={{height: `calc(75vh - 30px)`, width: '100%'}} />
				</Box>
			</Grid>
			<Grid itemType=""
				onClick={() => setClicked(!clicked)}
				sx={{
					backgroundColor: 'background.paper',
					display: 'flex',
					overflow: 'hidden',
					width: '100%',
				}}
			>
				<Card
					onMouseOut={() => setHovering(false)}
					onMouseOver={() => setHovering(true)}
					sx={{ display: 'flex', height: `calc(25vh - 30px)`, width: '100%'}}
				>
					<Grid
						container
						alignItems='center'
						direction='row'
						justifyContent='center'
						padding={4}
					> 
						<Grid item xs={10}>
							{clicked ? (
								<>
									<Fade in={clicked} {...(clicked ? { timeout: 1000 } : {})}>
										<Typography variant='h5' >
											Relavant Skills:
										</Typography>
									</Fade>
									<ButtonGroup size='large'>
										{selected?.icons?.map(icon => (
											<Slide direction="up" in={clicked} key={icon.tooltip}>
												<Tooltip title={icon.tooltip}>
													<Avatar
														alt={icon.tooltip}
														display='inline'
														src={icon.image}
														sx={{ height: '50px', margin:'10px', width: '50px'}}
													/>
												</Tooltip>
											</Slide>
										))}
									</ButtonGroup>
								</>
							)
							: <Slide direction="down" in={!clicked}>
									<Typography variant='h1' >
										{selected.name}
									</Typography>
								</Slide>
							}
						</Grid>
						<Grid item xs={2}>
							<South
								sx={{
									"@keyframes moveDown": {
										"0%": {
											transform: 'scale(1) translateY(-20px)',
										},
										"100%": {
											transform: ' scale(1.3) translateY(20px)',
										},
									},
									"@keyframes moveUp": {
										"0%": {
											transform: 'rotate(180deg) scale(1) translateY(-20px)',
										},
										"100%": {
											transform: 'rotate(180deg) scale(1.3) translateY(20px)',
										},
									},
									animationDuration: '2.5s',
									animationFillMode: 'forwards',
									animationIterationCount: '1',
									animationName: `${hovering ? clicked ? 'moveUp' : 'moveDown' : ''}`,
									color:'primary.main',
									height: '50px',
									transform: `${clicked ? 'rotate(180deg)' : ''}`,
									width: '50px',
								}}
							/>
						</Grid>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	);
}

export default PictureAndTitle;