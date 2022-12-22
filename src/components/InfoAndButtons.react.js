import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button, ButtonGroup, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import PropTypes from 'prop-types';
import MyStoryInfo from "./MyStoryInfo.react";
import { AppContext } from "../AppContext";
import { myStoryData } from '../assets/data.js';

InfoAndButtons.propTypes = {
  selected: PropTypes.object.isRequired,
	setSelected: PropTypes.func.isRequired
}

function InfoAndButtons(props) {
	const {appBarHeight} = useContext(AppContext);
	const { selected, setSelected } = props;
	const [activeStep, setActiveStep] = useState(0);
	const slideNumber = myStoryData.length;
	const [hoveringLeft, setHoveringLeft] = useState(false);
	const [hoveringRight, setHoveringRight] = useState(false);

	const handleNext = () => {
		if (activeStep === slideNumber - 1) {
			setSelected(myStoryData[0])
			setActiveStep(0);
		} else {
			setSelected(myStoryData[activeStep + 1])
			setActiveStep(activeStep + 1);
		}
	};
	const handleBack = () => {
		if (activeStep === 0) {
			setSelected(myStoryData[slideNumber - 1])
			setActiveStep(slideNumber - 1);
		} else {
			setSelected(myStoryData[activeStep - 1])
			setActiveStep(activeStep - 1);
		}
	};
	return (
		<Grid
			container
			alignItems='right'
			direction='column'
			justifyContent='center'
		>
			<Grid item
				marginTop={appBarHeight}
				sx={{
					backgroundColor: 'background.paper',
					display: 'flex',
					height: `calc(75vh - 30px)`,
					opacity: [0.9, 0.8, 0.7],
					padding: '20px',
					width: '100%',
				}}
			>
				<MyStoryInfo {...selected} />
			</Grid>
			<Grid item>
				<ButtonGroup fullWidth sx={{height: `calc(25vh - 30px)`}} variant="text" >
					<Button
						onClick={handleBack}
						onMouseOut={() => setHoveringLeft(false)}
						onMouseOver={() => setHoveringLeft(true)}
					>
						<KeyboardArrowLeft
							sx={{
								"@keyframes expand": {
									"0%": {
										transform: 'scale(1)',
									},
									"50%": {
										transform: 'scale(1.5)',
									},
									"100%": {
										transform: ' scale(1)',
									},
								},
								animationDuration: '3s',
								animationFillMode: 'forwards',
								animationIterationCount: 'infinite',
								animationName: `${hoveringLeft ? 'expand' : ''}`,
								color:'primary.main',
								
								height: '50px',
								width: '50px',
							}}
						/>
					</Button>
					<Button
						onClick={handleNext}
						onMouseOut={() => setHoveringRight(false)}
						onMouseOver={() => setHoveringRight(true)}
					>
						<KeyboardArrowRight
							sx={{
								"@keyframes expand": {
									"0%": {
										transform: 'scale(1)',
									},
									"50%": {
										transform: 'scale(1.5)',
									},
									"100%": {
										transform: ' scale(1)',
									},
								},
								animationDuration: '3s',
								animationFillMode: 'forwards',
								animationIterationCount: 'infinite',
								animationName: `${hoveringRight ? 'expand' : ''}`,
								color:'primary.main',
								height: '50px',
								width: '50px',
							}}
						/>
					</Button>
				</ButtonGroup>
			</Grid>
		</Grid>
	);
}

export default InfoAndButtons;