/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: function (config) {
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (
        entries["main.js"] &&
        !entries["main.js"].includes("./polyfills.js")
      ) {
        entries["main.js"].unshift("./polyfills.js");
      }
      return entries;
    };
    return config;
  },
  eslint: {
    dirs: [
      "actions",
      "components",
      "constants",
      "pages",
      "reducers",
      "selectors",
      "styles",
      "typings",
      "utils",
    ],
  },
  images: {
    disableStaticImages: false,
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
