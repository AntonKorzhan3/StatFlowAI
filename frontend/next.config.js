module.exports = {
  env: {
    openAi: process.env.OPENAI_API_KEY,
    authID: process.env.AUTH_BUNGIE_ID,
    authSecret: process.env.AUTH_BUNGIE_SECRET,
  },
  async rewrites() {
    return [
      {
        source: "/pages",
        destination: "http://localhost:3000", // Use the correct backend URL
      },
    ];
  },
};
