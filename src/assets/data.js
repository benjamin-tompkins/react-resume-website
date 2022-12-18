import bittorrentLogo from './bittorrentLogo.jpeg'
import chordLogo from './chordLogo.jpeg'
import cssLogo from './cssLogo.jpeg'
import crosswordLogo from './crosswordLogo.jpeg'
import dockerLogo from './dockerLogo.jpeg'
import graphQLLogo from './graphQLLogo.jpeg'
import interclypse from './interclypse.jpeg'
import interclypseLogo from './interclypseLogo.jpeg'
import javaLogo from './javaLogo.jpeg'
import materialUILogo from './materialUILogo.jpeg';
import meta from './meta.jpg';
import metaLogo from './metaLogo.jpeg'
import mongoDBLogo from './mongoDBLogo.jpeg';
import panoramaLogo from './panoramaLogo.jpeg'
import phpLogo from './phpLogo.jpeg'
import reactLogo from './reactLogo.jpeg'
import spongebob from './spongebob.jpeg'
import springLogo from './springLogo.jpeg';
import swiftLogo from './swiftLogo.jpeg';
import tensorflowLogo from './tensorflowLogo.jpeg';
import umdLogo from './umdLogo.jpeg'
import umd from './umd.jpeg';
import vercelLogo from './vercelLogo.jpeg'

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
	{
		description: 'Implemented the Chord Protocol, which is a peer-to-peer network protocol that establishes an evenly distributed hash table across an ever-changing number of nodes.',
		logo: chordLogo,
		name: 'Chord Protocol'
	},
	{
		description: 'Created a program that stitched any number of pictures together as long as they shared at least part of the same scene. This created a panorama effect through the use of matching key points and manipulating the dimenmsions of the attaching image.',
		logo: panoramaLogo,
		name: 'Image Stitching'
	},
];

