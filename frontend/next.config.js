module.exports = {
  async rewrites() {
    return [
      {
        source: "/pages",
        destination: "http://localhost:3000", // Use the correct backend URL
      },
    ];
  },
};
