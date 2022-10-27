/* eslint-disable @next/next/no-img-element */
import React from "react";

const SideProfile = () => {
	return (
		<div className="flex items-center justify-between mt-10 ml-8">
			<div>
				<img
					src="https://media-exp1.licdn.com/dms/image/D4D03AQF30uNaYFB7Vg/profile-displayphoto-shrink_200_200/0/1665059371966?e=1672272000&v=beta&t=DPiQyofhEIgPBJrGGfXGf3sPNaOVZq3QLzUPy89ja8U"
					className="h-16 rounded-full border p-1"
					alt="user profile photo"
				/>
			</div>
			<div>
				<h2 className="font-bold">Vincedavincii</h2>
				<p className="text-sm text-gray-400">Welcome to Instagram</p>
			</div>
			<button className="font-bold text-sm text-blue-400">Sign Out</button>
		</div>
	);
};

export default SideProfile;
