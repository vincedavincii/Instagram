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
				"https://media.istockphoto.com/photos/group-of-happy-african-children-east-africa-picture-id636860704?k=20&m=636860704&s=612x612&w=0&h=ruPAMjbulBTEwm13twT5Xc9RW938ykJ3FMECU0hTMPs=",
			caption: "Happy African children",
		},
		{
			userId: 2,
			userName: "Mariette",
			userPhoto:
				"https://media.istockphoto.com/photos/contented-african-woman-in-light-clothes-holding-mascara-picture-id1390674243?k=20&m=1390674243&s=612x612&w=0&h=voKPywXo_7NUDBuO1us3kzJGX1ufHrcTv91gH9chxiY=",
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
