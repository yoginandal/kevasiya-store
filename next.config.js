/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Or false if you prefer
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost", // For local Medusa image uploads
      },
      {
        protocol: "https",
        hostname: "www.kevasiya.com", // For your live Medusa backend if it serves images
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
      // Add any other S3 bucket hostnames or CDNs your Medusa instance might use for images
    ],
  },
  // You can add other Next.js configurations here as needed later
  // For example, if you were using the check-env-variables.js script,
  // you might re-introduce its execution here, but let's start simple.
  // experimental: {
  //   serverActions: true, // If you plan to use Next.js Server Actions
  // },
}

module.exports = nextConfig
