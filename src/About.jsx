import React from "react";

const About = () => {
	return (
		<div className="flex flex-wrap justify-center px-10 text-xl text-justify my-14">
			<div className="w-1/2 flex flex-col gap-4 p-5 bg-[#12276e] text-white rounded-tl-md">
				<h1 className="text-center text-4xl font-bold">Passion</h1>
				<p className="text-base">
					We are passionate about what we do and we believe that Real Estate
					Development can change the landscape of the markets and also to the
					people’s lives. We’re relentlessly focused on growth opportunities to
					create increased value for everyone.
				</p>
			</div>
			<div className="w-1/2 flex flex-col gap-4 p-5 bg-[#f39314] text-white rounded-tr-md">
				<h1 className="text-center text-4xl font-bold">Value Creation</h1>
				<p className="text-base">
					We work with a purpose and the purpose is to create value for every
					stake holder that is associated with us, whether it is a minute
					detail, a complex design, or a business transaction. We have
					constantly evolved to the changing markets to promote a positive
					change.
				</p>
			</div>
			<div className="w-1/2 flex flex-col gap-4 p-5 bg-[#f39314] text-white rounded-bl-md">
				<h1 className="text-center text-4xl font-bold">Commitment</h1>
				<p className="text-base">
					Commitment We do what we say and believe in doing the right thing. We
					are honest about what we think and commit only when we have
					conviction. We celebrate progress not just results. We believe
					everything we do has to be of the highest possible standard at all
					times.
				</p>
			</div>
			<div className="w-1/2 flex flex-col gap-4 p-5 bg-[#12276e] text-white rounded-br-md">
				<h1 className="text-center text-4xl font-bold">Sustainability</h1>
				<p className="text-base">
					What some call difficult, we love doing it. We go beyond property
					development to creating meaningful and sustainable communities that
					are built to last. We care for nature and constantly the best
					practices to significantly reduce the negative impact on the
					environment.
				</p>
			</div>
		</div>
	);
};

export default About;
