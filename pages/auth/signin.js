/* eslint-disable @next/next/no-img-element */
import React from "react";
import {getProviders, signIn, signOut} from "next-auth/react";
import Header from "../../components/Header";

const signin = ({providers}) => {
	return (
		<>
			<Header />
			<div className="flex justify-center space-x-20 mt-32 max-w-6xl mx-4 xl:mx-auto">
				<img
					src="https://like4like.com/img/hero-x750.png"
					alt="instagram photo"
					className="h-80 hidden md:inline-flex object-cover rotate-12 md:w-48 "
				/>
				<div>
					{Object.values(providers).map((provider) => (
						<div
							key={provider.name}
							className="flex flex-col items-center"
						>
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmGBzIpMRYQjbxkVg0FB8cwhTjIvSfWpjPNQ&usqp=CAU"
								alt="instagram logo"
								className="w-24 mt-8 object-cover text-center"
							/>
							<p className="text-sm italic my-10">
								This Webpage is created for learning purposes
							</p>
							<button
								onClick={() => signIn(provider.id, {callbackUrl: "/"})}
								className="bg-red-400 rounded-md p-3 text-white hover:bg-red-500"
							>
								Sign in with {provider.name}
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export const getServerSideProps = async (context) => {
	const providers = await getProviders();
	return {
		props: {providers},
	};
};

export default signin;
