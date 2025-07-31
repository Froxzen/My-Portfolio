import { motion } from "motion/react";
import { BiLinkExternal } from "react-icons/bi";
import pathfinderImage from "../images/pathfinder.png";
import sentimentImage from "../images/Sentiment.png";
import airtableImage from "../images/Airtable.png";

const projectsData = [
	{
		image: pathfinderImage,
		title: "Pathfinding Algorithm Visualiser",
		description:
			"An app to visualise how different pathfinding and maze generation algorithms work. Algorithms include Dijkstra, A*, BFS and DFS!",
		technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
		link: "https://froxzen.github.io/pathfinder-visualiser/",
	},
	{
		image: airtableImage,
		title: "Airtable Clone",
		description:
			"An app where you can create spreadsheets without all the complex stuff. Includes essential features such as filtering, sorting, searching and more!",
		technologies: [
			"Next.js",
			"React",
			"Tailwind CSS",
			"tRPC",
			"PostgreSQL",
			"Prisma",
			"NextAuth.js",
		],
		link: "https://airtable-clone-ebon.vercel.app/",
	},
	{
		image: sentimentImage,
		title: "Sentiment Analyser",
		description:
			"This project is a sentiment analysis application built with Streamlit and NLTK's SentimentIntensityAnalyzer. It allows users to enter text and receive sentiment feedback along with a visual representation of the sentiment score.",
		technologies: ["Python", "NLTK", "Streamlit"],
		link: "https://sentiment-analyser-ai.streamlit.app/",
	},
];

const ScrollReveal = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			{children}
		</motion.div>
	);
};

const ProjectCard = ({ project }) => {
	return (
		<ScrollReveal>
			<div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
				<div className="relative block w-full max-w-[300px] md:transition-all md:duration-300 md:hover:scale-105">
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="block w-full"
					>
						<img
							src={project.image}
							alt=""
							className="w-full cursor-pointer rounded-2xl "
						/>
						<BiLinkExternal className="absolute bottom-2 right-2 text-white text-2xl bg-blue-600 rounded-full p-1" />
					</a>
				</div>

				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-3">
						<div className="text-xl font-semibold text-gray-800">
							{project.title}
						</div>
						<p className="text-gray-600">{project.description}</p>
					</div>

					<div className="flex flex-wrap gap-5 justify-center md:justify-start">
						{project.technologies.map((tech, index) => (
							<span
								key={index}
								className="rounded-lg bg-gray-200 text-gray-800 p-3 "
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
		</ScrollReveal>
	);
};

const Projects = () => {
	return (
		<div
			id="projects"
			className="flex min-h-screen w-full flex-col items-center justify-center 
    gap-16 p-4 md:px-14 md:py-24"
		>
			<ScrollReveal>
				<h1 className="text-5xl font-light text-gray-800 md:text-7xl">
					Projects
				</h1>
			</ScrollReveal>
			<div className="flex w-full max-w-[1000px] flex-col gap-16 text-gray-800">
				{projectsData.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
