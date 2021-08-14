module.exports = {
    env: {
        NEXT_PUBLIC_MAP_TOKEN: process.env.NEXT_PUBLIC_MAP_TOKEN,
    },
    webpack(config) {
        config.node = {fs: "empty"};
        return config;
    }
  }