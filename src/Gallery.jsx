import React from "react";

const Gallery = () => {
	return (
		<div className="flex items-center flex-col my-10 justify-center ">
			<h3 className="p-10 text-center text-6xl text-blue-600 font-poppins">
				Gallery
			</h3>
			<div className="w-9/12 flex justify-center flex-wrap gap-5">
				<img
					className="h-[265px] w-[350px]"
					src="https://www.primelandindia.com/img/projects-gallery/reserve/1.jpg"
					alt="image"
				/>
				<img
					className="h-[265px] w-[350px]"
					src="https://www.primelandindia.com/img/projects-gallery/reserve/2.jpg"
					alt="image"
				/>
				<img
					className="h-[265px] w-[350px]"
					src="https://www.primelandindia.com/img/projects-gallery/reserve/3.jpg"
					alt="image"
				/>
				<img
					className="h-[265px] w-[350px]"
					src="https://www.primelandindia.com/img/projects-gallery/reserve/4.jpg"
					alt="image"
				/>
				<img
					className="h-[265px] w-[350px]"
					src="https://www.primelandindia.com/img/projects-gallery/reserve/5.jpg"
					alt="image"
				/>
				<img
					className="h-[265px] w-[350px]"
					src="https://www.primelandindia.com/img/projects-gallery/reserve/6.jpg"
					alt="image"
				/>
			</div>
		</div>
	);
};

export default Gallery;
