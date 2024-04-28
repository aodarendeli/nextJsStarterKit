/** @type {import('next').NextConfig} */
const nextConfig = {
    dir: './src',
    env: {
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_URL_INTERNAL: process.env.NEXTAUTH_URL_INTERNAL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ]
    }
};

export default nextConfig;
