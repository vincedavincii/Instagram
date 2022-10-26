import Image from "next/image";
import React from "react";

const Story = ({username, img}) => {
	return (
		<div>
			<Image
				src={img}
				alt="user profile photo"
				height={100}
				width={100}
				className="rounded-full h-14  w-14 object-cover p-[2px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-300 ease-out"
			/>
			<p className="text-xs w-14 truncate">{username}</p>
		</div>
	);
};

export default Story;
