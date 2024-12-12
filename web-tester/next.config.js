module.exports = {
  reactStrictMode: false,
  experimental: {
    esmExternals: 'loose', // required for the canvas to work
  },
  webpack: (config) => {
    config.externals = [
      ...config.externals,
      { canvas: 'canvas' },
      { 'path2d-polyfill': 'path2d-polyfill' },
    ]; // required for the canvas to work
    return config;
  },
};
