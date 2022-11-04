import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import React, {useEffect, useState} from "react";
import {db} from "../firebase";
import Post from "./Post";

const Posts = () => {
	const [posts, setPost] = useState([]);

	useEffect(() => {
		const unsubscribe = onSnapshot(
			query(collection(db, "post"), orderBy("timeStamp", "desc")),
			(querySnapshot) => {
				setPost(querySnapshot.docs);
			}
		);
		return unsubscribe;
	}, [db]);
	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					userName={post.data().username}
					userPhoto={post.data().profilePicture}
					caption={post.data().caption}
					postPhoto={post.data().image}
				/>
			))}
		</div>
	);
};

export default Posts;
