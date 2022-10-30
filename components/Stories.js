import React, {useEffect, useState} from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
import Story from "./Story";
import {useSession} from "next-auth/react";

const Stories = ({username, img}) => {
	const {data: session} = useSession();
	const [usersStories, setUsersStories] = useState([]);

	useEffect(() => {
		const fakeData = minifaker.array(20, (i) => ({
			username: minifaker.username({locale: "en"}).toLocaleLowerCase(),
			img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
			id: i,
		}));
		setUsersStories(fakeData);
	}, []);

	return (
		<div className="flex space-x-2 p-6 bg-white mt-6 border overflow-x-scroll rounded-md scrollbar-none">
			{session && (
				<Story
					img={session.user.image}
					username={session.user.username}
					isUser="true"
				/>
			)}
			{usersStories.map((user) => (
				<Story
					key={user.id}
					username={user.username}
					img={user.img}
				/>
			))}
		</div>
	);
};

export default Stories;