export const myStoryData = [
	{
		name: 'UMD',
		subtitle: 'My Alma Mater',
		paragraphs: ['At UMD, I would say 2 projects stand out that challenged me and made me the programmer that I am today.',
		'The first was in the course CMSC417: Computer Networks. This was my hardest course by far and it is considered as the second hardest Computer Science course at UMD. This course pushed me in ways no other course could. The entire class was in C/C++, a language that I had little experience working with. The course content was extremely difficult and covered a broad range of topics like TCP/IP, routing algorithms, network protocols, etc. at an astonishingly fast pace.',
		'This course also had the hardest project I ever completed at UMD. We were tasked with implementing the Chord Protocol. Chord is a peer-to-peer network protocol that establishes an evenly distributed hash table across an ever-changing number of nodes. The full description of the protocol can be found here: https://people.eecs.berkeley.edu/~istoica/papers/2003/chord-ton.pdf.',
		'This project was uniquely challenging as it combined concepts of socket programming, designing efficient and relevant data packets, scalability, and multithreading. I dreaded this project while working on it; looking back it was the most fun, challenging, and fulfilling project at UMD. I had a lot of trouble getting it to work, but by the end I received a grade of 100% while the average was 30%. The code can be found on my GitHub.',
		'The second project came from CMSC426: Computer Vision. This course was mainly focused on machine learning and image classification, however, the project I’m highlighting was image stitching.',
		'We were tasked with implementing a program like the panorama feature for pictures. The program would receive any number of pictures from a similar viewpoint, find the similar key points, and align the images. This sounds simple, but the whole process requires quite a bit of math and programming to get it to work. The program first searches for corners in both images, filters the corners to find the strongest ones, matches each point to another in the corresponding image, and then uses homography to adjust the attaching image.',
		'I really love this project because I explored how panoramas work and it involved a lot of fun programming and problem solving. I was having a lot of efficiency issues where my program would take forever matching key points. I was able to come up with a solution involving numPy’s parallel efficiency and made my multiple for-loop k-means function, to just 3 lines. The code can also be found on my GitHub',
		'While I only highlighted two projects, there were numerous others that taught and challenged me.  The entire experience was enriching and taught me the fundamentals of computer programming. While still in school, I decided to elevate the challenge and start programming in the real world.'
	],
		photo: umd,
		icons: [
			{
				image: javaLogo,
				tooltip: 'Java'
			},
			{
				image: tensorflowLogo,
				tooltip: 'TensorFlow'
			},
			{
				image: swiftLogo,
				tooltip: 'Swift'
			},
		]
	},
	{
		name: 'Interclypse',
		subtitle: 'Where I learned everything.',
		paragraphs: ['Located right next to the NSA headquarters, Interclypse is mainly a government contractor. I didn’t have a security clearance, but Interclypse had a few clients that I could develop for that did not require one. This group of clients were car-rental companies NextCar Rental, Priceless, and Rent-A-Wreck. We developed two applications for them, the consumer facing website and an enterprise managing platform for franchisees. I mainly worked on the enterprise application.',
		'I worked at Interclypse during my final two years at university, and I would argue that I learned more from working there than I learned in my four years at school. I was introduced to powerful industry tools like React for frontend, Spring Framework for backend, and MongoDB as our database layer. I learned industry best practices and how to use tools and methodologies to meet deadlines and track progress. ',
		'During my time at Interclyse, I was given the opportunity to plan, design, implement, and test entire features across the whole stack. A notable feature I implemented start-to-finish was the Reporting feature. The client wanted to measure sales over time with customizable features that could filter out car type, store location, etc. Given this task, I was entrusted to complete the client’s vision.',
		'In doing so, I learned the fundamentals of planning, creating efficient data structures, executing complex aggregate queries, and front-end design. This was my first big feature that I was the lead for, and it was fulfilling experience that I’m glad my manager at Interclypse was able to trust me to complete the feature and succeed.',
		'I was at Interclypse for almost 2-years. By the end there wasn’t a piece of the application that I did not touch at some point, but eventually, I left Interclypse once I graduated. I gained a lot of experience and learned how to be a real software engineer. I came in with zero experience, but I worked hard, learned more, and I gained enough knowledge to get hired at Meta.'
	],
		photo: interclypse,
		icons: [
			{
				image: reactLogo,
				tooltip: 'React'
			},
			{
				image: springLogo,
				tooltip: 'Spring Framework'
			},
			{
				image: mongoDBLogo,
				tooltip: 'MongoDB'
			},
			{
				image: dockerLogo,
				tooltip: 'Docker'
			},
		]
	},
	{
		name: 'Meta',
		subtitle: 'Short lived...',
		paragraphs: ['In total, I only worked at Meta for two months, but in that short time frame, I learned a lot and am quite proud of the work I was able to accomplish while there.',
		 'Out of graduation, Meta gave me an absolute stellar opportunity to join them and to work on impactful apps used by the whole world.',
			'With my prior React experience from Interclypse, I was able to hit the ground running and began writing code for the Branded Content team at Facebook shortly after I started. This team creates the infrastructure for brands and creators to directly collaborate on posts for Facebook.',
			'Part of the work I did was to redesign the UI for the Branded Content post integration on the desktop version of Facebook. I collaborated with my team and created a mock-up using Figma, then I recreated it in React. My manager was quite pleased, and we started to roll-out A-B testing for the design. I am extremely proud that I have code running on Facebook.',
			'In the time since I and other new hires joined the team, we had increased the feature’s usage and increased the total money generated for creators from a couple hundred thousand to over a billion dollars. I consider this a major achievement of my (admittedly short) career and I am extremely proud of what me and my team, comprised entirely of new hires, were able to accomplish in such a short amount of time.',
			'I was doing a lot of great work with an amazing team, but my time at Meta was cut short. I was sadly laid-off 2-months after starting, along with the rest of my team, and 11,000 other people.',
			'All in all, it was a great experience working on an application used by billions of people and I will be forever grateful for the opportunity.'
		],
		photo: meta,
		icons: [
			{
				image: reactLogo,
				tooltip: 'React'
			},
			{
				image: graphQLLogo,
				tooltip: 'GraphQL'
			},
			{
				image: phpLogo,
				tooltip: 'php'
			},
		]
	},
	{
		name: 'What now?',
		subtitle: 'My own React App!',
		paragraphs: ['While applying for jobs, I noticed a lot of applications were asking for websites or code examples that conveyed coding ability. But after some thought, I realized there was nothing I could show. ',
		 'All my React work and recent coding had been for Meta and Interclypse, where I no longer had access to the code and even if I did, I signed documents stating that I could not share development code.',
		 'So, I challenged myself to create a website using the tools I used in the industry. I gave myself a week to do it, and this is the result. I initially was just going to do the Résumé page, but as I was developing, I kept having new ideas of what I could do. The Résumé page was too static, so I decided to create something a little more React-ive.',
		 'I added the My Story page to get a little more in-depth with my experience. In doing so, I decided to challenge myself to try something new and experiment. I had never used CSS animation, so I used this as an opportunity to learn. Examples can be seen while hovering over the left and right navigation buttons as well as the arrow on the rotating title and relevant skills section.',
		 'Hope you enjoyed the site; I had a great time making it. All the code can be found on my GitHub page, linked in the upper right corner.',
		 'If you are wondering why I chose a picture from SpongeBob for the final piece of the story, there is good reason. While developing this site, I had music playing that had this image as the background to the video. I liked the image so much, that I modeled the theme and color palette off it.'
		],
		photo: spongebob,
		icons: [
			{
				image: reactLogo,
				tooltip: 'React'
			},
			{
				image: materialUILogo,
				tooltip: 'Material UI'
			},
			{
				image: cssLogo,
				tooltip: 'CSS'
			},
			{
				image: vercelLogo,
				tooltip: 'Vercel'
			},
		]
	}

]