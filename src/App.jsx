import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Contact from "./Contact";
import About from "./About";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/project" element={<Project />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
