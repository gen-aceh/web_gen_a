/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  logging: {
    fetches: { fullUrl: true },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/640/480/nightlife",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/200",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**/*",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/400",
      },
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
        port: "",
        pathname: "/**/*",
      },
    ],
  },
};

module.exports = nextConfig
