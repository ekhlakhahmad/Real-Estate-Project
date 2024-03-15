import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/project" element={<Project />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
