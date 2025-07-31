import { motion } from "motion/react";
import { BiCalendar, BiBuilding, BiMapPin } from "react-icons/bi";

const experienceData = [
	{
		title: "Software Engineer Intern",
		company: "CalcTree",
		location: "Sydney, NSW",
		period: "Jul 2025 – Present",

		achievements: [
			"Contributed to a VC-backed SaaS startup by developing tools that automate engineering workflows using Python and robust file importers for Mathcad, processing 1,000+ files and reducing manual data entry time by 75%.",
			"Led full-stack development in a remote environment, collaborating with the founding team to deliver 5 user-facing features and 8 internal tools, achieving a 40% productivity increase.",
			"Investigated and implemented AI-driven workflows using LLM APIs, while debugging complex engineering data formats to support seamless JSON-based integration, achieving 100% data accuracy."
		],
		technologies: ["Python", "LLM APIs", "Mathcad", "Full-stack Development"],
		color: "from-blue-500 to-cyan-500"
	},
	{
		title: "Co-Founder",
		company: "Sussy Uni",
		location: "Sydney, NSW",
		period: "Jul 2025 – Present",

		achievements: [
			"Co-founded Sussy Uni, a real-time multiplayer educational game serving 100+ UNSW students, combining social deduction gameplay with course revision to improve student engagement and academic performance by 40%.",
			"Architected full-stack solution using React, TypeScript, Express.js, Socket.IO, and Agora RTC, implementing real-time voice communication and multiplayer game state synchronization across 30+ concurrent users.",
			"Led technical development of core features including campus-based game mapping, user-generated quiz content, and Gemini-2.5-Pro question generation from lecture slides, expanding platform from single course to university-wide deployment."
		],
		technologies: ["React", "TypeScript", "Express.js", "Socket.IO", "Agora RTC", "Gemini AI"],
		color: "from-purple-500 to-pink-500"
	},
	{
		title: "Training Program Lead",
		company: "UNSW Software Development Society (DevSoc)",
		location: "Sydney, NSW",
		period: "Jun 2025 – Present",

		achievements: [
			"Mentored 3 trainees in HTML, CSS, JavaScript, React and Express through 8 weekly workshops, providing technical guidance and code reviews that improved trainee project completion rates by 85%.",
			"Redesigned training program from traditional workshops to project-based learning, developing StuVerse - a student platform with AI notes conversion and productivity features.",
			"Led technical implementation using React, TypeScript, Supabase, Three.js, Express, coordinating 12+ meetings and achieving 100% milestone completion."
		],
		technologies: ["React", "TypeScript", "Supabase", "Three.js", "Express", "Mentoring"],
		color: "from-emerald-500 to-teal-500"
	}
];

const ScrollReveal = ({ children, delay = 0 }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay }}
			viewport={{ once: true, margin: "-100px" }}
		>
			{children}
		</motion.div>
	);
};

const ExperienceCard = ({ experience, index }) => {
	return (
		<ScrollReveal delay={index * 0.2}>
			<div className="group relative">
				{/* Background gradient blur */}
				<div className={`absolute -inset-1 bg-gradient-to-r ${experience.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300`}></div>
				
				{/* Main card */}
				<div className="relative bg-white rounded-2xl shadow-lg shadow-gray-200 border border-gray-100 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-gray-300 hover:-translate-y-1">
					{/* Header */}
					<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
						<div className="flex-1">
							<h3 className={`text-2xl font-semibold bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}>
								{experience.title}
							</h3>
							
							<div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 mb-3">
								<div className="flex items-center gap-2">
									<BiBuilding className="text-gray-500" />
									<span className="font-medium">{experience.company}</span>
								</div>
								<div className="hidden sm:block text-gray-400">•</div>
								<div className="flex items-center gap-2">
									<BiMapPin className="text-gray-500" />
									<span>{experience.location}</span>
								</div>
							</div>
							
							<div className="flex items-center gap-2 text-gray-500">
								<BiCalendar className="text-gray-400" />
								<span className="text-sm">{experience.period}</span>
							</div>
						</div>
					</div>

					{/* Achievements */}
					<div className="mb-6">
						<ul className="space-y-3">
							{experience.achievements.map((achievement, achIndex) => (
								<li key={achIndex} className="flex items-start gap-3 text-gray-700 leading-relaxed">
									<div className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} mt-2 flex-shrink-0`}></div>
									<span>{achievement}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Technologies */}
					<div className="flex flex-wrap gap-2">
						{experience.technologies.map((tech, techIndex) => (
							<span
								key={techIndex}
								className="px-3 py-1.5 text-sm font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
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
			className="px-16 flex min-h-screen w-full flex-col items-center justify-center 
			gap-16 py-28 md:px-32"
		>
			<ScrollReveal>
				<div className="text-center">
					<h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-5xl leading-normal font-light md:text-6xl pb-1 mb-4">
						Experience
					</h1>
				</div>
			</ScrollReveal>
			
			<div className="w-full max-w-4xl space-y-8">
				{experienceData.map((experience, index) => (
					<ExperienceCard key={index} experience={experience} index={index} />
				))}
			</div>
		</div>
	);
};

export default Experience;