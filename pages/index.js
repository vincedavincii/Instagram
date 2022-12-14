import Head from "next/head";
import Image from "next/image";
import Feeds from "../components/Feeds";
import Header from "../components/Header";
import UploadModal from "../components/UploadModal";

export default function Home() {
	return (
		<div className="bg-gray-50 min-h-screen">
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>

			{/* Header section */}

			<Header />

			<Feeds />

			<UploadModal />
		</div>
	);
}
