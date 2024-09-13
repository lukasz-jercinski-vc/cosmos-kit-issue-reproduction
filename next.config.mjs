/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add a new externals entry for pino-pretty needed by cosmos-kit
    config.externals.push("pino-pretty");
    return config;
  },
};

export default nextConfig;
