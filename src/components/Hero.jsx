import image from "../images/Linkedin-pfp.png";
import { motion } from "motion/react";

const Hero = () => {
	return (
		<div
			id="home"
			className="px-16 flex min-h-screen w-full items-center
    justify-center py-28 md:px-32"
		>
			<div
				className="flex flex-col items-center justify-center
            gap-8 text-gray-800"
			>
				<motion.div
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<img
						src={image}
						alt="Harvard Chong"
						className="w-[200px] cursor-auto rounded-full 
                    shadow-lg shadow-gray-300 transition-all duration-300 md:hover:-translate-y-2
                    md:hover:scale-105 md:hover:shadow-xl md:hover:shadow-gray-400 md:w-[220px]
                    border-4 border-white"
					/>
				</motion.div>

				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="flex max-w-[768px] w-full flex-col items-center justify-center gap-4
                text-center"
				>
					<h1
						className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-5xl leading-normal font-light
                        md:text-6xl pb-3"
					>
						Harvard Chong
					</h1>
					
					<div className="space-y-2">
						<p className="md:text-xl text-lg font-medium text-gray-700">
							2nd Year B. Engineering (Software) @ UNSW
						</p>
						<p className="md:text-xl text-lg font-medium text-gray-600">
							Training Program Lead @ UNSW DevSoc
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;