/* eslint-disable @next/next/no-img-element */
import React, {useEffect, useState} from "react";
import minifaker from "minifaker";

const SideProfileSuggestion = () => {
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const suggestionGenerator = minifaker.array(6, (i) => ({
			userName: minifaker.username({locale: "en"}).toLocaleLowerCase(),
			jobTitle: minifaker.jobTitle(),
			id: i,
		}));
		setSuggestions(suggestionGenerator);
	}, []);
	return (
		<div className="ml-8 mt-4">
			<div className="flex justify-between text-sm mb-4 ">
				<h3 className="font-bold text-gray-400">Suggestions for you</h3>
				<button className="font-semibold text-gray-500">See All</button>
			</div>

			{suggestions.map((suggestion) => (
				<div
					key={suggestion.id}
					className="flex items-center justify-between mt-3"
				>
					<img
						src={`https://i.pravatar.cc/150?img=${Math.ceil(
							Math.random() * 70
						)}`}
						alt="suggested profile photos"
						className="h-10 rounded-full border p-1"
					/>

					<div className="flex-1 ml-3">
						<h2 className="font-semibold text-sm text-gray-600">
							{suggestion.userName}
						</h2>
						<h3 className="text-sm text-gray-400 truncate w-[230px]">
							{suggestion.jobTitle}
						</h3>
					</div>
					<button className="font-semibold text-blue-400 text-sm">
						Follow
					</button>
				</div>
			))}
			<div></div>
		</div>
	);
};

export default SideProfileSuggestion;
