/* eslint-disable @next/next/no-img-element */
import React from "react";
import {useSession, signOut} from "next-auth/react";

const SideProfile = () => {
	const {data: session} = useSession();
	return (
		<div className="flex items-center justify-between mt-10 ml-8">
			<div>
				<img
					src={session?.user.image}
					className="h-16 rounded-full border p-1"
					alt="user profile photo"
				/>
			</div>
			<div>
				<h2 className="font-bold">{session?.user.username}</h2>
				<p className="text-sm text-gray-400">Welcome to Instagram</p>
			</div>
			<button
				onClick={signOut}
				className="font-bold text-sm text-blue-400"
			>
				Sign Out
			</button>
		</div>
	);
};

export default SideProfile;
