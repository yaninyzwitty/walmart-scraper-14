/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'links.papareact.com',
                protocol: 'https'
                
            },
            {
                hostname: 'i.imgur.com',
                protocol: 'https'
                
            },
            {
                hostname: 'i5.walmartimages.com',
                protocol: 'https'
                
            },
        ]
    }
};

export default nextConfig;
