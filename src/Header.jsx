import React, { useState } from "react";
import LOGO3 from "./assets/logo4.png";

const Header = () => {
	return (
		<div className="flex justify-between items-center px-16 py-5 text-lg text-black shadow-lg">
			<div>
				<img src={LOGO3} alt="" className="w-20" />
			</div>
			<ul className="flex justify-between items-center">
				<li className="px-2 hover:text-blue-600 cursor-pointer text-base">
					Home
				</li>
				<li className="px-2 hover:text-blue-600 cursor-pointer text-base">
					About us
				</li>
				<li className="px-2 hover:text-blue-600 cursor-pointer text-base">
					Projects
				</li>
				<li className="px-2 hover:text-blue-600 cursor-pointer text-base">
					Partner with us
				</li>
				<li className="px-2 hover:text-blue-600 cursor-pointer text-base">
					Gallery
				</li>
				<li className="px-2 hover:text-blue-600 cursor-pointer text-base">
					Careers
				</li>
				<li className="px-2 hover:text-blue-600 cursor-pointer text-base">
					Knowledge Hub
				</li>
				<li className="px-2 hover:text-blue-600 cursor-pointer text-base">
					Contact
				</li>
			</ul>
		</div>
	);
};

export default Header;
