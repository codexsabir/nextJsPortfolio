/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            pathname: '/images/**',
        },
        ],
    },
    experimental: {
        appDir: true,
        scrollRestoration: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
