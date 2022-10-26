import Image from "next/image";
import React from "react";

const Story = ({username, img}) => {
	return (
		<div>
			<img
				src={img}
				alt="user profile photo"
			/>
			<p>{username}</p>
		</div>
	);
};

export default Story;
