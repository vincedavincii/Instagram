import Image from "next/image";
import React from "react";
import {MagnifyingGlassIcon, PlusCircleIcon} from "@heroicons/react/24/outline";
import {HomeIcon} from "@heroicons/react/24/solid";
import {useSession, signIn, signOut} from "next-auth/react";
import {useRecoilState} from "recoil";
import {modalState} from "../atom/modalAtom";

const Header = () => {
	const [open, setOpen] = useRecoilState(modalState);
	const {data: session} = useSession();
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
				{session ? (
					<>
						<div className="flex space-x-4 items-center">
							<HomeIcon className=" hidden md:inline-flex cursor-pointer h-5 hover:scale-125 transition-transform duration-300 ease-out" />
							<PlusCircleIcon
								onClick={() => setOpen(true)}
								className=" cursor-pointer h-5 hover:scale-125 transition-transform duration-300 ease-out"
							/>
							<Image
								src={session.user.image}
								alt="profile photo"
								width={100}
								height={100}
								className="rounded-full h-10 w-10 cursor-pointer"
								onClick={signOut}
							/>
						</div>
					</>
				) : (
					<button
						className="text-bold text-blue-400"
						onClick={signIn}
					>
						Sign In
					</button>
				)}
			</div>
		</div>
	);
};

export default Header;
