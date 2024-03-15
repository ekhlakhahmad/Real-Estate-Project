import React from "react";

const Footer = () => {
	return (
		<div className="flex justify-evenly items-start px-40 pb-20 pt-10 gap-5 bg-[#141516] text-white">
			<div>
				<h1 className="font-bold text-2xl">Address:</h1>
				<ul>
					<li>CORPORATE OFFICE:</li>
					<li>
						My Home Hub, 7th Floor, Block 2, <br />
						Madhapur, Hitechcity Hyderabad, <br />
						Telangana 500033.
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>BANGALORE OFFICE:</li>
					<li>
						40/1A, 1st floor, Basappa Complex, <br />
						Lavelle Road, behind Rotary Club, <br />
						Bengaluru, Karnataka 560001
					</li>
					<li>EMAIL:</li>
					<li>info@primelandindia.com</li>
				</ul>
			</div>
			<div>
				<h1 className="font-bold text-2xl">Project:</h1>
				<ul>
					<li>Pedda Amberpet</li>
					<li>Reserve</li>
					<li>Iconia</li>
					<li>The One</li>
					<li>Greenfield at Kommireddypally</li>
					<li>Greenfield Nandipet</li>
					<li>Greenfield Forever</li>
					<li>Video Intro</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
