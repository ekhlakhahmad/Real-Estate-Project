import React from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";

const Body = () => {
	return (
		<div className="flex flex-col justify-center px-10 py-10 gap-5 bg-[#12276e] text-white">
			<h2 className="font-bold text-4xl text-center">OUR FEATURED PROJECTS</h2>
			<div className="flex justify-center gap-20 flex-wrap">
				<div>
					<img src={img1} alt="" className="w-[400px] h-[250px] rounded-lg" />
					<p className="text-center pt-2">Mahabubnagar Project</p>
				</div>
				<div>
					<img src={img2} alt="" className="w-[400px] h-[250px] rounded-lg" />
					<p className="text-center pt-2">Mahabubnagar Project</p>
				</div>
				<div>
					<img src={img3} alt="" className="w-[400px] h-[250px] rounded-lg" />
					<p className="text-center pt-2">Gudur Project</p>
				</div>
				<div>
					<img src={img4} alt="" className="w-[400px] h-[250px] rounded-lg" />
					<p className="text-center pt-2">Gudur Project</p>
				</div>
				<div>
					<img src={img5} alt="" className="w-[400px] h-[250px] rounded-lg" />
					<p className="text-center pt-2">The One, Maredpally Project</p>
				</div>
				<div>
					<img src={img6} alt="" className="w-[400px] h-[250px] rounded-lg" />
					<p className="text-center pt-2">The One, Maredpally Project</p>
				</div>
			</div>
		</div>
	);
};

export default Body;
