import {
	BiLogoCPlusPlus,
	BiLogoNodejs,
	BiLogoPython,
	BiLogoReact,
	BiLogoTailwindCss,
	BiLogoTypescript,
} from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiPrisma, SiTrpc } from "react-icons/si";
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
				Technologies
			</motion.h1>
			<div className="grid grid-cols-3 md:flex md:flex-wrap items-center justify-center gap-6 md:gap-10 p-5">
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<div className="flex flex-col items-center">
						<BiLogoTypescript className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
						<span className="mt-2 text-sm md:text-lg text-gray-300 text-center">
							TypeScript
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div className="flex flex-col items-center">
						<BiLogoReact className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
						<span className="mt-2 text-sm md:text-lg text-gray-300 text-center">
							React
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<div className="flex flex-col items-center">
						<BiLogoReact className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
						<span className="mt-2 text-sm md:text-lg text-gray-300 text-center">
							React Native
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<div className="flex flex-col items-center">
						<RiNextjsFill
							color="white"
							className="cursor-pointer text-[80px] transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
						/>
						<span className="mt-2 text-sm md:text-lg text-gray-300 text-center">
							Next.js
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					<div className="flex flex-col items-center">
						<BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
						<span className="mt-2 text-sm md:text-lg text-gray-300 text-center">
							Tailwind CSS
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					<div className="flex flex-col items-center">
						<BiLogoNodejs className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
						<span className="mt-2 text-sm md:text-lg text-gray-300 text-center">
							Node.js
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5, delay: 0.7 }}
				>
					<div className="flex flex-col items-center">
						<SiExpress className="cursor-pointer text-[80px] text-gray-300 transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
						<span className="mt-2 text-sm md:text-lg text-gray-300 text-center">
							Express.js
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5, delay: 0.8 }}
				>
					<div className="flex flex-col items-center">
						<SiPrisma className="cursor-pointer text-[80px] text-gray-300 transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
						<span className="mt-2 text-sm md:text-lg text-gray-300 text-center">
							Prisma
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5, delay: 0.9 }}
				>
					<div className="flex flex-col items-center">
						<SiTrpc
							className="cursor-pointer text-[80px] transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
							style={{ color: "#40bdf7" }}
						/>
						<span className="mt-2 text-sm md:text-lg text-gray-300 text-center">
							tRPC
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5, delay: 1.0 }}
				>
					<div className="flex flex-col items-center">
						<BiLogoPython
							className="cursor-pointer text-[80px] transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
							style={{ color: "#3776ab" }}
						/>
						<span className="mt-2 text-sm md:text-lg text-gray-300 text-center">
							Python
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={variants}
					initial="hidden"
					whileInView="visible"
					transition={{ duration: 0.5, delay: 1.1 }}
				>
					<div className="flex flex-col items-center">
						<BiLogoCPlusPlus className="cursor-pointer text-[80px] text-gray-300 transition-all duration-300 md:hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
						<span className="mt-2 text-sm md:text-lg text-gray-300 text-center">
							C++
						</span>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Tech;
