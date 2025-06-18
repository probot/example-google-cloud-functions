// Use CommonJS syntax for compatibility with Node.js.
const { createNodeMiddleware, Probot } = require("probot");
// Import the Probot app function.
const appFn = require("./app.js");

// Initialize Probot with environment variables.
const probot = new Probot({
  appId: process.env.APP_ID,
  privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'), // Fix newlines in RSA keys
  secret: process.env.WEBHOOK_SECRET,
});

// This exports the Probot app as middleware for use in a serverless environment.
module.exports.probotApp = createNodeMiddleware(appFn, {
  probot: probot,
  webhooksPath: "/",
});
