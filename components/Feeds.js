import React from "react";
import Posts from "./Posts";
import SideProfile from "./SideProfile";
import Stories from "./Stories";

const Feeds = () => {
	return (
		<main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
			<section className="md:col-span-2">
				{/*  stories*/}

				<Stories />

				{/* posts */}

				<Posts />
			</section>

			<section className="hidden md:inline-grid md:col-span-1">
				{/*  mini profiles*/}
				<div className="fixed w-[380px]">
					<SideProfile />
				</div>

				{/* Suggestions */}
			</section>
		</main>
	);
};

export default Feeds;
