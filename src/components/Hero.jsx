import React from "react";
import image from "/public/Linkedin-pfp.png";
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
            gap-10 text-white"
			>
				<motion.div
                    initial={{y: -50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
					<img
						src={image}
						alt=""
						className="w-[300px] cursor-pointer rounded-full 
                    shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5
                    hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
					/>
				</motion.div>

				<motion.div
                    initial={{y: 50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.2}}
					className="flex max-w-[600px] flex-col items-center justify-center gap-3
                text-center"
				>
					<h1
						className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl leading-tight font-light
                        md-text-7xl"
					>
						Harvard Chong
					</h1>
					<h3
						className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl 
                        font-light md-text-7xl"
					>
						Software Engineer
					</h3>
					<p className="md:text-base text-pretty text-sm text-gray-400">
						I'm a 2nd year student studying Software Engineering at
						UNSW. I have experience in various domains such as AI,
						machine learning, software engineering, and web
						development. 
                        <br/>
                        I am eager to expand my skills and apply
						them to projects that will positively impact the world!
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
