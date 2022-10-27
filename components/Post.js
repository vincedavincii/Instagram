import React from "react";
import {EllipsisHorizontalIcon} from "@heroicons/react/24/solid";
import {
	ChatBubbleLeftEllipsisIcon,
	HeartIcon,
	BookmarkSlashIcon,
	BookmarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Post = ({userName, userPhoto, postPhoto, caption}) => {
	return (
		<div>
			{/* Post Header */}
			<div className="flex items-center p-5">
				<img
					src={userPhoto}
					alt="user profile image"
					className="rounded-full h-12 object-cover border p-1 mr-4"
				/>

				<p className="flex-1 font-bold">{userName}</p>

				<EllipsisHorizontalIcon className="h-5" />
			</div>
			{/* post body */}

			<div>
				<img
					src={postPhoto}
					className="w-full object-contain"
				/>
			</div>

			{/* Post buttons */}

			<div className="flex justify-between pt-3 px-4">
				<div className="flex space-x-5">
					<HeartIcon className="btn" />
					<ChatBubbleLeftEllipsisIcon className="btn" />
				</div>
				<BookmarkIcon className="btn" />
			</div>
		</div>
	);
};

export default Post;
