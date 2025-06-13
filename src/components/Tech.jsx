import {
	BiLogoCPlusPlus,
	BiLogoNodejs,
	BiLogoPython,
	BiLogoReact,
	BiLogoTailwindCss,
	BiLogoTypescript,
} from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { motion } from "motion/react";

const Tech = () => {
	const variants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<div
			id="tech"
			className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16
            md:gap-32 scroll-mt-20 md:scroll-mt-32"
		>
			<motion.h1
				variants={variants}
				initial="hidden"
				whileInView="visible"
				transition={{ duration: 0.5 }}
				className="text-5xl md:text-7xl font-light text-white"
			>
				Languages
			</motion.h1>
			<div className="flex flex-wrap items-center justify-center gap-10 p-5">
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5 }}
				>
					<div className="flex flex-col items-center">
						<BiLogoTypescript className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
						<span className="mt-2 text-lg text-gray-300">
							TypeScript
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5 }}
				>
					<div className="flex flex-col items-center">
						<BiLogoReact className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
						<span className="mt-2 text-lg text-gray-300">
							React
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5 }}
				>
					<div className="flex flex-col items-center">
						<RiNextjsFill
							color="white"
							className="cursor-pointer text-[80px] transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
						/>
						<span className="mt-2 text-lg text-gray-300">
							Next.js
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5 }}
				>
					<div className="flex flex-col items-center">
						<BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
						<span className="mt-2 text-lg text-gray-300">
							Tailwind CSS
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5 }}
				>
					<div className="flex flex-col items-center">
						<BiLogoNodejs className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
						<span className="mt-2 text-lg text-gray-300">
							Node.js
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5 }}
				>
					<div className="flex flex-col items-center">
						<SiExpress className="cursor-pointer text-[80px] text-gray-300 transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
						<span className="mt-2 text-lg text-gray-300">
							Express.js
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5 }}
				>
					<div className="flex flex-col items-center">
						<BiLogoPython
							className="cursor-pointer text-[80px] transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
							style={{ color: "#3776ab" }}
						/>
						<span className="mt-2 text-lg text-gray-300">
							Python
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5 }}
				>
					<div className="flex flex-col items-center">
						<BiLogoCPlusPlus className="cursor-pointer text-[80px] text-gray-300 transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
						<span className="mt-2 text-lg text-gray-300">C++</span>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Tech;
