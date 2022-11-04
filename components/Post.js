/* eslint-disable @next/next/no-img-element */
import React from "react";
import {EllipsisHorizontalIcon} from "@heroicons/react/24/solid";
import {
	ChatBubbleLeftEllipsisIcon,
	HeartIcon,
	BookmarkSlashIcon,
	BookmarkIcon,
	FaceSmileIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import {useSession} from "next-auth/react";

const Post = ({userName, userPhoto, postPhoto, caption}) => {
	const {data: session} = useSession();
	return (
		<div className="bg-white border rounded-md my-8">
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
					alt="user post photo"
				/>
			</div>

			{/* Post buttons */}

			{session && (
				<div className="flex justify-between pt-3 px-4">
					<div className="flex space-x-5">
						<HeartIcon className="btn" />
						<ChatBubbleLeftEllipsisIcon className="btn" />
					</div>
					<BookmarkIcon className="btn" />
				</div>
			)}

			{/* Post comments */}
			<div>
				<p className="p-5 truncate">
					<span className="font-bold mr-2">{userName}</span>
					{caption}
				</p>

				{session && (
					<form className="flex items-center p-5">
						<FaceSmileIcon className="h-7" />
						<input
							type="text"
							placeholder="Enter your comment"
							className="flex-1 border-none focus:ring-0"
						/>
						<button className="font-bold text-blue-500">Post</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default Post;
