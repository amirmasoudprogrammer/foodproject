/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.dummyjson.com",
            },
        ],
        dangerouslyAllowSVG: true,
        minimumCacheTTL: 60,
    },

};

export default nextConfig;
