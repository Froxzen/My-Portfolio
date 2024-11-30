import React from 'react'
import {motion} from "motion/react"
import youtubeImage from "/public/Youtube.png"
import bubbleImage from "/public/bubble.png"

const projectsData = [
	{
		image: youtubeImage,
		title: "Youtube to MP3 Converter",
		description:
			"This project is a sentiment analysis application built with Streamlit and NLTK's SentimentIntensityAnalyzer. It allows users to enter text and receive sentiment feedback along with a visual representation of the sentiment score.",
		technologies: ["HTML", "CSS", "JavaScript", "Express"],
	},
	{
		image: bubbleImage,
		title: "Bubble Sort Visualiser",
		description:
			"A program which allows you to visualize the Bubble Sort algorithm in action. You can generate a new dataset, change its size, and adjust the speed of the visualization.",
		technologies: ["HTML", "CSS", "TypeScript"],
	}
];

const ScrollReveal = ({children}) => {
    return (
        <motion.div
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.8}}
        >
            {children}
        </motion.div>
    )
}

const ProjectCard = ({project}) => {
    return (
		<ScrollReveal>
			<div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
				<img
					src={project.image}
					alt=""
					className="w-full cursor-pointer rounded-2xl transition-all
            duration-300 hover:scale-105 md:w-[300px]"
				/>
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-3">
						<div className="text-xl font-semibold">
							{project.title}
						</div>
						<p className="text-gray-400">{project.description}</p>
					</div>

					<div className="flex flex-wrap gap-5 justify-center md:justify-start">
						{project.technologies.map((tech, index) => (
							<span
								key={index}
								className="rounded-lg bg-black p-3 "
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
		</ScrollReveal>
	);
}

const Projects = () => {
  return (
		<div
			id="projects"
			className="flex min-h-screen w-full flex-col items-center justify-center 
    gap-16 p-4 md:px-14 md:py-24"
		>
			<ScrollReveal>
				<h1 className="text-5xl font-light text-white md:text-7xl">
					My Projects
				</h1>
			</ScrollReveal>
			<div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
				{projectsData.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</div>
  );
}

export default Projects
