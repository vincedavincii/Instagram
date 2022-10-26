import Image from "next/image";
import React from "react";
import {MagnifyingGlassIcon, PlusCircleIcon} from "@heroicons/react/24/outline";
import {HomeIcon} from "@heroicons/react/24/solid";

const Header = () => {
	return (
		<div className="shadow-sm border-b sticky top-0 bg-white z-30">
			<div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
				<div className="cursor-pointer my-3 relative hidden lg:inline-grid">
					<Image
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
						width={100}
						height={100}
						alt="instagram logo"
						className="object-contain"
					/>
				</div>
				<div className="cursor-pointer my-3 w-10 relative  lg:hidden">
					<Image
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png"
						width={100}
						height={100}
						alt="instagram logo"
						className="object-contain"
					/>
				</div>

				{/* Middle Area */}

				<div className="relative mt-1">
					<div className="absolute top-2 left-2">
						<MagnifyingGlassIcon className="text-gray-500 h-5" />
					</div>
					<input
						type="text"
						placeholder="Search "
						className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
					/>
				</div>

				{/* Right area */}
				<div className="flex space-x-4 items-center">
					<HomeIcon className=" hidden md:inline-flex cursor-pointer h-5 hover:scale-125 transition-transform duration-300 ease-out" />
					<PlusCircleIcon className=" cursor-pointer h-5 hover:scale-125 transition-transform duration-300 ease-out" />
					<Image
						src="https://media-exp1.licdn.com/dms/image/D4D03AQF30uNaYFB7Vg/profile-displayphoto-shrink_200_200/0/1665059371966?e=1672272000&v=beta&t=DPiQyofhEIgPBJrGGfXGf3sPNaOVZq3QLzUPy89ja8U"
						alt="profile photo"
						width={100}
						height={100}
						className="rounded-full h-10 w-10 cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
