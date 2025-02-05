module.exports = {
  apps: [
    {
      name: "cda2", // Name of the PM2 process
      script: "npm", // Start using npm
      args: "start", // Arguments for npm
      env: {
        NODE_ENV: "production", // Setting environment variable
      },
    },
  ],
};
