import React from "react";
import Posts from "./Posts";
import SideProfileSuggestion from "./SideProfileSuggestion";
import SideProfile from "./SideProfile";
import Stories from "./Stories";
import {useSession} from "next-auth/react";

const Feeds = () => {
	const {data: session} = useSession();
	return (
		<main
			className={`grid ${
				session
					? "grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto"
					: "grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto"
			}`}
		>
			<section className="md:col-span-2">
				{/*  stories*/}

				<Stories />

				{/* posts */}

				<Posts />
			</section>

			<section className="hidden md:inline-grid md:col-span-1">
				<div className="fixed w-[380px]">
					{/*  mini profiles*/}
					<SideProfile />

					{/* Suggestions */}
					<SideProfileSuggestion />
				</div>
			</section>
		</main>
	);
};

export default Feeds;
