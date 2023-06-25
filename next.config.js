/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  runtime: "edge",
  unstable_allowDynamic: "/lib/utilities.js",
};

module.exports = {
  images: {
    unoptimized: true,
  },
  nextConfig,
};
