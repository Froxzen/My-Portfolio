import React from "react";

const Contact = () => {
	return (
		<div
			id="contact"
			className="flex min-h-[70vh] min-w-full items-center justify-center"
		>
			<div
				className="flex flex-col items-center justify-center gap-3
            space-y-6 p-14"
			>
				<h1 className="text-center text-5xl md:text-7xl">
					<span
						className="bg-gradient-to-r from-blue-600 to-purple-600
                bg-clip-text text-transparent"
					>
						Get in touch
					</span>
				</h1>

				<p className="text-center text-lg font-semibold text-gray-600">
					Send me an email!
				</p>

				<a
					href="mailto:harvardchong1@gmail.com"
					className="text-nowrap rounded-lg border border-blue-600 bg-blue-600 
                    px-5 py-3 text-lg font-bold text-white shadow-lg shadow-blue-200 
                    transition-all duration-300 md:hover:-translate-y-2 shadow-xl 
                    md:hover:shadow-blue-300"
				>
					Contact Me!
				</a>
			</div>
		</div>
	);
};

export default Contact;
