import React from "react";
import Hero from "./Hero";
import About from "./About";
import Body from "./Body";
import Customer from "./Customer";
import Footer from "./Footer";
import Project from "./Project";
import Gallery from "./Gallery";
import Floor from "./Floor";

const Home = () => {
	return (
		<div>
			<Hero />
			<About />
			<Body />
			<Customer />
			<Gallery />
			<Floor />
			<Project />
		</div>
	);
};

export default Home;
