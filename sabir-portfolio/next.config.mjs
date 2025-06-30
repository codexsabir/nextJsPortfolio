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
        {
            protocol: 'https',
            hostname: 'sabir-portfolio.vercel.app',
            port: '',
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'sabir-portfolio.vercel.app',
            port: '',
            pathname: '/assets/**',
        },
        {
            protocol: 'https',
            hostname: 'sabir-portfolio.vercel.app',
            port: '',
            pathname: '/images/**',
        },
        {
            protocol: 'https',
            hostname: 'sabir-portfolio.vercel.app',
            port: '',
            pathname: '/favicon.ico',
        },
        {
            protocol: 'https',
            hostname: 'sabir-portfolio.vercel.app',
            port: '',
            pathname: '/favicon.png',
        },
        {
            protocol: 'https',
            hostname: 'sabir-portfolio.vercel.app',
            port: '',
            pathname: '/favicon.svg',
        },
        {
            protocol: 'https',
            hostname: 'sabir-portfolio.vercel.app',
            port: '',
            pathname: '/assets/hero-bg.mp4',
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
