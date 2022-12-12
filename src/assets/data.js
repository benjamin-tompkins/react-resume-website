import bittorrentLogo from './bittorrentLogo.jpeg'
import crosswordLogo from './crosswordLogo.jpeg'
import interclypseLogo from './interclypseLogo.jpeg'
import metaLogo from './metaLogo.jpeg'
import reactLogo from './reactLogo.jpeg'
import umdLogo from './umdLogo.jpeg'

export const experienceData = [
	{
		description: 'Worked on the Branded Content team for Facebook. This involved brainstorming, creating, and running experiments on new UIs for the Tag Sponsor feature on Facebook. I worked with users to solve issues and implement new features that increased engagement and developed a better user experience.',
		endDate: '1/13/23',
		logo: metaLogo,
		name: 'Software Engineer @ Meta',
		startDate: '9/12/22',
	},
	{
		description: 'Full-stack web development using Spring Framework, React, Redux, MongoDB, Docker, Gradle, and various other tools to implement new features for a consumer application.',
		endDate: '4/15/22',
		logo: interclypseLogo,
		name: 'Junior Software Engineer @ Interclypse',
		startDate: '8/17/20',
	},
]

export const educationData = {
	description: 'Bachelor of Science, Major: Computer Science | Minor: Linguistics',
	endDate: '2022',
	logo: umdLogo,
	name: 'University of Maryland',
	startDate: '2018',
};

export const projectsData = [
	{
		description: 'This page right here! While between jobs I decided to elevate my resume and showcase some of my frontend development skills. I built this page with industry tools such as React, MaterialUI, and Vercel.',
		logo: reactLogo,
		link: 'https://github.com/benjamin-tompkins/react-resume-website',
		name: 'React Resume Website'
	},
	{
		description: 'Collaborated with 3 other members to create BitTorrent client that followed the protocol specifications. The specifications can be found here: https://www.bittorrent.org/beps/bep_0003.html',
		logo: bittorrentLogo,
		name: 'BitTorrent'
	},
	{
		description: 'A machine learned guesser and solver that completed NYT crossword puzzles using different Natural Language Processing tools such as TF-IDF, ELMo, and other transformer-based models',
		logo: crosswordLogo,
		name: 'NYT Crossword Puzzle Solver'
	},
];