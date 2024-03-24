import React from "react";
import user from "./assets/user.png";

const Customer = () => {
	return (
		<div className="flex flex-col px-20 py-10 gap-10 bg-[#e2efff]">
			<h1 className="text-center text-4xl pb-5 ">Our Customer Says</h1>
			<div className="flex flex-wrap justify-center md:gap-1 gap-16 text-justify">
				<div className="md:w-[24%] flex flex-col gap-2 justify-start items-center border-2 border-[#12276e] py-8 rounded-lg">
					<img src={user} alt="" className="w-[100px] relative bottom-20" />
					<p className="px-5 text-xl">
						"Best real estate company for the investment purpose in approved
						layouts with fabulous offers from the company."
					</p>
					<div className="flex justify-start gap-2 items-center">
						<p className="text-[#12276e] font-bold">Srinivas Rao</p>
					</div>
					<p>Kondapur,Hyderabad</p>
				</div>
				<div className="md:w-[24%] flex flex-col gap-2 justify-start items-center border-2 border-[#12276e] py-8 rounded-lg">
					<img src={user} alt="" className="w-[100px] relative bottom-20" />
					<p className="px-5 text-xl">
						"Really impressed by the customer service team, they are extremely
						friendly and always helpful for a picky buyer like me."
					</p>
					<div className="flex justify-start gap-2 items-center">
						<p className="text-[#12276e] font-bold">Pradeep Kumar</p>
					</div>
					<p>Indra Nagar,Bangalore</p>
				</div>
				<div className="md:w-[24%] flex flex-col gap-2 justify-start items-center border-2 border-[#12276e] py-8 rounded-lg">
					<img src={user} alt="" className="w-[100px] relative bottom-20" />
					<p className="px-5 text-xl">
						"I am happy that I purchased a villa with Primeland Group because
						the quality of materials they used are very great and long lasting."
					</p>
					<div className="flex justify-start gap-2 items-center">
						<p className="text-[#12276e] font-bold">Srinivas Rao</p>
					</div>
					<p>Kondapur, Hyderabad</p>
				</div>
			</div>
		</div>
	);
};

export default Customer;
