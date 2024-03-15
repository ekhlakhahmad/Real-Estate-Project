import React from "react";
import home from "./assets/home.jpg";
import p1 from "./assets/Compress/p1.jpg";
import p2 from "./assets/Compress/p2.jpg";
import p3 from "./assets/Compress/p3.jpg";
import p4 from "./assets/Compress/p4.jpg";
import p5 from "./assets/Compress/p5.jpg";
import p6 from "./assets/Compress/p6.jpg";
import p7 from "./assets/Compress/p7.jpg";
import p8 from "./assets/Compress/p8.jpg";
import p9 from "./assets/Compress/p9.jpg";
import p10 from "./assets/Compress/p10.jpg";
import p11 from "./assets/Compress/p11.jpg";
import p12 from "./assets/Compress/p12.jpg";
import p13 from "./assets/Compress/p13.jpg";
import p14 from "./assets/Compress/p14.jpg";
import p15 from "./assets/Compress/p15.jpg";
import p16 from "./assets/Compress/p16.jpg";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Project = () => {
	const projectItems = [
		{
			image: p1,
			alt: "Basketball",
			title: "BASKET BALL",
		},
		{
			image: p2,
			alt: "Board Games",
			title: "BOARD GAMES",
		},
		{
			image: p3,
			alt: "Carrom",
			title: "CARROM",
		},
		{
			image: p4,
			alt: "Chess",
			title: "CHESS",
		},
		{
			image: p5,
			alt: "Coffee Shop",
			title: "COFFEE SHOP",
		},
		{
			image: p6,
			alt: "Cycling Track",
			title: "CYCLING TRACK",
		},
		{
			image: p7,
			alt: "Foosball",
			title: "FOOSBALL",
		},
		{
			image: p8,
			alt: "Gym",
			title: "GYM",
		},
		{
			image: p9,
			alt: "Kids Play Zone",
			title: "KIDS PLAY ZONE",
		},
		{
			image: p10,
			alt: "Lobby",
			title: "LOBBY",
		},
		{
			image: p11,
			alt: "Multipurpose Party Hall",
			title: "MULTIPURPOSE PARTY HALL",
		},
		{
			image: p12,
			alt: "Net Cricket",
			title: "NET CRICKET",
		},
		{
			image: p13,
			alt: "Restaurant",
			title: "RESTAURANT",
		},
		{
			image: p14,
			alt: "Table Tennis",
			title: "TABLE TENNIS",
		},
		{
			image: p15,
			alt: "Volleyball Court",
			title: "VOLLEY BALL COURT",
		},
		{
			image: p16,
			alt: "Kids Play Zone",
			title: "KIDS PLAY ZONE",
		},
	];

	const defaultProps = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627,
		},
		zoom: 11,
	};

	return (
		<div>
			<h1 className="p-10 text-center text-6xl text-blue-600 font-poppins">
				Welcome to Pedda Amberpet
			</h1>
			<div className="flex justify-between p-20">
				<p className="flex flex-col items-start gap-8 w-1/2 list-disc text-2xl">
					If the apartment life is more of your style then we’ve got you
					covered. Live in your dream home at an excellent premium, 2 list-disc
					& 3 BHK apartments with exclusive amenities that let you experience
					luxury and comfort unlike anything else.
					<button className="p-2 list-disc border-sm rounded-md bg-blue-700 text-white hover:bg-blue-800 mb-24">
						Enquiry Now
					</button>
				</p>
				<img src={home} alt="" className="w-[500px] h-[400px] pb-10" />
			</div>
			<div className="flex flex-col justify-center px-10 py-10 gap-5 bg-[#12276e] text-white">
				<h2 className="font-bold text-4xl text-center">Project Features</h2>
				<div className="flex justify-center gap-5 flex-wrap">
					{projectItems.map((item, index) => (
						<div key={index}>
							<img
								src={item.image}
								alt={item.alt}
								className="w-[300px] h-[200px] rounded-lg"
								loading="lazy"
							/>
							<p className="text-center pt-2 list-disc">{item.title}</p>
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-col items-center my-20">
				<h3 className="text-5xl font-bold my-5">Location Advantages</h3>
				<div className="flex justify-center items-center gap-16 font-sm font-thin">
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

			<div className="flex items-center justify-center mx-20 my-5">
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
