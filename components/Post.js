import React from "react";

const Post = ({userName, userPhoto, postPhoto, caption}) => {
	return (
		<div>
			<h2>{userName}</h2>
			<img src={userPhoto} />
		</div>
	);
};

export default Post;
