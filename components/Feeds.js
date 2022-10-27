import React from "react";
import Posts from "./Posts";
import Stories from "./Stories";

const Feeds = () => {
	return (
		<main>
			<section>
				{/*  stories*/}

				<Stories />

				{/* posts */}

				<Posts />
			</section>

			<section>
				{/*  mini profiles*/}

				{/* Suggestions */}
			</section>
		</main>
	);
};

export default Feeds;
