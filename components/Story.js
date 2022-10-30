import Image from "next/image";
import React from "react";
import {PlusIcon} from "@heroicons/react/24/outline";

const Story = ({username, img, isUser}) => {
	return (
		<div className="relative group cursor-pointer">
			<Image
				src={img}
				alt="user profile photo"
				height={100}
				width={100}
				className="rounded-full h-14  w-14 object-cover p-[2px] border-red-500 border-2  group-hover:scale-110 transition-transform duration-300 ease-out"
			/>
			{isUser && (
				<PlusIcon className="absolute h-7 top-3.5 left-3.5 text-white" />
			)}
			<p className="text-xs w-14 truncate">{username}</p>
		</div>
	);
};

export default Story;
