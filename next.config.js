/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["upload.wikimedia.org", "media-exp1.licdn.com", "i.pravatar.cc"],
	},
};

module.exports = nextConfig;
