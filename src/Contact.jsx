import React from "react";

const Contact = () => {
	return (
		<div className="flex justify-between items-center my-10 px-10 gap-10">
			<img
				className="w-1/2 h-[80vh]"
				src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1710494375~exp=1710497975~hmac=1599d6655e07f99ac602fef898df56064cf53e1b54d84cd7a7c41d1e49d25994&w=740"
				alt="contactimage"
			/>
			<div>
				<form className="w-5/6">
					<input
						className="w-full p-2 outline-none border-2 my-2 text-blue-600 text-xl rounded-md border-blue-600"
						type="text"
						placeholder="name"
					/>
					<input
						className="w-full p-2 outline-none border-2 my-2 text-blue-600 text-xl rounded-md border-blue-600"
						type="email"
						placeholder="example@gmail.com"
					/>
					<textarea
						name=""
						id=""
						cols="30"
						rows="10"
						placeholder="Message"
						className="w-full p-2 outline-none border-2 my-2 text-blue-600 text-xl rounded-md border-blue-600">
						{" "}
					</textarea>
					<input
						className="w-full p-2 outline-none border-2 my-2 text-blue-600 text-xl rounded-md border-blue-600 cursor-pointer hover:bg-blue-300 hover:text-black"
						type="submit"
					/>
				</form>
			</div>
		</div>
	);
};

export default Contact;
