import { South } from "@mui/icons-material";
import { Avatar, Box, ButtonGroup, Card, Fade, Grid, Slide, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

function PictureAndTitle(props) {
	const {selected} = props;
	const [clicked, setClicked] = useState(false);
	const [hovering, setHovering] = useState(false);

	return (
		<Grid
			container
			direction='column'
			justifyContent='center'
			alignItems='right'
		>
			<Grid item sx={{height: `calc(75vh - 30px)`,}}>
				<Box>
					<img src={selected.photo} alt={selected.name} style={{height: `calc(75vh - 30px)`, width: '100%'}}/>
				</Box>
			</Grid>
			<Grid item
				onClick={() => setClicked(!clicked)}
				sx={{
					width: '100%',
					backgroundColor: 'background.paper',
					display: 'flex',
					overflow: 'hidden',
				}}
			>
				<Card
					onMouseOver={() => setHovering(true)}
					onMouseOut={() => setHovering(false)}
					sx={{ width: '100%', height: `calc(25vh - 30px)`, display: 'flex'}}
				>
					<Grid
						container
						direction='row'
						justifyContent='center'
						alignItems='center'
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
											<Slide direction="up" in={clicked}>
												<Tooltip title={icon.tooltip}>
													<Avatar
														alt={icon.tooltip}
														display='inline'
														key={icon.tooltip}
														src={icon.image}
														sx={{ width: '50px', height: '50px', margin:'10px'}}
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
									animationName: `${hovering ? clicked ? 'moveUp' : 'moveDown' : ''}`,
									animationDuration: '2.5s',
									animationIterationCount: '1',
									animationFillMode: 'forwards',
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
									height: '50px',
									width: '50px',
									color:'primary.main',
									transform: `${clicked ? 'rotate(180deg)' : ''}`,
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