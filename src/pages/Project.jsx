import React from "react";
import { assets } from "../assets/Compress/assets";
import home from "../assets/home.jpg";

const Project = () => {
	const projectItems = [
		{
			image: assets.p1,
			alt: "Basketball",
			title: "BASKET BALL",
		},
		{
			image: assets.p2,
			alt: "Board Games",
			title: "BOARD GAMES",
		},
		{
			image: assets.p3,
			alt: "Carrom",
			title: "CARROM",
		},
		{
			image: assets.p4,
			alt: "Chess",
			title: "CHESS",
		},
		{
			image: assets.p5,
			alt: "Coffee Shop",
			title: "COFFEE SHOP",
		},
		{
			image: assets.p6,
			alt: "Cycling Track",
			title: "CYCLING TRACK",
		},
		{
			image: assets.p7,
			alt: "Foosball",
			title: "FOOSBALL",
		},
		{
			image: assets.p8,
			alt: "Gym",
			title: "GYM",
		},
		{
			image: assets.p9,
			alt: "Kids Play Zone",
			title: "KIDS PLAY ZONE",
		},
		{
			image: assets.p10,
			alt: "Lobby",
			title: "LOBBY",
		},
		{
			image: assets.p11,
			alt: "Multipurpose Party Hall",
			title: "MULTIPURPOSE PARTY HALL",
		},
		{
			image: assets.p12,
			alt: "Net Cricket",
			title: "NET CRICKET",
		},
		{
			image: assets.p13,
			alt: "Restaurant",
			title: "RESTAURANT",
		},
		{
			image: assets.p14,
			alt: "Table Tennis",
			title: "TABLE TENNIS",
		},
		{
			image: assets.p15,
			alt: "Volleyball Court",
			title: "VOLLEY BALL COURT",
		},
		{
			image: assets.p16,
			alt: "Kids Play Zone",
			title: "KIDS PLAY ZONE",
		},
	];

	return (
		<div>
			<h1 className="pb-8 text-center md:text-6xl text-3xl font-bold text-blue-600 font-poppins">
				Welcome to Pedda Amberpet
			</h1>
			<div className="flex flex-col md:flex-row justify-between px-10 text-justify">
				<p className="md:w-1/2 flex flex-col items-start gap-8 md:text-2xl text-lg">
					If the apartment life is more of your style then we’ve got you
					covered. Live in your dream home at an excellent premium, 2 list-disc
					& 3 BHK apartments with exclusive amenities that let you experience
					luxury and comfort unlike anything else.
					<button className="p-2 border-2 border-blue-600 rounded-full text-blue-500 hover:bg-blue-700 mb-24 hover:text-white px-4">
						Enquiry Now
					</button>
				</p>

				<img
					src={home}
					alt="image"
					className="w-[400px] h-[400px] pb-10 rounded-lg"
				/>
			</div>

			<div className="flex flex-col justify-center gap-5 bg-[#12276e] text-white">
				<h1 className="font-bold text-4xl text-center p-5">Project Features</h1>
				<div className="flex justify-center gap-5 flex-wrap py-5">
					{projectItems.map((item, index) => (
						<div key={index}>
							<img
								src={item.image}
								alt={item.alt}
								className="w-[300px] h-[200px] rounded-lg hover:scale-105 duration-500 cursor-pointer"
								loading="lazy"
							/>
							<p className="text-center pt-2 list-disc">{item.title}</p>
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-col items-center my-20 px-10">
				<h3 className="md:text-5xl text-4xl font-bold my-5 text-center">
					Location Advantages
				</h3>
				<div className="flex justify-center gap-16 font-sm font-thin">
					<ul className="flex flex-col gap-2 list-disc ">
						<li>Very close to Ramoji Film city</li>
						<li>10 mins from Sanghi Temple</li>
						<li>10 mins from the proposed Railway Station at Nagole</li>
						<li>Very next to Outer Ring Road</li>
					</ul>
					<ul className="flex flex-col gap-2 list-disc">
						<li>30 mins drive to International Airport</li>
						<li>Close to Discoveri Oaks International School</li>
						<li>Candor Shrine I School</li>
					</ul>
					<ul className="flex flex-col gap-2 list-disc">
						<li>Close proximity to Super Speciality Hospitals</li>
						<li>Very close to RamaDevi Public School</li>
						<li>Close to Valvoline Cummins Pvt</li>
					</ul>
				</div>
			</div>

			<div className="flex items-center justify-center py-10 px-10">
				<iframe
					title="Embedded Google Map"
					className="w-full h-[60vh]"
					loading="lazy"
					allowFullScreen
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0229728799796!2d-74.00632038495526!3d40.713145640778685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2594b23b719c5%3A0xf6fd0dc7bcb6f95d!2sStatue%20of%20Liberty%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1611309465739!5m2!1sen!2sus"></iframe>
			</div>
		</div>
	);
};

export default Project;
