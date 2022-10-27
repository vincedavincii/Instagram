import React from "react";
import Post from "./Post";

const Posts = () => {
	const posts = [
		{
			userId: 1,
			userName: "vincedavincii",
			userPhoto:
				"https://media-exp1.licdn.com/dms/image/D4D03AQF30uNaYFB7Vg/profile-displayphoto-shrink_200_200/0/1665059371966?e=1672272000&v=beta&t=DPiQyofhEIgPBJrGGfXGf3sPNaOVZq3QLzUPy89ja8U",
			postPhoto:
				"https://images.unsplash.com/photo-1485110168560-69d4ac37b23e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
			caption: "Happy African children",
		},
		{
			userId: 2,
			userName: "Mariette",
			userPhoto:
				"https://media-exp1.licdn.com/dms/image/D4D03AQF30uNaYFB7Vg/profile-displayphoto-shrink_200_200/0/1665059371966?e=1672272000&v=beta&t=DPiQyofhEIgPBJrGGfXGf3sPNaOVZq3QLzUPy89ja8U",
			postPhoto:
				"https://images.unsplash.com/photo-1569603096510-7a341e54ba97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
			caption: "Save the Planet, take action today!",
		},
	];
	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.userId}
					userName={post.userName}
					userPhoto={post.userPhoto}
					postPhoto={post.postPhoto}
					caption={post.caption}
				/>
			))}
		</div>
	);
};

export default Posts;
