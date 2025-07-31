import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const menuOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav
			className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-300 bg-white/80 px-16 
      py-6 text-gray-800 backdrop-blur-md md:justify-evenly"
		>
			<a
				href="#home"
				className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent opacity-80 text-3xl font-semibold
        transition-all duration-300 hover:opacity-100"
			>
				Harvard Chong
			</a>

			<ul className="hidden md:flex gap-10">
				<a
					href="#home"
					className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
				>
					<li>Home</li>
				</a>
				{/* <a
					href="#experience"
					className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
				>
					<li>Experience</li>
				</a> */}

				<a
					href="#tech"
					className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
				>
					<li>Languages</li>
				</a>

				<a
					href="#projects"
					className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
				>
					<li>Projects</li>
				</a>
				<a
					href="#contact"
					className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
				>
					<li>Contact</li>
				</a>
			</ul>

			<ul className="hidden md:flex gap-5">
				<li>
					<a
						href="https://www.linkedin.com/in/harvard-chong/"
						target="_blank"
						rel="noopener noreferrer"
						className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-600 hover:opacity-100"
					>
						<BsLinkedin />
					</a>
				</li>
				<li>
					<a
						href="https://github.com/Froxzen"
						target="_blank"
						rel="noopener noreferrer"
						className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-800 hover:opacity-100"
					>
						<BsGithub />
					</a>
				</li>
			</ul>

			{isOpen ? (
				<BiX className="block md:hidden text-4xl" onClick={menuOpen} />
			) : (
				<BiMenu
					className="block md:hidden text-4xl"
					onClick={menuOpen}
				/>
			)}

			{isOpen && (
				<div
					className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start
                gap-10 border-l border-gray-300 bg-white/90 p-12 ${
					isOpen ? "block" : "hidden"
				}`}
				>
					<ul className="flex flex-col gap-8">
						<a
							href="#home"
							className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
						>
							<li>Home</li>
						</a>

						<a
							href="#tech"
							className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
						>
							<li>Tech</li>
						</a>

						<a
							href="#projects"
							className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
						>
							<li>Projects</li>
						</a>
						<a
							href="#contact"
							className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
						>
							<li>Contact</li>
						</a>
					</ul>

					<ul className="flex flex-wrap gap-5">
						<li
							className="cursor-pointer text-xl opacity-70 transition-all duration-300 
                hover:text-blue-600 hover:opacity-100"
						>
							<a
								href="https://www.linkedin.com/in/harvard-chong/"
								target="_blank"
								rel="noopener noreferrer"
								className=""
							>
								<BsLinkedin />
							</a>
						</li>
						<li className="">
							<a
								href="https://github.com/Froxzen"
								target="_blank"
								rel="noopener noreferrer"
								className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-800 hover:opacity-100"
							>
								<BsGithub />
							</a>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
