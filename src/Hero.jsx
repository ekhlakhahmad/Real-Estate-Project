import React from "react";
import home from "./assets/home.svg";
import excavator from "./assets/excavator.svg";
import interior from "./assets/interior-design (Traced).svg";
import office from "./assets/office (Traced).svg";
import map from "./assets/map (Traced).svg";

const Hero = () => {
	return (
		<div>
			<div className="flex flex-wrap justify-between md:flex-row flex-col px-20">
				<p className="flex flex-col items-start gap-8 md:w-1/2 w-full text-xl text-justify">
					<h1 className="pt-32 md:text-6xl text-2xl text-blue-600 font-poppins">
						THE PRIMELAND MARK
					</h1>
					We work with a purpose and the purpose is to create value for
					everyone. At Primeland, we focus on developing positive, smarter and
					sustainable communities to elevate the lifestyles for everyone. We
					believe that every customer would like to be surrounded by the finer
					things in life, every property we develop has been prudently
					considered, thoughtfully planned, methodically designed and robustly
					built with a seasoned buyer in mind. Our commitment to our customers
					has been at the core of what we do and have always placed a premium on
					a collaborative and a “win-win” relationship’s.
					<button className="p-2 border-sm rounded-full bg-blue-700 text-white hover:bg-blue-800 mb-24 px-4">
						Enquiry Now
					</button>
				</p>
				<img src={home} alt="" className="md:w-1/3" />
			</div>
			<div className="flex justify-around items-center bg-[#e2efff] py-12">
				<div className="flex flex-col justify-center items-center">
					<img src={excavator} alt="" className="w-1/3" />
					<h1 className="text-3xl font-bold p-2">25+</h1>
					<p className="text-sm">INDUSTRY EXPERIENCE</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<img src={interior} alt="" className="w-1/3" />
					<h1 className="text-3xl font-bold p-2">10K+</h1>
					<p className="text-sm">HAPPY CUSTOMERS</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<img src={office} alt="" className="w-1/3" />
					<h1 className="text-3xl font-bold p-2">2K+</h1>
					<p className="text-sm">ACRES CRAFTED</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<img src={map} alt="" className="w-1/3" />
					<h1 className="text-3xl font-bold p-2">500+</h1>
					<p className="text-sm">TOTAL AREA SQ</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
