import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button, ButtonGroup, Grid } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { myStoryData } from '../assets/data.js';
import MyStoryInfo from "./MyStoryInfo.react";

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
			direction='column'
			justifyContent='center'
			alignItems='right'
		>
			<Grid item
				marginTop={appBarHeight}
				sx={{
					width: '100%',
					height: `calc(75vh - 30px)`,
					backgroundColor: 'background.paper',
					'&:hover': {
						backgroundColor: 'background.paper',
					},
					opacity: [0.9, 0.8, 0.7],
					display: 'flex',
					padding: '20px'
				}}
			>
				<MyStoryInfo {...selected}/>
			</Grid>
			<Grid item>
				<ButtonGroup fullWidth variant="text" sx={{height: `calc(25vh - 30px)`}}>
					<Button
						onClick={handleBack}
						onMouseOver={() => setHoveringLeft(true)}
						onMouseOut={() => setHoveringLeft(false)}
					>
						<KeyboardArrowLeft
							sx={{
								animationName: `${hoveringLeft ? 'expand' : ''}`,
								animationDuration: '3s',
								animationIterationCount: 'infinite',
								animationFillMode: 'forwards',
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
								height: '50px',
								width: '50px',
								color:'primary.main',
							}}
						/>
					</Button>
					<Button
						onClick={handleNext}
						onMouseOver={() => setHoveringRight(true)}
						onMouseOut={() => setHoveringRight(false)}
					>
						<KeyboardArrowRight
							sx={{
								animationName: `${hoveringRight ? 'expand' : ''}`,
								animationDuration: '3s',
								animationIterationCount: 'infinite',
								animationFillMode: 'forwards',
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
								height: '50px',
								width: '50px',
								color:'primary.main',
							}}
						/>
					</Button>
				</ButtonGroup>
			</Grid>
		</Grid>
	);
}

export default InfoAndButtons;