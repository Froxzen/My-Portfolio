import { motion } from "motion/react";
import {
	BiCalendar,
	BiBuilding,
	BiMapPin,
	BiLinkExternal,
} from "react-icons/bi";
import calcTreeImage from "../images/CalcTree.png";
import sussyUniImage from "../images/Sussyuni.png";
import devSocImage from "../images/DevSoc.png";

const experienceData = [
	{
		title: "Software Engineer Intern",
		company: "CalcTree",
		location: "Sydney, NSW",
		period: "Jul 2025 – Present",
		achievements: [
			"Developed tools that automate engineering workflows using Python and robust file importers for Mathcad, processing 1,000+ files and reducing manual data entry time by 75%.",
			"Led full-stack development in a remote environment, delivering 5 user-facing features and 8 internal tools, achieving a 40% productivity increase.",
			"Implemented AI-driven workflows using LLM APIs and debugging complex engineering data formats to support seamless JSON-based integration.",
		],
		technologies: ["Python", "LLM APIs", "Mathcad"],
		link: "https://calctree.com",
		image: calcTreeImage,
	},
	{
		title: "Co-Founder",
		company: "Sussy Uni",
		location: "Sydney, NSW",
		period: "Jul 2025 – Present",
		achievements: [
			"Co-founded a real-time multiplayer educational game serving 100+ UNSW students, combining social deduction gameplay with course revision to improve student engagement by 40%.",
			"Architected full-stack solution using React, TypeScript, Express.js, Socket.IO, and Agora RTC, implementing real-time voice communication and multiplayer game state synchronization.",
			"Led technical development of core features including campus-based game mapping, user-generated quiz content, and Gemini-2.5-Pro question generation from lecture slides.",
		],
		technologies: [
			"React",
			"TypeScript",
			"Express.js",
			"Socket.IO",
			"Agora RTC",
			"Gemini AI",
		],
		link: "https://sussyuni.com",
		image: sussyUniImage,
	},
	{
		title: "Training Program Lead",
		company: "UNSW DevSoc",
		location: "Sydney, NSW",
		period: "Jun 2025 – Present",
		achievements: [
			"Mentored 3 trainees in HTML, CSS, JavaScript, React and Express through 8 weekly workshops, improving trainee project completion rates by 85%.",
			"Redesigned training program from traditional workshops to project-based learning, developing StuVerse - a student platform with AI notes conversion and productivity features.",
			"Led technical implementation using React, TypeScript, Supabase, Three.js, Express, coordinating 12+ meetings and achieving 100% milestone completion.",
		],
		technologies: [
			"React",
			"TypeScript",
			"Supabase",
			"Three.js",
			"Express",
		],
		image: devSocImage,
		comingSoon: true,
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

const ExperienceCard = ({ experience }) => {
	return (
		<ScrollReveal>
			<div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
				<div className="relative block w-full max-w-[300px] md:transition-all md:duration-300 md:hover:scale-105">
					{experience.link && !experience.comingSoon ? (
						<a
							href={experience.link}
							target="_blank"
							rel="noopener noreferrer"
							className="block w-full"
						>
							<img
								src={experience.image}
								alt=""
								className="w-full cursor-pointer rounded-2xl"
							/>
							<BiLinkExternal className="absolute bottom-2 right-2 text-white text-2xl bg-blue-600 rounded-full p-1" />
						</a>
					) : (
						<div className="relative w-full">
							<img
								src={experience.image}
								alt=""
								className={`w-full rounded-2xl ${
									experience.comingSoon
										? "filter grayscale opacity-50"
										: ""
								}`}
							/>
							{experience.comingSoon && (
								<div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl flex items-center justify-center">
									<div className="text-white text-center">
										<div className="text-lg font-semibold mb-1">
											Coming Soon
										</div>
										<div className="text-sm opacity-80">
											More details to be added
										</div>
									</div>
								</div>
							)}
						</div>
					)}
				</div>

				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-3">
						<div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-xl font-semibold">
							{experience.title}
						</div>

						<div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
							<div className="flex items-center gap-2">
								<BiBuilding className="text-gray-500" />
								{experience.link && !experience.comingSoon ? (
									<a
										href={experience.link}
										target="_blank"
										rel="noopener noreferrer"
										className="font-medium hover:text-blue-600 transition-colors duration-200 flex items-center gap-1 group"
									>
										{experience.company}
										<BiLinkExternal className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
									</a>
								) : (
									<span className="font-medium">
										{experience.company}
									</span>
								)}
							</div>
							<div className="hidden sm:block text-gray-400">
								•
							</div>
							<div className="flex items-center gap-2">
								<BiMapPin className="text-gray-500" />
								<span>{experience.location}</span>
							</div>
							<div className="hidden sm:block text-gray-400">
								•
							</div>
							<div className="flex items-center gap-2">
								<BiCalendar className="text-gray-400" />
								<span className="text-sm">
									{experience.period}
								</span>
							</div>
						</div>
					</div>

					<div>
						<ul className="space-y-3">
							{experience.achievements.map(
								(achievement, achIndex) => (
									<li
										key={achIndex}
										className="flex items-start gap-3 text-gray-700 leading-relaxed"
									>
										<div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
										<span>{achievement}</span>
									</li>
								)
							)}
						</ul>
					</div>

					<div className="flex flex-wrap gap-3">
						{experience.technologies.map((tech, techIndex) => (
							<span
								key={techIndex}
								className="rounded-lg bg-gray-200 text-gray-800 p-3"
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

const Experience = () => {
	return (
		<div
			id="experience"
			className="flex min-h-screen w-full flex-col items-center justify-center 
			gap-16 p-4 md:px-14 md:py-24"
		>
			<ScrollReveal>
				<h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-5xl leading-normal font-light md:text-6xl pb-2 mb-4">
					Experience
				</h1>
			</ScrollReveal>

			<div className="flex w-full max-w-[1000px] flex-col gap-16 text-gray-800">
				{experienceData.map((experience, index) => (
					<ExperienceCard key={index} experience={experience} />
				))}
			</div>
		</div>
	);
};

export default Experience;
