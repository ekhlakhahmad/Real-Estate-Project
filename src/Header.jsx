import React, { useState } from "react";
import LOGO3 from "./assets/FEJ LOGO.png";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="flex justify-between items-center px-10 py-2 text-lg text-black shadow-lg">
			<div>
				<img src={LOGO3} alt="" className="w-16" />
			</div>
			<ul className="flex justify-between items-center">
				<li className="px-2 hover:text-blue-600 cursor-pointer text-md">
					<Link to="/home">Home</Link>
				</li>
				<li className="px-2 hover:text-blue-600 cursor-pointer text-md">
					<Link to="/project">Projects</Link>
				</li>
				<li className="px-2 hover:text-blue-600 cursor-pointer text-md">
					<Link to="/gallery">Gallery</Link>
				</li>
				<li className="px-2 hover:text-blue-600 cursor-pointer text-md">
					Careers
				</li>
				<li className="px-2 hover:text-blue-600 cursor-pointer text-md">
					<Link to="/contact">Contact</Link>
				</li>
				<li className="px-2 hover:text-blue-600 cursor-pointer text-md">
					<Link to="/about">About us</Link>
				</li>
			</ul>
		</div>
	);
};

export default Header;
