module.exports = {
  env: {
    openAi: process.env.OPENAI_API_KEY,
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
